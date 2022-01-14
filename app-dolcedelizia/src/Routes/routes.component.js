import React from 'react' ;

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Cliente/pages/Login/login.component';
import Registro from '../Cliente/pages/Registro-Datos/registro.component';
import HomeDolceDelizia from '../Cliente/pages/Home/home.component.jsx';
import ReporteVentas from'../Administrador/pages/ReporteVentas/reporteventas';
import Producto from '../Administrador/pages/Productos/productos.crudproductos';
import Empleado from '../Administrador/pages/Empleados/empleados.crudempleados';
import PedidosRealizados from '../Administrador/pages/Pedidos/pedidosrealizados';
import Menu from '../Cliente/components/Menu/menu.component';
import FacturaFisica from '../Administrador/pages/Pedidos/facturacionfisica'

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

                <Route exact path="/administrador/productos">
                    <Producto></Producto>
                </Route>

                <Route exact path="/administrador/empleados">
                    <Empleado></Empleado>
                </Route>
                
                <Route exact path="/administrador/reporteventas">
                    <ReporteVentas></ReporteVentas>
                </Route>

                <Route exact path="/administrador/pedidosrealizados">
                    <PedidosRealizados></PedidosRealizados>
                </Route>

                <Route exact path="/administrador/facturacionfisica">
                    <FacturaFisica></FacturaFisica>
                </Route>   

            </Switch>
   

    )
    
};

export default Routes;
