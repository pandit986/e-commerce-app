import { useState } from "react";
import { FaShoppingBag, FaSearch, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCartTotalItems } from "../../modules/product-list/action/productSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const cartItems = useSelector(selectCartTotalItems);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <HeaderContainer>
      <Content>
        <Logo to="/">
          <span>E</span>Commerce
        </Logo>

        <SearchContainer>
          <SearchBar />
        </SearchContainer>

        <CartButton>
          <Link to="/cart">
            <FaShoppingBag size={20} />
            {!!cartItems && <span>{cartItems}</span>}
          </Link>
        </CartButton>

        <HamburgerButton onClick={toggleSearch}>
          <FaBars />
        </HamburgerButton>
      </Content>

      <MobileSearch $isOpen={isSearchVisible}>
        <SearchBar />
      </MobileSearch>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  color: #2d3748;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  span {
    color: #4299e1;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
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

const CartButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #2d3748;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #f7fafc;
    transform: translateY(-1px);
  }

  span {
    background: #4299e1;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    position: absolute;
    top: -5px;
    right: -5px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2d3748;
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileSearch = styled.div`
  display: none;
  width: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;
