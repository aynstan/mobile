import { Platform } from 'react-native';

const { StatusBar, StatusBarIOS, NativeModules } = require('react-native');

const { StatusBarManager } = NativeModules;

const DEVICE_STATUS_BAR_HEIGHT_EVENTS = [
	'statusBarFrameWillChange',
	'statusBarFrameDidChange'
];

/**
 * Open up the phone call status bar in the simulator to see it change.
 */

class StatusBarSize {

	constructor() {
		this.statusBarSizeHandlers = {};

		if (Platform.OS === 'ios') {
			StatusBarManager.getHeight((statusBarFrameData) => {
				this.currentHeight = statusBarFrameData.height;
			});
		} else if (Platform.OS === 'android') {
			this.currentHeight = StatusBar.currentHeight;
		} else {
			this.currentHeight = 0;
		}
	}

	addEventListeners() {
		DEVICE_STATUS_BAR_HEIGHT_EVENTS.forEach((deviceStatusBarHeightEvent) => {
			this.statusBarSizeHandlers[deviceStatusBarHeightEvent] =
      StatusBarIOS.addListener(
        deviceStatusBarHeightEvent,
        (statusBarData) => {
	this.currentHeight = statusBarData.frame.height;
}
      );
		});
	}

	removeEventListeners() {
		DEVICE_STATUS_BAR_HEIGHT_EVENTS.forEach((deviceStatusBarHeightEvent) => {
			this.statusBarSizeHandlers[deviceStatusBarHeightEvent].remove();
			this.statusBarSizeHandlers[deviceStatusBarHeightEvent] = null;
		});
	}

}

export default new StatusBarSize();
