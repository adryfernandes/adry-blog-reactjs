import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function EditorArea() {
  const [content, setContent] = useState("");
  const quillRef = useRef();

  const modules = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link", "image", "video", "my-custom-button"],
        ["clean"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }, { header: [1, 2, 3, 4, 5, 6, false] }],
      ],
    },
  };

  return (
    <ReactQuill
      ref={quillRef}
      value={content}
      onChange={setContent}
      modules={modules}
    />
  );
}
