import { useEffect, useState } from "react";

function App() {
  // State luu thoi gian hien tai
  const [time, setTime] = useState(new Date());

  // useEffect chay sau khi component render lan dau
  useEffect(() => {
    // Tao interval cap nhat moi 1 giay
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: chay khi component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []); // [] => chi chay 1 lan (componentDidMount)

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
