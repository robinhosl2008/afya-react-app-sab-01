import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    .signup-section {
        display: flex;
        height: calc(100vh - 100px);
            
        .signup-text {
            background-color: blue;
            flex: 1;
        }

        .signup-form {
            background-color: green;
            flex: 1;
        }
    }

    .cta-section {
        display: flex;
        height: calc(100vh - 100px);
        background-color: purple;
    }
`