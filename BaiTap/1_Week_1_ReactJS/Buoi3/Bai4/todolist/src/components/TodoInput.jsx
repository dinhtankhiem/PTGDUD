function TodoInput({ text, onChange, onAdd }) {
  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nhap viec can lam..."
      />
      <button onClick={onAdd}>Them</button>
    </div>
  );
}

export default TodoInput;
