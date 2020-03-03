import React from 'react';

import logo from '../../assets/img/gobarber_logo.svg';
import { Link } from 'react-router-dom';

// import { Container } from './style';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
