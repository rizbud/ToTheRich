import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: (token) => {
    console.log('TOKEN:', token);
  },
  onNotification: (notification) => {
    console.log('NOTIFICATION:', notification);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: false,
});

PushNotification.createChannel({
  channelId: 'to-the-rich-app', // (required)
  channelName: 'To The Rich', // (required)
  channelDescription: 'A channel to categorise your notifications',
});

export default PushNotification;
