import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css';
// import "./style.css";

//Components
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import UpdateUser from "../../components/updateUser/index"


export default class Profile extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    render() {
        var tokenData = privateHelpers.payload();
        // this.props = tokenData;
        return (
            <section className="sectionStyle">
                <Row>
                        <Col />
                        <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col><Card><UpdateUser tokenData={tokenData} /></Card></Col>
                        <Col />
                    </Row>   
            </section>
        );
    }
}
