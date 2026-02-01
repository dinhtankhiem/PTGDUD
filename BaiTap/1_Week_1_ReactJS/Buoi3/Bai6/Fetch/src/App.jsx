import { useReducer, useEffect } from 'react'
import './App.css'

// --- Actions ---
const FETCH_START = 'FETCH_START'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

// --- Initial state ---
const initialState = {
  status: 'idle', // idle | loading | success | error
  users: [],
  error: null,
}

// --- Pure reducer (no side effects) ---
function fetchReducer(state, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        status: 'success',
        users: action.payload,
        error: null,
      }
    case FETCH_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}

const USERS_API = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [state, dispatch] = useReducer(fetchReducer, initialState)
  const { status, users, error } = state

  const fetchUsers = () => {
    dispatch({ type: FETCH_START })
    fetch(USERS_API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      })
      .then((data) => dispatch({ type: FETCH_SUCCESS, payload: data }))
      .catch((err) =>
        dispatch({ type: FETCH_ERROR, payload: err.message || 'Unknown error' })
      )
  }

  useEffect(() => {
    if (status === 'idle') fetchUsers()
  }, [])

  return (
    <div className="app">
      <h1>Fetch Users State Machine</h1>
      <p className="state-badge">State: {status}</p>

      {status === 'idle' && (
        <p className="message">Chưa bắt đầu. Đang tự động gọi fetch...</p>
      )}

      {status === 'loading' && (
        <div className="loading">
          <div className="spinner" />
          <p>Đang tải users...</p>
        </div>
      )}

      {status === 'success' && (
        <div className="success">
          <p className="count">Đã tải {users.length} users.</p>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === 'error' && (
        <div className="error">
          <p className="error-message">Lỗi: {error}</p>
          <button type="button" className="retry-btn" onClick={fetchUsers}>
            Retry
          </button>
        </div>
      )}

      {(status === 'success' || status === 'loading') && (
        <button
          type="button"
          className="retry-btn secondary"
          onClick={fetchUsers}
          disabled={status === 'loading'}
        >
          Fetch lại
        </button>
      )}
    </div>
  )
}

export default App
