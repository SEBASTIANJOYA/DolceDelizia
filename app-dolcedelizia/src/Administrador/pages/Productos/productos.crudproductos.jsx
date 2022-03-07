import React,{Fragment,useState,useEffect} from 'react';
import {Dropdown} from "react-bootstrap";
import Sidebar from '../../components/sidebar/sidebar'
import './productos.scss'
const Producto = ()=>{

    const [name,setname]= useState("");   
    const [descripcion,setdescripcion]= useState("");
    const [valorunitario,setvalorunitario]= useState("");
    const [products,setProducts]= useState([]);

    const addProducts=()=>{

        useEffect(()=>{

            Axios.get('http://localhost:3001/product/listaProductos',{ 
        
    
            }).then((response)=>{
                
               setProducts(response.data)
               
                
            });
       
    
        },[])
    

        Axios.post('http://localhost:3001/product/registroProducto',{
            nombre:name,
            descripcion:descripcion,
            valor:valorunitario
        })
        .then((response)=>{

            console.log(response);

            window.location.href="./administrador/productos"


        })

    }


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
                            <input type="text" name="name-input" class="form-control" placeholder="Nombre" required  onChange={(e)=>{
                                    setname(e.target.value);
                                    
                                }}></input>
                            <br></br>                    
                        </div>
                       
                        <div className="form-group col-md-6 " style={{textAlign: 'Left'}}>

                            <label id="desc-product">Descripcion</label>
                            <input type="text" name="desc-input" class="form-control" placeholder="Descripcion" required  onChange={(e)=>{
                                    setdescripcion(e.target.value);
                                    
                                }}></input>
                                                
                            <br></br>  
                                                
                        </div>

                   
                   
                    

                        <div className="form-group col-md-6" style={{textAlign: 'Left'}}>

                            <label id="prize-product">Valor Unitario</label>
                            <input type="text" name="prize-input" class="form-control" placeholder="Precio Un." required
                             onChange={(e)=>{
                                setvalorunitario(e.target.value);
                                
                            }}></input>
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
                <div style={{paddingTop:'50px',textAlign:'center'}}>
                    <h4>PRODUCTOS REGISTRADOS</h4>
                    
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    {

products.map((value)=>{
    return(
    <tr>
        <td>{value.nombre}</td>
        <td>{value.valor_unitario}</td>
        <td>{value.descripcion}</td>
    
    </tr>)
    }
)}

                        
                    </tbody>
                    </table>
                    
                </div>

            </div>


           

            

            </Fragment>

            

    );

}

export default Producto;
