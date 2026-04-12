import { atom } from "recoil";

function readToken() {
  try {
    return localStorage.getItem("auth_token");
  } catch {
    return null;
  }
}

const authAtom = atom({
  key: "authAtom",
  default: {
    token: readToken(),
  },
});

export default authAtom;
