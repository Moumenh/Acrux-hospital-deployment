import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import './Footer.css'
const FooterPage = () => {
  return (
      <div id="footer">
    <MDBFooter color="blue" className="font-small pt-4 mt-4" >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> ACRUX </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;