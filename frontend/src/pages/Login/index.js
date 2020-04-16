import React, { useState, useRef } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from 'reactstrap';

import history from '../../history';
import api from '../../services/api';
// core components
// import NavbarSimples from '../../components/NavbarSimples';
import { login } from '../../services/auth';
import { Form } from '@unform/web';
import Input from '../../components/Form/Input';
import validateLogin from '../../validations/Login';

const Login = () => {
  const [alert, setAlert] = useState(false);

  const formRef = useRef(null);

  async function handleLogin(data) {
    const { username, password } = data;
    const validationErrors = await validateLogin(data, formRef);

    if (!validationErrors) {
      try {
        const response = await api.post('/session', {
          username,
          password,
        });

        login(response.data.id);

        history.push('/dashboard');
      } catch (error) {
        setAlert(true);
      }
    } else {
      formRef.current.setErrors(validationErrors);
    }
  }

  return (
    <>
      <main>
        <section className='section section-shaped'>
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
          <Container className='pt-lg-3'>
            <Row className='justify-content-center'>
              <Col lg='5' style={{}}>
                <Card className='bg-secondary shadow border-0'>
                  <img
                    width='50%'
                    alt='Estetica Vanessa Baranano'
                    src={require('assets/img/brand/logo_vanessa.png')}
                    style={{
                      alignSelf: 'center',
                      marginTop: '10px',
                    }}
                  />
                  <CardBody className='px-lg-5 py-lg-5'>
                    <div className='text-center text-muted mb-4'>
                      <small> Entre com seu Usuário e Senha </small>
                    </div>
                    <Form ref={formRef} onSubmit={handleLogin}>
                      <Alert color='danger' isOpen={alert}>
                        Usuario ou Senha Invalidos.
                      </Alert>
                      <FormGroup className='mb-3'>
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Usuário'
                            name='username'
                            id='user'
                            className='form-control is-invalid'
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
                            name='password'
                            autoComplete='off'
                            id='password'
                            className='form-control is-invalid'
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className='custom-control custom-control-alternative custom-checkbox'>
                        <input
                          className='custom-control-input'
                          id=' customCheckLogin'
                          type='checkbox'
                        />
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
  );
};

export default Login;
