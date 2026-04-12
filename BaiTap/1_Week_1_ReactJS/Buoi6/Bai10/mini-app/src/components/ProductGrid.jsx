import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";

export default function ProductGrid() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  if (loading) return <p>Đang tải sản phẩm…</p>;
  if (error) return <p style={{ color: "crimson" }}>Lỗi: {error}</p>;

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>Sản phẩm (ProductContext + API)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
          textAlign: "left",
        }}
      >
        {products.slice(0, 8).map((p) => (
          <article
            key={p.id}
            style={{ border: "1px solid var(--border)", padding: 12 }}
          >
            <img
              src={p.image}
              alt=""
              style={{ width: "100%", height: 120, objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "0.95rem", margin: "8px 0" }}>{p.title}</h3>
            <p>{p.price.toLocaleString("vi-VN")} đ</p>
            <button
              type="button"
              disabled={!isLoggedIn}
              onClick={() => addToCart(p)}
            >
              {isLoggedIn ? "Thêm giỏ" : "Cần đăng nhập"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
