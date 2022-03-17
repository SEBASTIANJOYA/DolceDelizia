import React, { Fragment,useState} from 'react'
import Item from'./itemcarrito.component'
import Axios from 'axios'


const AddOrder=()=>{

  Axios.post()


}

const Carrito=()=>{
   
    var total=0
    var items=JSON.parse(localStorage.getItem('items'));
    

    const totalCarrito=(cantidad,precio,descuento)=>{

        
      var subtotal=0 
        var cantidad_descuento=0 

        cantidad_descuento=(cantidad*precio)*descuento
        subtotal+=(cantidad*precio)-cantidad_descuento
        
        total=total+subtotal;

        
        
        return subtotal;
    }
    
    return(

        <>

    
        
        

        {
          (items==null) ?

          <h1 style={{paddingTop:'100px',paddingBottom:'100px'}}>CARRITO VACIO</h1>
          :
          <>
          <div clasName=" table-responsive container"style={{paddingTop:'50px',paddingBottom:'100px',alignItems:'center'}}>

            <table className="table  table-striped table-borderless" style={{paddingLeft:'500px'}}>

                  <thead >
                            
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Descuento</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">...</th>
                            </tr>

                  </thead>

                  <tbody>
                        {
                        items.map(e=>

                            <tr>
                              <Item  nombre={e.name} descuento={e.discount} cantidad={e.amount} subtotalitem={totalCarrito(e.amount,e.prize,e.discount)}></Item>

                            </tr>
                            
                          
                        )
                              
                        }    
                  </tbody>

            </table>

          </div>

          
          

<div className="d-flex align-items-end  flex-column bd-highlight mb-3"  style={{height: "150px"}}>
  <div>

  <div className="p-2 align-items-baseline" style={{paddingRight:'20px'}}><h4>Total: $ {total}</h4></div>
  
  <div className=" p-2"><button className="btn btn-primary">Realizar Pedido</button></div>

  </div>
  
</div>
          

          
                
          </>  
            
        }
        
        
        
        </>
    );



}


export default Carrito;