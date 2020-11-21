import { css } from 'styled-components'



export const normal = css`
  color: #262626;
  .left-right {
      display: none;
  }
  &:focus {
      outline: none;
      color: #262626;
      background: white;
  }
  &:not(:disabled):focus {
      outline: none;
      background: #fff;
      box-shadow:0 0 0 2px rgba(24,144,255,.2)
  }
  &:not(:focus)&:not(:disabled):hover {
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



export const getFontSize = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "15px";
    case "medium" || "Medium":
      return "13px";
    case "small" || "Small":
      return "12px";
    default:
      return "13px";
  }
};

export const getPadding = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "0 13px";
    case "medium" || "Medium":
      return "0 10px";
    case "small" || "Small":
      return "0 7px";
    default:
      return "0 10px";
  }
};


export const dropdown = css`
    transition: all 0.3s linear;
    font-size: ${getFontSize};
    height: 51px;
    padding: ${getPadding};
    align-items: center;
    &:focus {
        color: #1890ff;
    }
    &:not(:disabled):active {
        color: #096dd9;
        /* border: ${({ basic, disabled }) => (basic || disabled ? "none" : "1px solid #096dd9")}; */
    }
`;

export const buttons = css`
    border: 1px;
    padding: 12px;
    color: #1890ff;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 51px;
    transition: all 0.3s linear;
    &:not(:disabled):focus {
      background: #74ade1
    }
    &:not(:disabled):hover {
      background: #74ade1
    }
    &:not(:disabled):active {
      background: #096dd9; color: #fff;
      box-shadow: 0 0 5px 1.5x rgba(0, 0, 0, 0.20);
    }
`;
export const fonts = css`
    font-size: ${getFontSize};
    font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #E3E6EC;
`;
