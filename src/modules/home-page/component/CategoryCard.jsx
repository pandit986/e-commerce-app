import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../components/ui/Button";

const CardContainer = styled(Link)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  background-image: url(${(props) => props.$thumbnail});
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Gradient overlay for contrast & elegance */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

const ProductCount = styled.span`
  font-size: 1.1rem;
  color: #f8f8f8;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export default function CategoryCard({ category, count, thumbnail }) {
  return (
    <CardContainer to={`/products/${category}`} $thumbnail={thumbnail}>
      <Content>
        <Title>{category}</Title>
        <ProductCount>{count} products</ProductCount>
        <ButtonWrapper>
          <Button icon={<FaArrowRight />} text="Shop Now" bgColor="#007BFF" />
        </ButtonWrapper>
      </Content>
    </CardContainer>
  );
}
