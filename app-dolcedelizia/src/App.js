import React from 'react';

import './App.scss';
import './Cliente/pages/Login/login.css';
import PublicRoutes from './Routes/routes.public'
import PrivateRoutes from './Routes/routes.private'
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from "./Cliente/components/footer/footer.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import isAuth from './controllers/logout'


function App() {
  return (
  <Router>

    <div className="App"$>
      
    
      <header className="App-header">
        {
           (isAuth()==true||!localStorage.getItem("type_user") || localStorage.getItem("type_user")=="1")?

           <PublicRoutes/>
           :
           <PrivateRoutes/>


        }
      
      </header>

      <section className="App-main">
      </section>

      
      <Footer></Footer>
      
    </div>
  </Router>
  );
}

export default App;
