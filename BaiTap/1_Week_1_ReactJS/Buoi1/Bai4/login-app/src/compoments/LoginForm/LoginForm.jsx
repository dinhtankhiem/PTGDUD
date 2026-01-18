import { useState } from "react";
import "./login-form.css";

// LoginForm component
// onLogin la ham callback de App xu ly va hien alert
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Goi len App de xu ly logic hien alert
    onLogin(username, password);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Dang nhap</h2>

      {/* Username */}
      <label className="field">
        <span className="label-text">Username</span>
        <input
          className="input"
          type="text"
          placeholder="Nhap username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      {/* Password */}
      <label className="field">
        <span className="label-text">Password</span>
        <input
          className="input"
          type="password"
          placeholder="Nhap password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {/* Button full width */}
      <button className="btn-login" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
