import React,{Fragment,useState} from 'react';

import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar.pedidos'

import './pedidosrealizados.scss'
const PedidosRealizados = ()=>{

    return(
            <Fragment>

            <Sidebar></Sidebar>
            
            <div className="container pedidos" >
                <Navbar></Navbar>

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


                </table>

            </div>

            </Fragment>

            

    );

}

export default PedidosRealizados;
