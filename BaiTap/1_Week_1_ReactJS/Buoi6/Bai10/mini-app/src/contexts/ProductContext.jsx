import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ProductContext = createContext(null);

const PRODUCTS_URL = "https://fakestoreapi.com/products";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(PRODUCTS_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setProducts(data);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Lỗi tải sản phẩm");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({ products, loading, error }),
    [products, loading, error]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts phải dùng trong ProductProvider");
  return ctx;
}
