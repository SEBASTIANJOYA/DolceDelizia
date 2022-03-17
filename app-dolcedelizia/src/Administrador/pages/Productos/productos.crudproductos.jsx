import React,{Fragment,useState,useEffect} from 'react';
import {Dropdown} from "react-bootstrap";
import Sidebar from '../../components/sidebar/sidebar'
import './productos.scss'
import Axios from 'axios';
const Producto = ()=>{

    const [name,setname]= useState("");   
    const [descripcion,setdescripcion]= useState("");
    const [valorunitario,setvalorunitario]= useState("");
    const [products,setProducts]= useState([]);
    const [categories,setCategories]=useState([]);
    const [category,setCategory]= useState("")
    const [dropdown,setDropdown]= useState("Seleccione Una")
    const [amount,setAmount]=useState("")
        
        useEffect(()=>{

            Axios.get('http://localhost:3001/product/listaProductos',{ 
        
    
            }).then((response)=>{

                
                
                setProducts(response.data)
                
               
               
                
            });

            Axios.get('http://localhost:3001/product/typeProduct',{

            }).then(response=>{

                console.log(response.data)
                setCategories(response.data)

            })
       
    
        },[])

        
        
        const Addproducts=()=>{

            

            var verificar=false;

            products.map(value=>{
                
                if(value.nombre==name){
                   verificar=true
                }
            })
            
           if(verificar==true){

                alert("Producto ya Registrado")
           }
           else{
            Axios.post('http://localhost:3001/product/registroProducto',{

            
                nombre:name, 
                descripcion:descripcion,
                valor_unitario:Number(valorunitario),
                cantidad:Number(amount),
                categoria:category
                
                })
                .then((response)=>{
    
                    
    
                    console.log(response);
    
                    
    
    
                })
           }
           

    


        }

        
        
    const deleteProducto=(Id)=>{

        
        
        Axios.delete(`http://localhost:3001/product/eliminarProduct/${Id}`,{
            
        }).then((response)=>{

            
            window.location.reload();
        })
    }

    return(
            <Fragment>

            
            
            <div className="container productos" style={{fontSize:'20px'}}>
                
                <form >
                    <header >Registro de Productos</header>
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

                   
                   
                    

                        <div className="form-group col-md-4" style={{textAlign: 'Left'}}>

                            <label id="prize-product">Valor Unitario</label>
                            <input type="text" name="prize-input" class="form-control" placeholder="Precio Un." required
                             onChange={(e)=>{
                                setvalorunitario(e.target.value);
                                
                            }} ></input>
                            <br></br>                    
                        </div>

                        <div className="form-group col-md-4" style={{textAlign: 'Left'}}>

                            <label id="amount-productt">Cantidad</label>
                            <input type="number" name="amount-input" class="form-control" placeholder="Cantidad" required
                             onChange={(e)=>{
                                setAmount(e.target.value);
                                
                            }}></input>
                            <br></br>                    
                        </div>
                        
                        <div className="form-group  col-md-4" style={{textAlign: 'Left'}}>

                            <label id="categories-product">Categoria</label>
                            <Dropdown onSelect={(e)=>{

                                    categories.map((value)=>{

                                        

                                        if(e== value.Id_tipo){
                                            setDropdown(value.nombre)
                                        
                                        }
                                    })

                                    setCategory(e)
                            }} >
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:'100%'}}>
                                    {dropdown}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                    categories.map((e)=>{
                                                
                                                return(
                                                <Dropdown.Item eventKey={e.Id_tipo} value={e.nombre}>{e.nombre}</Dropdown.Item>
                                                );
                                            
                                            
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                                            
                        </div>

                    </div>
                    <br></br>
                <button type="submit" onClick={Addproducts}class="btn btn-primary">Registrar</button>

                </form>
                <div className="table-responsive container" style={{paddingTop:'50px',textAlign:'center',maxHeight: "30rem",overflow:'auto'}}>
                    <h4>Productos Registrados</h4>
                    
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>

                    {

                    products.map((value)=>{
                        return(
                        <tr>
                            <td>{value.id_producto}</td>
                            <td>{value.nombre}</td>
                            <td>{value.valor_unitario}</td>
                            <td>{value.descripcion}</td>
                            <td>{value.categoria}</td>
                            <td>{value.cantidad}</td>
                            <td>{value.foto}</td>
                            <td><button className="btn btn-primary" onClick={()=>deleteProducto(value.id_producto)} type="submit" style={{width:'2px'}}>E</button>
                                <button className="btn btn-success" type="submit" style={{width:'2px'}}>A</button>
                            </td>
                                        
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
