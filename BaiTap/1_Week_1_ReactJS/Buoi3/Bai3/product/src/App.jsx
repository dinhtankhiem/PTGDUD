import { useEffect, useMemo, useState } from "react";
import "./index.css";

// Tao so ngau nhien trong khoang [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tao mock danh sach san pham
function taoDanhSachSanPham(soLuong) {
  const danhSach = [];

  for (let i = 1; i <= soLuong; i++) {
    const gia = randomInt(10_000, 5_000_000);

    danhSach.push({
      id: i,
      ten: `Sản phẩm ${i}`,
      gia: gia,
    });
  }

  return danhSach;
}

// Format gia tien VND cho de nhin
function formatVND(soTien) {
  return soTien.toLocaleString("vi-VN") + " đ";
}

function App() {
  // ===== 1) MOCK DATA =====
  // Tao 5000 san pham 1 lan duy nhat (khong tao lai moi render)
  const [sanPhams] = useState(() => taoDanhSachSanPham(5000));

  // ===== 2) STATE FILTER =====
  const [tuKhoa, setTuKhoa] = useState("");
  const [giaMin, setGiaMin] = useState("");
  const [giaMax, setGiaMax] = useState("");
  const [kieuSort, setKieuSort] = useState("none"); // none | price_asc | price_desc

  // Bat/tat toi uu de so sanh (khong bat buoc nhung rat de thay hieu qua)
  const [batToiUuUseMemo, setBatToiUuUseMemo] = useState(true);

  // ===== 3) HAM LOC (dung chung cho ca 2 truong hop) =====
  function locVaSapXepDanhSach() {
    const batDau = performance.now();

    const tuKhoaThuong = tuKhoa.trim().toLowerCase();
    const min = giaMin === "" ? null : Number(giaMin);
    const max = giaMax === "" ? null : Number(giaMax);

    // Loc
    let ketQua = sanPhams.filter((sp) => {
      // Search theo ten
      const dungTuKhoa =
        tuKhoaThuong === "" ? true : sp.ten.toLowerCase().includes(tuKhoaThuong);

      // Filter theo gia
      const dungMin = min === null ? true : sp.gia >= min;
      const dungMax = max === null ? true : sp.gia <= max;

      return dungTuKhoa && dungMin && dungMax;
    });

    // Sort (bonus)
    if (kieuSort === "price_asc") {
      ketQua.sort((a, b) => a.gia - b.gia);
    }
    if (kieuSort === "price_desc") {
      ketQua.sort((a, b) => b.gia - a.gia);
    }

    const ketThuc = performance.now();
    console.log(
      `[TINH TOAN] Loc+Sort xong: ${ketQua.length} sp | time = ${(ketThuc - batDau).toFixed(2)} ms | toiUuUseMemo = ${batToiUuUseMemo}`
    );

    return ketQua;
  }

  // ===== 4) DANH SACH SAU LOC/SORT =====
  // Case A: Khong toi uu (moi render la loc lai)
  const danhSachKhongMemo = locVaSapXepDanhSach();

  // Case B: Co toi uu useMemo (chi loc lai khi dependencies doi)
  const danhSachCoMemo = useMemo(() => {
    return locVaSapXepDanhSach();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sanPhams, tuKhoa, giaMin, giaMax, kieuSort]);

  // Chon danh sach tuy theo toggle
  const danhSachDangHienThi = batToiUuUseMemo ? danhSachCoMemo : danhSachKhongMemo;

  // ===== 5) TONG TIEN =====
  function tinhTongTien(danhSach) {
    const batDau = performance.now();

    const tong = danhSach.reduce((acc, sp) => acc + sp.gia, 0);

    const ketThuc = performance.now();
    console.log(
      `[TINH TOAN] Tong tien: ${formatVND(tong)} | time = ${(ketThuc - batDau).toFixed(2)} ms | toiUuUseMemo = ${batToiUuUseMemo}`
    );

    return tong;
  }

  // Case A: khong memo
  const tongKhongMemo = tinhTongTien(danhSachDangHienThi);

  // Case B: co memo (chi tinh lai khi danhSachDangHienThi thay doi)
  const tongCoMemo = useMemo(() => {
    return tinhTongTien(danhSachDangHienThi);
  }, [danhSachDangHienThi]);

  const tongTienDangHienThi = batToiUuUseMemo ? tongCoMemo : tongKhongMemo;

  // ===== 6) DO THOI GIAN RENDER =====
  // Do thoi gian sau moi lan render (de thay bat/tat memo khac nhau)
  useEffect(() => {
    const t = performance.now();
    console.log(`[RENDER] App render xong at ${t.toFixed(2)} ms`);
  });

  return (
    <div className="page">
      <h1 className="title">Product Filter + Tổng tiền (useMemo)</h1>

      <div className="panel">
        <div className="row">
          <label className="label">
            Search theo tên
            <input
              className="input"
              value={tuKhoa}
              onChange={(e) => setTuKhoa(e.target.value)}
              placeholder="VD: sản phẩm 12"
            />
          </label>

          <label className="label">
            Giá min
            <input
              className="input"
              type="number"
              value={giaMin}
              onChange={(e) => setGiaMin(e.target.value)}
              placeholder="VD: 100000"
            />
          </label>

          <label className="label">
            Giá max
            <input
              className="input"
              type="number"
              value={giaMax}
              onChange={(e) => setGiaMax(e.target.value)}
              placeholder="VD: 2000000"
            />
          </label>

          <label className="label">
            Sort
            <select className="input" value={kieuSort} onChange={(e) => setKieuSort(e.target.value)}>
              <option value="none">Không sort</option>
              <option value="price_asc">Giá tăng dần</option>
              <option value="price_desc">Giá giảm dần</option>
            </select>
          </label>
        </div>

        <div className="row row-bottom">
          <label className="toggle">
            <input
              type="checkbox"
              checked={batToiUuUseMemo}
              onChange={(e) => setBatToiUuUseMemo(e.target.checked)}
            />
            Bật tối ưu useMemo
          </label>

          <button
            className="btn"
            onClick={() => {
              setTuKhoa("");
              setGiaMin("");
              setGiaMax("");
              setKieuSort("none");
            }}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      </div>

      <div className="summary">
        <div>Số sản phẩm đang lọc: <b>{danhSachDangHienThi.length}</b></div>
        <div>Tổng tiền: <b>{formatVND(tongTienDangHienThi)}</b></div>
      </div>

      <div className="list">
        {/* Chi render 50 dong de UI khong lag (nhung tinh toan van tren toan bo danh sach) */}
        {danhSachDangHienThi.slice(0, 50).map((sp) => (
          <div className="item" key={sp.id}>
            <span className="name">{sp.ten}</span>
            <span className="price">{formatVND(sp.gia)}</span>
          </div>
        ))}
      </div>

      <p className="note">
        Ghi chú: Danh sách có thể rất lớn (5000). Để UI không giật, mình chỉ hiển thị 50 dòng đầu.
        Mở Console để xem log thời gian tính toán và so sánh bật/tắt useMemo.
      </p>
    </div>
  );
}

export default App;
