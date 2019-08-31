import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Background from "../../images/new-bk.png";
import Logo from "../../images/JA-Logo-sml.png";
import "../home.css";


//Components
import Footer from "../../common/footer"
import Login from "../../components/Login/index";

//Styles
var sectionStyle = {
    width: "100%",
    height: "840px"
    , background: "url(" + Background + ")",
    // backgroundRepeat: " ",
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    //   -obackground-size: cover
    backgroundSize: "cover"
};

class Home extends Component {
    state = {
        text: ""
    };

    // componentDidMount() {

    // }

    render() {
        return (
            <section style={sectionStyle}>
                <Container>
                    <Row>
                        <Col />
                        <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col><Login /></Col>
                        <Col />
                    </Row>
                    {/* <Footer /> */}
                </Container>;
            </section>
        );
    }
}


export default Home;
