import styled, { css } from 'styled-components';

export const Title = styled.h1`
    margin-bottom: var(--small-size);
    font-size: var(--large-size);
    font-weight: 500;
    text-align: center;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    ${({ row }) => row && css`
        flex-direction: row;
        align-items: center;
    `}

    margin-bottom: var(--small-size);
`;

export const Label = styled.label`
    font-size: 18px;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: var(--extra-small-size);
    border: 1px solid var(--gray);
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;

export const Button = styled.button`
    background-color: var(--secondary-color);
    color: var(--white);
    margin-top: var(--small-size);
    padding: var(--extra-small-size);
    font-size: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const Error = styled.p`
    color: var(--red);
`;