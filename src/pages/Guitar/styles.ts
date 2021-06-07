import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e4d4a4;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 0px auto;
  overflow: hidden;

  box-sizing: border-box;

  * {
    font-family: "Quicksand", sans-serif;
  }

  p.message {
    width: 60%;
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    color: #cc6d31;
  }

  audio {
    margin-top: 30px;

    :focus {
      outline-style: none;
    }
  }

  @media (min-width: 700px) {
    justify-content: center;
  }
`;

export const InputValue = styled.input`
  width: 70%;

  font-size: 15px;
  font-weight: 300;
  text-align: center;

  border: 0px;
  border-radius: 6px;

  :focus {
    outline-style: none;
  }

  padding: 10px;

  color: #cc6d31;
  font-weight: 600;

  &::placeholder {
    color: #cc6d31;
    font-weight: 300;
  }

  @media (min-width: 700px) {
    width: 20%;
  }
`;
export const Button = styled.button`
  cursor: pointer;

  width: 99px;
  height: 3vh;
  border-radius: 6px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 15px;

  border: 1px solid #cc6d31;
  color: #cc6d31;
  margin: 10px 6px;
`;

export const Notes = styled.div`
  display: flex;
  .notes {
    width: 45px;
    height: 45px;
    border-radius: 6px;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 20px;

    border: 1px solid #cc6d31;
    color: #cc6d31;
    margin: 0px 6px;
  }
`;

export const ChordsSequency = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 10px;

`

