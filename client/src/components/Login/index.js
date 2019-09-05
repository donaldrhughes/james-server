import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Button, FormGroup, FormControl, Card } from "react-bootstrap";
import Loader from '../Loader/Loader';
import axios from 'axios';
import '../../app.css'
import "./login.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  // static contextType = MainContext;

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //add axios here to auth/login
    axios.post("/auth/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.hasE) {
          const errorsJSON = JSON.parse(response.request.responseText);
          // console.log(errorsJSON);
          const errors = errorsJSON.e;
          let message = '';
          for (let i = 0; i < errors.length; i++) {
            message += '<li>' + errors[i].msg + '</li>';
          }
          alert(message)
          // this.context.updateMessage(message);
        } else if (response.data.token) {
          const token = response.data.token;
          localStorage.setItem("token", token)
          this.props.history.push('/splash');
        } else {
          const message = response.data.message;
          // this.context.updateMessage(message);
          alert(message)
        }
        // console.log(token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="cardStyle" >
        <Card className=" loginText">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <div className="#">Login</div>
              <Row>
                <Col></Col>
                <Col><FormControl
                  type="email"
                  className="inputBox"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email" /></Col>
                <Col></Col>
              </Row>
            </FormGroup>
            <FormGroup controlId="password" >
              {/* <div className="#">Password</div> */}
              <Row>
                <Col></Col>
                <Col><FormControl
                  type="password"
                  className="inputBox"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password" /></Col>
                <Col></Col>
              </Row>
            </FormGroup>
            <Row>
              <Col></Col>
              <Col><input align="center" className="btn" type="submit" value="Enter" /></Col>
              <Col></Col>
            </Row></form>

          <Row>
            {/* <Col></Col> */}
            <Col><div className="loginHead">Are you ready to join?</div></Col>
            {/* <Col></Col> */}
          </Row>
          <Row>
            <Col></Col>
            <Col><Link to="/register">
              <Button className="regBtn" type="submit">
                Join
              </Button>
            </Link></Col>
            <Col />
          </Row>
          <Row>
            <Col></Col>
            <Col><Link to="/forgot">
              <Button className="forgotBtn" type="submit">
                Forgot Password?
                  </Button>
            </Link></Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>

          </Row>


        </Card>
      </div>
    );
  }
}

export default withRouter(Login);