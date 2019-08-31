import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Loader from '../Loader/Loader'


class ResetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpass: "",
      newPassVerify: "",
      token: "",
      email: "",
      loading: false
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
    const token = document.location.search.split('token=')[1].split('&')[0];
    const forgotemail = document.location.href.split('email=')[1];
    this.setState({ loading: true })
    axios.post("/auth/reset_password", {
      newpass: this.state.newpass,
      newPassVerify: this.state.newPassVerify,
      token: token,
      forgotemail: forgotemail
    })
      .then((response) => {
        this.setState({ loading: false })
        const message = response.data.message;
        // console.log(response);
        if (response.data.hasE) {
          const errorsJSON = JSON.parse(response.request.responseText);
          const errors = errorsJSON.e;
          let errorsList = '';
          for (let i = 0; i < errors.length; i++) {
            errorsList += '<li>' + errors[i].msg + '</li>';
          }
          alert(errorsList)
        }
        else if (message === 'Your password has been reset.') {
          alert(message);
          this.props.history.push('/');
        } else {
          alert(message);
        }
      })
      .catch(function (error) {
        alert(error);

      });
  }


  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div>
        
      <div className="forgotBoxText">
        <form onSubmit={this.handleSubmit}>
          <FormGroup>

            <FormControl
              id="newpass"
              label="New Password"
              type="password"
              value={this.state.newpass}
              onChange={this.handleChange}
              autoComplete="newcurrent-password"
              placeholder="New Password"
              margin="normal"

            />
          </FormGroup>

          <FormGroup>
            <FormControl
              id="newPassVerify"
              label="Confirm New Password"
              type="password"
              value={this.state.newPassVerify}
              onChange={this.handleChange}
              autoComplete="current-password"
              placeholder="Confirm New Password"
              margin="normal"

            />
          </FormGroup>


          <input align="center" className="submit btn btn-outline-secondary" type="submit" value="Submit" />

        </form>

      </div>
    </div>
  );
}
}

export default withRouter(ResetPass);