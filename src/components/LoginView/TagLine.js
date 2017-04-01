import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TagLine extends Component {

  static propTypes = {
    style: React.PropTypes.object
  }

  render() {
    const borderStyle = {
      borderStyle: 'solid',
      borderWidth: 1
    };

    const defaultStyle = {
      fontSize: 18,
      fontWeight: 'bold'
    };

    const { marginTop } = this.props;

    return (
      <Text
        style={Object.assign(borderStyle, defaultStyle, { marginTop })}
      >
      Met interesting people
      </Text>
    );
  }
}
