import React from 'react';

import {Tabs,Tab,Sonnet,Card,Form,Row,Col,Button} from "react-bootstrap";

const Productos = () => {
    return (

        <Card>
        <Form variant="card">
        <div style={{ display: 'block', width: 770, padding: 30 }}>
        <h4>React-Bootstrap Tab Component</h4>
        <Tabs defaultActiveKey="second">
          <Tab eventKey="first" title="Productos">
            <Form>
               <Row>
                    <Col>
                       <Form.Label style={{color: 'black', fontSize:'15px',}}><b>Codigo :</b> </Form.Label>
                       <Form.Control placeholder="Codigo" />
                    </Col>
                       
                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Nombre :</b> </Form.Label>
                        <Form.Control placeholder="Nombre" />
                    </Col>  

                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Valor Unitario :</b> </Form.Label>
                        <Form.Control placeholder="Valor Unitario" />
                   </Col>
               </Row>
                    
               <Row>
                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Descripcion :</b> </Form.Label>
                        <Form.Control placeholder="Descripcion" />
                    </Col>  

                    <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Categoria :</b> </Form.Label>
                        <Form.Control placeholder="Categoria" />
                   </Col>

                   <Col>
                        <Form.Label style={{color: 'black', fontSize:'15px'}}><b>Descuento :</b> </Form.Label>
                        <Form.Control placeholder="Descuento" />
                   </Col>
               </Row>
             
               
               
               <br />
               <Button variant="outline-info form"><b> C A N C E L A R  </b></Button>
               <Button variant="outline-info form "><b> G U A R D A R </b></Button>
           </Form>
   
          </Tab>
          <Tab eventKey="second" title="Empleados">
            Hii, I am 2nd tab content
          </Tab>
          <Tab eventKey="third" title="Reporte de Ventas">
            Hii, I am 3rd tab content
          </Tab>
          {"  "}
          <Tab eventKey="four" title="Pedidos">
            Hii, I am 3rd tab content
          </Tab>
        </Tabs>
      </div>
      </Form>
      </Card>
    )
};



export default  Productos;