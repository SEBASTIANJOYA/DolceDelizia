import React,{Fragment,useState} from 'react';
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/io';
import * as FaIcons2 from 'react-icons/bs';
import * as FaIcons3 from 'react-icons/hi';
import * as FaIcons4 from 'react-icons/md';
import './sidebar.scss'
const defaultProduct = {
    reference: '',
    name: '',
    description: '',
};

const Logout=function(){

  localStorage.clear();

  

  window.location.href="./homedolcedelizia"
}

var ValidarRutaPedidos=function(){

    var pathname="/administrador/pedidosrealizados";
    var capturar=window.location.pathname;
    
        if((capturar=="/administrador/facturacionfisica")){

          pathname=window.location.pathname;


      }
        
    
    

     return pathname;

}

const Sidebar = () => {


        return (
       
    
      <Fragment>
        <div className="sidebar collapse flex content d-sm-none d-md-block" >

          
          
          <ul className="nav">
              <li ><NavLink to="/administrador/empleados"  className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons.IoIosAlbums className="me-6"/>  Empleados</NavLink></li>
              <li ><NavLink to="/administrador/productos"  className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons2.BsFillBagFill className="me-6"/>  Productos</NavLink></li>
              <li><NavLink to="/administrador/reporteventas"  className="text-dark rounded d-inline-block py-2 px-3"style={{width:'270px'}} ><FaIcons3.HiOutlineDocumentReport className="me-6"/>  Reporte de Ventas</NavLink></li>
              <li><NavLink to={ValidarRutaPedidos()}className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons4.MdBorderColor className="me-6"/>  Pedidos</NavLink></li>
              <li ><NavLink to="/homedolcedelizia"  className="text-dark rounded d-inline-block py-2 px-3" 
              onClick={Logout}
              
              
              >Cerrar Sesion</NavLink></li>

          </ul>


        </div>


      </Fragment>
    )
};



export default  Sidebar;