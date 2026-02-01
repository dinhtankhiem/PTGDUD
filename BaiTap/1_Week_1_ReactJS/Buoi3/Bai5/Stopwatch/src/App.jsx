import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  // ===== STATE UI =====
  const [timeMs, setTimeMs] = useState(0);        // thoi gian (milliseconds)
  const [isRunning, setIsRunning] = useState(false);
  const [lapName, setLapName] = useState("");
  const [laps, setLaps] = useState([]);

  // ===== useRef (khong dung state) =====
  const intervalRef = useRef(null);   // luu intervalId
  const inputRef = useRef(null);      // focus input lap name

  // ===== Start =====
  function handleStart() {
    // Neu dang chay thi khong tao them interval
    if (isRunning) return;

    setIsRunning(true);

    // Luu intervalId vao ref (khong lam re-render)
    intervalRef.current = setInterval(() => {
      setTimeMs((prev) => prev + 10); // cap nhat moi 10ms
    }, 10);
  }

  // ===== Pause =====
  function handlePause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  // ===== Reset =====
  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    setIsRunning(false);
    setTimeMs(0);
    setLapName("");
    setLaps([]);
  }

  // ===== Add Lap + focus input =====
  function handleAddLap() {
    const tenLap = lapName.trim();
    if (!tenLap) {
      // Neu rong thi focus lai input de nguoi dung nhap
      inputRef.current.focus();
      return;
    }

    // Them lap (luu lai thoi gian tai thoi diem bam)
    setLaps((prev) => [
      ...prev,
      { id: Date.now(), name: tenLap, timeMs: timeMs },
    ]);

    // Xoa text input
    setLapName("");

    // Focus input sau khi add
    inputRef.current.focus();
  }

  // ===== Cleanup khi unmount =====
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // ===== Format time (mm:ss:ms) =====
  function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centi = Math.floor((ms % 1000) / 10); // 0-99

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const cc = String(centi).padStart(2, "0");

    return `${mm}:${ss}.${cc}`;
  }

  return (
    <div className="page">
      <h1 className="title">Stopwatch</h1>

      <div className="time">{formatTime(timeMs)}</div>

      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="lap">
        <input
          ref={inputRef}
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
          placeholder="Lap name..."
        />
        <button onClick={handleAddLap}>Add Lap</button>
      </div>

      <ul className="lap-list">
        {laps.map((lap, index) => (
          <li key={lap.id}>
            #{index + 1} - {lap.name} - {formatTime(lap.timeMs)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
