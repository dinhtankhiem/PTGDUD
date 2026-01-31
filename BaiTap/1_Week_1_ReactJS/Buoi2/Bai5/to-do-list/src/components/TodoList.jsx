import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos || [];

  // Neu danh sach rong
  if (todos.length === 0) {
    return <p className="empty">Chưa có việc nào. Hãy thêm việc mới!</p>;
  }

  return (
    <div className="todo-list">
      {todos.filter(Boolean).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onXoaTodo={props.onXoaTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
