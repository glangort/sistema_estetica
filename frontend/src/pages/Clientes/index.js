import React, { useState } from 'react'

// import { Container } from './styles';
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Container,
} from 'reactstrap'

import InputMask from 'react-input-mask'
import NavbarCompleto from '../../components/NavbarCompleto'

import api from '../../services/api'
import history from '../../history'

const Clientes = () => {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [idade, setIdade] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [numero, setNumero] = useState('')
  const [telefone1, setTelefone1] = useState('')
  const [telefone2, setTelefone2] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/cad_cliente', {
      nome,
      endereco,
      idade,
      dataNascimento,
      numero,
      telefone1,
      telefone2,
    })

    console.log(response)

    history.push('/clientes')
  }

  return (
    <>
      <NavbarCompleto />

      <Container fluid>
        <Card className='card-body shadow border-0'>
          <h4> Cadastro de Clientes</h4>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='exampleEmail'>Nome</Label>
                  <Input
                    type='text'
                    name='nome'
                    id='nome'
                    placeholder='Ex. João André'
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleCity'>Idade</Label>
                  <Input
                    type='number'
                    name='idade'
                    id='idade'
                    value={idade}
                    onChange={event => setIdade(event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleData'>Data de Nascimento</Label>
                  <Input
                    type='date'
                    name='data'
                    id='exampleData'
                    value={dataNascimento}
                    onChange={event => setDataNascimento(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={10}>
                <FormGroup>
                  <Label for='exampleAddress'>Endereço</Label>
                  <Input
                    type='text'
                    name='address'
                    id='exampleAddress'
                    placeholder='Ex. Av. 7 de Setembro'
                    value={endereco}
                    onChange={event => setEndereco(event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for='exampleNumero'>Número</Label>
                  <Input
                    type='number'
                    name='numero'
                    id='exampleNumero'
                    placeholder='Ex. 256'
                    value={numero}
                    onChange={event => setNumero(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='exampleTelefone'>Telefone</Label>
                  <Input
                    type='tel'
                    name='telefone1'
                    id='telefone1'
                    mask='(99) 9999 9999'
                    maskChar=' '
                    tag={InputMask}
                    value={telefone1}
                    onChange={event => setTelefone1(event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='exampleTelefone2'>Telefone</Label>
                  <Input
                    type='tel'
                    name='telefone2'
                    id='telefone2'
                    mask='(99) 9999 9999'
                    maskChar=' '
                    tag={InputMask}
                    value={telefone2}
                    onChange={event => setTelefone2(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type='submit' color='success'>
              Salvar
            </Button>
            <Button color='danger'>Cancelar</Button>
          </Form>
        </Card>
      </Container>
    </>
  )
}
export default Clientes
