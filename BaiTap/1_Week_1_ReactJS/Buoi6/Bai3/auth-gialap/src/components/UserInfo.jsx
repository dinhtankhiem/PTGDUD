import { useRecoilValue } from "recoil";
import userAtom from "../states/userAtom";

export default function UserInfo() {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      {user ? (
        <h2>Xin chào, {user.name}</h2>
      ) : (
        <h2>Chưa đăng nhập</h2>
      )}
    </div>
  );
}