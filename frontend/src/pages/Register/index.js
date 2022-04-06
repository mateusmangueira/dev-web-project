import React, { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from "../../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [techs, setTechs] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  async function handleRegister({ name, email, password, techs }) {
    const response = await api.post('/create', { name, email, password, techs });
    const { dev, token } = response.data;
    localStorage.setItem('dev_id', JSON.stringify(dev._id));
    localStorage.setItem('token', JSON.stringify(token));
    toast.success('Conta criada com sucesso.');
    navigate('/');
  }

  return (
    <div>
      <Form class="form" schema={schema} onSubmit={handleRegister}>
        <Input
          name="name"
          type="name"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="techs"
          type="techs"
          placeholder="Tecnologias"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />
        <CustomButton text="Registrar" type="submit" />
        <Link class="link" to="/">
          Já possui conta?
        </Link>
      </Form>
    </div>
  );
}
