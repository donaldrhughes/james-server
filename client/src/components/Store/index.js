import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
// import { Row, Col, Button, FormGroup, FormControl, Card } from "react-bootstrap";
// import axios from 'axios';
import '../../app.css'
import "./store.css";

//Components
import Loader from '../Loader/Loader';

//Contexts
import MainContext from '../../contexts/MainContext'

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: "",
      // password: "",
      loading: true
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }
  static contextType = MainContext;

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

componentDidMount(){
  this.setState({
    loading: false
  })
}

  // handleSubmit = event => {
  //   event.preventDefault();
  //   //add axios here to auth/login
  //   axios.post("/auth/login", {
  //     email: this.state.email,
  //     password: this.state.password,
  //   })
  //     .then((response) => {
  //       this.setState({ loading: false });
  //       if (response.data.hasE) {
  //         const errorsJSON = JSON.parse(response.request.responseText);
  //         // console.log(errorsJSON);
  //         const errors = errorsJSON.e;
  //         let message = '';
  //         for (let i = 0; i < errors.length; i++) {
  //           message += '<li>' + errors[i].msg + '</li>';
  //         }
  //         alert(message)
  //         // this.context.updateMessage(message);
  //       } else if (response.data.token) {
  //         const token = response.data.token;
  //         localStorage.setItem("token", token)
  //         this.props.history.push('/splash');
  //       } else {
  //         const message = response.data.message;
  //         // this.context.updateMessage(message);
  //         alert(message)
  //       }
  //       // console.log(token)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }


  render() {
    if (this.state.loading) return <Loader />;
    return (
     <div>
        {/* <Card className="loginText">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <div className="head center">Login</div>
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
              {/* <div className="#">Password</div> 
              <Row>
             <FormControl
                  type="password"
                  className="inputBox"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password" />
              </Row>
            </FormGroup>
            <Row>
              <Col><input className="btn align" type="submit" value="Enter" /></Col>
            </Row></form>
          <Row>
            <Col><div className="join align">Join Up</div></Col>
          </Row>
          <Row>
            <Col><Link to="/register">
              <Button className="regBtn align" type="submit">
                Register
              </Button>
            </Link></Col>
          </Row>
          <Row>
            <Col><div className="align">Forgot Password?</div></Col>
          </Row>
          <Row>
            <Col><Link to="/forgot">
              <Button className="forgotBtn align" type="submit">
                Reset
                  </Button>
            </Link></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card> */}
        </div>
    );
  }
}

export default withRouter(Store);