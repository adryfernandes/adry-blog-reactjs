import { useNavigate } from "react-router";
import { BasePage } from "..";
import { EditorArea } from "../../components/EditorArea";

export function CreatePost() {
  const navigate = useNavigate();

  return (
    <BasePage navigate={navigate}>
      <EditorArea />
    </BasePage>
  );
}
