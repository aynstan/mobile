import { StackNavigator } from 'react-navigation';

import InterestsView from './views/InterestsView';
import CreateQuestionView from './views/CreateQuestionView';

export const Views = {
	Interests: 'InterestsView',
	CreateQuestion: 'CreateQuestionView',
	Chat: 'CreateQuestionView'
};

export default StackNavigator({
	InterestsView: { screen: InterestsView },
	CreateQuestionView: { screen: CreateQuestionView }
}, {
	headerMode: 'screen'
});
