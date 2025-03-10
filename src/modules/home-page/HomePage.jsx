// src/pages/HomePage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchCategories,
  selectCategories,
  selectLoading,
} from "./action/homeSlice";
import CategoryCard from "./component/CategoryCard";
import Loader from "../../components/ui/Loader";

export default function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <Container>
      <Heading>Explore Categories</Heading>
      <Grid>
        {categories.map(({ name, count, thumbnail }) => (
          <CategoryCard
            key={name}
            category={name}
            count={count}
            thumbnail={thumbnail}
          />
        ))}
      </Grid>
      {loading && <Loader></Loader>}
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #718096;
`;
