import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  // Kiem tra render
  console.log("render item", todo.id);

  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </label>

      <button onClick={() => onDelete(todo.id)}>Xoa</button>
    </div>
  );
}

// React.memo de ngan re-render neu props khong doi
export default React.memo(TodoItem);
