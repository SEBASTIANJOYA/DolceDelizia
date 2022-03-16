import React, { Fragment} from 'react';
import './itemcarrito.scss'
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Item=(props)=>{

    return(

        <>
      
                        <td>{props.nombre}</td>
                        <td>{props.cantidad}</td>
                        <td>{props.descuento}</td>
                        <td>{props.subtotalitem}</td>
                        <td>
                        <Link><BsIcons.BsFillTrashFill className="me-2" style={{color: 'red', fontSize: '30px'}}/></Link>
                       
                            
                            
                        </td>
        
        </>
    )



}


export default Item;