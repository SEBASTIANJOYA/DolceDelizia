import React from 'react';
import {Form,Alert,Card,Col,Row,Button} from "react-bootstrap";

function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
};


const Registro = () => {

    
    return (
      
        <Card>
        <Form variant="card">
            <Alert variant="alert alert-info">
                <Alert.Heading><b>R E G I S T R O - D E - D A T O S</b></Alert.Heading>
                <h6>
                    <b>Bienvenido acá podrá acceder los datos correspondientes para registrarse en el sistema.</b>
                </h6>
                <hr />
                <p style={{fontSize:'14px'}} className="mb-0">
                    <b>Ingrese los datos correspondientes para la creacion de la cuenta del sistema DOLCE-DELIZIA </b>
                </p>
            </Alert>

  
            <Form>
               
                <Row>
                     <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Cedula :</b> </Form.Label>
                        <Form.Control placeholder="Cedula" />
                     </Col>
                     <Col>
                         <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Primer Nombre :</b> </Form.Label>
                         <Form.Control placeholder="Primer Nombre" />
                    </Col>
                    <Col>
                         <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Segundo Nombre :</b> </Form.Label>
                         <Form.Control placeholder="Segundo Nombre" />
                    </Col>
                </Row>
            
                <Row>
                     <Col>
                         <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Primer Apellido :</b> </Form.Label>
                         <Form.Control placeholder="Primer Apellido" />
                    </Col>
                    <Col>
                         <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Segundo Apellido :</b> </Form.Label>
                         <Form.Control placeholder="Segundo Apellido" />
                    </Col>
                    
                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Fecha Nacimiento :</b> </Form.Label>
                        <Form.Control placeholder="Fecha de Nacimiento" />
                     </Col>
                </Row>
              
                <Row>
                     <Col>
                         <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Usuario :</b> </Form.Label>
                         <Form.Control placeholder="Usuario" />
                    </Col>
                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Contraseña :</b> </Form.Label>
                         <Form.Control placeholder="Contraseña" />
                    </Col>
                    
                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Direccion :</b> </Form.Label>
                        <Form.Control placeholder="Direccion" />
                    </Col>

                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Telefono :</b> </Form.Label>
                        <Form.Control placeholder="Telefono" />
                    </Col>
                </Row>
                
                <br />
                <Button variant="outline-info form"><b> C A N C E L A R  </b></Button>
                <Button variant="outline-info form "><b> G U A R D A R </b></Button>
               
                <Button href="/login" variant="btn btn-link">Haz Click Para Iniciar Sesion ! </Button>
            </Form>
    
            

        </Form>
        <br />
    </Card>
        

    )
};
export default Registro;






