import { useRecoilState } from "recoil";
import cartAtom from "../states/cartAtom";

export default function CartPanel() {
  const [cart, setCart] = useRecoilState(cartAtom);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function changeQty(id, delta) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ trống</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.name}</strong> — {item.price.toLocaleString("vi-VN")}{" "}
              đ × {item.qty}
              <div>
                <button type="button" onClick={() => changeQty(item.id, -1)}>
                  −
                </button>
                <button type="button" onClick={() => changeQty(item.id, 1)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Tổng tiền:</strong> {total.toLocaleString("vi-VN")} đ
      </p>
    </div>
  );
}
