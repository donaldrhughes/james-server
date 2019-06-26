import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../../images/Zilchwelcome.jpg"
import Lobby from "../../components/Lobby/index";
// import Logo from "../../images/welcome_logo.png";
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../home.css";
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'


var sectionStyle = {
    width: "800px",
    height: "600px",
    backgroundImage: "url(" + Background + ")"
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
        };
    };

    componentDidMount() {

    }

    render() {
        const tokenData = privateHelpers.payload();
        this.props = tokenData;

        return (
            <div>
                <section style={sectionStyle}>

                    <div>

                        <Container>
                            <Row>
                                <Col />
                                {/* <Col><img src={Logo} alt="Logo"></img></Col> */}
                                <Col />
                            </Row>

                            <Row>
                                <Col />

                                <Col-6>
                                    <div className="Header">
                                        <p>Welcome {this.props.username}</p>
                                    </div>
                                </Col-6>

                                <Col />
                            </Row>

                            <Row>
                                <Col />
                                <Col-6><div className="#">

                                </div></Col-6>
                                <Col />
                            </Row>

                            <Row>
                                <Col />
                                <Col><Lobby tokenData={tokenData} /></Col>
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
