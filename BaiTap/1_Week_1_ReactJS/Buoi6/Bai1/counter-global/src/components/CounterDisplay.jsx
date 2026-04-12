import { useRecoilValue } from "recoil";
import countAtom from "../states/countAtom";

export default function CounterDisplay() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <h2>Component A — Giá trị count</h2>
      <p style={{ fontSize: "1.5rem" }}>{count}</p>
    </div>
  );
}
