// src/components/CategoryCard.js
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled(Link)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  display: flex;
  align-items: flex-end;
  background-image: url(${(props) => props.$thumbnail});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    &::after {
      opacity: 0.8;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #4299e1, #38b2ac);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: 1.5rem;
  width: 100%;
  color: white;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
`;

const ProductCount = styled.span`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-top: 0.5rem;
  display: block;
`;

const ShopButton = styled.span`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default function CategoryCard({ category, count, thumbnail }) {
  return (
    <CardContainer to={`/products/${category}`} $thumbnail={thumbnail}>
      <Content>
        <Title>{category}</Title>
        <ProductCount>{count} products</ProductCount>
        <ShopButton>Shop Now →</ShopButton>
      </Content>
    </CardContainer>
  );
}
