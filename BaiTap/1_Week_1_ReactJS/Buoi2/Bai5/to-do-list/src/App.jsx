import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State todos nam o component cha
  const [todos, setTodos] = useState([
    { id: 1, tenViec: "Học React cơ bản" },
    { id: 2, tenViec: "Làm bài tập Todo List" },
  ]);

  // Ham them todo
  function themTodo(tenViecMoi) {
    // Tao id don gian bang thoi gian
    const todoMoi = {
      id: Date.now(),
      tenViec: tenViecMoi,
    };

    // Them vao dau danh sach (de thay moi nhat o tren)
    setTodos([todoMoi, ...todos]);
  }

  // Ham xoa todo theo id
  function xoaTodo(idCanXoa) {
    const danhSachMoi = todos.filter((todo) => todo.id !== idCanXoa);
    setTodos(danhSachMoi);
  }

  return (
    <div className="page">
      <h1 className="title">Todo List đơn giản</h1>

      {/* Truyen ham them todo qua props */}
      <TodoInput onThemTodo={themTodo} />

      {/* Truyen todos va ham xoa qua props */}
      <TodoList todos={todos} onXoaTodo={xoaTodo} />
    </div>
  );
}

export default App;
