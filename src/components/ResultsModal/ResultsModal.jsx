import { createPortal } from "react-dom";

import { StyledModal } from "./styles";

import Button from "../Button/Button";

export default function ResultsModal({ ref, time }) {
  function getResultHeading() {
    if (time > 3) {
      return "Uh oh, that's another penalty...";
    } else if (time < 3 && time > 1) {
      return "Too soon!";
    } else if (time < 1 && time > 0) {
      return "So close!";
    } else if (time < 0 && time > -1) {
      return "Nice work!";
    } else if (time < -1 && time > -3) {
      return "Slow pit stop!";
    }
    return "You waited too long!";
  }

  function getResultInfo() {
    if (time > 0) {
      return `You touched the car ${Math.abs(time)} seconds too soon.`;
    }
    return `Your reaction time was ${Math.abs(time)} seconds.`;
  }

  return createPortal(
    <StyledModal ref={ref}>
      <h1>{getResultHeading()}</h1>
      <h2>{getResultInfo()}</h2>
      <form>
        <Button label="Retry" />
      </form>
    </StyledModal>,
    document.querySelector("body")
  );
}
