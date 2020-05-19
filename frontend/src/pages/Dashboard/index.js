import React, { useEffect, useState } from 'react';

// import { Container, Navbar } from 'reactstrap'

import { Table, Container, Card } from 'reactstrap';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import NavbarCompleta from '../../components/NavbarCompleto';
import ModalEditDashboard from '../../components/Modals/Dashboard/EditModal';
// import DatePicker from 'react-datepicker';

import './styles.css';

export default function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function carregaAgendamentos() {
      const response = await api.get('/dashboard/schedules');

      setAgendamentos(response.data);
    }

    carregaAgendamentos();
  }, []);

  function agendamentosLivres() {
    const horarios = agendamentos.map((agendamento) => {
      return (
        <tr key={agendamento.id}>
          <td>{agendamento.client.name}</td>
          <td>{agendamento.client.phonenumber}</td>
          <td>{format(parseISO(agendamento.date), 'dd/MM/yyyy')}</td>
          <td>{agendamento.starttime}</td>
          <td></td>
          <td>
            {/* <Link
              type='button'
              className='btn button-editar btn-success'
              to={{
                pathname: '/schedule/view/',
                state: { scheduleId: agendamento.id },
              }}
            >
              Visualizar
            </Link> */}
            <ModalEditDashboard
              class='btn button-editar btn-warning button'
              buttonLabel='Alterar'
              scheduleID={agendamento.id}
            />
            {/* <ModalEditDashboard buttonLabel='Alterar' />
            <ModalEditDashboard buttonLabel='Alterar' /> */}
            {/* <Link
              type='button'
              className='btn button-cancelar btn-danger'
              to={{
                pathname: '/schedule/view/',
                state: { scheduleId: agendamento.id },
              }}
            >
              Cancelar
            </Link> */}
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
                <th>Cliente</th>
                <th>Telefone</th>
                <th>Data</th>
                <th>Horario de Inicio</th>
                <th></th>
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
