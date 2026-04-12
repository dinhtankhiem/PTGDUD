import { useState } from "react";
import { useRecoilState } from "recoil";
import authAtom from "../states/authAtom";

const LOGIN_URL = "https://reqres.in/api/login";
const PROFILE_URL = "https://reqres.in/api/users/2";

export default function AuthPanel() {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Đăng nhập thất bại");
      const token = json.token;
      setAuth({ token });
      try {
        localStorage.setItem("auth_token", token);
      } catch {
        /* ignore */
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setAuth({ token: null });
    setProfile(null);
    try {
      localStorage.removeItem("auth_token");
    } catch {
      /* ignore */
    }
  }

  async function fetchProfile() {
    if (!auth.token) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(PROFILE_URL, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error("Không lấy được profile");
      setProfile(json.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Auth + token</h2>
      {!auth.token ? (
        <div>
          <div style={{ marginBottom: 8 }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
          </div>
          <button type="button" onClick={login} disabled={loading}>
            Login (API)
          </button>
        </div>
      ) : (
        <div>
          <p>Đã có token (và localStorage).</p>
          <button type="button" onClick={fetchProfile} disabled={loading}>
            Gọi API có header Authorization
          </button>{" "}
          <button type="button" onClick={logout}>
            Logout
          </button>
          {profile && (
            <p>
              User: {profile.first_name} {profile.last_name} — {profile.email}
            </p>
          )}
        </div>
      )}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </div>
  );
}
