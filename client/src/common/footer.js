import React, { Component } from 'react';
import JA from "../images/JA-script-logo-trans.png"
import { Container, Row, Col, Jumbotron, Card } from "react-bootstrap";
import Android from "../images/android.png"
import IOS from "../images/ios.png"

var footerStyle = {
    backgroundColor: "#eee",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "90px",
    width: "800px",
}

var phantom = {
  display: 'block',
  padding: '10px',
  height: '90px',
  width: '800px',
}

function Footer ( {children}){

  
        return (<div>
            <div style={phantom} />
            <div style={footerStyle}>
                { children }<Container>
                <Row>
                    <Col><img src={Android} alt="Android"></img></Col>
                    <Col><img src={IOS} alt="IOS"></img></Col>
                    <Col><img src={JA} alt="JA"></img></Col>
                </Row>
            </Container>
            </div>
        </div>
            
    );
 
}

export default Footer;
