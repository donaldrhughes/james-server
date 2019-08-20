import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
// import Background from "../../images/Zilchwelcome.jpg"
import Login from "../../components/Login/index";
import Logo from "../../images/JA-Logo-sml.png";
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../home.css";



var sectionStyle = {
    width: "800px",
    height: "600px"
    // ,backgroundImage: "url(" + Background + ")"
};

class Home extends Component {
    state = {
        text: ""
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section style={sectionStyle}>

                    <div>

                        <Container>
                            <Row>
                                <Col />
                                <Col><img src={Logo} alt="Logo"></img></Col>
                                <Col />
                            </Row>
                            <Jumbotron className="jumbo">
                                <Row>

                                    <Col />

                                    <Col-6>

                                    </Col-6>

                                    <Col />

                                </Row></Jumbotron>

                            <Row>
                                <Col />
                                <Col-6></Col-6>
                                <Col />
                            </Row>

                            <Row>
                                <Col />
                                <Col><Login /></Col>
                                <Col />
                            </Row>

                        </Container>;
                    </div>
                </section>
            </div>

        );
    }
}

export default Home;
