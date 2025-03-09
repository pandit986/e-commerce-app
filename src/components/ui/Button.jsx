import styled from "styled-components";

const CartButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.bgColor || "#007BFF"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  position: relative;

  &:hover .icon-container {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: 0.5s;
  }

  &:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  &:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
  }
`;

const IconContainer = styled.span`
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: 0.5s;

  svg {
    font-size: 1.2em;
    color: #fff;
  }
`;

const Text = styled.p`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 1;
  transition-duration: 0.5s;
  font-size: 1.04em;
  font-weight: 600;
`;

// Reusable Button Component with onClick
export default function Button({ icon, text, bgColor, onClick }) {
  return (
    <CartButton bgColor={bgColor} onClick={onClick}>
      <IconContainer className="icon-container">{icon}</IconContainer>
      <Text className="text">{text}</Text>
    </CartButton>
  );
}
