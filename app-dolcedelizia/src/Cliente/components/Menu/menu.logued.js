import React from 'react';

import {Navbar,Button,Container,Nav,Form,FormControl, Row,Col} from "react-bootstrap";
import logo from './dolcedelizia.png';


const Logout=function(){

    localStorage.clear();
}

const Home = () => {

    const user=window.localStorage.getItem('user');
    return (
        <Navbar  collapseOnSelect="true" role="navigation" bg="blue" expand="md" style={
          {
            fontSize:'16px'
          }
        }>
        <Container fluid>
          <Navbar.Brand  style={{backgroundImage:''}} href="/homedolcedelizia">
          <img src={logo} alt="logo" style={{width:'50px'}}/>
            <b >     DOLCE DELIZIA</b></Navbar.Brand>
          <Navbar.Toggle aria-controls=" basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{withmax:'100%'}}>
            <Row style={{margin:'auto'}}>
            <Nav
              className="mr-auto me-auto "
              style={{ maxHeight: '500px',  }}
              navbarScroll
            >
              <Col lg={2}>
              <Nav.Link href="/homedolcedelizia"><b>INICIO</b></Nav.Link>
              </Col>
              <Col lg={6}>
              <Nav.Link href=""><b>QUIENES SOMOS ?</b></Nav.Link>
              </Col>
              <Col lg={3}>
              <Nav.Link href=""><b>CONTACTOS</b></Nav.Link>
              </Col>
              <Col lg={3}>
              <Nav.Link href=""><b>AYUDA</b></Nav.Link>
              </Col>
              
              <Col lg={4}>

              <Nav.Link href=""><b>{user}</b></Nav.Link>
              </Col>
             
            </Nav>
            </Row>
            <nav>
            
            <Form className="d-flex" style={{margin:'default'}} >
              <Button href="/" onClick={Logout} variant="outline-info form-control"><b>Logout</b></Button>

            </Form>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};


export default Home;