import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import Dropzone, { useDropzone } from "react-dropzone";
import "react-quill/dist/quill.snow.css";
import { DropzoneContainer } from "./styled";

export function CreatePost() {
  const [content, setContent] = useState("");
  const quillRef = useRef();

  const handleDrop = (files) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let index = 0;

      const range = quillRef.current.getEditor().getSelection();
      if (range && range.index) {
        index = range.index;
      }

      quillRef.current.getEditor().insertEmbed(index, "image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div>
      <DropzoneContainer
        onDrop={handleDrop}
        {...getRootProps()}
        isDragActive={isDragActive}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Arraste e solte as imagens aqui ou clique para selecionar</p>
        ) : (
          <p>Arquivo selecionado</p>
        )}
      </DropzoneContainer>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        style={{ height: "50vh" }}
      />
    </div>
  );
}
