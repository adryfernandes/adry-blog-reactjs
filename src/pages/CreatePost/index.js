import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function CreatePost() {
  const [content, setContent] = useState("");
  const quillRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
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

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <ReactQuill ref={quillRef} value={content} onChange={setContent} />
    </div>
  );
}
