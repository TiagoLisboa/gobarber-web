import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './style';

import logo from '../../assets/img/gobarber_logo_purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Tiago Lisboa</strong>

              <small>
                <Link to="/profile">Meu Perfil</Link>
              </small>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png
"
              alt="Tiago Lisboa"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
