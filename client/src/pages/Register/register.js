import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
// import "./style.css";


//Components
import Registration from "../../components/Registration/index";


export default class Register extends Component {
    // state = {
    //     text: ""
    // };

    // componentDidMount() {

    // }

    render() {
        return (
            <section className="sectionStyle">
                <div>
                <Row>
                    <Col />
                    <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col-6>
                    
                    </Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Registration /></Col>
                    <Col></Col>
                </Row>
                </div>
            </section>
        );
    }
}
