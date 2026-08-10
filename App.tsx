import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {openDixaMessenger} from './src/dixaMessengerModule';

const Colors = {
  black: '#000',
  darker: '#222',
  lighter: '#F3F3F3',
  white: '#FFF',
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const containerStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={containerStyle}>
        <Button title="Open Messenger" onPress={openDixaMessenger} />
      </View>
    </SafeAreaView>
  );
}

export default App;
