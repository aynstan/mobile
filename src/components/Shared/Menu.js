import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBarSize from '../../helpers/StatusBarSize';

export default class Menu extends Component {

	static propTypes = {
		backgroundColor: React.PropTypes.string,
		borderColor: React.PropTypes.string,
		height: React.PropTypes.number,
		width: React.PropTypes.number,
		spaceBetweenOptions: React.PropTypes.number, // from 0 to 100
		optionsHeight: React.PropTypes.number, // from 0 to 100
		children: React.PropTypes.array
	}

	constructor() {
		super();
		this.state = {
			currentStatusBarHeight: StatusBarSize.currentHeight
		};
	}

	componentDidMount() {
		StatusBarSize.addEventListeners();
	}

	componentWillUnmount() {
		StatusBarSize.removeEventListeners();
	}

	formatMenuOptions({
		options,
		menuWidth,
		menuHeight,
		spaceBetweenOptions,
		optionsHeight
	}) {
		const totalSpaceBetweenOptions = (options.length-1) * spaceBetweenOptions;
		const totalSpaceForOptions = menuWidth - ((menuWidth * totalSpaceBetweenOptions) / 100);
		const menuOptionWidth = totalSpaceForOptions / options.length;
		const menuOptionHeight = ( menuHeight * optionsHeight ) / 100;

		return options.map((menuItem, position) => {
			if (position === 0) {
				return React.cloneElement(menuItem, {
					marginLeft: 10,
					key: position,
					width: menuOptionWidth,
					height: menuOptionHeight
				});
			} else if (position === (options.length-1)) {
				return React.cloneElement(menuItem, {
					marginRight: 10,
					key: position,
					width: menuOptionWidth,
					height: menuOptionHeight
				});
			}
			return React.cloneElement(menuItem, {
				key: position,
				width: menuOptionWidth,
				height: menuOptionHeight
			});
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

		console.log(`height: ${height}`);
		console.log(`width: ${width}`);

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
