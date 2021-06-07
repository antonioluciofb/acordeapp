import React, { useEffect, useState } from "react";
import { Container, InputValue, Notes, Button, ChordsSequency } from "./styles";
import LoadingSkeleton from "../components/LoadingSkeleton/";

import API from "../../services/api";
import { IChord, ResponseChordAPI } from "../../@types";
import formatStringsChord from "../../utils/formatStringsChord";
import formatSearchChord from "../../utils/formatSearchChord";
import { playChord } from "../../playchord";
import { ChordInfo } from "./components/ChordInfo";

const Guitar: React.FC = () => {
  const [chord, setChord] = useState({} as IChord);
  const [openGuitar, setOpenGuitar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chordName, setChordName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedChords, setSelectedChords] = useState<IChord[]>([])

  useEffect(() => {
    async function fetchChordAPI() {
      if (chordName === "") return;

      const { data } = await API.get<ResponseChordAPI[]>(`${chordName}`);

      if (data.length > 0) {

        let newChord: IChord = {
          strings: data[0].strings.split(" ").map((s) => Number(s)),
          fingering: data[0].fingering.split(" ").map((f) => Number(f)),
          chordName: data[0].chordName,
          tones: data[0].tones.split(","),
        };

        if (newChord.strings.some((s) => s >= 5)) {
          newChord = formatStringsChord(newChord);
        }

        setChord(newChord);
        setOpenGuitar(true);
        setLoading(false);
        setErrorMessage("");
      } else {
        setOpenGuitar(false);
        setLoading(false);
        setErrorMessage("Não encontramos esse acorde! Verifique se digitou corretamente.");
      }
    }

    fetchChordAPI();
  }, [chordName]);

  const handleSelectedChords = (chord: IChord) => {
    const findChord = selectedChords.find(chordItem => chordItem.chordName === chord.chordName)
    let value

    findChord ? 
      value = selectedChords.filter(chordItem => chordItem.chordName !== chord.chordName)
      : value = [...selectedChords, chord] 

    setSelectedChords(value)
    
  }

  function getStartFretNumber(chord: IChord): number {
    let indexFinger = chord.fingering.findIndex((f) => f === 1);

    if (indexFinger >= 0) {
      return chord.strings[indexFinger]
    }

    return 0
  }

  function searchChord({ currentTarget, key }: React.KeyboardEvent<HTMLInputElement>) {
    currentTarget.value = currentTarget.value.charAt(0).toUpperCase() + currentTarget.value.slice(1);

    if (key === "Enter") {
      currentTarget.blur();

      let value = formatSearchChord(currentTarget.value);

      setOpenGuitar(false);
      setLoading(true);
      setErrorMessage("");
      setChordName(value);
    }
  }

  return (
    <Container>
      <InputValue
        placeholder="Digite o nome do acorde"
        onKeyUp={(e) => {
          searchChord(e);
        }}
      />
      {openGuitar && (
        <>
          <ChordInfo chordData={chord} startFretNumber={getStartFretNumber(chord)} handleSelectedChords={handleSelectedChords} />
          <Notes>
              {chord.tones.map((tone, i) => (
              <div key={i} className="notes">
                  {tone}
              </div>
              ))}
          </Notes>
          <Button
            onClick={() => {
              playChord(chord.strings);
            }}
          >
            Play Chord
          </Button>
        </>
      )}
      {errorMessage && <p className="message">{errorMessage}</p>}
      {loading && <LoadingSkeleton />}
      <Button
        onClick={() => {
          playChord(chord.strings);
        }}
      >
        Play Chord
      </Button>
      {/* {chordName !== "" && <audio src={`https://www.scales-chords.com/chord-sounds/snd-guitar-chord-${chordName}.mp3`} controls></audio>} */}
    
    {selectedChords.length > 0 && 
      <ChordsSequency>
        {console.log(selectedChords)}
        {selectedChords.map((chord, index) => (
          <ChordInfo key={index} chordData={chord} startFretNumber={getStartFretNumber(chord)} handleSelectedChords={handleSelectedChords} />
        ))}
      </ChordsSequency>
    }
    </Container>
  );
};

export default Guitar;
