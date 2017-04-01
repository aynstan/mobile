import React, { Component } from 'react';
import { View } from 'react-native';

import Menu from '../../components/Shared/Menu';

export default class BaseView extends Component {

  static propTypes = {
    backgroundColor: React.PropTypes.string,
    menuBackgrounColor: React.PropTypes.string,
    menuBorderColor: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    menuHeight: React.PropTypes.number
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

    return (
      <View
        style={{
          backgroundColor,
          height,
          width
        }}
      >
        <Menu
          backgroundColor={menuBackgrounColor}
          borderColor={menuBorderColor}
          height={menuHeight}
          width={width}
        />
        {options}
      </View>
    );
  }
}
