import React, { Fragment} from 'react';

import {NavLink} from 'react-router-dom';
import './navbar.scss';



const navbar_pedidos =() =>{

    return (
        <Fragment>
            
            
                <ul className="nav" >

                    <li className="nav-item col-lg-6">
                        <NavLink to="/administrador/pedidosrealizados"  >Domicilios</NavLink>
                    </li>

                    <li className="nav-item col-lg-6">

                        < NavLink to="/administrador/facturacionfisica" >Facturación Fisica</NavLink>

                    </li>


                </ul>
            
            
        </Fragment>

    );
}

export default navbar_pedidos;