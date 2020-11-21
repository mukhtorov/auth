import styled from "styled-components";
import { getFontSize, getPadding, normal } from '../style'


export const Input = styled.input`
    transition: border .5s;
    border: none;
    outline: none;
    background: ${({ bgColor }) => bgColor || '#E3E6EC'};
    box-sizing: border-box;
    height: 51px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    font-weight: normal;
    font-size: ${getFontSize};
    padding: ${getPadding};
    opacity: ${({ disabled }) => disabled && ".7"};
    ${normal};
box-shadow: -18px -18px 30px rgba(255, 255, 255, 0.65), 18px 18px 30px rgba(198, 206, 220, 0.5);
border-radius: 8px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: ${({ disabled }) => disabled && ".7"};
    margin: 10px 0;
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`;


export const ShowPassword = styled.div`
font-family: Quicksand;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
position: absolute;
padding-right: 20px;
cursor: pointer;
color: #4785D6;
`

export const Label = styled.div`
font-family: Quicksand;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #333333;
`

