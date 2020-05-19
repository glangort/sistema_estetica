import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from 'reactstrap';
import './styles.css';
import classnames from 'classnames';

// import { format } from 'date-fns';

import api from '../../../../services/api';

const ViewClientModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const [client, setClient] = useState([]);
  const [anamnese, setAnamnese] = useState([]);

  const toggle = () => setModal(!modal);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  async function loadClients() {
    setModal(!modal);

    const responseClient = await api.get(`/client/${props.clientId}`);
    setClient(responseClient.data);

    try {
      const responseAnamnese = await api.get(`anamnese/${props.clientId}`);
      setAnamnese(responseAnamnese.data);
    } catch (error) {
      setAnamnese([{ erro: 'Cliente não possui ficha de Anaminese.' }]);
    }
  }

  const fichaAnaminese = anamnese.map((ficha) => {
    if ((ficha.length = 1)) {
      return (
        <Container fluid>
          <Col sm='12'>
            <section>
              <br /> {ficha.erro}
            </section>
          </Col>
        </Container>
      );
    }
  });

  return (
    <>
      <Button className={props.class} onClick={() => loadClients()}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} className={className} centered>
        {/* <ModalHeader toggle={toggle}>Detalhes do Cliente.</ModalHeader> */}
        <ModalBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggleTab('1');
                }}
              >
                Dados
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggleTab('2');
                }}
              >
                Ficha de Anamnese
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggleTab('3');
                }}
              >
                Medidas
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <Col sm='12'>
                <Container fluid>
                  <section>
                    <br />
                    <strong>Nome:</strong> {client.name}
                    <br />
                    <strong>Endereço:</strong> {client.adress}, Nº{' '}
                    {client.number}
                    <br />
                    <strong>Data de Nascimento:</strong> {client.birthday}{' '}
                    <br />
                    <strong>Telefone:</strong> {client.phonenumber} <br />
                    <strong>Telefone 02:</strong> {client.celphonenumber}
                    <br />
                  </section>
                </Container>
              </Col>
            </TabPane>
            <TabPane tabId='2'>
              <Col sm='12'>
                <Container fluid></Container>
              </Col>
            </TabPane>

            <TabPane tabId='3'>
              <Row>
                <Col sm='6'>
                  <Container>
                    <br />
                    <Card body hover>
                      <CardTitle>Medida</CardTitle>
                      <CardText>Medidas Aqui!</CardText>
                    </Card>
                  </Container>
                </Col>
                <Col sm='6'></Col>
              </Row>
            </TabPane>
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button color='danger' onClick={toggle}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewClientModal;
