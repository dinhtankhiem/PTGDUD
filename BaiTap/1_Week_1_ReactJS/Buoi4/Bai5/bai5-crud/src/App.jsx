import { useEffect, useState } from 'react';
import './App.css';

function App() {
const API_URL = '/api/todos';
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error('Không thể tải danh sách todo');
      }

      const data = await res.json();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTodo(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError('Vui lòng nhập title');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const newTodo = {
        title: title.trim(),
        completed: false
      };

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      });

      if (!res.ok) {
        throw new Error('Thêm todo thất bại');
      }

      const createdTodo = await res.json();

      setTodos((prev) => [...prev, createdTodo]);
      setTitle('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteTodo(id) {
    try {
      setDeletingId(id);
      setError(null);

      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        throw new Error('Xóa todo thất bại');
      }

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="container">
      <h1>Todo App - Fetch API CRUD</h1>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Nhập todo mới..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Đang thêm...' : 'Thêm'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Loading...</p>
      ) : todos.length === 0 ? (
        <p className="empty">Chưa có todo nào</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <div className="card" key={todo.id}>
              <div>
                <p className="todo-title">{todo.title}</p>
                <p className="todo-status">
                  Status: {todo.completed ? 'Done' : 'Pending'}
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(todo.id)}
                disabled={deletingId === todo.id}
              >
                {deletingId === todo.id ? 'Đang xóa...' : 'Xóa'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;