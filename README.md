# Dixa Messenger React Native Demo

## Description

A simple React Native demo application that runs the Dixa Messenger SDK.
[See messenger-docs.dixa.io for documentation](https://messenger-docs.dixa.io/) details.

### Running Android demo application

1. Make sure that React Native is set up. [For details see the React native documentation for environment setup](https://reactnative.dev/docs/environment-setup).

2. Clone this project and run `npm i` to install dependencies.

3. For Android make sure to provide a Messenger token to `MainApplication.java`, specifically [`setApiKey("<YOUR_DIXA_MESSENGER_TOKEN>")`](./android/app/src/main/java/com/dixamessengerdemo/MainApplication.java#L70) method.

4. Running Android demo app: issue `npx react-native run-android` to build and launch.

### Running iOS demo application

1. Make sure that React Native is set up. [For details see the React native documentation for environment setup](https://reactnative.dev/docs/environment-setup).

2. Clone this project and run `npm i` to install dependencies.

3. For iOS make sure to provide a Messenger token to `AppDelegate.mm` [`configureWithMessengerToken: @"<YOUR_DIXA_MESSENGER_TOKEN>"`](./ios/DixaMessengerDemo/AppDelegate.mm#L62).

4. Running iOS demo app: Issue `npx react-native run-ios` to build and launch.
