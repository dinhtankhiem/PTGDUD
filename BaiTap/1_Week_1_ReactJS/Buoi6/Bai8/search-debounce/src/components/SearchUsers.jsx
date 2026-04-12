import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import searchUsersAtom from "../states/searchUsersAtom";

const DEBOUNCE_MS = 500;

function buildUrl(q) {
  const base = "https://dummyjson.com/users/search";
  const params = new URLSearchParams({ q: q.trim() });
  return `${base}?${params}`;
}

export default function SearchUsers() {
  const [input, setInput] = useState("");
  const [state, setState] = useRecoilState(searchUsersAtom);

  useEffect(() => {
    if (!input.trim()) {
      setState({ data: [], loading: false, error: null });
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    const handle = setTimeout(async () => {
      try {
        const res = await fetch(buildUrl(input));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setState({
          data: json.users ?? [],
          loading: false,
          error: null,
        });
      } catch (e) {
        setState({
          data: [],
          loading: false,
          error: e instanceof Error ? e.message : "Lỗi",
        });
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(handle);
  }, [input, setState]);

  return (
    <div>
      <h2>Tìm user (debounce {DEBOUNCE_MS}ms)</h2>
      <input
        type="search"
        placeholder="Gõ tên…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ minWidth: 260 }}
      />

      {state.loading && <p>Đang tìm…</p>}
      {state.error && <p style={{ color: "crimson" }}>{state.error}</p>}

      {!state.loading && !state.error && state.data.length > 0 && (
        <ul style={{ textAlign: "left", maxWidth: 480, margin: "16px auto" }}>
          {state.data.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName} — {u.email}
            </li>
          ))}
        </ul>
      )}

      {!state.loading && !state.error && input.trim() && state.data.length === 0 && (
        <p>Không có kết quả</p>
      )}
    </div>
  );
}
