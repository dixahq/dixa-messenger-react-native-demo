import {NativeModules, Platform} from 'react-native';

const {DixaMessengerModuleAndroid} = NativeModules;

export function openDixaMessenger() {
  switch (Platform.OS) {
    case 'android': {
      DixaMessengerModuleAndroid.openMessenger();
      break;
    }
    default: {
      console.error(`Unsupported platform ${Platform.OS}`);
      break;
    }
  }
}
