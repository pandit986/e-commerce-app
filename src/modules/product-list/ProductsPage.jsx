import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "./component/ProductCard";
import { fetchProducts, selectProducts, setState } from "./action/productSlice";
import Loader from "../../components/ui/Loader";

export default function ProductsPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(category));

    return () => {
      dispatch(setState({ key: "items", value: [] }));
    };
  }, [dispatch, category]);

  return (
    <Container>
      <Title>
        {!isNaN(category) ? "Search Results" : `${category} Products`}
      </Title>
      <Grid>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {loading && <Loader></Loader>}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  text-transform: capitalize;
`;
