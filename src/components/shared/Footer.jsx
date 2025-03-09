import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 E-Commerce Store</p>
    </FooterContainer>
  );
}
