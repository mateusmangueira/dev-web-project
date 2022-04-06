import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import { toast } from 'react-toastify';

import api from "../../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  async function handleLogin({ email, password }) {
    const response = await api.post('/login', { email, password });
    console.log(response);
    if (!response.data.token) {
      toast.warn("Falha no Login, verifique seus dados")
    }
    const { token } = response.data;
    const { _id } = response.data.dev;
    localStorage.setItem('dev_id', (_id));
    localStorage.setItem('token', (token));

    navigate('/dashboard');
  }

  return (
    <div>
      <h1>Project DEV</h1>
      <p>Ofereça seus <strong>Talentos</strong> de Desenvolvimento e encontre <strong>Freelas</strong> para levantar uma grana</p>
      <Form ref={formRef} class="form" schema={schema} onSubmit={handleLogin}>
        <span>E-MAIL</span>
        <Input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <span>SENHA</span>
        <Input name="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <CustomButton text="Entrar" type="submit" />
        <Link class="link" to="/register">
          Crie sua conta grátis
        </Link>
      </Form>
    </div >
  );
}
