import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoxLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  margin: 10px 0px;

  background-color: #fff;
`;

const ChordLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, BoxLoading, ChordLoading };
