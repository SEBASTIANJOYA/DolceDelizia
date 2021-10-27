import React from 'react';
import {Form,Alert,Card,Col,Row,Button} from "react-bootstrap";

function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
};


const Registro = () => {

    
    return (
      
        
        <Form>
            <br/>
           <h3 style={{color: 'black'}}>REGISTRO DE DATOS</h3>

           <br/>
  
            <Form>
               
                <Row>
                     <Col>
                        
                        <Form.Control placeholder="Cedula" />
                     </Col>
                     <Col>
                         
                         <Form.Control placeholder="Primer Nombre" />
                    </Col>
                    <Col>
                        
                         <Form.Control placeholder="Segundo Nombre" />
                    </Col>
                </Row>

                <br />
            
                <Row>
                     <Col>
                         
                         <Form.Control placeholder="Primer Apellido" />
                    </Col>
                    <Col>
                        
                         <Form.Control placeholder="Segundo Apellido" />
                    </Col>
                    
                    <Col>
                        
                        <Form.Control placeholder="Fecha de Nacimiento" />
                     </Col>
                </Row>
                <br />
                
                <Row>
                     <Col>
                        
                         <Form.Control placeholder="Usuario" />
                    </Col>
                    <Col>
                        
                         <Form.Control placeholder="Contraseña" />
                    </Col>
                    
                    <Col>
                        
                        <Form.Control placeholder="Direccion" />
                    </Col>

                    <Col>
                       
                        <Form.Control placeholder="Telefono" />
                    </Col>
                </Row>
                
                <br />
                <div style={{paddingleft:"50px"}}>
                <Button variant="outline-info form"><b> Cancelar  </b></Button>
                <Button variant="outline-info form "><b> Guardar </b></Button>
               
               
                </div>
                <div style={{paddingleft:"50px"}}>
                <Button href="/login" variant="btn btn-link">Haz Click Para Iniciar Sesion ! </Button>
                </div>
            </Form>
    
            

        </Form>
        
    
        

    )
};
export default Registro;






