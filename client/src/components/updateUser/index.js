import React from 'react';
import { withRouter } from 'react-router-dom'
import { FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import "./style.css";


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

            //console.log(response.data);
            this.setState({ username: response.data.username });
            this.setState({ email: response.data.email });
            this.setState({ dob: response.data.dob });
            this.setState({ phone: response.data.phone_number });
            this.setState({ address: response.data.address });
            this.setState({ city: response.data.city });
            this.setState({ state: response.data.state });
            this.setState({ zip: response.data.zip });
            this.setState({ firstName: response.data.firstname });
            this.setState({ lastName: response.data.lastname });
            this.setState({ bio: response.data.bio });
            // console.log(this.state)
        }
        )
}

  handleSubmit = event => {
    event.preventDefault();
    const profileObj = {
      email: this.props.tokenData.email,
      state: this.state.state,
      address: this.state.address,
      city: this.state.city,
      zip: this.state.zip,
      phone: this.state.phone,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bio: this.state.bio
    };
    // console.log(profileObj)
    axios.post("/api/updateuser", { profileObj })
      .then((response) => {
        // console.log(response)
        axios.post("/api/user", {
          email: this.props.tokenData.email
        })
          .then((response) => {
            // console.log(response.data);
            this.setState({ phone: response.data.phone_number });
            this.setState({ address: response.data.address });
            this.setState({ city: response.data.city });
            this.setState({ state: response.data.state });
            this.setState({ zip: response.data.zip });
            this.setState({ firstName: response.data.firstname });
            this.setState({ lastName: response.data.lastname });
            this.setState({ bio: response.data.bio });
        alert("Your profile has been updated!")
          })
        })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      //add card
      <div>
                <br></br>
                <h3>Username: {this.state.username} </h3>
                <br></br>
                <h3>Email: {this.state.email}</h3>
                <br></br>
                <h3>Birthday: {this.state.dob}</h3>
                <br></br>
                <h3>FirstName: {this.state.firstName}</h3>
                <br></br>
                <h3>LastName: {this.state.lastName}</h3>
                <br></br>
                <h3> Phone: {this.state.phone}</h3>
                <br></br>
                <h3> Address: {this.state.address}</h3>
                <br></br>
                <h3> City: {this.state.city}</h3>
                <br></br>
                <h3> State: {this.state.state}</h3>
                <br></br>
                <h3> Zip: {this.state.zip}</h3>
                <br></br>
                <h3> User Bio: {this.state.bio}</h3>
                <br></br>
        <div className="#" align="center">
          Update your profile here:
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl
                id="address"
                label="address"
                type="address"
                value={this.state.address}
                onChange={this.handleChange}
                autoComplete="address"
                placeholder="address"
                margin="normal"/>
            </FormGroup>
            <FormGroup>
              <FormControl
                id="city"
                label="city"
                type="city"
                value={this.state.city}
                onChange={this.handleChange}
                autoComplete="current-city"
                placeholder="city"
                margin="normal"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                id="state"
                label="state"
                type="text"
                value={this.state.state}
                onChange={this.handleChange}
                autoComplete="mm-dd-yy"
                placeholder="state"
                margin="normal"/>
            </FormGroup>
            <FormGroup>
              <FormControl
                id="zip"
                label="zip"
                type="text"
                value={this.state.zip}
                onChange={this.handleChange}
                autoComplete="zip"
                placeholder="zip"
                margin="normal"/>
            </FormGroup>
            <FormGroup>
              <FormControl
                id="firstName"
                label="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange}
                autoComplete="firstName"
                placeholder="firstName"
                margin="normal"/>
            </FormGroup>
            <FormGroup>
              <FormControl
                id="lastName"
                label="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
                autoComplete="lastName"
                placeholder="lastName"
                margin="normal"/>
            </FormGroup>
            <FormGroup>
              <FormControl
                id="phone"
                label="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
                autoComplete="phone"
                placeholder="phone"
                margin="normal"/>
            </FormGroup>
            <h6> Here you can enter some information about yourself like an autobiography.  </h6>
            <FormGroup>
              <FormControl
                id="bio"
                label="bio"
                type="text"
                value={this.state.bio}
                onChange={this.handleChange}
                autoComplete="bio"
                placeholder="bio"
                margin="normal"/>
            </FormGroup>
            <input className="submit btn btn-outline-secondary" type="submit" value="Update Profile" />
          </form>
        </div>
      </div >
    );
  }
}

export default withRouter(UpdateUser);