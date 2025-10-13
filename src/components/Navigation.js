import React from 'react'
import { Navbar, Nav , NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../helpers/routes'
import useAuth from '../auth/useAuth'

export default function Navigation() {

  const { logout } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark'>
        <Navbar.Brand as={NavLink} to={routes.home}>Gestor de tareas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to={routes.projects}>Projects</Nav.Link>
            <NavDropdown title="admin">
              <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            
          <Nav>
            <Nav.Link as={NavLink} to={routes.login}>Iniciar Secion</Nav.Link>
            <Nav.Link as={NavLink} to={routes.register}>Registrar</Nav.Link>
            <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
            <Nav.Link to={routes.account} onClick={logout }>Cerrar Sesion</Nav.Link>


          </Nav>
        </Navbar.Collapse>
    </Navbar>      
  )
}
