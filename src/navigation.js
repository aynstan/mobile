import { StackNavigator } from 'react-navigation';

import LoginView from './views/LoginView';

export default StackNavigator({
  LoginView: { screen: LoginView }
}, {
  headerMode: 'screen'
});
