import { useState } from "react";
import "./index.css";

function App() {
  // State la object, chua nhieu field
  const [thongTin, setThongTin] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Ham xu ly thay doi input (dung chung cho ca 3 input)
  function handleChange(e) {
    const tenField = e.target.name;   // name / email / age
    const giaTriMoi = e.target.value; // gia tri nguoi dung nhap

    // Khong mutate truc tiep
    // Dung spread operator de copy object cu, sau do ghi de field can sua
    setThongTin({
      ...thongTin,
      [tenField]: giaTriMoi,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Demo: khi submit thi hien ra console
    console.log("Thong tin nguoi dung:", thongTin);

    // Neu muon reset form
    // setThongTin({ name: "", email: "", age: "" });
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Form thong tin nguoi dung</h1>

        <form className="form" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="field">
            <span className="label">Name</span>
            <input
              className="input"
              type="text"
              name="name"
              value={thongTin.name}
              onChange={handleChange}
              placeholder="Nhap ten..."
            />
          </label>

          {/* Email */}
          <label className="field">
            <span className="label">Email</span>
            <input
              className="input"
              type="email"
              name="email"
              value={thongTin.email}
              onChange={handleChange}
              placeholder="Nhap email..."
            />
          </label>

          {/* Age */}
          <label className="field">
            <span className="label">Age</span>
            <input
              className="input"
              type="number"
              name="age"
              value={thongTin.age}
              onChange={handleChange}
              placeholder="Nhap tuoi..."
            />
          </label>

          <button className="btn" type="submit">
            Luu thong tin
          </button>
        </form>

        {/* Hien thi preview du lieu (de thay ro controlled components) */}
        <div className="preview">
          <h2 className="preview-title">Preview</h2>
          <p>Name: {thongTin.name}</p>
          <p>Email: {thongTin.email}</p>
          <p>Age: {thongTin.age}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
