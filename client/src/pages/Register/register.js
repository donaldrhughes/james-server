import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import '../../app.css'
// import "./style.css";


//Components
import Registration from "../../components/Registration/index";
import Footer from "../../components/common/Footer/Footer"
import Logo from "../../components/common/Logo";

export default class Register extends Component {
    // state = {
    //     text: ""
    // };

    // componentDidMount() {

    // }

    render() {
        return (
            <section className="mainbg">
                <Row>
                        <Col />
                        <Col><Logo></Logo></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col> </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                        <Registration />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Footer /></Col>
                        <Col />
                    </Row>
                {/* <div>
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
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col />
                    <Col></Col>
                    <Col />
                </Row> 
                </div>*/}
            </section>
        );
    }
}
