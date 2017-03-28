import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigation from './navigation';
import store from './store';

class mobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
