import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`

export default function Header() {
  return (
    <HeaderContainer>
      <h1>E-Commerce Store</h1>
    </HeaderContainer>
  )
}