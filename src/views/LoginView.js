import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Logo,
  FBLogin,
  TagLine
} from '../components/LoginView';

import SD from '../helpers/ScreenDimensions';

export default class LoginView extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <Logo
            width={SD.getWidth(80)}
            height={SD.getHeight(20)}
          />
          <FBLogin
            width={SD.getWidth(80)}
            height={SD.getHeight(10)}
          />
        </View>
        <View style={styles.tagLine}>
          <TagLine />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: SD.getHeight(100),
    width: SD.getHeight(100)
  },
  login: {
    borderStyle: 'solid',
    borderWidth: 5,
    height: SD.getHeight(50),
    width: SD.getWidth(100),
    alignItems: 'center'
  },
  tagLine: {
    borderStyle: 'solid',
    borderWidth: 5,
    height: SD.getHeight(50),
    width: SD.getWidth(100)
  }
});
