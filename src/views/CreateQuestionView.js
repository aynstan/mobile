import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Views } from '../navigation';
import BaseView from './Shared/BaseView';

import SD from '../helpers/ScreenDimensions';

export default class CreateQuestionView extends Component {
	static navigationOptions = {
		header: {
			visible: false
		}
	}

	static propTypes = {
		navigation: React.PropTypes.object
	}

	render() {
		const { navigation } = this.props;

		return (
      <BaseView
				navigation={navigation}
        backgroundColor={'white'}
        menuBackgrounColor={'white'}
        menuBorderColor={'black'}
        menuHeight={SD.getHeight(8)}
        height={SD.getHeight(100)}
        width={SD.getWidth(100)}
				menuOptions={[
					Views.Interests,
					Views.CreateQuestion
				]}
      >
        <View>
					<Text>Question View</Text>
				</View>
      </BaseView>
		);
	}
}
