import React, { Fragment } from 'react'
import Producto from './product.component'

const list = (props) => {
    return ( 
        <Fragment>

            <div className="list">
                {

                    props.list.map(item =>
                        
                    <Producto
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        img={item.img}
                    
                    />    
                    )
                
                }
                
                


            </div>
        </Fragment>

    );
}
 
export default list;