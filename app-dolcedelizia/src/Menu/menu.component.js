import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import {Navbar,Button,Container,Nav,Form,FormControl} from "react-bootstrap";

const Home = () => {
    return (
        <Navbar bg="blue" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{backgroundImage:''}} href="#"><b>DOLCE DELIZIA</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/homedolcedelizia"><b>INICIO</b></Nav.Link>
              <Nav.Link href=""><b>QUIENES SOMOS ?</b></Nav.Link>
              <Nav.Link href=""><b>CONTACTOS</b></Nav.Link>
              <Nav.Link href=""><b>AYUDA</b></Nav.Link>
              <Nav.Link href="/login"><b>LOGIN</b></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-info form-control"><b>Login</b></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};


export default Home;