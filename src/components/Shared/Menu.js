import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBarSize from '../../helpers/StatusBarSize';

export default class Menu extends Component {

  static propTypes = {
    backgroundColor: React.PropTypes.string,
    borderColor: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      currentStatusBarHeight: StatusBarSize.currentHeight
     };
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
      borderStyle: 'solid',
      borderWidth: 1
    };

    return (
      <View
        style={Object.assign({
          backgroundColor,
          marginTop: this.state.currentStatusBarHeight,
          height,
          width,
          borderColor,
        }, defaultStyle)}
      >
      {options}
      </View>
    );
  }
}
