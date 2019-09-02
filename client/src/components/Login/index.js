import React, { Component } from "react";
import { Button, FormGroup, FormControl, Card } from "react-bootstrap";
import "./login.css";
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

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
        const token = response.data.token;
        localStorage.setItem("token", token)
        // console.log(token)
        this.props.history.push('/splash');
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
        <Card className="Card LoginText">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <div className="pfont">Email</div>
                <FormControl
                  // autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup controlId="password" >
                <div className="pfont">Password</div>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"/>
              </FormGroup>
                <input align="center" className="submit btn" type="submit" value="Submit" />
            </form>  
              <Link to="/register">
                <Button className="regBtn" type="submit">
                  Join
              </Button>
              </Link>
              <Link to="/forgot">
                <Button className="forgotBtn" type="submit">
                  Forgot Password
              </Button>
              </Link>
        </Card>
    );
  }
}

export default withRouter(Login);