//Footer
//==============
import React from 'react';
import JA from "../../../images/ja-emblem2.png";
import { Row, Col, Card } from "react-bootstrap";
import Android from "../../../images/android.png";
import IOS from "../../../images/ios.png";
import '../../../app.css';



//Functional Footer
function Footer({ children }) {
    return (
        <div>
                <div className="phantom" />
                <div className="footer">
                    {children}
                   <Card> 
                       <Row>
                        <Col><img width="100px" src={Android} alt="Android"></img></Col>
                        <Col><img width="100px" src={IOS} alt="IOS"></img></Col>
                        <Col><div className="emblem"><img width="35px" src={JA} alt="JA"></img></div></Col>
                    </Row>
                    </Card>
                </div>
            
        </div>

    );

}

export default Footer;
