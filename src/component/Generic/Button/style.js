import styled from "styled-components";
import { buttons, fonts } from "../style";

export const Container = styled.button`
    ${buttons};
    ${fonts};
    background:#1890ff;
    &:focus {
        outline: none;
    }
    &:disabled {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
    }
    width: ${({ block }) => block && "100%"};
`;
