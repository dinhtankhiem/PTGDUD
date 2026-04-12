import { useRecoilState } from "recoil";
import themeAtom from "../states/themeAtom";

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  return (
    <div>
      <h2>Đổi theme</h2>
      <button type="button" onClick={toggle}>
        Hiện tại: {theme} — bấm để chuyển
      </button>
    </div>
  );
}
