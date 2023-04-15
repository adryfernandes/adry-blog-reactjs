import { ButtonStyle } from "./styled";

export function Button({ children, onClick }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}
