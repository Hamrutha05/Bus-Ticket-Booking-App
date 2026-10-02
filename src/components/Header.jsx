import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.97);
  color: #280f2a;
  padding: 12px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 15px rgba(15, 23, 42, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.04);
  }
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`

const NavItem = styled.button`
  background: transparent;
  border: none;
  color: #523355;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #43094a;
    background: #feefff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 9px;
  }
`

const LoginButton = styled.button`
  background: #43094a;
  color: white;
  border: none;
  padding: 10px 22px;
  margin-left: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(222, 37, 235, 0.25);

  &:hover {
    background: #43094a;
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(194, 103, 204, 0.3);
  }

  @media (max-width: 768px) {
    padding: 9px 14px;
    font-size: 14px;
  }
`

export default function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>

      <Logo
        src={logo}
        alt="BusGo"
        onClick={() => navigate('/')}
      />

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