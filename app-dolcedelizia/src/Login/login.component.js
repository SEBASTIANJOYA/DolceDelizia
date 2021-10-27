import React from 'react';
import {Form,Group,Label,Text,Button,Control,Alert,Card} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import './login.css';   

    
    const Login = () => {

    return (

        <div className="Login">
        <Form style={{widthmax: '1500px', height: '100%'}}className="login-form">
            
                <h1 style={{color: 'black'}}>INICIO DE SESION</h1>
                <br/>
           

            <Form.Group >
                <Form.Label style={{color: 'black', fontSize:'15px'}}><b>USUARIO <br/></b> </Form.Label>
                <br/>
                <Form.Control style={{color: 'black',paddingtop: '10px' }} type="email" placeholder="Enter User" />
                
                <Form.Group className="mb-6" controlId="formBasicPassword">
                    <Form.Label required style={{color: 'black', fontSize:'15px'}}><b><br/>CONTRASEÑA<br/> </b> </Form.Label>
                    <br/>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            
                
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">Log in</Button>
            <div className="text-center pt-3">
            <Button style={{padddingtop:'300px'}}href="/registrodatos" variant="btn btn-link">Haz Click Para Registrarte ! </Button>

            </div>
           
 

        </Form>
        </div>

    )
};


export default Login;