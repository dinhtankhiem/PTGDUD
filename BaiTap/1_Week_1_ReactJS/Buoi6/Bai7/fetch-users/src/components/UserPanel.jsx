import { useRecoilState } from "recoil";
import usersAtom from "../states/usersAtom";

const API = "https://jsonplaceholder.typicode.com/users";

export default function UserPanel() {
  const [state, setState] = useRecoilState(usersAtom);

  async function loadUsers() {
    setState({ data: [], loading: true, error: null });
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setState({ data, loading: false, error: null });
    } catch (e) {
      setState({
        data: [],
        loading: false,
        error: e instanceof Error ? e.message : "Lỗi không xác định",
      });
    }
  }

  return (
    <div>
      <h2>Danh sách user (API)</h2>
      <button type="button" onClick={loadUsers} disabled={state.loading}>
        {state.loading ? "Đang tải…" : "Tải danh sách"}
      </button>

      {state.loading && <p>Loading…</p>}
      {state.error && <p style={{ color: "crimson" }}>Lỗi: {state.error}</p>}

      {!state.loading && !state.error && state.data.length > 0 && (
        <ul style={{ textAlign: "left", maxWidth: 480, margin: "16px auto" }}>
          {state.data.map((u) => (
            <li key={u.id}>
              {u.name} — {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
