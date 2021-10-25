import React from 'react';
import {Form,Group,Label,Text,Button,Control,Alert,Card} from "react-bootstrap";

const Login = () => {
    return (

    <Card style={{ width: '25rem'}}>
        <Form variant="card">
            <Alert variant="alert alert-info">
                <Alert.Heading><b>I N I C I O - D E - S E S I Ó N</b></Alert.Heading>
                <h6>
                    <b>Bienvenido acá podrá acceder los datos correspondientes para iniciar sesión en el sistema.</b>
                </h6>
                <hr />
                <p style={{fontSize:'14px'}} className="mb-0">
                    <b>Registro de la información del usuario.</b>
                </p>
            </Alert>

            <Form.Group className="sm-8 mb-6" controlId="formBasicEmail">
                <Form.Label style={{color: 'black', fontSize:'15px'}}><b>USUARIO :</b> </Form.Label>
                <Form.Control type="email" placeholder="Usuario" />
                
                <Form.Group className="mb-6" controlId="formBasicPassword">
                    <Form.Label style={{color: 'black', fontSize:'15px'}}><b>CONTRASEÑA :</b> </Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                    
                
            <Button variant="outline-info"><b> I N I C I A R </b></Button>
            <Button href="/registrodatos" variant="btn btn-link">Haz Click Para Registrarte ! </Button>
            </Form.Group>
 

        </Form>
    </Card>

    )
};


export default Login;