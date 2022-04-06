import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Dev</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffilestore.community.support.microsoft.com%2Fapi%2Fimages%2F6061bd47-2818-4f2b-b04a-5a9ddb6f6467%3Fupload%3Dtrue&imgrefurl=https%3A%2F%2Fanswers.microsoft.com%2Fpt-br%2Fwindows%2Fforum%2Fall%2Ffiz-uma-altera%25C3%25A7%25C3%25A3o-na-imagem-de%2Fdac08b7e-1fc2-498c-9889-684be679c274&tbnid=dcq0ny6a4goMxM&vet=12ahUKEwj1tJmO9vz2AhXDCdQKHQAQCtsQMygCegUIARDCAQ..i&docid=mbDDRIL8tJ9tlM&w=448&h=448&q=imagem%20de%20perfil%20padrao&ved=2ahUKEwj1tJmO9vz2AhXDCdQKHQAQCtsQMygCegUIARDCAQ"
              alt="avatar-perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}