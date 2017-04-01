import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import SD from '../helpers/ScreenDimensions';

import { Logo, FBLogin, TagLine } from '../components/LoginView';
import { loginUser } from '../actions/AuthActions';

class LoginView extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

  loginUser() {
    this.props.loginUser();
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
            callback={this.loginUser.bind(this)}
          />
        </View>
        <View style={styles.details}>
          <TagLine
            marginTop={SD.getHeight(10)}
          />
        </View>
      </View>
    );
  }
}

const borderStyle = {
  borderStyle: 'solid',
  borderWidth: 1
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: SD.getHeight(100),
    width: SD.getWidth(100)
  },

  login: Object.assign({
    height: SD.getHeight(55),
    width: SD.getWidth(100),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }, borderStyle),

  details: Object.assign({
    height: SD.getHeight(45),
    width: SD.getWidth(100),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }, borderStyle)
});

const mapStateToProps = (state) => {
  const { authenticated } = state.user;

  return { authenticated };
};

export default connect(mapStateToProps, { loginUser })(LoginView);
