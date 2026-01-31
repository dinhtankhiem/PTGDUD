import { useState } from "react";

function TodoInput({ onThemTodo }) {
  // State luu gia tri input
  const [giaTriNhap, setGiaTriNhap] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const tenViecMoi = giaTriNhap.trim();
    if (!tenViecMoi) return;

    onThemTodo(tenViecMoi);
    setGiaTriNhap("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Nhập việc cần làm..."
        value={giaTriNhap ?? ""}
        onChange={(e) => setGiaTriNhap(e.target.value)}
      />

      <button className="btn" type="submit">
        Thêm
      </button>
    </form>
  );
}

export default TodoInput;
