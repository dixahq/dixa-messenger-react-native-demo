# Dixa Messenger React Native Demo

## Description

A simple React Native demo application that runs the Dixa Messenger SDK.
[See messenger-docs.dixa.io for documentation](https://messenger-docs.dixa.io/) details.

<img width="634" alt="preview" src="https://user-images.githubusercontent.com/6588469/207166648-edb59ae8-76d0-49dc-bada-601828c7c19e.png">

### Before you start

You will need the following to be able to run this demo locally.:

1. **Admin access to an Dixa organization**. If you don't have access to an organization [contact Dixa](https://www.dixa.com/free-trial/) to get it.

2. **A Dixa Messenger Token**. Go to your Dixa organization **Settings** -> **Messenger** -> **Edit the Appearance &amp; Setup**. Click **Setup** -> **Mobile** -> **Copy Messenger Token** ([See documentation here](https://support.dixa.help/en/articles/825-how-to-create-a-dixa-messenger) and the five steps in the image below).

<img width="1193" alt="Screenshot 2022-12-12 at 21 02 43" src="https://user-images.githubusercontent.com/6588469/207162087-3132c0b8-247e-43a4-9d74-92decabe1381.png">

### Running Android demo application

1. Make sure that React Native is set up. [For details see the React native documentation for environment setup](https://reactnative.dev/docs/environment-setup).

2. Clone this project and run `npm i` to install dependencies.

3. For Android make sure to provide a Messenger token to `MainApplication.java`, specifically [`setApiKey("<YOUR_DIXA_MESSENGER_TOKEN>")`](./android/app/src/main/java/com/dixamessengerdemo/MainApplication.java#L70) method.

4. Running Android demo app: issue `npx react-native run-android` to build and launch.

### Running iOS demo application

1. Make sure that React Native is set up. [For details see the React native documentation for environment setup](https://reactnative.dev/docs/environment-setup).

2. Clone this project and run `npm i` to install dependencies.

3. Run `bundle install` to install gems including `cocoapods`

4. cd into the `ios` directory and run `pod install` to install the required `cocoapods` for this SDK.

5. Open `.xcworkspace` file in `dixa-messenger-react-native-demo/ios` directory with [Xcode](https://apps.apple.com/us/app/xcode/id497799835).

6. In Xcode add a package dependency to your project with the following URL `https://github.com/dixahq/ios-messenger` using Swift package manager [see how here](https://alexandersandberg.com/articles/managing-package-dependencies-with-swift-package-manager-in-xcode/).

5. For iOS make sure to provide a Messenger token to `AppDelegate.mm` [`configureWithMessengerToken: @"<YOUR_DIXA_MESSENGER_TOKEN>"`](./ios/DixaMessengerDemo/AppDelegate.mm#L62).

6. Running iOS demo app: Issue `npx react-native run-ios` to build and launch.
