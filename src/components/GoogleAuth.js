import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '980007628641-3c1v4hhol8becpc1avg9e8fh0daalj76.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  }
}

export default GoogleAuth;