import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CategoryCard = styled(Link)`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default function HomePage() {
  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
}
