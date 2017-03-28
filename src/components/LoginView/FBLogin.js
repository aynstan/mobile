import React, { Component } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import loginButtonImage from '../images/facebook-login-button.png';

export default class FBLogin extends Component {

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
      <View style={styles.container}>
        <TouchableHighlight onPress={this.login}>
          <Image
            source={loginButtonImage}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
});
