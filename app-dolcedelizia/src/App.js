import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Routes from './Routes/routes.component'
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './Menu/menu.component'
import Footer from "./Menu/footer.component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Router>

    <div className="App">
      <Menu></Menu>
      
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
