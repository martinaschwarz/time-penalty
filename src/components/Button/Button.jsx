import { StyledButton } from "./styles";

export default function Button({ label, onClick, white }) {
  return (
    <StyledButton onClick={onClick} white={white}>
      {label}
    </StyledButton>
  );
}
