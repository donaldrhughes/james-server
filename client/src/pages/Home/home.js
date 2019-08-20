import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron, Card } from "react-bootstrap";
import Background from "../../images/new-bk.png";
import Login from "../../components/Login/index";
import Logo from "../../images/JA-Logo-sml.png";
import JA from "../../images/JA-script-logo-trans.png"
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../home.css";



var sectionStyle = {
    width: "800px",
    height: "600px"
    , backgroundImage: "url(" + Background + ")"
};

class Home extends Component {
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
                        <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                        <Col />
                    </Row>
                    {/* <Jumbotron className="jumbo">
                        <Row>

                            <Col />

                            <Col-6></Col-6>

                            <Col />

                        </Row>
                    </Jumbotron> */}
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
                    <Row>
                        <Col />
                        <Col></Col>
                        <Col /><img src={JA} alt="JA"></img>
                    </Row>
                </Container>;
            </section>
        );
    }
}

export default Home;
