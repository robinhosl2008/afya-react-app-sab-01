import styled from "styled-components";

export const NavContent = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #d40054;

    & img {
        height: 80px;
        width: auto;
    }

    .nav-contents {
        width: 55%;
        display: flex;
        justify-content: space-around;
        
        & a{
            text-decoration: none;
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
`