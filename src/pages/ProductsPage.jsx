import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectProducts } from "../features/products/slices/productSlice";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
`;

export default function ProductsPage() {
  const { category } = useParams();
  const products = useSelector(selectProducts);
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <h2>{category.toUpperCase()} Products</h2>
      <ProductGrid>
        {categoryProducts.map((product) => (
          <ProductCard key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );
}
