import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../../images/Zilchwelcome.jpg"
// import Logo from "../../images/welcome_logo.png";
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import Registration from "../../components/Registration/index";
import "../home.css";



var sectionStyle = {
    width: "800px",
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
            <div>
                <section style={ sectionStyle }>
      
                <div>
                    
                <Container>
                        <Row>
                            <Col />
                            {/* <Col><img src={Logo} alt="Logo"></img></Col> */}
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col-6><div className="Header">Sign Up For James Albert!</div></Col-6>
                            <Col />
                        </Row>
                        <Row>
                        <Col><Registration /></Col>
                            </Row>
                    </Container>;
                </div></section>
            </div>
        );
    }
}

export default Register;
