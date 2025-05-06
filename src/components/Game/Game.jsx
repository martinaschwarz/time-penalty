import React, { useRef, useState } from "react";

import {
  GarageSign,
  SettingsButton,
  Garage,
  Lights,
  RadioMessage,
  Interior,
  Pitlane,
} from "./styles";

import { teamColors } from "../Setup/setupOptions";

import ResultsModal from "../ResultsModal/ResultsModal";
import SetupModal from "../Setup/SetupModal";
import Button from "../Button/Button";

import settingsIcon from "../../assets/gear-solid.svg";
import redCar from "../../assets/red-car.png";
import greenCar from "../../assets/green-car.png";

export default function GameContainer() {
  const teamName = sessionStorage.getItem("team-name");
  const teamColor = sessionStorage.getItem("team-color");
  const penalty = parseInt(sessionStorage.getItem("mode"));

  const carColor =
    teamColors.find((option) => option.color === teamColor).car ?? "red";
  const randomNum = Math.round(Math.random() * 100);

  const [hasStarted, setHasStarted] = useState(false);
  const [carIsPitting, setCarIsPitting] = useState(false);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(penalty * 1000);
  const [finalTime, setFinalTime] = useState(0);

  const lightsRef = useRef();
  const carRef = useRef();
  const timerRef = useRef();
  const resultsModalRef = useRef();
  const setupModalRef = useRef();

  function startTimer() {
    setTimerIsActive(true);
    setFinalTime(0);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStart() {
    setHasStarted(true);

    lightsRef.current = setTimeout(() => {
      setCarIsPitting(true);
    }, 1000);

    carRef.current = setTimeout(() => {
      startTimer();
    }, 2000);
  }

  function handleStop() {
    setTimerIsActive(false);
    setFinalTime(timeRemaining / 1000);

    resultsModalRef.current.showModal();

    clearInterval(timerRef.current);
    clearTimeout(lightsRef.current);
    clearTimeout(carRef.current);
  }

  if (timerIsActive && timeRemaining === -3000) {
    handleStop();
  }

  function getPenaltyReason() {
    switch (penalty) {
      case 2:
        return "pitstop practice";
      case 5:
        switch (randomNum % 3) {
          case 0:
            return "a track limits violation";
          case 1:
            return "leaving the track and gaining an advantage";
          default:
            return "not respecting a blue flag";
        }
      case 10:
        switch (randomNum % 3) {
          case 0:
            return "causing a colision";
          case 1:
            return "dangerous driving";
          default:
            return "failing to serve a previous penalty correctly";
        }
      default:
        switch (randomNum % 3) {
          case 0:
            return "ignoring a red light at the pit exit";
          case 1:
            return "causing a serious collision";
          default:
            return "forcing multiple drivers off track";
        }
    }
  }

  return (
    <>
      <ResultsModal ref={resultsModalRef} time={finalTime} />
      <GarageSign color={teamColor ?? teamColors[0].color}>
        <h1>{teamName ?? "Race Team"}</h1>
        <SetupModal ref={setupModalRef} />
        <SettingsButton onClick={() => setupModalRef.current.showModal()}>
          <img src={settingsIcon} alt="Settings icon" />
        </SettingsButton>
      </GarageSign>
      <Garage>
        <img
          src={carColor === "green" ? greenCar : redCar}
          alt="Racecar"
          className={carIsPitting ? "moving" : ""}
          onClick={handleStop}
        />
        <Interior>
          {!hasStarted ? (
            <RadioMessage>
              Your driver is coming into the pits with a{" "}
              <b>{penalty} second penalty</b> for {getPenaltyReason()}.
              <br />
              <br />
              The timer starts when the light goes green. Don't touch the car
              before the penalty is served!
              <br />
              <br />
              Ready? 🏁
              <br />
              <br />
              <Button label="Start Game" onClick={handleStart} white />
            </RadioMessage>
          ) : (
            <Lights>
              <div
                id="left"
                className={hasStarted && !timerIsActive ? "on" : ""}
              />
              <div id="right" className={timerIsActive ? "on" : ""} />
            </Lights>
          )}
        </Interior>
      </Garage>
      <Pitlane />
    </>
  );
}
