import React from 'react';

import './App.scss';
import './Cliente/pages/Login/login.css';
import Routes from './Routes/routes.component'
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './Cliente/components/Menu/menu.component'
import Footer from "./Cliente/components/Menu/footer.component";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <Router>

    <div className="App"$>
      
    
      <header className="App-header">
      <Routes/>
      </header>

      <section className="App-main">
      </section>

      
      <Footer></Footer>
      
    </div>
  </Router>
  );
}

export default App;
