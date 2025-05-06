import styled from "styled-components";

export const GarageSign = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: ${({ color }) => color};

  & h1 {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-family: "Lobster";
    font-size: 36px;
    color: #28282c;
  }
`;

export const SettingsButton = styled.button`
  background: none;
  border: none;
  padding: 30px;

  & img {
    height: 30px;
    width: 30px;
  }
`;

export const Garage = styled.div`
  height: 55vh;
  background-color: grey;

  & img {
    position: absolute;
    z-index: 2;
    top: 50vh;
    width: 70vw;
    transform: translateX(-100%);

    &.moving {
      transform: translateX(25%);
    }
    transition: transform 1000ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

export const Interior = styled.div`
  width: 800px;
  height: 55vh;
  margin: auto;
  background-color: #28282c;
`;

export const Lights = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  & div {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: black;
    margin-top: 50px;
  }

  #left.on {
    background-color: #ff4d00;
  }

  #right.on {
    background-color: #32a010;
  }
`;

export const RadioMessage = styled.p`
  position: absolute;
  width: 680px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-family: monospace;
  line-height: 1.5;
  margin: 80px 60px 0;

  & button {
    margin-top: 25px;
    font-family: monospace;
    font-size: 16px;
  }
`;

export const Pitlane = styled.div`
  height: 35vh;
  background: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
