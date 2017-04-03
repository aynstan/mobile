import React, { Component } from 'react';
import { View } from 'react-native';

import Menu from '../../components/Shared/Menu';
import MenuOption from '../../components/Shared/MenuOption';

export default class BaseView extends Component {

	static propTypes = {
		backgroundColor: React.PropTypes.string,
		menuBackgrounColor: React.PropTypes.string,
		menuBorderColor: React.PropTypes.string,
		height: React.PropTypes.number,
		width: React.PropTypes.number,
		menuHeight: React.PropTypes.number,
		children: React.PropTypes.object
	}

	render() {
		const {
      height,
      width,
      menuHeight,
      backgroundColor,
      menuBackgrounColor,
      menuBorderColor,
      children: options
    } = this.props;

		const defaultStyle = {
			backgroundColor,
			height,
			width
		};

		return (
      <View
				style={defaultStyle}
      >
        <Menu
          backgroundColor={menuBackgrounColor}
          borderColor={menuBorderColor}
          height={menuHeight}
          width={width}
        >
					<MenuOption icon={require('./images/create-question.png')}/>
					<MenuOption icon={require('./images/create-question.png')} />
					<MenuOption icon={require('./images/create-question.png')} />
				</Menu>
        {options}
      </View>
		);
	}
}
