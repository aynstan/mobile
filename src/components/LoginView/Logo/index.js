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

    return (
      <Image
        style={Object.assign({
          width: this.props.style.width,
          height: this.props.style.height,
          resizeMode: 'contain'
        }, borderStyle)}
        source={logoImage}
      />
    );
  }
}
