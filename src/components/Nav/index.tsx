import React from 'react';
import LogoAfya from "../../assets/img/LogoAfya.jpg";
import { Link } from 'react-router-dom';
import { NavContent } from "./styles";

// import { Container } from './styles';

const Nav: React.FC = () => {
    return (
        <NavContent>
            <Link to="/">
                <img src={LogoAfya} alt="Logo Afya" />
            </Link>

            <div className="nav-contents">
                <Link to="/">Home</ Link>
                <Link to="/contact">Contato</ Link>
            </div>
      </ NavContent>
  );
}

export default Nav;