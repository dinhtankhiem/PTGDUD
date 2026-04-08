import { useState } from "react";
import { useRecoilState } from "recoil";
import todoAtom from "../states/todoAtom";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleDelete() {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, text: newText };
      }
      return item;
    });

    setTodos(updatedTodos);
    setIsEditing(false);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Lưu</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Sửa</button>
          <button onClick={handleDelete}>Xóa</button>
        </>
      )}
    </div>
  );
}