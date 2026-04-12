import { useRecoilValue } from "recoil";
import themeAtom from "./states/themeAtom";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const theme = useRecoilValue(themeAtom);
  const isDark = theme === "dark";

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100%",
        padding: 24,
        background: isDark ? "#16171d" : "#fff",
        color: isDark ? "#f3f4f6" : "#08060d",
      }}
    >
      <h1 style={{ color: isDark ? "#f3f4f6" : "#08060d" }}>
        Bài 2 — Theme Toggle
      </h1>
      <p>Theme lưu trong Recoil và localStorage.</p>
      <ThemeToggle />
    </div>
  );
}

export default App;
