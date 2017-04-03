import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import App from './containers/App';

class mobile extends Component {
	render() {
		return (
        <Provider store={store}>
            <App />
        </Provider>
		);
	}
}

AppRegistry.registerComponent('mobile', () => mobile);
