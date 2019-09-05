import React from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { FormGroup, FormControl, Card } from "react-bootstrap";
import "./register.css";

//Components
import Loader from '../Loader/Loader'
// import { MainContext } from '../../contexts/MainContext';

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
  // static contextType = MainContext;

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true })
      axios.post("/auth/register", {
        email: this.state.email,
        password: this.state.password,
        passwordVerify: this.state.passwordVerify,
        username: this.state.username,
        dob: this.state.dob
      })
        .then((response) => {
          this.setState({ loading: false })
          if (response.data.hasE) {
            // console.log(response);
            const errorsJSON = JSON.parse(response.request.responseText);
            const errors = errorsJSON.e;
            let errorsList = '';
            for (let i = 0; i < errors.length; i++) {
              errorsList += '<li>' + errors[i].msg + '</li>';
            }
            // this.context.updateMessage(errorsList);
            alert(errorsList)
          } else {
            const message = response.data.message;
            // this.context.updateMessage(message);
            alert(message)
            this.props.history.push('/');
          }
        })
        .catch(function (error) {
          // console.log(error);
          // this.context.updateMessage(error);
          alert(error)
        });
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <Card>
        <div className="regText">
        <div className="registerText">Sign Up For James Albert!</div>
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
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="username"
                  label="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username"
                  margin="normal" />
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
                  margin="normal" />
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
                  margin="normal" />
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
                  margin="normal" />
              </FormGroup>
              <input className="submit btn btn-outline-secondary" type="submit" value="Join" />
            </form>
          </div>
        </div>
      </Card >
    );
  }
}

export default withRouter(Registration);