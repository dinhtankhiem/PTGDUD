import { useEffect, useState } from "react";
import { subscribeToast } from "../utils/toastBus";

export default function ToastStack() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    return subscribeToast((message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    });
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 10000,
        minWidth: 220,
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            marginTop: 8,
            padding: "10px 14px",
            background: "var(--code-bg)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            textAlign: "left",
          }}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
