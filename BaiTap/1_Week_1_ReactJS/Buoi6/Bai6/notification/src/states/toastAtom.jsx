import { atom } from "recoil";

const toastAtom = atom({
  key: "toastAtom",
  default: [],
});

export default toastAtom;
