import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {openDixaMessenger} from './dixaMessengerModule';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Dixa Messenger Demo</Text>
      <TouchableOpacity style={styles.button} onPress={openDixaMessenger}>
        <Text>Open Messenger</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5345D0',
    padding: 10,
  },
});

export default App;
