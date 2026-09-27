import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const HeaderContainer = styled.header`
  background: linear-gradient(to right,#0f172a,pink) ;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`



const HeaderNav = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`

const NavItem = styled.span`
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: #60a5fa;
  }
`

const LoginButton = styled.button`
  background: #0f172a;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #1d4ed8;
  }
`
const Logo = styled.img`
  width: 140px;
  height: auto;
  cursor: pointer;
`

export default function Header() {
    const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Logo src={logo} alt="BusGo" onClick={() => navigate('/')} />

      <HeaderNav>
  <NavItem onClick={() => navigate('/')}>
    Home
  </NavItem>

  <NavItem onClick={() => navigate('/my-bookings')}>
    My Bookings
  </NavItem>

<NavItem onClick={() => navigate('/offers')}>
  Offers
</NavItem>

  <LoginButton onClick={() => navigate('/login')}>
    Login
  </LoginButton>
</HeaderNav>
    </HeaderContainer>
  )
}