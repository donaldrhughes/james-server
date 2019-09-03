import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, Card } from "react-bootstrap";
import Loader from '../Loader/Loader';
import axios from 'axios';
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
      <div>
        <Card className="loginText">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <div className="#">Email</div>
                <FormControl
                  type="email"
                  className="loginText"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Password"/>
              </FormGroup>
              <FormGroup controlId="password" >
                <div className="#">Password</div>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Enter Password"/>
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
        </div>
    );
  }
}

export default withRouter(Login);