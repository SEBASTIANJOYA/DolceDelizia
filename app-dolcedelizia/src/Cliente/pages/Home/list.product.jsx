import React, { Fragment } from 'react'
import Producto from './product.component'

const list = (props) => {
    return ( 
        <Fragment>

            <div className="list">
                {

                    props.list.map(item =>
                        
                    <Producto
                        key={item.id_producto}
                        id={item.id_producto}
                        nombre={item.nombre}
                        precio={item.valor_unitario}
                        
                    
                    />    
                    )
                
                }
                
                


            </div>
        </Fragment>

    );
}
 
export default list;