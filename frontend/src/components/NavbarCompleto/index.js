import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';

import './style.css';

const NavbarCompleto = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar className='bg-translucent-neutral' expand='md'>
        <NavbarBrand href='/'>
          <img
            width='90em'
            height='200em'
            alt='Estetica Vanessa Baranano'
            src={require('../../assets/img/brand/logo_vanessa.png')}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/dashboard'>Principal</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/clients'>Clientes</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Agenda
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/agendamentos'>Agendamentos</DropdownItem>
                <DropdownItem href='#'>Novo Agendamento</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarCompleto;
