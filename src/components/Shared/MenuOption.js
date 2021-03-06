import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

export default class MenuItem extends Component {

	static propTypes = {
		icon: React.PropTypes.number,
		borderColor: React.PropTypes.string,
		marginLeft: React.PropTypes.number,
		marginRight: React.PropTypes.number,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		onPress: React.PropTypes.func
	}

	render() {
		const {
			borderColor,
			icon,
			marginLeft,
			marginRight,
			width,
			height,
			onPress
		} = this.props;

		const borderStyle = {
			borderStyle: 'solid',
			borderWidth: 1
		};

		const touchableHighlightStyle = Object.assign({
			borderColor,
			marginLeft,
			marginRight,
			width,
			height
		}, borderStyle);

		const imageStyle = {
			flex: 1,
			width: null,
			height: null,
			resizeMode: 'contain'
		};

		return (
			<TouchableHighlight
				onPress={onPress}
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
