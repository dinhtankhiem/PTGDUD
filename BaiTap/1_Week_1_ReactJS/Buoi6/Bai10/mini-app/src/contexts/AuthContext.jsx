import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);

const LOGIN_URL = "https://reqres.in/api/login";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("mini_token");
    } catch {
      return null;
    }
  });
  const [email, setEmail] = useState("eve.holt@reqres.in");

  const login = useCallback(
    async (password) => {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Đăng nhập thất bại");
      setToken(json.token);
      try {
        localStorage.setItem("mini_token", json.token);
      } catch {
        /* ignore */
      }
    },
    [email]
  );

  const logout = useCallback(() => {
    setToken(null);
    try {
      localStorage.removeItem("mini_token");
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      token,
      email,
      setEmail,
      login,
      logout,
      isLoggedIn: Boolean(token),
    }),
    [token, email, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth phải dùng trong AuthProvider");
  return ctx;
}
