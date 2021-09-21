import styled from 'styled-components';

export const Wrapper = styled.form`
    max-width: 400px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: var(--large-size);
    background-color: var(--white);

    a {
        margin-top: 20px;
        text-decoration: none;
        text-align: center;

        :hover {
            text-decoration: underline;
        }
    }
`;