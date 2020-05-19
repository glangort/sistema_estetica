import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { Container, Navbar } from 'reactstrap'

import {
  Table,
  Container,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
// import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import NavbarCompleta from '../../components/NavbarCompleto';

import ViewClientModal from '../../components/Modals/Clients/view';

import './style.css';
import './filter';

export default function Dashboard() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function carregaClientes() {
      const response = await api.get('/client/list');

      setClientes(response.data);
    }

    carregaClientes();
  }, []);

  const cliente = clientes.map((pessoas) => {
    return (
      <tr id='myTable' key={pessoas.id}>
        <th scope='row'>{pessoas.id}</th>
        <td>{pessoas.name}</td>
        <td>{pessoas.phonenumber}</td>
        <td>{pessoas.celphonenumber}</td>
        <td />
        <td className='table-content'>
          <ViewClientModal
            class='btn button-editar btn-success'
            className='modal-lg'
            buttonLabel='Visualizar'
            clientId={pessoas.id}
          />

          <Link type='button' className='btn button-editar btn-warning'>
            Editar
          </Link>

          <Link type='button' className='btn button-cancelar btn-danger'>
            Inativar
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <>
      <NavbarCompleta />
      <Container fluid>
        <Card className='card-body shadow border-0'>
          <Row>
            <h4>Clientes </h4>

            <Link type='button' className='btn btn-success button-new'>
              Cadastrar Novo Cliente
            </Link>
          </Row>

          <InputGroup className='input-search'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <i className='fa fa-search' />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='search'
              className='light-table-filter '
              data-table='order-table'
              placeholder='Pesquisar.'
            />
          </InputGroup>

          <Container fluid>
            <Table id='example' className='order-table' responsive hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Celular</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>{cliente}</tbody>
            </Table>
          </Container>
        </Card>
      </Container>
    </>
  );
}
