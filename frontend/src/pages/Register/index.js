import React, { useState } from "react";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

export default function Register(props) {
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

  function handleRegister({ email, password }) {
    console.log("Registrou com sucesso!");
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
        <CustomButton text="Registrar" type="submit" />
        <Link class="link" to="/">
          Já possui conta?
        </Link>
      </Form>
    </div>
  );
}
