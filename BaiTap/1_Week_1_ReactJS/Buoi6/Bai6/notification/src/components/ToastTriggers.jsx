import { useSetRecoilState } from "recoil";
import toastAtom from "../states/toastAtom";

export default function ToastTriggers() {
  const setToasts = useSetRecoilState(toastAtom);

  function push(message) {
    setToasts((prev) => [...prev, { id: Date.now(), message }]);
  }

  return (
    <div>
      <h2>Gọi toast từ component bất kỳ</h2>
      <button type="button" onClick={() => push("Đã lưu thành công")}>
        Toast: Lưu
      </button>{" "}
      <button type="button" onClick={() => push("Có lỗi xảy ra")}>
        Toast: Lỗi
      </button>
    </div>
  );
}
