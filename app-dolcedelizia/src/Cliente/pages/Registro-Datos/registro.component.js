import React,{useState} from 'react';
import {Form,Col,Row,Button} from "react-bootstrap";
import './registro.css'
import Menu from '../../components/Menu/menu.component';
import Axios from 'axios'
function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
};



const Registro = () => {

    const [user,setUser]= useState("");   
    const [password,setPassword]= useState("");
    const [cedula,setCedula]= useState("");   
    const [surname,setSurname]= useState("");   
    const [second_surname,setSecond_surname]= useState("");   
    const [first_name,setFirst_name]= useState("");   
    const [second_name,setSecond_name]= useState("");   
    const [date_birth,setDate_birth]= useState("");   
    const [direction,setDirection]= useState("");   
    const [telephone_number,setTelephone_Number]= useState("");      
    
    const register=()=>{
        
        
        Axios.post('http://localhost:3001/registerClient',{ 
    
            user:user,
            password:password,
            cedula: cedula,
            surname:surname,
            second_surname:second_surname,
            first_name:first_name,
            second_name:second_name,
            date_birth:"sfsd",
            direction:direction,
            telephone_number:telephone_number,
            type_user:1,

        }).then((response)=>{
            console.log(response);
        });
    
    }
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
                            
                            <Form.Control placeholder="Cedula"  onChange={(e)=>
                            {
                                setCedula(e.target.value);
                            }
                            } />
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="Primer Nombre" onChange={(e)=>
                            {
                                setFirst_name(e.target.value);
                            }
                            } />
                        </Col>
                        <Col>
                            
                            <Form.Control placeholder="Segundo Nombre" onChange={(e)=>
                            {
                                setSecond_name(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>

                    <br />
                
                    <Row>
                        <Col sm>
                            
                            <Form.Control placeholder="Primer Apellido" onChange={(e)=>
                            {
                                setSurname(e.target.value);
                            }
                            }/>
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="Segundo Apellido" onChange={(e)=>
                            {
                                setSecond_surname(e.target.value);
                            }
                            }/>
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control placeholder="Fecha de Nacimiento" onChange={(e)=>
                            {
                                setDate_birth(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>
                    <br />
                    
                    <Row>
                        <Col sm>
                            
                            <Form.Control placeholder="user" onChange={(e)=>
                            {
                                setUser(e.target.value);
                            }
                            }/>
                        </Col>
                        <Col sm>
                            
                            <Form.Control placeholder="password" onChange={(e)=>
                            {
                                setPassword(e.target.value);
                            }
                            }/>
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control placeholder="Direccion" onChange={(e)=>
                            {
                                setDirection(e.target.value);
                            }
                            }/>
                        </Col>

                        <Col sm>
                        
                            <Form.Control placeholder="Telefono" onChange={(e)=>
                            {
                                setTelephone_Number(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>
                    
                    <br />
                    <div style={{paddingleft:"50px"}}>
                    <Button variant="outline-info form"><b> Cancelar  </b></Button>
                    <Button variant="outline-info form " onClick={register}><b> Guardar </b></Button>
                
                
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






