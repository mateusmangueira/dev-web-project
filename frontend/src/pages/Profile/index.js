import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Container } from './styles';
import Input from '../../components/Input';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [oldPassword, setOldPassword] = useState("");
  const [actualPassword, setActualPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [techs, setTechs] = useState([])

  const dev_id = localStorage.getItem("dev_id")

  async function handleSubmit({ name, email, password, techs }) {
    const dev = await api.put(`/devs/${dev_id}`, { name, email, password, techs });
    toast.success('Perfil atualizado com sucesso');
    navigate('/dashboard');
  }

  function handleSignOut() {
    localStorage.removeItem('dev');
    navigate('/');
    toast.info('Sessão encerrada com sucesso.');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu novo Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input name="email" type="email" placeholder="Seu novo e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Sua senha atual" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        <Input name="password" type="password" placeholder="Sua nova senha" value={actualPassword} onChange={(e) => setActualPassword(e.target.value)} />
        <Input name="confirmPassword" type="password" placeholder="Confirme nova senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <Input name="techs" type="name" placeholder="Mofique aqui suas Techs" value={techs} onChange={(e) => setTechs(e.target.value)} />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Encerrar sessão
      </button>
    </Container>
  );
}