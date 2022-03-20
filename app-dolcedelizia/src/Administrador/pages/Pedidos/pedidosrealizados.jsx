import React,{Fragment,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import './pedidosrealizados.scss'
import  Axios  from 'axios';
import { Button,Modal } from 'react-bootstrap';
const PedidosRealizados = ()=>{

    const [order,setOrder]=useState([]);
    const [show, setShow] = useState(false);
    const [description,setDescription] = useState([]);
    const handleClose = () => setShow(false);
    
    const handleShow = (id_factura) => {
    
        DescripcionPedido(id_factura)
        setShow(true);

   

  }
      
   

    useEffect(()=>{

        Axios.get('http://localhost:3001/order/listaPedidos',
        {


        }).then((response)=>{

            setOrder(response.data.result)
            console.log(response.data.result[0])

        })
    },[])

    const DescripcionPedido=(id_factura)=>{

        Axios.post("http://localhost:3001/order/descripcionPedido",{
            id_factura:id_factura
        }).then((response)=>{
            setDescription(response.data.result);
            console.log(response.data.result)
        })


    }

    return(
            <Fragment>

            
            
            <div className="container pedidos" >
                

                <header style={{marginTop:'50px',marginBottom:'50px'}}>REGISTRO DE PEDIDOS</header>
                
                <table className="table">


                    <thead>

                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Enviado</th>



                        </tr>
                    </thead>

                    <tbody>
                        

                            {

                                order.map(e=>
                                    {

                                        return(
                                            <tr>

                                                <td>{e.id_pedido}</td>
                                                <td>{e.primer_nombre+" "+e.segundo_nombre
                                                    +" "+e.primer_apellido+" "+e.segundo_apellido}</td>
                                                <td>{e.direccion}</td>
                                                <td>
                                                    <Button variant="primary" onClick={()=>handleShow(e.id_factura)}>
                                                        D
                                                    </Button>

                                                    <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                            <Modal.Title>Detalle del Pedido</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body style={{alignText: 'center',marginLeft:'60px',marginBottom:'40px'}}>
                                                                <table style={{minWidth:'200px'}}>
                                                                    <thead>

                                                                        <tr>

                                                                            <th>Producto</th>
                                                                            <th>Cantidad</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>

                                                                        
                                                                            {

                                                                                description.map(e=>{
                                                                                    return(
                                                                                        <tr>

                                                                                        <td className="col-lg-10">{e.nombre}<br></br></td>
                                                                                        <td className="col-lg-2">{e.cantidad}</td>
                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            }

                                                                            
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </Modal.Body>
                                                            <Modal.Footer >
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                            
                                                            </Modal.Footer>
                                                    </Modal>
                                                </td>
                                                <td>{(e.estado=="0")?
                                        "NO":"SI"}</td>

                                            </tr>

                                    
                                        )


                                    }
                    
                                )
                            }

                        



                    </tbody>


                </table>

            </div>

            </Fragment>

            

    );

}

export default PedidosRealizados;
