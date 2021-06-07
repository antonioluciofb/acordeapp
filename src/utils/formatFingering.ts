import { IChord } from "../@types";

export default function formatFingering(chord: IChord, index: number) {
    const isNumber = !isNaN((chord.fingering[index]));

    if(isNumber){
      return chord.fingering[index];
    } 

    return "";
}