// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// // import { Container, Navbar } from 'reactstrap'

// import { Button, Table, Container, Card } from 'reactstrap';
// import { format, parseISO } from 'date-fns';

// import api from '../../services/api';
// import NavbarCompleta from '../../components/NavbarCompleto';

// import './style.css';

// export default function Dashboard() {
//   const [clientes, setClientes] = useState([]);

//   useEffect(() => {
//     async function carregaClientes() {
//       const response = await api.get('/client/list');

//       setClientes(response.data);
//     }

//     carregaClientes();
//   }, []);

//   async function handleView(id) {
//     console.log(id);
//   }

//   const cliente = clientes.map((pessoas) => {
//     return (
//       <tr key={pessoas.id}>
//         <th scope='row'>{pessoas.id}</th>
//         <td>{pessoas.name}</td>
//         <td>{pessoas.phonenumber}</td>
//         <td>{pessoas.celphonenumber}</td>
//         <td>{format(parseISO(pessoas.schedule[0].date), 'dd/MM/yyyy')}</td>
//         <td>
//           {/* <Button className='button-editar' color='success'>
//             Visualizar
//           </Button> */}

//           <Link
//             type='button'
//             className='btn button-editar btn-success'
//             to={{ pathname: '/clientes/view/', state: { userId: pessoas.id } }}
//           >
//             Visualizar
//           </Link>

//           <Link
//             type='button'
//             className='btn button-editar btn-warning'
//             to={`/client/edit/${pessoas.id}`}
//           >
//             Editar
//           </Link>

//           <Link
//             type='button'
//             className='btn button-cancelar btn-danger'
//             to={`/client/delete/${pessoas.id}`}
//           >
//             Excluir
//           </Link>
//         </td>
//       </tr>
//     );
//   });
//   return (
//     <>
//       <NavbarCompleta />
//       <Container fluid>
//         <Card className='card-body shadow border-0'>
//           <h4>Clientes </h4>

//           <Table responsive hover>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Nome</th>
//                 <th>Telefone</th>
//                 <th>Telefone</th>
//                 <th>Ultimo Atendimento</th>
//                 <th />
//               </tr>
//             </thead>
//             <tbody>{cliente}</tbody>
//           </Table>
//         </Card>
//       </Container>
//     </>
//   );
// }
