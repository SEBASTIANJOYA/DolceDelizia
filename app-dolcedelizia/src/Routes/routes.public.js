import React from 'react' ;

import {Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Cliente/pages/Login/login.component';
import Registro from '../Cliente/pages/Registro-Datos/registro.component';
import HomeDolceDelizia from '../Cliente/pages/Home/home.component.jsx';
import Carrito from '../Cliente/pages/Carrito/carrito.component'

const Routes = () => {
    return(
            <Switch>
                <Route exact path="/">
                    
                    <HomeDolceDelizia></HomeDolceDelizia>
                </Route>

                <Route exact path="/homedolcedelizia">
                    
                    <HomeDolceDelizia></HomeDolceDelizia>
                </Route>

                <Route exact path="/login">
                     
                    <Login></Login>
                </Route>

                <Route exact path="/registrodatos">
                    
                    <Registro></Registro>
                </Route>

                <Route exact path="/carrito">
                    <Carrito></Carrito>
                    
                </Route>

                <Redirect path="/**" to="/"/> 

            </Switch>
   

    )
    
};

export default Routes;
