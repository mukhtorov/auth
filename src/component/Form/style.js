import styled, { css } from 'styled-components'

export const Container = styled.form`
display: flex;
flex-direction: column;
`
export const ErrorText = styled.div`
  margin: 6px 0 20px 10px;
  font-family: Arial;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff0000;

`
export const ButtonsGroup = styled.div`
display: flex;
`

export const Header = styled.div`
margin: 21.5px 23.4px 12px 5px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`

export const Wrapper = styled.div`
width: 300px;
height: 400px;
`

export const Button = styled.button`
    border: 1px solid #1890ff;
    padding: 8px 13px;
    color: #1890ff;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background:white;
outline: none;
    transition: all 0.3s linear;
    &:not(:disabled):focus {
      color: #74ade1; border: 1px solid #74ade1;
    }
    &:not(:disabled):hover {
      color: #74ade1; border: 1px solid #74ade1;
    }
    &:not(:disabled):active {
      color: #74ade1; border: 1px solid #74ade1;
        box-shadow: ${({ Link }) =>
    !Link && "0 0 5px 1.5x rgba(0, 0, 0, 0.20);"};
    }
`
export const normal = css`
    border: 1px solid #d9d9d9;
    color: #262626;
    &:focus {
        outline: none;
        color: #262626;
        border-color: #40a9ff;
        background: white;
    }
    &:not(:disabled):focus {
        background: white;
        border-color: #40a9ff;
        box-shadow:0 0 0 2px rgba(24,144,255,.2)
    }
    &:not(:focus)&:not(:disabled):hover {
      border-color: #40a9ff;
      transition: border .5s;
    }
    &:not(:disabled):active {
        color: #262626;
    }
    &:active {
        color: #262626;
    }
    &:disabled {
        color: #c4c4c4;
        cursor: not-allowed;
    }
    &::placeholder {
        color: #838385;
    }
`;
export const Input = styled.input`
    transition: border .5s;
    border: none;
    outline: none;
    background: white;
    box-sizing: border-box;
    padding: 0 10px;
    height: 35px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    font-weight: var(--font-normal);
    font-size: 13px;
    border-radius:  4px;
    ${normal};
    background:white;

`;