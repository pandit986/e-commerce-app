// Loader.jsx
import React from "react";
import styled from "styled-components";

const FullScreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(4px); 
  -webkit-backdrop-filter: blur(4px); 
  z-index: 9999; 
`;

const LoaderAnimation = styled.div`
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;

  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }
    20%,
    25% {
      transform: scale(1.3) rotate(90deg);
    }
    45%,
    50% {
      transform: scale(1) rotate(180deg);
    }
    70%,
    75% {
      transform: scale(1.3) rotate(270deg);
    }
    95%,
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;

const Circle = styled.div`
  --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;

  top: ${({ $index }) => ($index === 0 || $index === 1 ? "0" : "auto")};
  bottom: ${({ $index }) => ($index === 2 || $index === 3 ? "0" : "auto")};
  left: ${({ $index }) => ($index === 0 || $index === 2 ? "0" : "auto")};
  right: ${({ $index }) => ($index === 1 || $index === 3 ? "0" : "auto")};
`;

const Loader = () => {
  return (
    <FullScreenLoader>
      <LoaderAnimation>
        {Array.from({ length: 4 }).map((_, index) => (
          <Circle key={index} $index={index} />
        ))}
      </LoaderAnimation>
    </FullScreenLoader>
  );
};

export default Loader;
