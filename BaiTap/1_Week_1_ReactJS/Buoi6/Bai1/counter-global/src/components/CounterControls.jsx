import { useRecoilState } from "recoil";
import countAtom from "../states/countAtom";

export default function CounterControls() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <h2>Component B — Tăng / giảm</h2>
      <button type="button" onClick={() => setCount(count - 1)}>
        −
      </button>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
