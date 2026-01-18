import "./alert.css";

// Component Alert: nhan props loai va noi dung de hien thi
function Alert({ loai, noiDung, onDong }) {
  // Neu chua co loai (null) thi khong render gi
  if (!loai) return null;

  // Tao class theo trang thai (success/warning/error)
  const classAlert = `alert alert-${loai}`;

  return (
    <div className={classAlert}>
      <div className="alert__noi-dung">
        <strong className="alert__tieu-de">
          {/* Tieu de theo loai */}
          {loai === "success" && "Thanh cong"}
          {loai === "warning" && "Canh bao"}
          {loai === "error" && "Loi"}
        </strong>

        <p className="alert__mo-ta">
          {noiDung}
        </p>
      </div>

      {/* Nut dong alert */}
      <button className="alert__dong" onClick={onDong} aria-label="Dong thong bao">
        ×
      </button>
    </div>
  );
}

export default Alert;
