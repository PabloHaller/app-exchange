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
  DropdownItem } from 'reactstrap';
import Home from '../home/Home';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "wheat"}} expand="md">
        <NavbarBrand href="/home">Plata Exchange</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Ver publicaciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/calificarTransaccion">Calificar Transacciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/calificarPublicacion">Calificar Publicaciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/buy">Comprar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/offer">Publicar</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Opciones
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem>
                  Perfil
                </DropdownItem>
                <DropdownItem>
                  Configuración
                </DropdownItem>
                <DropdownItem divider /> */}
                <DropdownItem>
                  <NavLink href="/login">Desconectarse</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}




export default NavBar;
