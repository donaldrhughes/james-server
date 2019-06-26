import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
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
      <div>
        <div className="LoginText">

        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <div><p className="pfont">Email</p></div>
              <FormControl
                // autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" >
              <div><p className="pfont">Password</p></div>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>

            <div align="center">
              <input className="submit btn btn-outline-secondary" type="submit" value="Submit" />
            </div>
          </form>
   

          <div className="RegisterBtn">
            <Link to="/register">
              <Button type="submit">
                Register here
              </Button>
            </Link>

     

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);