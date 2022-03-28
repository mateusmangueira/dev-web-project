import React, { useState } from "react";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  function handleLogin({ email, password }) {
    console.log("Logou com sucesso!");
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
