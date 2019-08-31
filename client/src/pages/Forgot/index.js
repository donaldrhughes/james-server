import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import Background from "../../images/new-bk.png";
import "../home.css";

//Components
import ForgotPass from "../../components/ForgotPass/index";

const sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + Background + ")"
};

class Register extends Component {
    state = {
        text: ""
    };

    componentDidMount() {

    }

    render() {
        return (
            <section style={sectionStyle}>
                <Container>
                    <Row>
                        <Col />
                        <Col><img src={Logo} alt="Logo"></img></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col-6><div className="Header">Forgot Password</div></Col-6>
                        <Col />
                    </Row>
                    <Row>
                        <Col><ForgotPass /></Col>
                    </Row>
                </Container>;
                </section>
        );
    }
}

export default Register;
