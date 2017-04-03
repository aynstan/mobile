import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWithNavigation from '../navigation';

import LoginView from '../views/LoginView';

class App extends Component {

	static propTypes = {
		authenticated: React.PropTypes.bool
	}

	render() {
		const { authenticated } = this.props;
		if (authenticated) {
			return <AppWithNavigation />;
		}
		return <LoginView />;
	}
}

export default connect(state => ({
	authenticated: state.user.authenticated
}))(App);
