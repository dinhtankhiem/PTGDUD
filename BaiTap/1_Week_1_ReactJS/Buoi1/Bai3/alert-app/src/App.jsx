import { useState } from "react";
import Alert from "./compoments/Alert/Alert.jsx";
import "./index.css";

function App() {
  // State loai alert: success | warning | error | null
  const [loaiAlert, setLoaiAlert] = useState(null);

  // State noi dung alert
  const [noiDungAlert, setNoiDungAlert] = useState("");

  // Ham bat alert theo loai
  function hienAlert(loai) {
    setLoaiAlert(loai);

    // Dat noi dung theo tung loai
    if (loai === "success") {
      setNoiDungAlert("Ban da thuc hien thao tac thanh cong.");
    }

    if (loai === "warning") {
      setNoiDungAlert("Hay kiem tra lai du lieu truoc khi tiep tuc.");
    }

    if (loai === "error") {
      setNoiDungAlert("Co loi xay ra. Vui long thu lai sau.");
    }
  }

  // Ham dong alert
  function dongAlert() {
    setLoaiAlert(null);
    setNoiDungAlert("");
  }

  return (
    <div className="khung">
      <h1 className="tieu-de">Bai 3 - Alert/Notification</h1>

      {/* Cum button de doi state */}
      <div className="nhom-nut">
        <button className="nut nut-success" onClick={() => hienAlert("success")}>
          Success
        </button>

        <button className="nut nut-warning" onClick={() => hienAlert("warning")}>
          Warning
        </button>

        <button className="nut nut-error" onClick={() => hienAlert("error")}>
          Error
        </button>

        <button className="nut nut-dong" onClick={dongAlert}>
          Dong
        </button>
      </div>

      {/* Alert hien thi theo state */}
      <div className="khu-vuc-alert">
        <Alert loai={loaiAlert} noiDung={noiDungAlert} onDong={dongAlert} />
      </div>
    </div>
  );
}

export default App;
