import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const handle = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return [form, handle, resetForm];
}
