import { Platform } from 'react-native';

const { StatusBarIOS, StatusBar, NativeModules } = require('react-native');

const { StatusBarManager } = NativeModules;

const DEVICE_STATUS_BAR_HEIGHT_EVENTS = {
  willChange: 'statusBarFrameWillChange',
  didChange: 'statusBarFrameDidChange',
  change: 'statusBarFrameDidChange',
};

const statusBarSizeHandlers = {};

/**
 * `StatusBarSize` can tell you what the current height of the status bar
 * is, so that you can adjust your layout accordingly when a phone call
 * notification comes up, for example.
 *
 * ### Basic Usage
 *
 * To see the current height, you can check `StatusBarSize.currentHeight`, which
 * will be kept up-to-date. However, `currentHeight` will be null at launch
 * while `StatusBarSize` retrieves it over the bridge.
 *
 * ```
 * getInitialState: function() {
 *   return {
 *     currentStatusBarHeight: StatusBarSize.currentHeight,
 *   };
 * },
 * componentDidMount: function() {
 *   StatusBarSize.addEventListener('willChange', this._handleStatusBarFrameWillChange);
 *   StatusBarSize.addEventListener('didChange', this._handleStatusBarFrameDidChange);
 * },
 * componentWillUnmount: function() {
 *   StatusBarSize.removeEventListener('willChange', this._handleStatusBarFrameWillChange);
 *   StatusBarSize.removeEventListener('didChange', this._handleStatusBarFrameDidChange);
 * },
 * _handleStatusBarFrameWillChange: function(upcomingStatusBarHeight) {
 *   console.log('Upcoming StatusBar Height:' + upcomingStatusBarHeight);
 * },
 * _handleStatusBarFrameDidChange: function(currentStatusBarHeight) {
 *   this.setState({ currentStatusBarHeight, });
 * },
 * render: function() {
 *   return (
 *     <Text>Current status bar height is: {this.state.currentStatusBarHeight}</Text>
 *   );
 * },
 * ```
 *
 * Open up the phone call status bar in the simulator to see it change.
 */

const StatusBarSize = {

  /**
   * Add a handler to Status Bar size changes by listening to the event type
   * and providing the handler.
   *
   * Possible event types: change (deprecated), willChange, didChange
   */
  addEventListener(
    type: string,
    handler: Function
  ) {
    statusBarSizeHandlers[handler] = StatusBarIOS.addListener(
      DEVICE_STATUS_BAR_HEIGHT_EVENTS[type],
      (statusBarData) => {
        handler(statusBarData.frame.height);
      }
    );
  },

  /**
   * Remove a handler by passing the event type and the handler
   */
  removeEventListener(
    type: string,
    handler: Function
  ) {
    if (!statusBarSizeHandlers[handler]) {
      return;
    }
    statusBarSizeHandlers[handler].remove();
    statusBarSizeHandlers[handler] = null;
  },

  currentHeight: (null : ?number),
};

StatusBarIOS.addListener(
  DEVICE_STATUS_BAR_HEIGHT_EVENTS.didChange,
  (statusBarData) => {
    StatusBarSize.currentHeight = statusBarData.frame.height;
  }
);

if (Platform.OS === 'ios') {
  StatusBarManager.getHeight(
    (statusBarFrameData) => {
      StatusBarSize.currentHeight = statusBarFrameData.height;
    }
  );
} else if (Platform.OS === 'android') {
  StatusBarSize.currentHeight = StatusBar.currentHeight;
} else {
  StatusBarSize.currentHeight = 0;
}

export default StatusBarSize;
