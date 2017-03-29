import React, { Component } from 'react';
import { Image } from 'react-native';

import logoImage from '../../../images/logo.png';

export default class Logo extends Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }

  render() {
    return (
      <Image
        style={{
          width: this.props.width,
          height: this.props.height,
          resizeMode: 'contain'
        }}
        source={logoImage}
      />
    );
  }
}
