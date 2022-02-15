import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3 dark-grey-text">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <b>Company name</b>
              </h6>
              <p style={{color:'black'}}>
                Ven y Disfruta en DolceDelizia!
                Todas las opciones las encuentras aquí !
                Te esperamos para que disfrutes de los mejores productos y sabores o realiza tu pedido  
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3 dark-grey-text">
              <h6 className="text-uppercase mb-4 font-weight-bold dark-grey-text"><b>Products</b></h6>
              <p>
                <a  style={{color:'black'}} href="#!">MDBootstrap</a>
              </p>
              <p>
                <a style={{color:'black'}} href="#!">MDWordPress</a>
              </p>
              <p>
                <a style={{color:'black'}} href="#!">BrandFlow</a>
              </p>
              <p>
                <a style={{color:'black'}} href="#!">Bootstrap Angular</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3 dark-grey-text">
              <h6 className="text-uppercase mb-4 font-weight-bold dark-grey-text">
                <b>links dolcedelizia</b>
              </h6>
              <p>
                <a style={{color:'black'}} href="https://www.facebook.com/DolceDelicia21">Facebook DolceDelizia</a>
              </p>
              <p>
                <a style={{color:'black'}} href="https://www.instagram.com/dolce_delizia21/?hl=es">Instagram DolceDelizia</a>
              </p>
              <p>
                <a style={{color:'black'}} href="https://twitter.com/?lang=es">Twiter DolceDelizia</a>
              </p>
              <p>
                <a style={{color:'black'}} href="#!">Help</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3 dark-grey-text">
              <h6 className="text-uppercase mb-4 font-weight-bold"><b>Contact</b></h6>
              <p>
                <i style={{color:'black'}} className="fa fa-home mr-3" /> Sogamoso - Boyaca - Colombia
              </p>
              <p>
                <i style={{color:'black'}} className="fa fa-envelope mr-3" /> dolcedelizia@gmail.com
              </p>
              <p>
                <i style={{color:'black'}} className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i style={{color:'black'}} className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
         
        </MDBContainer>

            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid style={{color:'black'}}>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/homedolcedelizia" style={{color:'black'}}> <b>DolceDelizia.com</b> </a>
                </MDBContainer>
            </div>
    </MDBFooter>
    )
};


export default Footer;