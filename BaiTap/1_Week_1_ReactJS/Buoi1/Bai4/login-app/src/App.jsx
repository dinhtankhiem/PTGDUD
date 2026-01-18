import { useState } from "react";
import LoginForm from "./compoments/LoginForm/LoginForm.jsx";
import Alert from "./compoments/Alert/Alert.jsx";
import "./index.css";

function App() {
  // State quan ly alert
  const [loaiAlert, setLoaiAlert] = useState(null); // success | warning | error | null
  const [tieuDeAlert, setTieuDeAlert] = useState("");
  const [noiDungAlert, setNoiDungAlert] = useState("");

  // State mo/dong de lam fade in/fade out
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  // Ham hien alert
  function hienAlert(loai, tieuDe, noiDung) {
    setLoaiAlert(loai);
    setTieuDeAlert(tieuDe);
    setNoiDungAlert(noiDung);

    // Bat trang thai mo
    setIsOpenAlert(true);
  }

  // Ham dong alert co fade out nhe
  function dongAlert() {
    // Cho fade out truoc
    setIsOpenAlert(false);

    // Sau 200ms moi xoa loai de unmount
    setTimeout(() => {
      setLoaiAlert(null);
      setTieuDeAlert("");
      setNoiDungAlert("");
    }, 200);
  }

  // Logic login co ban (demo)
  function handleLogin(username, password) {
    // Trim de tranh nhap khoang trang
    const u = username.trim();
    const p = password.trim();

    // Kiem tra rong
    if (!u || !p) {
      hienAlert("warning", "Canh bao", "Vui long nhap day du username va password.");
      return;
    }

    // Demo: neu pass = 123 thi thanh cong, khac thi error
    if (p === "123") {
      hienAlert("success", "Thanh cong", `Xin chao ${u}, ban da dang nhap thanh cong.`);
      return;
    }

    hienAlert("error", "Dang nhap that bai", "Password khong dung (thu 123 de test).");
  }

  return (
    <div className="page">
      {/* Khu vuc alert (dat tren) */}
      <div className="alert-zone">
        <Alert
          loai={loaiAlert}
          tieuDe={tieuDeAlert}
          noiDung={noiDungAlert}
          isOpen={isOpenAlert}
          onDong={dongAlert}
        />
      </div>

      {/* Login form can giua */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
