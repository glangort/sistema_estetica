import React, { useEffect, useState } from 'react';

// import { Container, Navbar } from 'reactstrap'

import { Button, Table, Container, Card } from 'reactstrap';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import NavbarCompleta from '../../components/NavbarCompleto';

import './style.css';

export default function Dashboard() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function carregaClientes() {
      const response = await api.get('/clientes');

      setClientes(response.data);
    }

    carregaClientes();
  }, []);

  const cliente = clientes.map(pessoas => {
    return (
      <tr key={pessoas.id}>
        <th scope='row'>{pessoas.id}</th>
        <td>{pessoas.nome}</td>
        <td>{pessoas.telefone1}</td>
        <td>{pessoas.telefone2}</td>
        <td>Ultimo Atendimento</td>
        <td>
          <Button className='button-editar' color='warning'>
            Visualizar
          </Button>

          <Button className='button-cancelar' color='danger'>
            Excluir
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <NavbarCompleta />
      <Container fluid>
        <Card className='card-body shadow border-0'>
          <h4>Clientes </h4>

          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Telefone</th>
                <th>Ultimo Atendimento</th>
                <th />
              </tr>
            </thead>
            <tbody>{cliente}</tbody>
          </Table>
        </Card>
      </Container>
    </>
  );
}
