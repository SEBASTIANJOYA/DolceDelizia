import React,{Fragment,useState} from 'react';
import {Dropdown} from 'react-bootstrap'
import Sidebar from '../../components/sidebar/sidebar'
import './empleados.scss';
const Empleado = ()=>{

    return(
            <Fragment>

            <Sidebar></Sidebar>

            <div className="container empleados">

                <form >

                    <header style={{paddingBottom:'20px'}}>Registro de Empleados</header>
                     
                     <div className="row">

                         <div className="form-group col-md-4">
                         <br></br>
                             <label className="label-name1">Primer Nombre</label>
                             <input className="form-control" id="input-name1"placeholder="Primer Nombre" type="text"></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-name2">Segundo Nombre</label>
                             <input className="form-control" id="input-name2"placeholder="segundo Nombre" type="text"></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-lastname1">Primer Apellido</label>
                             <input className="form-control" id="input-lastname1"placeholder="Primer Apellido" type="text"></input>

                         </div>


                     </div>
                        
                     <div className="row">

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-lastname2">Segundo Apellido</label>
                             <input className="form-control" id="input-lastname2"placeholder="Segundo Apellido" type="text"></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-age">Edad</label>
                             <input className="form-control" id="input-age"placeholder="Edad" type="number"></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-direction">Direccion</label>
                             <input className="form-control" id="input-direction"placeholder="Direccion" type="text"></input>

                         </div>
                     </div>

                     <div className="row">

                         <div className="form-group col-md-4">

                             <br></br>
                             <label className="label-user">Usuario</label>
                             <input className="form-control" id="input-user"placeholder="Usuario" type="text"></input>


                         </div>

                         <div className="form-group col-md-4">
                                <br></br>
                             <label className="label-password">Contraseña</label>
                             <input className="form-control" id="input-password"placeholder="Contraseña" type="text"></input>


                         </div>

                        <div className="form-group col-md-4">

                            <br></br>
                            <label className="label-type">Rol</label>
                            <Dropdown >
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:'100%'}}>
                                Seleccione Una
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>


                     </div>
                     
                    <button type="submit"className="btn btn-primary " style={{marginTop:'50px'}}>REGISTRAR</button>

                </form>

                <div style={{paddingTop:'50px'}}>

                    <header style={{paddingBottom:'20px'}}>EMPLEADOS REGISTRADOS</header>

                    <table className="table">

                        <thead>
                            
                            <tr>
                                <th scope="col">Codigo</th>
                                <th scope="col">Primer Nombre</th>
                                <th scope="col">Segundo Nombre</th>
                                <th scope="col">Primer Apellido</th>
                                <th scope="col">Segundo Apellido</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Acciones</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        


                        </tbody>

                    </table>

                </div>



            </div>
            </Fragment>

            

    );

}

export default Empleado;
