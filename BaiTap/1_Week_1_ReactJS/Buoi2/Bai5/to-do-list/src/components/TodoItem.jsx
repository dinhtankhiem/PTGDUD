function TodoItem(props) {
  const todo = props.todo;

  if (!todo) return null;

  function handleXoa() {
    // Goi ham xoa tu cha, truyen id can xoa
    props.onXoaTodo(todo.id);
  }

  return (
    <div className="todo-item">
      <span className="todo-text">{todo.tenViec}</span>

      <button className="btn btn-danger" onClick={handleXoa}>
        Xóa
      </button>
    </div>
  );
}

export default TodoItem;
