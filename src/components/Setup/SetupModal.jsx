import React, { useState } from "react";
import { createPortal } from "react-dom";

import { difficultyModes, teamColors } from "./setupOptions";

import Button from "../Button/Button";

import {
  ModalContainer,
  SetupOptions,
  ColourSelector,
  ColorBlock,
} from "./styles";

export default function SetupModal({ ref }) {
  const selectedName = sessionStorage.getItem("team-name");
  const selectedColor = sessionStorage.getItem("team-color");
  const selectedMode = sessionStorage.getItem("mode");

  const [teamName, setTeamName] = useState(selectedName ?? "");
  const [teamColor, setTeamColor] = useState(selectedColor ?? "");
  const [selectedGameMode, setSelectedGameMode] = useState(
    selectedMode ?? difficultyModes[0].penalty
  );

  function handleSave() {
    sessionStorage.setItem("team-name", teamName);
    sessionStorage.setItem("team-color", teamColor);
    sessionStorage.setItem("mode", selectedGameMode);
  }

  return createPortal(
    <ModalContainer ref={ref}>
      <SetupOptions>
        <h1>Setup your Team</h1>
        <label htmlFor="team-name">Team name:</label>
        <input
          type="text"
          id="team-name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <p id="color-label">Pick a team colour:</p>
        <ColourSelector>
          {teamColors.map((option) => {
            return (
              <ColorBlock
                color={option.color}
                key={option.color}
                onClick={() => setTeamColor(option.color)}
              >
                <input
                  type="radio"
                  name="color-selector"
                  key={option.color}
                  id={option.color}
                />
                <label htmlFor={option.color}>
                  <div />
                </label>
              </ColorBlock>
            );
          })}
        </ColourSelector>
        <label htmlFor="difficulty">Pick difficulty level:</label>
        <select
          id="difficulty"
          value={selectedGameMode}
          onChange={(e) => setSelectedGameMode(e.target.value)}
        >
          {difficultyModes.map((mode) => {
            return (
              <option key={mode.id} value={mode.penalty}>
                {mode.label}
              </option>
            );
          })}
        </select>
        <form>
          <Button label="Let's go!" onClick={handleSave} />
        </form>
      </SetupOptions>
    </ModalContainer>,
    document.querySelector("body")
  );
}
