import { useNavigate } from "react-router";
import { BasePage } from "..";
import { EditorArea } from "../../components/EditorArea";
import { Form } from "./styled";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components/Button";

export function CreatePost() {
  const navigate = useNavigate();
  const initialForm = { title: "", description: "", content: "" };
  const [form, onChange] = useForm(initialForm);

  const onChengeContent = (e) => {
    const target = {
      name: "content",
      value: e,
    };

    onChange(target);
  };

  const onClickButton = () => {};

  return (
    <BasePage navigate={navigate}>
      <Form>
        <div className="form-line">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
          />
        </div>
        <div className="form-line">
          <label>Descrição:</label>
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </div>
        <div className="form-line">
          <label>Conteúdo:</label>
          <EditorArea value={form.content} onChange={onChengeContent} />
        </div>
        <div className="form-line-button">
          <Button onClick={onClickButton}>Enviar</Button>
        </div>
      </Form>
    </BasePage>
  );
}
