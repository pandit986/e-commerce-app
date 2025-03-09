import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, setQuantity } from "../action/productSlice";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, product.quantity + amount);
    dispatch(setQuantity({ productId: product.id, quantity: newQuantity }));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        thumbnail: product.thumbnail,
      })
    );
    toast.success("Product added to cart!");
  };

  return (
    <Card>
      <ImageWrapper>
        <ProductImage
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </ImageWrapper>
      <Content>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>

        <FlexWrapper>
          <QuantityWrapper>
            <QuantityButton onClick={() => handleQuantityChange(-1)}>
              -
            </QuantityButton>
            <span>{product.quantity}</span>
            <QuantityButton onClick={() => handleQuantityChange(1)}>
              +
            </QuantityButton>
          </QuantityWrapper>

          <Button
            icon={<FaShoppingCart />}
            text="Add to Cart"
            bgColor="#007BFF"
            onClick={handleAddToCart}
          />
        </FlexWrapper>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  padding: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  color: #2d3748;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  padding: 0.25rem 0.75rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #007bff;
    background: #f0f4ff;
  }
`;
