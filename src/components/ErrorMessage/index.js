import { ButtonClose, Container, Content, Icon, Text } from "./styled";
import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function ErrorMessage({ onClose, message }) {
  return (
    message && (
      <Container>
        <Content>
          <div id="icon-wrapper">
            <Icon icon={faCircleExclamation} />
          </div>
          <Text>
            <p id="title">Erro</p>
            <p>{message}</p>
          </Text>
        </Content>
        <ButtonClose onClick={() => onClose()}>
          <Icon icon={faXmark} />
        </ButtonClose>
      </Container>
    )
  );
}
