// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// // import { Container, Navbar } from 'reactstrap'

// import {
//   Button,
//   Table,
//   Container,
//   Card,
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   CardTitle,
//   CardText,
//   Row,
//   Col,
// } from 'reactstrap';
// import classnames from 'classnames';
// import { format, parseISO } from 'date-fns';

// import api from '../../services/api';
// import NavbarCompleta from '../../components/NavbarCompleto';

// import './styles.css';
// import Clientes from 'pages/NewClientes';

// export default function ClientView(props) {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     async function carregaClientes(id) {
//       const response = await api.get(`/client/${id}`);
//       setClients(response.data);
//       // console.log(response.data);
//     }
//     carregaClientes(props.location.state.userId);
//   }, []);

//   const [activeTab, setActiveTab] = useState('1');

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

//   return (
//     <>
//       <NavbarCompleta />
//       <Container fluid>
//         <Card className='card-body shadow border-0'>
//           <h3>Ficha Cadastral</h3>
//           <div>
//             <Nav tabs>
//               <NavItem>
//                 <NavLink
//                   className={classnames({ active: activeTab === '1' })}
//                   onClick={() => {
//                     toggle('1');
//                   }}
//                 >
//                   Dados
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   className={classnames({ active: activeTab === '2' })}
//                   onClick={() => {
//                     toggle('2');
//                   }}
//                 >
//                   Ficha de Annaminese
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <TabContent activeTab={activeTab}>
//               <TabPane tabId='1'>
//                 <Row>
//                   <Col sm='12'>
//                     <br />
//                     <CardTitle>{clients.name}</CardTitle>
//                     <CardText>
//                       <div>
//                         Endereço: {clients.adress}
//                         Número: {clients.number}
//                         Data de Nascimento: {clients.birthday}
//                         Telefone: {clients.phonenumber}
//                         Celular: {clients.celphonenumber}
//                       </div>
//                     </CardText>
//                   </Col>
//                 </Row>
//               </TabPane>
//               <TabPane tabId='2'>
//                 <Row>
//                   <Col sm='6'>
//                     <Card body>
//                       <CardTitle>Special Title Treatment</CardTitle>
//                       <CardText>
//                         With supporting text below as a natural lead-in to
//                         additional content.
//                       </CardText>
//                       <Button>Go somewhere</Button>
//                     </Card>
//                   </Col>
//                   <Col sm='6'>
//                     <Card body>
//                       <CardTitle>Special Title Treatment</CardTitle>
//                       <CardText>
//                         With supporting text below as a natural lead-in to
//                         additional content.
//                       </CardText>
//                       <Button>Go somewhere</Button>
//                     </Card>
//                   </Col>
//                 </Row>
//               </TabPane>
//             </TabContent>
//           </div>
//         </Card>
//       </Container>
//     </>
//   );
// }
