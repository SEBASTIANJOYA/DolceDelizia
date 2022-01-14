import React,{useState,Fragment} from 'react';
import {Form,Group,Label,Text,Button,Control,Alert,Card} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import './login.css'; 
import Menu from '../../components/Menu/menu.component';

    

    
    const Login = () => {
        const {register,handleSubmit, formState: { errors }} = useForm();
        
        const onsubmit = (data,e) =>{
            console.log(data);
            e.target.reset();
        }

    return (

        <Fragment>
        
        <div className="Login">
        <Menu></Menu>
        <Form onSubmit={handleSubmit(onsubmit)}
              style={{ widthmax: '1500px', 
                 height: '100%'}}
                 
                 className="login-form">
            
                <h1 style={{color: 'black'}}>INICIO DE SESION</h1>
                <br/>
           

            <Form.Group >
                <Form.Label 
                    style={{color: 'black', fontSize:'15px'}}>
                        <b>USUARIO <br/></b> 
                </Form.Label>
                <br/>
                <Form.Control 
                    name="usuario"
                    style={{color: 'black',paddingtop: '10px' }} 
                    type="text" 
                    placeholder="Enter User" 

                    {...register("usuario", { 
                        required:{
                            value: true,
                            message: 'Campo Obligatorio' 
                        }
                    })}   
                    />
                    
                    <span 
                    style={{fontSize:'15px'}}
                    className="text-danger text-small d-block ">
                        {errors.usuario &&  errors.usuario.message}
                    </span>
                
                <Form.Group className="mt-6" controlId="formBasicPassword">
                    <Form.Label required
                        style={{color: 'black', fontSize:'15px'}}>
                        <b><br/>CONTRASEÑA<br/> </b> 
                    
                    </Form.Label>
                    <br/>
                    <Form.Control
                        name="contraseña"
                        {...register("contraseña", { 
                            required:{
                                value: true,
                                message: 'Campo Obligatorio' 
                            }
                        })}
                        type="password" 
                        placeholder="Password" />
                        
                        
                    <span 
                     style={{fontSize:'15px'}}
                    className="text-danger text-small d-block ">
                        {errors.contraseña &&  errors.contraseña.message}
                    </span>
                </Form.Group>
            
                
            </Form.Group>
            <br/>
            <Button className="btnlogin"type="submit" >Log in</Button>
            <div className="text-center pt-3">
            <Button style={{padddingtop:'300px'}}href="/registrodatos" variant="btn btn-link">Haz Click Para Registrarte ! </Button>

            </div>
           
 

        </Form>
        </div>
    
        </Fragment>
    )
};


export default Login;