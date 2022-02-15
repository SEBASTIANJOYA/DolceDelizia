import React, { Fragment } from 'react';
import MenuLogout from './menu.logout';
import MenuLogged from './menu.logued';
const Home = () => {

  const localStorage=window.localStorage.length;
    return (
        <Fragment>
          {
          (localStorage==0)?
          <MenuLogout></MenuLogout>
          :<MenuLogged></MenuLogged>

          
          }
          
      </Fragment>
       
    )
};


export default Home;