import React, { useEffect, useState } from 'react';

// import { Container, Navbar } from 'reactstrap'

import { Button, Table, Container, Card } from 'reactstrap';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import NavbarCompleta from '../../components/NavbarCompleto';

import './style.css';

export default function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function carregaAgendamentos() {
      const data = format(new Date(), 'yyyyMMdd');

      // const response = await api.get(`/agendamentosdata/${data}`);

      // setAgendamentos(response.data);
    }

    carregaAgendamentos();
  }, []);

  function agendamentosLivres() {
    const horarios = agendamentos.map((agendamento) => {
      return (
        <tr key={agendamento.id}>
          <th scope='row'>{agendamento.id}</th>
          <td>{agendamento.clientes.nome}</td>
          <td>{format(parseISO(agendamento.data), 'dd/MM/yyyy')}</td>
          <td>{agendamento.hora_inicio}</td>
          <td>{agendamento.hora_fim}</td>
          <td>
            <Button
              className='button-confirmar'
              color='success'
              item={agendamento}
            >
              Confirmar
            </Button>

            <Button className='button-cancelar' color='danger'>
              Cancelar
            </Button>

            <Button className='button-editar' color='warning'>
              Editar
            </Button>
          </td>
        </tr>
      );
    });

    return horarios;
  }

  const horarios = agendamentosLivres();

  return (
    <>
      <NavbarCompleta />
      <Container fluid>
        <Card className='card-body shadow border-0'>
          <h4>Proximos Clientes </h4>

          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Horario de Inicio</th>
                <th>Previsão de Termino</th>
                <th />
              </tr>
            </thead>
            <tbody>{horarios}</tbody>
          </Table>
        </Card>
      </Container>
    </>
  );
}
