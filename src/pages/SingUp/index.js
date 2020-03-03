import React from 'react';

import logo from '../../assets/img/gobarber_logo.svg';
import { Link } from 'react-router-dom';

// import { Container } from './style';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Seu nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
