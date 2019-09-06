import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
import "./splash.css";

//Components
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import Lobby from "../../components/Lobby/index";
import Nav from '../../components/common/Nav'
import Header from '../../components/common/Header'
import Footer from "../../components/common/Footer/Footer"
// import Logout from "../../components/common/Logout"

//Contexts
import { MainContext } from '../../contexts/MainContext';


export default class Splash extends Component {
    static contextType = MainContext;
    render() {
        const tokenData = privateHelpers.payload();
        this.props = tokenData;
        return (
            <section className="splashbg">
                <Row>
                    <Col> <div className="head">
                            <p>Welcome, {this.props.username}.</p>
                        </div></Col>
                    <Col></Col>
                    <Col><Nav /></Col>
                </Row>
                <Row>
                    {/* <Col /> */}
                    <Col>
                        <Header></Header>
                    </Col>
                    {/* <Col /> */}
                </Row>
                <Row>
                    <Col />
                    <Col-6>
                    <Lobby tokenData={tokenData} />
                   
                    </Col-6>
                    <Col />
                </Row>
                <Row>
                        <Col></Col>
                        <Col><Footer /></Col>
                        <Col />
                    </Row>


            </section>
        );
    }
}
