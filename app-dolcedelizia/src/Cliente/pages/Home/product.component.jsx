import React, { Fragment }from 'react';
import './product.component.scss'
const producto = (props) => {
    return (  
        <Fragment>

        <div className="item">
                <div className="image"><img src={props.img} width="100%" /></div>
                <div className="title">{props.nombre}</div>
                <div className="prize">${props.precio}</div>
                <button type="submit"className="btn btn-primary " >ADD</button>
                
            </div>   

            
        </Fragment>

    );
}
 
export default producto;