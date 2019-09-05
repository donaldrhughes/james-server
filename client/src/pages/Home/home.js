import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
import "./home.css";


//Components
// import Footer from "../../components/common/Footer/Footer"
import Login from "../../components/Login/index";

// //Contexts
import { MainContext } from '../../contexts/MainContext';

export default class Home extends Component {
    // state = {
    //     text: ""
    // };
    static contextType = MainContext;
    render() {
        return (
            <section className="sectionStyle">
                    <Row>
                        <Col />
                        <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Login /></Col>
                        <Col />
                    </Row>
            </section>
        );
    }
}

