import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CustomButton from '../../components/CustomButton';
import { Modal } from '../../components/Modal';

import "./styles.css";

export default function Register(props) {

  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Link to="/">Login</Link>
      <hr></hr>
      <CustomButton onClick={handleModal} text="Registrar">
        <Modal show={showModal} handleClose={handleModal} >
          <p>REGISTRAR</p>
          <CustomButton type="submit" onClick={handleModal} text="Fechar" />
        </Modal>
      </CustomButton>
    </div>
  )
}
