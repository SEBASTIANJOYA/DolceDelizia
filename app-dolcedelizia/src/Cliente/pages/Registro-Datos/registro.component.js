import React from 'react';
import {Form,Alert,Card,Col,Row,Button} from "react-bootstrap";
import './registro.css'
import Menu from '../../components/Menu/menu.component';
function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
};


const Registro = () => {

    
    return (
      
        <div className="Registro"> 
            <Menu></Menu>
            <Form>
                <br/>
            <h3 style={{color: 'black'}}>REGISTRO DE DATOS</h3>

            <br/>
    
                <Form>
                
                    <Row>
                        <Col sm lg={3} >
                            
                            <Form.Control placeholder="Cedula" />
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="Primer Nombre" />
                        </Col>
                        <Col>
                            
                            <Form.Control placeholder="Segundo Nombre" />
                        </Col>
                    </Row>

                    <br />
                
                    <Row>
                        <Col sm>
                            
                            <Form.Control placeholder="Primer Apellido" />
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="Segundo Apellido" />
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control placeholder="Fecha de Nacimiento" />
                        </Col>
                    </Row>
                    <br />
                    
                    <Row>
                        <Col sm>
                            
                            <Form.Control placeholder="Usuario" />
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="Contraseña" />
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control placeholder="Direccion" />
                        </Col>

                        <Col sm>
                        
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



        </div>
        
        
    
        

    )
};
export default Registro;






