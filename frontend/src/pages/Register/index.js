import React, { useState, useContext } from 'react';
import * as Yup from 'yup';

import { Link } from 'react-router-dom'
import { Form } from '@unform/web';
import { NameContext } from '../../utils/context/NameContext';
import CustomButton from '../../components/CustomButton'
import Input from '../../components/Input';

export default function Register(props) {

  let nameContext = useContext(NameContext);

  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleRegister({ email, password }) {
    console.log("Registrou com sucesso!");
  }

  return (
    <div>
      <Form class="form" schema={schema} onSubmit={handleRegister}>
        <Input name="name" type="name" placeholder="Nome Completo" />
        <Input>{nameContext.name}</Input>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <CustomButton text='Registrar' type="submit" />
        <Link class="link" to="/">Já possui conta?</Link>
      </Form>
    </div>
  )
}
