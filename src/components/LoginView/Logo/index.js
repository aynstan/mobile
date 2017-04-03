import React, { Component } from 'react';
import { Image } from 'react-native';

import logoImage from './images/logo.png';

export default class Logo extends Component {

	static propTypes = {
		width: React.PropTypes.number,
		height: React.PropTypes.number
	}

	render() {
		const borderStyle = {
			borderWidth: 1
		};

		const { width, height } = this.props;

		const imageStyle = Object.assign({
			width,
			height,
			resizeMode: 'contain'
		}, borderStyle);

		return (
      <Image
        style={imageStyle}
        source={logoImage}
      />
		);
	}
}
