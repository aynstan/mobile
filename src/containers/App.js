import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWithNavigation from '../navigation';

import StatusBarSize from '../helpers/StatusBarSize';

import LoginView from '../views/LoginView';

class App extends Component {

	static propTypes = {
		authenticated: React.PropTypes.bool
	}

	componentDidMount() {
		StatusBarSize.addEventListeners();
	}

	componentWillUnmount() {
		StatusBarSize.removeEventListeners();
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
