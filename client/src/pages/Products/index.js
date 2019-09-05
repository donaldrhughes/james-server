import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css'
import "./products.css";


//Components
// import Footer from "../../components/common/Footer/Footer"


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
                        <Col><Card>
                            
                            
                            </Card></Col>
                        <Col />
                    </Row>
                    {/* <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col />
                    </Row> */}
            </section>
        );
    }
}

