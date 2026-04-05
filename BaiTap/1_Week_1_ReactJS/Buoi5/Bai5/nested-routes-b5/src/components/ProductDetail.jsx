import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p>Product ID: {id}</p>

      <button onClick={handleBuy}>Mua hàng</button>
    </div>
  );
}

export default ProductDetail;