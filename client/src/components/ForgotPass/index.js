import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Card } from "react-bootstrap";
import axios from 'axios';
import "./forgot.css";


class ForgotPass extends Component {
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
    axios.post("/auth/forgot_password", {
      email: this.state.email
    })
      .then((response) => {
        const token = response.data.token;
        // localStorage.setItem("token", token)
        let message = response.data.message; 
        // console.log(token)
        this.props.history.push('/');
        alert(message)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
        <Card className="forgotText">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
              <div className="head">Forgot Password</div>
                <FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Your Email..."
                  margin="normal"/>
              </FormGroup>
                <input align="center" className="submit btn" type="submit" value="Submit" />
            </form>  
        </Card>
    );
  }
}

export default withRouter(ForgotPass);