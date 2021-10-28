import React, { Fragment }from 'react';
import { Card } from 'react-bootstrap';
import './product.component.scss'
const producto = (props) => {
    return (  
        <Fragment>

        <div className="item">
                <div className="image"><img src={props.img} width="100%" /></div>
                <div className="title">{props.nombre}</div>
                <div className="prize">${props.precio}</div>
                
            </div>   

            
        </Fragment>

    );
}
 
export default producto;