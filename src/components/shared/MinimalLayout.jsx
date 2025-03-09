// Create a new MinimalLayout.jsx
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function MinimalLayout() {
  return (
    <MinimalLayoutContainer>
      <Outlet />
    </MinimalLayoutContainer>
  );
}

const MinimalLayoutContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;