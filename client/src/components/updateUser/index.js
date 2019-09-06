import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import '../../app.css';
import "./updateuser.css";


class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.tokenData.email,
      address: "",
      city: "",
      zip: "",
      state: "",
      firstName: "",
      lastName: "",
      phone: "",
      bio: ""
      //loading
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.getUser()
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  getUser() {
    // console.log(this.props.tokenData)
    axios.post("/api/user", {
      email: this.props.tokenData.email
    })
      .then((response) => {
        // console.log(response.data);
        if (response.data.userid === this.props.tokenData.userID) {
          this.setState({
            username: response.data.username,
            userid: response.data.userid,
            email: response.data.email,
            dob: response.data.dob,
            phone: response.data.phone_number,
            address: response.data.address,
            city: response.data.city,
            state: response.data.state,
            zip: response.data.zip,
            firstName: response.data.firstname,
            lastName: response.data.lastname,
            bio: response.data.bio
          })
        } else {
          alert("mismatch error")
          //log user out
        };
        // console.log(this.state)
      })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.userid === this.props.tokenData.userID && this.state.email === this.props.tokenData.email) {
      axios.post("/api/updateuser", {
        email: this.props.tokenData.email,
        userid: this.state.userid,
        state: this.state.state,
        address: this.state.address,
        city: this.state.city,
        zip: this.state.zip,
        phone: this.state.phone,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        bio: this.state.bio
      })
        .then((response) => {
          let message = response.data.message
          if (response.data.hasE) {
            const errorsJSON = JSON.parse(response.request.responseText);
            const errors = errorsJSON.e;
            let errorsList = '';
            for (let i = 0; i < errors.length; i++) {
              errorsList += '<li>' + errors[i].msg + '</li>';
            }
            alert(errorsList)
            // console.log(response)
          } else {
            axios.post("/api/user", {
              email: this.props.tokenData.email
            })
              .then((response) => {
                if (response.data) {
                  // console.log(response.data);
                  this.setState({ phone: response.data.phone_number });
                  this.setState({ address: response.data.address });
                  this.setState({ city: response.data.city });
                  this.setState({ state: response.data.state });
                  this.setState({ zip: response.data.zip });
                  this.setState({ firstName: response.data.firstname });
                  this.setState({ lastName: response.data.lastname });
                  this.setState({ bio: response.data.bio });
                  alert(message)
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("mismatch or network error")
      //log user out
    }
  }

  render() {
    return (
      <Card>
        <Row>
          <Col><div className="head">Update your profile</div>
            <div align="justify">
              <div>Username: {this.state.username}</div>
              <div>Email: {this.state.email}</div></div>
            <form onSubmit={this.handleSubmit}>
            <FormGroup>
                <FormControl
                  id="firstName"
                  label="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  autoComplete="firstName"
                  placeholder="First Name"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="lastName"
                  label="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  autoComplete="lastName"
                  placeholder="Last Name"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="address"
                  label="address"
                  type="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  autoComplete="address"
                  placeholder="Address"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="city"
                  label="city"
                  type="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  autoComplete="current-city"
                  placeholder="City"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="state"
                  label="state"
                  type="text"
                  value={this.state.state}
                  onChange={this.handleChange}
                  autoComplete="mm-dd-yy"
                  placeholder="State"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="zip"
                  label="zip"
                  type="text"
                  value={this.state.zip}
                  onChange={this.handleChange}
                  autoComplete="zip"
                  placeholder="Zip"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="phone"
                  label="phone"
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  autoComplete="phone"
                  placeholder="Phone"
                  margin="normal" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  id="bio"
                  label="bio"
                  type="text"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  autoComplete="bio"
                  placeholder="Background"
                  margin="normal" />
              </FormGroup>
              <input className="btn updateBtn" type="submit" value="Save" />
            </form>
            <div align="justify">
              <div>Birthday: {this.state.dob}</div>
              <div>FirstName: {this.state.firstName}</div>
              <div>LastName: {this.state.lastName}</div>
              <div> Phone: {this.state.phone}</div>
              <div> Address: {this.state.address}</div>
              <div> City: {this.state.city}</div>
              <div> State: {this.state.state}</div>
              <div> Zip: {this.state.zip}</div>
              <div> User Bio: {this.state.bio}</div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default withRouter(UpdateUser);