import styled, { css } from 'styled-components';

import chord from "../../../../assets/chord.png";

interface StringProps {
  fret: number;
  string: string;
}

export const ChordContainer = styled.div`
  width: 248px;
  height: 288px;
  background-image: url(${chord});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  margin: 20px 0px;
`;

export const StartFretNumber = styled.p<{ fret: number }>`
  position: absolute;
  margin: 0;

  top: ${(props) => {
    if (props.fret < 2) return "-10900px";
    if (props.fret >= 2) return "72px";
  }};

  left: 25px;

  font-size: 25px;
`;

export const Strings = styled.div<StringProps>`
  position: absolute;

  top: ${(props) => {
    if (props.fret === 0 || isNaN(props.fret)) return "30px";
    if (props.fret === 1) return "75px";
    if (props.fret === 2) return "120px";
    if (props.fret === 3) return "165px";
    if (props.fret === 4) return "209px";
  }};

  left: ${(props) => props.string};

  width: ${(props) => (props.fret === 0 ? "20px" : "25px")};
  height: ${(props) => (props.fret === 0 ? "20px" : "25px")};
  border-radius: 50%;
  background: ${(props) => (props.fret === 0 ? "#FFF" : "#000")};

  border: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 15px;
  font-weight: bold;

  ${(props) =>
    isNaN(props.fret) &&
    css`
      :after {
        position: absolute;
        font-size: 45px;
        content: "\\d7";
        color: #000;
        font-weight: bold;
        top: -20px;
        left: 0px;
      }

      background: transparent;
      border: none;
    `}
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 20px;

  border: 0;
  outline: none;
  cursor: pointer;
  
  padding: 4px 14px;
  border-radius: 2px;
  background-color: #cc6d31;
  color: #fff;
  font-size: 12px;
`


