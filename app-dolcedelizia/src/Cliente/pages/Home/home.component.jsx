import React, { Fragment,useState } from 'react';
import {Form,Group,Label,Text,Button,Control,Alert,Card} from "react-bootstrap";
import Lista from './list.product'
import Menu from '../../components/Menu/menu.component';

const HomeDolceDelizia = () => {
    const [items,setItems]= useState([
    {id:'1',nombre: 'Postre de Fresa',precio: 600,img: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/01/paydefresagelatina.png'},
    {id:'2',nombre: 'Postre de Chocolate',precio: 800,img: 'https://www.hogarmania.com/archivos/201903/postres-chocolate-668x400x80xX.jpg'},
    {id:'3',nombre: 'Postre de Maracuya',precio:500,img: 'https://images.aws.nestle.recipes/resized/7ca2437097d401c51d4a759f4ad56b11_maracuya_1200_600.jpeg'},
    {id:'4',nombre: 'Malteada de Fresa',precio:250,img:'https://losmilagrosdedalila.com/wp-content/uploads/2017/04/MALTEADA-FRESA-9658.jpg'},
    {id:'5',nombre: 'Malteada de Chocolate',precio: 180, img:'https://www.vitamix.com/media/recipe/rcpChocolateShake/images/chocolatemilkshakemainjpg.jpg'}
    ]);
    return (
    <Fragment>

       

        
        <div>
        <Menu></Menu>
        <Lista  list={items}/>
        </div>    
        


        
        
    
        

    </Fragment>
          
    
    )
};

export default  HomeDolceDelizia;