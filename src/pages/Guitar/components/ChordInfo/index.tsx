import React from 'react';
import { IChord } from '../../../../@types';
import formatFingering from "../../../../utils/formatFingering";
import { ChordContainer, StartFretNumber, Strings, AddButton } from "./styles";

interface ChordProps {
   chordData: IChord
   startFretNumber: number
   handleSelectedChords: (chord: IChord) => void
}


export const ChordInfo: React.FC<ChordProps> = ({ chordData: chord, startFretNumber, handleSelectedChords }) => {
  return (
    <ChordContainer>
      <StartFretNumber fret={startFretNumber}>{startFretNumber}</StartFretNumber>
      <Strings fret={chord.strings[0]} string="43px">
      {formatFingering(chord, 0)}
      </Strings>
      <Strings fret={chord.strings[1]} string="71px">
      {formatFingering(chord, 1)}
      </Strings>
      <Strings fret={chord.strings[2]} string="98px">
      {formatFingering(chord, 2)}
      </Strings>
      <Strings fret={chord.strings[3]} string="125px">
      {formatFingering(chord, 3)}
      </Strings>
      <Strings fret={chord.strings[4]} string="153px">
      {formatFingering(chord, 4)}
      </Strings>
      <Strings fret={chord.strings[5]} string="181px">
      {formatFingering(chord, 5)}
      </Strings>

      <AddButton onClick={() => handleSelectedChords(chord)}>Adicionar</AddButton>
    </ChordContainer>
  );
}