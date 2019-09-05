import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Button, FormGroup, FormControl, Card } from "react-bootstrap";
import Loader from '../Loader/Loader';
import axios from 'axios';
import '../../app.css'
import "./login.scss";


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
      <Card className="loginText">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            {/* <div className="head center">Login</div> */}
            <Row>
              <FormControl
                type="email"
                className="inputBox"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email" />
            </Row>
          </FormGroup>
          <FormGroup controlId="password" >
            {/* <div className="#">Password</div> */}
            <Row>
              <FormControl
                type="password"
                className="inputBox"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password" />
            </Row>
          </FormGroup>
          {/* <Row>
            <Col></Col>
            <Col><div className="align">Login</div></Col>
            <Col></Col>
          </Row> */}
          <Row>
            <Col></Col>
            <Col><input className="btn loginBtn align" type="submit" value="Enter" /></Col>
            <Col></Col>
          </Row>
        </form>
        <div className="separator">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
        <Row>
          <Col><div className="mfix"><div>Register</div><Link to="/register"><Button className="btn regBtn" type="submit">Join</Button></Link></div></Col>
          <Col><div className="separator2"><div>Forgot</div><Link to="/forgot"><Button className="btn forgotBtn" type="submit">Reset</Button></Link></div></Col>
        </Row>
      </Card>
    );
  }
}

export default withRouter(Login);