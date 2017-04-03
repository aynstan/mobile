import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBarSize from '../../helpers/StatusBarSize';

export default class Menu extends Component {

	static propTypes = {
		backgroundColor: React.PropTypes.string,
		borderColor: React.PropTypes.string,
		height: React.PropTypes.number,
		width: React.PropTypes.number,
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

	render() {
		const {
       height,
       width,
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
			justifyContent: 'space-between'
		};

		// Spacing between first/last element and edge of the screen
		const menuOptions = options.map((menuItem, position) => {
			if (position === 0) {
				return React.cloneElement(menuItem, {
					marginLeft: 10,
					key: position
				});
			} else if (position === (options.length-1)) {
				return React.cloneElement(menuItem, {
					marginRight: 10,
					key: position
				});
			}
			return menuItem
		});

		return (
      <View style={defaultStyle} >
				{menuOptions}
      </View>
		);
	}
}
