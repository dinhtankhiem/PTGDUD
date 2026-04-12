import { atom } from "recoil";

const searchUsersAtom = atom({
  key: "searchUsersAtom",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});

export default searchUsersAtom;
