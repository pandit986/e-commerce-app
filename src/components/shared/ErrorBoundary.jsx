// src/components/ErrorBoundary.jsx
import { Component } from 'react';
import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
`;

const ErrorCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: center;
`;

const ErrorIcon = styled(FiAlertTriangle)`
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1.5rem;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

class ErrorBoundary extends Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  handleReload = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorCard>
            <ErrorIcon />
            <h2>Oops! Something Went Wrong</h2>
            <p>We're having trouble loading this page. Please try again.</p>
            
            <div className="button-group">
              <button onClick={this.handleReload}>
                Reload Page
              </button>
              <Link to="/">
                Return to Home
              </Link>
            </div>
          </ErrorCard>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
