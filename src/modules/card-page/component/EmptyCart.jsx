import { Link } from "react-router-dom";
import styled from "styled-components";
import emptyCartImage from "../../../assets/empty-cart.png";

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4ff, #f7fafc);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const EmptyCartImage = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 400px;
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #3182ce;
  }
`;

export default function EmptyCart() {
  return (
    <EmptyCartContainer>
      <EmptyCartImage src={emptyCartImage} alt="Empty Cart" />
      <Title>Your Cart is Empty</Title>
      <Description>
        It looks like you haven’t added any items to your cart yet. Browse our
        collection and find something you love.
      </Description>
      <StyledLink to="/">Continue Shopping</StyledLink>
    </EmptyCartContainer>
  );
}
