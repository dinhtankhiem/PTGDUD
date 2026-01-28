import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentInfo from "./components/StudentInfo";

function App() {
  const sinhVien = {
    hoTen: "Đinh Tấn Khiêm",
    mssv: "23697291",
    lop: "DHKTPM19B",
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <StudentInfo hoTen={sinhVien.hoTen} mssv={sinhVien.mssv} lop={sinhVien.lop} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
