import styled from 'styled-components';

export const FormSignInContent = styled.div`
    width: 400px;
    min-height: 550px;
    background-color: #e2e2e2;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    & form {
        display: grid;

        & input {
            margin: 2px 0;
            width: 100%;
            height: 18px;
            border: none;

            &:focus {
                outline-color: red;
            }
        }

        & button {
            border-radius: 10px;
            margin: 10px 0;
            background-color: #d40054;
            border: none;
            height: 30px;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
        }

    }
`