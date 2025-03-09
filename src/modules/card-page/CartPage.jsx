import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from "../product-list/action/productSlice";
import EmptyCart from "./component/EmptyCart";
import { toast } from "react-toastify";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleQuantityChange = (itemId, amount) => {
    const newQuantity = Math.max(
      1,
      cartItems.find((item) => item.id === itemId).quantity + amount
    );
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success("Order success!");
  };

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <Container>
      <CartHeader>
        <Title>Shopping Cart</Title>
        <ContinueShopping to="/">Continue Shopping</ContinueShopping>
      </CartHeader>
      <CartGrid>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.thumbnail} alt={item.title} />
            <ItemDetails>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <QuantityControls>
                <ControlButton
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </ControlButton>
                <span>{item.quantity}</span>
                <ControlButton onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </ControlButton>
              </QuantityControls>
              <RemoveButton onClick={() => handleRemove(item.id)}>
                Remove
              </RemoveButton>
            </ItemDetails>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </CartItem>
        ))}
      </CartGrid>
      <SummarySection>
        <Total>Total: ${total.toFixed(2)}</Total>
        <CheckoutButton onClick={handleCheckout}>
          Proceed to Checkout
        </CheckoutButton>
      </SummarySection>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #f0f2f5;
  min-height: 100vh;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ContinueShopping = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const CartGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ControlButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: #e0e0e0;
  color: #333;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #d0d0d0;
  }
`;

const RemoveButton = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background: #e60000;
  }
`;

const SummarySection = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: right;
`;

const Total = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #28a745;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #218838;
    transform: translateY(-2px);
  }
`;
