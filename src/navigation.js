import { StackNavigator } from 'react-navigation';

import InterestsView from './views/InterestsView';

export default StackNavigator({
  InterestsView: { screen: InterestsView }
}, {
  headerMode: 'screen'
});
