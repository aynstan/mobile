import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SD from '../helpers/ScreenDimensions';

import Menu from '../components/Shared/Menu';

export default class LoginView extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: SD.getHeight(100),
    width: SD.getWidth(100)
  },
});
