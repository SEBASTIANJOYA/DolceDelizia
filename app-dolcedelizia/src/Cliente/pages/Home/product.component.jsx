import React, { Fragment,useContext,useState}from 'react';
import './product.component.scss'
import {DataContext} from "../../../controllers/context.js"
import reactDom from 'react-dom';
import logocarrito from '../../components/Menu/carrito.png'


const Producto = (props) => {
    const [item,setItem]= useState([])
    const [amount,setAmount]=useState(0)

    const value= useContext(DataContext);
    const carrito=value.addCarrito;

    

    var data=JSON.parse(localStorage.getItem('items'))
    
    
    const addCar=(id,nombre,precio,descuento)=>{

        
       
        
        if(document.getElementsByClassName(id)[0].value==""){

            document.getElementById(id).innerHTML= `
        
            <span className="text-danger text-small  ">Ingrese una cantidad valida</span>
            `
            
        }
        else{
        
          
       
        document.getElementsByClassName(id)[0].value="" ;
        var objeto=[{
            id:id,
            name:nombre,
            prize:precio,
            amount:amount,
            discount:descuento
        }]

        
        if(localStorage.getItem('items')==null){
            
            
            localStorage.setItem("items",JSON.stringify(objeto))
            

        }
        else{
            
            var verificar=false;
            for(let i of data){
                
                
                if(i.name==objeto[0].name){
                    i.amount=i.amount+amount;
                    verificar=true;
                }
            }

           
            if(verificar==false){

               

                data.push({
                    id:id,
                    name:nombre,
                    prize:precio,
                    amount:amount,
                    discount:descuento
                })

               
                
            }
            
            carrito(data);
            localStorage.setItem("items",JSON.stringify(data))
            

                    

        }
        
    }
    }

    return (  
        <Fragment>

        <div className="item">
                <div className="image"><img src="https://losmilagrosdedalila.com/wp-content/uploads/2017/04/MALTEADA-FRESA-9658.jpg" width="100%" /></div>
                <div className="title">{props.nombre}</div>
                <div className="prize">${props.precio}</div>
                <input className={props.id}type="number"placeholder="Cantidad"
                onChange={e=>{
                    setAmount(parseInt(e.target.value))
                    document.getElementById(props.id).innerHTML= `
                    <span><span>`
                    
                }}required></input>

                <div id={props.id}> </div>
                <button  type="button"onClick={()=>addCar(props.id,props.nombre,props.precio,props.descuento)}className="btn btn-primary " >ADD</button>
                
            </div>   

            
        </Fragment>

    );
}
 
export default Producto;