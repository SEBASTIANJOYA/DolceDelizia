
import React ,{ Fragment} from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar.pedidos'
const Facturacion = () =>{


    return (
        <Fragment>

            <Sidebar></Sidebar>



            <div className="container">
                <Navbar></Navbar>
                <a>Facturacion Fisica</a>
               
            </div>


        
        </Fragment>



    );
}

export default Facturacion