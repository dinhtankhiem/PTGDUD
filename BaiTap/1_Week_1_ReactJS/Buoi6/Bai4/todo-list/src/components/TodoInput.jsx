import { useState } from "react";
import { useRecoilState } from "recoil";
import todoAtom from "../states/todoAtom";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [text, setText] = useState("");

  function handleAddTodo() {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  return (
    <div>
      <h2>Thêm công việc</h2>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Thêm</button>
    </div>
  );
}