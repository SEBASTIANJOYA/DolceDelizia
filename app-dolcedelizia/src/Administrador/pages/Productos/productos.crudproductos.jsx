import React,{Fragment,useState} from 'react';
import {Dropdown} from "react-bootstrap";
import Sidebar from '../../components/sidebar/sidebar'
import './productos.scss'
const Producto = ()=>{

    return(
            <Fragment>

            <Sidebar></Sidebar>
            
            <div className="container productos">
                
                <form>
                    <header >REGISTRAR PRODUCTOS</header>
                    <br></br>
                    <div className="row">

                        <div className="form-group col-md-6" style={{textAlign: 'Left'}}>

                            <label id="name-product">Nombre</label>
                            <input type="text" name="name-input" class="form-control" placeholder="Nombre" required></input>
                            <br></br>                    
                        </div>
                       
                        <div className="form-group col-md-6 " style={{textAlign: 'Left'}}>

                            <label id="desc-product">Descripcion</label>
                            <input type="text" name="desc-input" class="form-control" placeholder="Descripcion" required></input>
                                                
                            <br></br>  
                                                
                        </div>

                   
                   
                    

                        <div className="form-group col-md-6" style={{textAlign: 'Left'}}>

                            <label id="prize-product">Valor Unitario</label>
                            <input type="text" name="prize-input" class="form-control" placeholder="Precio Un." required></input>
                            <br></br>                    
                        </div>
                        
                        <div className="form-group  col-sm-6" style={{textAlign: 'Left'}}>

                            <label id="category-product">Categoria</label>
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
                    <br></br>
                <button type="submit" class="btn btn-primary">Registrar</button>

                </form>
                <div style={{paddingTop:'50px'}}>
                    <h4>PRODUCTOS REGISTRADOS</h4>
                    
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Foto</th>
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

export default Producto;
