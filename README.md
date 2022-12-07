# Dixa Messenger React Native Demo

## Description

A simple Messenger SDK running in React Native demo. As a part of the demo only Android is implemented.
See [documentation](https://messenger-docs.dixa.io/) for details.

## Running

Make sure that React Native is set up. For details see [documentation](https://reactnative.dev/docs/environment-setup).

Run `npm i` to install dependencies.

Issue `npx react-native run-android` to build and launch Android app.

Make sure to provide a Messenger token to `MainApplication.java`, specifically `setApiKey` method, [see](./android/app/src/main/java/com/dixamessengerdemo/MainApplication.java#L70).
