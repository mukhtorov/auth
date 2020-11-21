import styled, { css } from 'styled-components'
import img from '../../../assets/background.jpg'

export const Container = styled.form`
display: flex;
flex-direction: column;
`
export const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100%;
height: 100%;
background: #ECF0F3;
border-radius: 0px 75px 0px 0px;
`
export const Layout = styled.div`
padding: 48px 20px;
width: 414px;
height: 736px;
background: url(${img});
z-index:1;
`
export const ErrorText = styled.div`
height: 15px;
box-sizing: border-box;
  margin: 6px 0 3px 10px;
  font-family: Quicksand;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff0000;

`
export const Forget = styled.div`
font-family: Quicksand;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
cursor: pointer;
color: #4785D6;
margin-left: auto;
margin-bottom: 32px;
`

export const Header = styled.div`
font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 50px;

color: #333333;
`


