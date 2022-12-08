# Dixa Messenger React Native Demo

## Description

A simple Messenger SDK running in React Native demo.
[See messenger-docs.dixa.io for documentation](https://messenger-docs.dixa.io/) details.

## Running the demo application

1. Make sure that React Native is set up. [For details see the documentation](https://reactnative.dev/docs/environment-setup).

2. Run `npm i` to install dependencies.

3. Make sure to provide a Messenger token to `MainApplication.java`, specifically `setApiKey()` method, [see `setApiKey` in the source code](./android/app/src/main/java/com/dixamessengerdemo/MainApplication.java#L70).

4. Running Android demo app: issue `npx react-native run-android` to build and launch.

5. Running iOS demo app: Issue `npx react-native run-ios` to build and launch.
