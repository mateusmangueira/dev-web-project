import React, { useState } from "react";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  async function handleLogin({ email, password }) {
    const response = await api.post("/login", { email, password });
    const { _id } = response.data;

    localStorage.setItem("dev", _id);

    history.push("/dashboard");
  }

  return (
    <div>
      <Form class="form" schema={schema} onSubmit={handleLogin}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <CustomButton text="Entrar" type="submit"></CustomButton>
        <Link class="link" to="/register">
          Crie sua conta grátis
        </Link>
      </Form>
    </div>
  );
}
