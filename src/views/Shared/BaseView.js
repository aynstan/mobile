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
		menuOptions: React.PropTypes.array,
		children: React.PropTypes.object,
		navigation: React.PropTypes.object
	}

	generateMenuOptions(menuOptions) {
		const { navigate } = this.props.navigation;

		console.log(`menuOptions: ${menuOptions}`);
		console.log(`navigate: ${navigate}`);

		return menuOptions.map((menuOption) => {
			switch(menuOption) {
			case 'CreateQuestionView':
				return (<MenuOption
						key={menuOption}
						icon={require('./images/question.png')}
						onPress={() => navigate(menuOption) }
					/>);
			case 'InterestsView':
				return (<MenuOption
						key={menuOption}
						icon={require('./images/question.png')}
						onPress={() => navigate(menuOption) }
					/>);
			default:
				return;
			}
		});
	}

	render() {
		const {
      height,
      width,
      menuHeight,
      backgroundColor,
      menuBackgrounColor,
      menuBorderColor,
			menuOptions,
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
					spaceBetweenOptions={20}
					optionsHeight={80}
        >
					{this.generateMenuOptions(menuOptions)}
				</Menu>
        {options}
      </View>
		);
	}
}
