//Footer
//==============
import React from 'react';
import JA from "../../../images/ja-emblem2.png"
import { Row, Col, Card } from "react-bootstrap";
import Android from "../../../images/android.png"
import IOS from "../../../images/ios.png"


var footerStyle = {
    backgroundColor: "#ddd",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "105px",
    width: "100%"
}

var phantom = {
    display: 'block',
    padding: '10px',
    height: '105px',
    width: '800px',
}

//Functional Footer
function Footer({ children }) {
    return (
        <div>
            
                <div style={phantom} />
                <div style={footerStyle}>
                    {children}
                   <Card> 
                       <Row>
                        <Col><img src={Android} alt="Android"></img></Col>
                        <Col><img src={IOS} alt="IOS"></img></Col>
                        <Col><div className="emblem"><img width="35px" src={JA} alt="JA"></img></div></Col>
                    </Row>
                    </Card>
                </div>
            
        </div>

    );

}

export default Footer;
