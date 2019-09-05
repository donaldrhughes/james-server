import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
// import "./style.css";

//Components
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import Lobby from "../../components/Lobby/index";
import Logout from "../../components/common/Logout"

// import { Link } from "react-router-dom";

export default class Splash extends Component {

    render() {
        const tokenData = privateHelpers.payload();
        this.props = tokenData;
        return (
            <section className="sectionStyle">
                <Row>
                    <Col />
                    <Col><img src={Logo} alt="Logo"></img></Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col-6>
                        <div className="head">
                            <p>Welcome {this.props.username}</p>
                        </div>
                    </Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col-6><Logout></Logout>
                    <div className="#"></div></Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col><Lobby tokenData={tokenData} /></Col>
                    <Col />
                </Row>
            </section>
        );
    }
}
