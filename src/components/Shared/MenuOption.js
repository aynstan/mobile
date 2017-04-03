import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

export default class MenuItem extends Component {

	static propTypes = {
		icon: React.PropTypes.number,
		borderColor: React.PropTypes.string,
		marginLeft: React.PropTypes.number,
		marginRight: React.PropTypes.number
	}

	render() {
		const {
			borderColor,
			icon,
			marginLeft,
			marginRight
		} = this.props;

		const borderStyle = {
			borderStyle: 'solid',
			borderWidth: 1
		};

		const touchableHighlightStyle = Object.assign({
			borderColor,
			marginLeft,
			marginRight
		}, borderStyle);

		const imageStyle = {
			width: 10,
			height: 1,
			resizeMode: 'cover'
		};

		return (
			<TouchableHighlight
				onPress={() => 'test' }
				style={touchableHighlightStyle}
			>
				<Image
					style={imageStyle}
					source={icon}
				/>
			</TouchableHighlight>
		);
	}
}
