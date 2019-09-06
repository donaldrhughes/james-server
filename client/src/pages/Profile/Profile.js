import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import '../../app.css';
// import "./style.css";

//Components
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import UpdateUser from "../../components/updateUser/index"
import Nav from '../../components/common/Nav'
import Footer from "../../components/common/Footer/Footer"

export default class Profile extends React.Component {
    render() {
        var tokenData = privateHelpers.payload();
        // this.props = tokenData;
        return (
            <section className="updatebg">
             <Row>
                    <Col />
                    <Col>
                    <div className="head">
                            Products
                        </div>
                    </Col>
                   <Col>
                   <Nav />
                   </Col>
                </Row>
                    <Row>
                        <Col />
                        <Col><Card><UpdateUser tokenData={tokenData} /></Card></Col>
                        <Col />
                    </Row>   
                    <Row>
                        <Col></Col>
                        <Col><Footer /></Col>
                        <Col />
                    </Row>
            </section>
        );
    }
}
