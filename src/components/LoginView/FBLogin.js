import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import loginButtonImage from '../../../images/facebook-login-button.png';

export default class FBLogin extends Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }

  login() {
    LoginManager.logInWithReadPermissions(['public_profile'])
    .then((result) => {
      if (result.isCancelled) {
        alert('Login cancelled');
      } else {
        alert(`Login success with permissions: ${result.grantedPermissions.toString()}`);
        AccessToken.getCurrentAccessToken().then((data) => {
          alert(data.accessToken.toString());
        });
      }
    },
    (error) => {
      alert(`Login fail with error: ${error}`);
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.login}
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      >
        <Image
          style={{
            width: this.props.width,
            height: this.props.height,
            resizeMode: 'cover'
          }}
          source={loginButtonImage}
        />
      </TouchableHighlight>
    );
  }
}
