import {NativeModules, Platform} from 'react-native';

const {DixaMessengerModuleAndroid, DixaMessengerModuleIos} = NativeModules;
export function openDixaMessenger() {
  switch (Platform.OS) {
    case 'android': {
      DixaMessengerModuleAndroid.openMessenger();
      break;
    }
    case 'ios': {
      DixaMessengerModuleIos.openMessenger();
      break;
    }
    default: {
      console.error(`Unsupported platform ${Platform.OS}`);
      break;
    }
  }
}
