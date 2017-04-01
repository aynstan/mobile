import React, { Component } from 'react';
import { Image } from 'react-native';

import logoImage from './images/logo.png';

export default class Logo extends Component {

  static propTypes = {
    style: React.PropTypes.object
  }

  render() {
    const borderStyle = {
      borderWidth: 1
    };

    const { width, height } = this.props;

    return (
      <Image
        style={Object.assign({
          width,
          height,
          resizeMode: 'contain'
        }, borderStyle)}
        source={logoImage}
      />
    );
  }
}
