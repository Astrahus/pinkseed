import OneSignal from 'react-native-onesignal';

const onReceived = (notification)=> {
    console.log("Notification received: ", notification);
}

OneSignal.addEventListener('received', onReceived);

console.log('loaded')