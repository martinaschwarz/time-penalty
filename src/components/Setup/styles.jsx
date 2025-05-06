import styled from "styled-components";

export const ModalContainer = styled.dialog`
  width: 55%;
  border: none;
  border-radius: 30px;
  padding: 20px 40px 40px;
`;

export const SetupOptions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & input,
  & select {
    height: 40px;
    border: 1px solid #28282c;
  }

  #color-label {
    margin: 0;
  }
`;

export const ColourSelector = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ColorBlock = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${({ color }) => color};
  cursor: pointer;

  & input {
    display: none;
  }
`;
