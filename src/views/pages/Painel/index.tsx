import React from 'react';

import Nav from '../../../components/Nav';
import Footer from "../../../components/Footer";

import { Container } from "./styles";

const Painel: React.FC = () => {
    return(
        <>
            <Nav/>
            <Container>
                <h1>Painel do usuário</h1>
            </Container>
        </>
    );
}

export default Painel;