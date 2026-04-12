import { useCart } from "../contexts/CartContext";

export default function CartSummary() {
  const { items, changeQty, total } = useCart();

  return (
    <section>
      <h2>Giỏ hàng (CartContext)</h2>
      {items.length === 0 ? (
        <p>Chưa có sản phẩm</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.title}</strong> — {item.price.toLocaleString("vi-VN")}{" "}
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
        <strong>Tổng:</strong> {total.toLocaleString("vi-VN")} đ
      </p>
    </section>
  );
}
