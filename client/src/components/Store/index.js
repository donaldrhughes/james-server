import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Button,
  // FormGroup, FormControl, 
  Card } from "react-bootstrap";
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
     
       <Card className="store center">
       <div className="storeHead">Beauty Supply</div>
       <form onSubmit={this.handleSubmit}>
       <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col>
            <Link to="/forgot">
              <Button className="btn buyBtn center" type="submit">
                Buy
                  </Button>
            </Link>
            </Col>
          </Row>
          </form>
          </Card>
    )}
  };


export default withRouter(Store);

