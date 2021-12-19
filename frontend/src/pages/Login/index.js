import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import CustomButton from '../../components/CustomButton';
import { Modal } from '../../components/Modal'

export default function Login(props) {

  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Link to="/register">Registrar</Link>
      <hr></hr>
      <CustomButton onClick={handleModal} text="Login">
        <Modal show={showModal} handleClose={handleModal} >
          <p>LOGIN</p>
          <CustomButton type="submit" onClick={handleModal} text="Fechar"/>
        </Modal>
      </CustomButton>
    </div>
  )
}
