import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl, Card } from "react-bootstrap";
import axios from 'axios';
import "../../app.css"
import "./forgot.css";


//Components
import Loader from '../Loader/Loader';
import Cancel from "../../components/common/Cancel"

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

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

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
        this.setState({ loading: false })
        // console.log(response);
        if (response.data.hasE) {
          const errorsJSON = JSON.parse(response.request.responseText);
          const errors = errorsJSON.e;
          let errorsList = '';
          for (let i = 0; i < errors.length; i++) {
            errorsList += '<li>' + errors[i].msg + '</li>';
          }
          alert(errorsList)
        } else {
          const message = response.data.message;
          // console.log(message)
          alert(message);
          this.props.history.push('/');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <Card>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <div className="center head">Forgot Password</div>
            <Row>
              <Col>
              <div className="center"><FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  margin="normal" />
                  </div>
              </Col>
            </Row>
          </FormGroup>
          <input className="btn forgotBtn center" type="submit" value="Submit" />
        </form>
        <Row>
          <Col><div className="center"><Cancel /></div></Col>
        </Row>
      </Card>
    );
  }
}

export default withRouter(ForgotPass);