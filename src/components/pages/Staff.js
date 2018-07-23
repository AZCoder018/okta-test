import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: '',
    currentUserAddress: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name,
      currentUserAddress: idToken.idToken.claims.profile
    });
  }

  render() {
    const { currentUserEmail, currentUserName, currentUserAddress } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>Address: {currentUserAddress}</p>
        <p>You have reached the authorized staff area of the portal</p>
      </div>
    );
  }
}

export default Staff;
