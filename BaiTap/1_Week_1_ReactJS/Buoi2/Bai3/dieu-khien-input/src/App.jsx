import { useState } from "react";
import "./index.css";

function App() {
  const [ten, setTen] = useState("");

  const [email, setEmail] = useState("");

  return (
    <div className="page">
      <div className="form-box">
        <h1>Form nhập thông tin</h1>

        <div className="field">
          <label>Tên</label>
          <input
            type="text"
            placeholder="Nhập tên..."
            value={ten}
            onChange={(e) => setTen(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="result">
          <p>Tên: <strong>{ten}</strong></p>
          <p>Email: <strong>{email}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;
