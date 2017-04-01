import React, { Component } from 'react';
import { View } from 'react-native';

import BaseView from './Shared/BaseView';

import SD from '../helpers/ScreenDimensions';

export default class LoginView extends Component {
  static navigationOptions = {
    header: { 
      visible: false,
    }
  }

  render() {
    return (
      <BaseView
        backgroundColor={'white'}
        menuBackgrounColor={'white'}
        menuBorderColor={'black'}
        height={SD.getHeight(100)}
        width={SD.getWidth(100)}
        menuHeight={SD.getHeight(15)}
      >
        <View />
      </BaseView>
    );
  }
}
