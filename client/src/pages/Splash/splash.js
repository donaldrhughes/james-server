import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
import "./splash.css";

//Components
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import Lobby from "../../components/Lobby/index";
import Nav from '../../components/common/Nav'
// import Logout from "../../components/common/Logout"

//Contexts
import { MainContext } from '../../contexts/MainContext';


export default class Splash extends Component {
    static contextType = MainContext;
    render() {
        const tokenData = privateHelpers.payload();
        this.props = tokenData;
        return (
            <section className="sectionStyle">
                <Row>
                    <Col />
                    <Col>
                  
                    <div className="head">
                            <p>Welcome, {this.props.username}.</p>
                        </div>
                   
                    </Col>
                   <Col>
                   <Nav />
                   </Col>
                </Row>
                <Row>
                    <Col />
                    <Col-6>
                    <Lobby tokenData={tokenData} />
                    </Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col-6>
                        
                        {/* <Logout></Logout> 
                        <div className="#"></div>*/}
                    </Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col></Col>
                    <Col />
                </Row>


            </section>
        );
    }
}
