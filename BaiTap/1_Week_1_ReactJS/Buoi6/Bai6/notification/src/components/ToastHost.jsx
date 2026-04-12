import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import toastAtom from "../states/toastAtom";

function ToastItem({ id, message }) {
  const setToasts = useSetRecoilState(toastAtom);

  useEffect(() => {
    const t = setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 3000);
    return () => clearTimeout(t);
  }, [id, setToasts]);

  return (
    <div
      style={{
        padding: "10px 16px",
        marginTop: 8,
        background: "var(--code-bg)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        textAlign: "left",
      }}
    >
      {message}
    </div>
  );
}

export default function ToastHost() {
  const toasts = useRecoilValue(toastAtom);

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 9999,
        minWidth: 240,
      }}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} id={t.id} message={t.message} />
      ))}
    </div>
  );
}
