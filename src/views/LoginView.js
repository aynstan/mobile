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

export default class LoginView extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <FBLogin />
        <TagLine />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
