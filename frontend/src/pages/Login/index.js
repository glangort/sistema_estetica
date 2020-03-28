/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'
import api from '../../services/api'
// core components
import NavbarSimples from '../../components/NavbarSimples'
import history from '../../history'

import { login, userId } from '../../services/auth'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/session', { username, password })

    login(response.data.token)

    const user = await api.get(`/userid/${username}`)

    localStorage.setItem('user_id', user.data.id)

    const usuario = user.map(users => {
      return localStorage.setItem('user_id', users.id)
    })

    history.push('/dashboard')
  }

  return (
    <>
      <NavbarSimples />
      <main>
        <section className='section section-shaped section-lg'>
          <div className='shape shape-style-1 bg-gradient-default'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className='pt-lg-7'>
            <Row className='justify-content-center'>
              <Col lg='5'>
                <Card className='bg-secondary shadow border-0'>
                  <CardBody className='px-lg-5 py-lg-5'>
                    <div className='text-center text-muted mb-4'>
                      <small>Entre com seu Usuário e Senha</small>
                    </div>

                    <Form role='form' onSubmit={handleSubmit}>
                      <FormGroup className='mb-3'>
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Usuário'
                            type='user'
                            id='user'
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-lock-circle-open' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Senha'
                            type='password'
                            autoComplete='off'
                            id='password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className='custom-control custom-control-alternative custom-checkbox'>
                        <input
                          className='custom-control-input'
                          id=' customCheckLogin'
                          type='checkbox'
                        />
                        <label
                          className='custom-control-label'
                          htmlFor=' customCheckLogin'
                        >
                          <span>Lembrar-me</span>
                        </label>
                      </div>
                      <div className='text-center'>
                        <Button className='my-4' color='primary' type='submit'>
                          Entrar
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Login
