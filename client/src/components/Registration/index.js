import React from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { FormGroup, FormControl } from "react-bootstrap";
import "./register.css";


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      dob: "",
      passwordVerify: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.password === this.state.passwordVerify) {
      console.log(this.state.email)
      axios.post("/auth/register", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        dob: this.state.dob
      })
        .then((response) => {
      console.log(response);
          let message = response.data.message;
      this.props.history.push('/');
       alert(message)
    })
      .catch(function (error) {
        console.log(error);
      });

  } else {

  alert("Password and Confirm Password do not match")

}

  }

render() {
  return (
    <div>
      <div className="registerText">Fine products.</div>

      <div className="register">

        <div align="center">
        
          <form onSubmit={this.handleSubmit}> 

            <FormGroup>
              <FormControl
                id="email"
                label="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                margin="normal"
              />
            </FormGroup>


            <FormGroup>
              <FormControl
                id="username"
                label="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
                margin="normal"
              />
            </FormGroup>


            <FormGroup>

              <FormControl
                id="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="newcurrent-password"
                placeholder="Password"
                margin="normal"
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                id="passwordVerify"
                label="Confirm Password"
                type="password"
                value={this.state.passwordVerify}
                onChange={this.handleChange}
                autoComplete="current-password"
                placeholder="Confirm Password"
                margin="normal"
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                id="dob"
                label="Date of Birth"
                type="text"
                value={this.state.dob}
                onChange={this.handleChange}
                autoComplete="mm-dd-yy"
                placeholder="Birthday (mm-dd-yy)"
                margin="normal"
              />
            </FormGroup>
        
            <input className="submit btn btn-outline-secondary" type="submit" value="Join" />



          </form>
        </div>
      </div >
    </div >
  );
}
}

export default withRouter(Registration);