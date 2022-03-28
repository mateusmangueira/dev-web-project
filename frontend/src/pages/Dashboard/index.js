import React, { useState, useEffect } from "react";

import api from "../../services/api";

export default function Dashboard() {
  const [freelas, setFreelas] = useState([
    {
      id: 1,
      photo: "",
      company: "Teste 1",
      pricePerHour: 150,
    },
    {
      id: 2,
      photo: "",
      company: "Teste 2",
      pricePerHour: 150,
    },
  ]);
  const [requests, setRequests] = useState([
    {
      id: 1,
      user: {
        email: "mateus@gmail.com",
      },
      freela: {
        company: "teste company",
      },
      date: "24/10/1995",
    },
  ]);

  const dev_id = localStorage.getItem("dev");

  useEffect(() => {
    async function loadData() {
      const dev_id = localStorage.getItem("dev");
      const response = await api.get("/dashboard", {
        headers: { dev_id },
      });
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
      <ul className="notifications">
        {requests.map((request) => (
          <li key={request._id}>
            <p>
              <strong> {request.dev.email} </strong> está solicitando uma
              reserva em <strong> {request.freela.company} </strong> para a
              data: <strong>{request.date}</strong>
            </p>
            <button
              className="accept"
              onClick={() => handleAccept(request._id)}
            >
              ACEITAR
            </button>
            <button
              className="reject"
              onClick={() => handleReject(request._id)}
            >
              REJEITAR
            </button>
          </li>
        ))}
      </ul>
      <ul className="freela-list">
        {freelas.map((freela) => (
          <li key={freela._id}>
            <strong>{freela.company}</strong>
            <span>R${freela.pricePerHour}/hora</span>
          </li>
        ))}
      </ul>
    </>
  );
}
