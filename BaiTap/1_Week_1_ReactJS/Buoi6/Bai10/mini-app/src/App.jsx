import CartSummary from "./components/CartSummary";
import HeaderBar from "./components/HeaderBar";
import ProductGrid from "./components/ProductGrid";
import ToastStack from "./components/ToastStack";

function App() {
  return (
    <div>
      <h1>Bài 10 — Mini App (Context)</h1>
      <HeaderBar />
      <ProductGrid />
      <CartSummary />
      <ToastStack />
    </div>
  );
}

export default App;
