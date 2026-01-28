import { useState } from "react";
import StatusBadge from "./components/StatusBadge";
import "./index.css";

function App() {
  const [status, setStatus] = useState("online");

  return (
    <div className="page">
      <h1>Status Badge Demo</h1>

      <StatusBadge status={status} />

      {/* Nut doi trang thai */}
      <div className="buttons">
        <button onClick={() => setStatus("online")}>Online</button>
        <button onClick={() => setStatus("offline")}>Offline</button>
        <button onClick={() => setStatus("busy")}>Busy</button>
      </div>
    </div>
  );
}

export default App;
