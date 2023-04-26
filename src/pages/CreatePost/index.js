import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { BasePage } from "..";
import { EditorArea } from "../../components/EditorArea";
import { ContainerButton, Form } from "./styled";
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/post.service";
import { AlertMessage, Loading } from "../../components";
import { listTagsService } from "../../services/tag.service";
import AutocompleteInput from "../../components/AutocompleteInput";
import { Button, Grid, TextField } from "@mui/material";

export function CreatePost() {
  const navigate = useNavigate();
  const { xApiKey } = useParams();

  const initialForm = { title: "", description: "", content: "" };
  const [form, onChange, resetForm] = useForm(initialForm);

  const [tags, setTags] = useState([]);
  const [tagsTitle, setTagsTitle] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ message: "", severety: "" });

  useEffect(() => {
    listTags();
  }, [tags]);

  const listTags = async () => {
    try {
      const result = await listTagsService();

      const textTags = result.data.map((r) => r.title.toUpperCase());

      setTags(result.data);
      setTagsTitle(textTags);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        const error = err.response.data.message;
        setAlert({
          message: Array.isArray(error) ? error[0] : error,
          severety: "error",
        });
      }
      setLoading(false);
    }
  };

  const onChengeContent = (e) => {
    const target = {
      name: "content",
      value: e,
    };

    onChange({ target });
  };

  const onClickButton = async (e) => {
    e.preventDefault();
    onCloseAlert();

    try {
      setLoading(true);

      const uuidTags = tags
        .filter((t) => selectedTags.includes(t.title.toUpperCase()))
        .map((t) => t.uuid);

      const { title, description, content } = form;
      const payload = {
        title,
        description,
        content,
        tags: uuidTags,
      };

      await createPost(payload, xApiKey);
      setLoading(false);
      resetForm();
      setAlert({ message: "Post criado com sucesso.", severety: "success" });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        const error = err.response.data.message;
        setAlert({
          message: Array.isArray(error) ? error[0] : error,
          severety: "error",
        });
      }
      setLoading(false);
    }
  };

  const onCloseAlert = () => setAlert({ message: "", severety: "" });

  return (
    <BasePage navigate={navigate}>
      <AlertMessage
        message={alert.message}
        severety={alert.severety}
        onClose={onCloseAlert}
      />
      <Loading loading={loading} />

      <Form container>
        <Grid item xs={12} className="form-area">
          <TextField
            id="standard-basic"
            label="Título"
            name="title"
            value={form.title}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} className="form-area">
          <TextField
            id="standard-basic"
            label="Descrição"
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} className="form-area" id="content-area">
          <label>Conteúdo:</label>
          <EditorArea
            name={"content"}
            value={form.content}
            onChange={onChengeContent}
          />
        </Grid>
        <Grid item xs={12} className="form-area">
          <AutocompleteInput
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
            tags={tagsTitle}
          />
        </Grid>
        <ContainerButton container>
          <Grid item xs={12} lg={2}>
            <Button color="secondary" onClick={onClickButton}>
              Enviar
            </Button>
          </Grid>
        </ContainerButton>
      </Form>
    </BasePage>
  );
}
