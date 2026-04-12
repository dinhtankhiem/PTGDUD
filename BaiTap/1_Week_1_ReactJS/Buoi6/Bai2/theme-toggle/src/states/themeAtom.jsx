import { atom } from "recoil";

function readStoredTheme() {
  try {
    const v = localStorage.getItem("theme");
    if (v === "dark" || v === "light") return v;
  } catch {
    /* ignore */
  }
  return "light";
}

const themeAtom = atom({
  key: "themeAtom",
  default: readStoredTheme(),
});

export default themeAtom;
