import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import loginButtonImage from './images/facebook-login-button.png';

export default class FBLogin extends Component {

	static propTypes = {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		callback: React.PropTypes.func
	}

	login(callback) {
		LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
			if (result.isCancelled) {
				alert('Login cancelled');
			} else {
				alert(`Login success with permissions: ${result.grantedPermissions.toString()}`);
				AccessToken.getCurrentAccessToken().then((data) => {
					alert(data.accessToken.toString());
					callback();
				});
			}
		}, (error) => {
			alert(`Login fail with error: ${error}`);
		});
	}

	render() {
		const borderStyle = {
			borderStyle: 'solid',
			borderWidth: 1
		};

		const { callback, width, height } = this.props;

		const touchableHighlightStyle = Object.assign({ width, height }, borderStyle);

		const imageStyle = {
			flex: 1,
			width: null,
			height: null,
			resizeMode: 'contain'
		};

		return (
      <TouchableHighlight
        onPress={() => this.login(callback)}
        style={touchableHighlightStyle}
      >
        <Image
          style={imageStyle}
          source={loginButtonImage}
        />
      </TouchableHighlight>
		);
	}
}
