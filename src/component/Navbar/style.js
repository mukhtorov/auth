import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
position: sticky;
top: 0;
width: 100vw;
box-sizing: border-box;
height: var(--navbar-height);
background: white;
align-items: center;
display: flex;
padding: 0 25px;
box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
z-index: 10;
`


export const NavItem = styled(NavLink)`
text-decoration: none;
font-family: SF Pro Display;
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 16px;
color: var(--color);
padding: 0 6px;
height: var(--navbar-height);
align-items:center;
display: flex;
justify-content: center;
margin-top: 2px;
border: none;
opacity: 0.4;
:hover{
opacity: 1;
}
`

export const activeStyle = {
  color: 'rgba(73, 75, 113, 58.16)',
  opacity: 1,
  fontWeight: 800,
  hover: {
    opacity: 0.7
  }
}

export const Logout = styled.div`
display: flex;
width: fit-content;
margin-left: auto;
cursor: pointer;
`
export const User = styled.div`
padding: 0 10px;
`