import { Dimensions } from 'react-native';

class ScreenDimensions {
	constructor(dimensions) {
		this.width = dimensions.width;
		this.height = dimensions.height;
	}

	getWidth(percentage) {
		return (this.width * percentage) / 100;
	}

	getHeight(percentage) {
		return (this.height * percentage) / 100;
	}
}

export default new ScreenDimensions(Dimensions.get('window'));
