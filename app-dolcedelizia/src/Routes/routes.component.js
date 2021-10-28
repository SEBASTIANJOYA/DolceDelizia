import React from 'react' ;

import {BrowserRouter, Switch, Route } from 'react-router-dom';



import Login from '../Login/login.component';
import Registro from '../Registro-Datos/registro.component';
import HomeDolceDelizia from '../Home/home.component.jsx';

import Administrador from '../Administrador/administrador.component';
//Creo un componente...
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

                <Route exact path="/registrodatos/exitoso">
                    <alertGuardado></alertGuardado>
                </Route>

                <Route exact path="/administrador/productos">
                    <Administrador></Administrador>
                </Route>
            </Switch>
   

    )
    
};

export default Routes;
