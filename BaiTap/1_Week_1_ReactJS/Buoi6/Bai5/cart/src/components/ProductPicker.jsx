import { useRecoilState } from "recoil";
import cartAtom from "../states/cartAtom";
import { PRODUCTS } from "../data/products";

export default function ProductPicker() {
  const [cart, setCart] = useRecoilState(cartAtom);

  function addProduct(product) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  return (
    <div>
      <h2>Sản phẩm</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {PRODUCTS.map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            {p.name} — {p.price.toLocaleString("vi-VN")} đ{" "}
            <button type="button" onClick={() => addProduct(p)}>
              Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
