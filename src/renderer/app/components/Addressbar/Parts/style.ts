import styled, { css } from "styled-components";

export const StyledParts = styled.div`
    font-size: 14px;
    line-height: 16px;
    color: #303030;
    position: absolute;
    top: 9px;
    pointer-events: none;
    width: 944px;
    height: 100%;
    padding-left: 38px;
    overflow: hidden;
    white-space: nowrap;

    ${({ visible }: { visible: boolean }) => css`
        display: ${visible ? "flex" : "none"};
    `};
`;

export const Part = styled.div`
    ${({ opacity }: { opacity: number }) => css`
        opacity: ${opacity};
    `};
`