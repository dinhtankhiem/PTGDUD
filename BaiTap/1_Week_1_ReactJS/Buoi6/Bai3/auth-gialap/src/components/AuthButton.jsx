import { useRecoilState } from "recoil";
import userAtom from "../states/userAtom";

export default function AuthButton() {
  const [user, setUser] = useRecoilState(userAtom);

  function handleLogin() {
    setUser({ name: "Đinh Tấn Khiêm" });
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}