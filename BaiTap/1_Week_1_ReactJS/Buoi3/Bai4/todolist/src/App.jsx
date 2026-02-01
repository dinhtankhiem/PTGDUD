import { useCallback, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  // State danh sach todo (gia lap list lon)
  const [todos, setTodos] = useState(() => {
    const arr = [];
    for (let i = 1; i <= 1000; i++) {
      arr.push({
        id: i,
        text: `Todo ${i}`,
        done: false,
      });
    }
    return arr;
  });

  // State input
  const [text, setText] = useState("");

  // Them todo
  const addTodo = useCallback(() => {
    if (!text.trim()) return;

    setTodos((prev) => [
      { id: Date.now(), text: text, done: false },
      ...prev,
    ]);

    setText("");
  }, [text]);

  // Xoa todo (useCallback de on dinh reference)
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Toggle todo
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }, []);

  return (
    <div className="page">
      <h1>Todo List Performance</h1>

      <TodoInput
        text={text}
        onChange={setText}
        onAdd={addTodo}
      />

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}

export default App;
