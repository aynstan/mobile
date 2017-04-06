import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBarSize from '../../helpers/StatusBarSize';

export default class Menu extends Component {

	static propTypes = {
		backgroundColor: React.PropTypes.string,
		borderColor: React.PropTypes.string,
		height: React.PropTypes.number,
		width: React.PropTypes.number,
		spaceBetweenOptions: React.PropTypes.number, // from 0 to 100 %
		optionsHeight: React.PropTypes.number, // from 0 to 100 %
		children: React.PropTypes.array
	}

	constructor() {
		super();
		this.state = {
			currentStatusBarHeight: StatusBarSize.currentHeight
		};
	}

	formatMenuOptions({
		options,
		menuWidth,
		menuHeight,
		spaceBetweenOptions,
		optionsHeight
	}) {
		const totalSpaceBetweenOptionsPercentage = (options.length-1) * spaceBetweenOptions;
		const totalSpaceForAllOptionsRemovingSpace = menuWidth - ((menuWidth * totalSpaceBetweenOptionsPercentage) / 100);
		const menuOptionWidth = totalSpaceForAllOptionsRemovingSpace / options.length;
		const menuOptionHeight = ( menuHeight * optionsHeight ) / 100;

		return options.map((menuItem, position) => {
			const baseProps = {
				key: position,
				width: menuOptionWidth,
				height: menuOptionHeight
			};
			if (position === 0) {
				return React.cloneElement(menuItem, Object.assign({
					marginLeft: 10
				}, baseProps));
			} else if (position === (options.length-1)) {
				return React.cloneElement(menuItem, Object.assign({
					marginRight: 10
				}, baseProps));
			}
			return React.cloneElement(menuItem, baseProps);
		});
	}

	render() {
		const {
				height,
				width,
				spaceBetweenOptions,
				optionsHeight,
				backgroundColor,
				borderColor,
				children: options
     } = this.props;

		const defaultStyle = {
			backgroundColor,
			marginTop: this.state.currentStatusBarHeight,
			height,
			width,
			borderColor,
			borderStyle: 'solid',
			borderWidth: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		};

		// Spacing between first/last element and edge of the screen
		const menuOptions = this.formatMenuOptions({
			options,
			menuWidth: width,
			menuHeight: height,
			spaceBetweenOptions,
			optionsHeight
		});

		return (
      <View style={defaultStyle} >
				{menuOptions}
      </View>
		);
	}
}
