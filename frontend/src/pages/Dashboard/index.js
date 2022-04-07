import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";

import "./Dashboard.css";

export default function Dashboard() {
  const [freelas, setFreelas] = useState([]);
  const [requests, setRequests] = useState([]);

  const dev_id = localStorage.getItem("dev_id")

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/dashboard/${dev_id}`);
      setRequests(response.data);
    }
    loadData();
  }, [dev_id]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/freelas/");
      setFreelas(response.data);
    }
    loadData();
  }, []);

  async function handleAccept(id) {
    console.log("clicou em Confirmar");
  }
  async function handleReject(id) {
    console.log("clicou em Rejeitar");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Link to='/profile'> Profile
      </Link>

      <ul className='notifications'>
        {requests.map(request => (
          <li key={request._id}>
            <p>
              Voce têm uma reserva em <strong> {request.company} </strong>
            </p>
          </li>
        ))}
      </ul>
      <ul className='freela-list'>
        {freelas.map(freela => (
          <li key={freela._id}>
            <strong>{freela.company}</strong>
            <span>{`R$${JSON.stringify(freela.hour_price)}/hora`}</span>
            <span>Devs registrados: {freela.registered_devs}</span>
          </li>
        ))}
      </ul>
    </>
  );
}