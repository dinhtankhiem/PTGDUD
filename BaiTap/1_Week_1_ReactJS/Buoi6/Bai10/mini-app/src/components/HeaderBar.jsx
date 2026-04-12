import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function HeaderBar() {
  const { isLoggedIn, email, setEmail, login, logout } = useAuth();
  const [password, setPassword] = useState("cityslicka");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);

  async function onLogin(e) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await login(password);
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "Lỗi");
    } finally {
      setBusy(false);
    }
  }

  return (
    <header style={{ marginBottom: 24 }}>
      <h2>Auth (AuthContext)</h2>
      {isLoggedIn ? (
        <div>
          <span>Đã đăng nhập ({email})</span>{" "}
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={onLogin}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
          />{" "}
          <button type="submit" disabled={busy}>
            {busy ? "…" : "Login"}
          </button>
        </form>
      )}
      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </header>
  );
}
