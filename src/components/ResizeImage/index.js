import { Button } from "../Button";
import { Container } from "./styled";
import AvatarEditor from "react-avatar-editor";

export function ResizeImage({
  image,
  handleImageSave,
  setEditor,
  setImageSrc,
}) {
  return (
    <Container>
      <div id="content">
        <AvatarEditor
          ref={(editor) => setEditor(editor)}
          image={image}
          width={1200}
          height={500}
          border={50}
        />
        <div id="button-content">
          <Button onClick={() => setImageSrc(null)}>Cancelar</Button>
          <Button onClick={handleImageSave}>Salvar</Button>
        </div>
      </div>
    </Container>
  );
}
