import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa";
import {
  clearSuggestions,
  fetchSuggestions,
  setQuery,
} from "../../modules/home-page/action/homeSlice";

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  margin: 0 2rem;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #718096;
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  z-index: 1000;
`;

const SuggestionItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f7fafc;
  }
`;

const ProductTitle = styled.span`
  font-weight: 500;
  color: #2d3748;
`;

const ProductPrice = styled.span`
  color: #48bb78;
  font-weight: 600;
`;

const LoadingMessage = styled.div`
  padding: 1rem;
  color: #718096;
  text-align: center;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  color: #e53e3e;
  text-align: center;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query, suggestions, loading, error } = useSelector(
    (state) => state.category
  );
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        dispatch(clearSuggestions());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  useEffect(() => {
    if (query.trim().length > 2) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        dispatch(fetchSuggestions(query));
      }, 300);
    } else {
      // dispatch(clearSuggestions());
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [query, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSuggestions());
  };

  const handleSuggestionClick = (product) => {
    navigate(`/products/${product.id}`);
    dispatch(clearSuggestions());
  };

  return (
    <SearchContainer ref={containerRef}>
      <SearchInputWrapper>
        <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
        />
        {query && (
          <ClearButton onClick={handleClearSearch}>
            <FaTimes size={14} />
          </ClearButton>
        )}
        <SearchIcon size={18} />
      </SearchInputWrapper>

      {isFocused && query.length > 0 && (
        <SuggestionsList>
          {loading && <LoadingMessage>Searching...</LoadingMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!loading && !error && suggestions.length === 0 && (
            <LoadingMessage>No products found</LoadingMessage>
          )}
          {suggestions.map((product) => (
            <SuggestionItem
              key={product.id}
              // onClick={() => handleSuggestionClick(product)}
              onMouseDown={() => handleSuggestionClick(product)}
            >
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </SearchContainer>
  );
}
