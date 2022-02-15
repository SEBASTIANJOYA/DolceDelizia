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



var ValidarRutaPedidos=function(){

    var pathname="/administrador/pedidosrealizados";
    var capturar=window.location.pathname;
    
        if((capturar=="/administrador/facturacionfisica")){

          pathname=window.location.pathname;


      }
        
    
    

     return pathname;

}

const Sidebar = () => {
/*
    const[errorMessage,setErrorMessage] = useState("");
    const[product, setProduct] = useState(defaultProduct);
    const[products,setProducts] = useState([]);
    const [onEditId, setEditId] = useState();
  
    const handleOnChange = (event, key) => {
        setErrorMessage('');
        setProduct({
          ...product,
          [key]: event.target.value,
        });
      };
      
      const handleOnClick = event => {
        const isValid = product?.reference && product?.name !== '' && product?.description !== '';
        const errorMessage = !isValid ? 'Los campos marcados con * son obligatorios' : '';
        setErrorMessage(errorMessage);
        if (isValid) {
            setProducts([
                ...products,
                product

            ]);
            setProducts(defaultProduct);
        }
      };
    
      const handleOnClickCancel = () => {
        setEditId(false);
        //fetchProducts();
      };*/

        return (
       
    
      <Fragment>
        <div className="sidebar collapse flex content d-sm-none d-md-block" >

          
          
          <ul className="nav">
              <li ><NavLink to="/administrador/empleados"  className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons.IoIosAlbums clasName="me-6"/>  Empleados</NavLink></li>
              <li ><NavLink to="/administrador/productos"  className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons2.BsFillBagFill clasName="me-6"/>  Productos</NavLink></li>
              <li><NavLink to="/administrador/reporteventas"  className="text-dark rounded d-inline-block py-2 px-3"style={{width:'270px'}} ><FaIcons3.HiOutlineDocumentReport clasName="me-6"/>  Reporte de Ventas</NavLink></li>
              <li><NavLink to={ValidarRutaPedidos()}className="text-dark rounded d-inline-block py-2 px-3" ><FaIcons4.MdBorderColor clasName="me-6"/>  Pedidos</NavLink></li>


          </ul>


        </div>


      </Fragment>
    )
};



export default  Sidebar;