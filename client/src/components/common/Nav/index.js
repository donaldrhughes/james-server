import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Row, Col, Dropdown, DropdownButton, ButtonToolbar, Card } from "react-bootstrap";
import '../../../app.css';
import "./nav.css";
// import axios from "axios";

//Contexts
import { MainContext } from '../../../contexts/MainContext';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static contextType = MainContext;

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true })
        let message = '';
        this.context.updateMessage(message);
        this.props.history.push('/');
    }

    logout = event => {
        event.preventDefault();
        this.props.history.push('/logout')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col><Card>
                        <div className="menu">
                            <ButtonToolbar>
                                {['Secondary'].map(
                                    variant => (
                                        <div className="dropbtn">
                                            <DropdownButton
                                                title={"Menu"}
                                                variant={variant.toLowerCase()}
                                                id={`dropdown-variants-${variant}`}
                                                key={variant}>
                                                {/* <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item> */}
                                                <Dropdown.Item eventKey="1" onClick={() => this.props.history.push('/splash')} >Main</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onClick={() => this.props.history.push('/products')} >Products</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onClick={() => this.props.history.push('/specials')} >Specials</Dropdown.Item>
                                                <Dropdown.Item eventKey="8" onClick={() => this.props.history.push('/profile')} >Profile</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="9" onClick={() => this.props.history.push('/logout')} >Logout</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    ),
                                )}
                            </ButtonToolbar>
                        </div>
                    </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Nav);