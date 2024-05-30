# Dixa Messenger React Native Demo

## Description

This is a simple React Native demo application that showcases how to use the Dixa Messenger SDK.
For detailed documentation, visit [Dixa Messenger Docs](https://messenger-docs.dixa.io/).

<img width="634" alt="preview" src="https://user-images.githubusercontent.com/6588469/207166648-edb59ae8-76d0-49dc-bada-601828c7c19e.png">

### Before you start

To run this demo locally, you will need:

1. **Admin **access to **a** Dixa organization**. If you don't have access, [contact Dixa](https://www.dixa.com/free-trial/) to get it.

2. **A Dixa Messenger Token**. Obtain it from your Dixa organization by navigating to Settings -> Messenger -> Edit the Appearance & Setup -> Setup -> Mobile -> Copy Messenger Token. For more details, see the [documentation](https://support.dixa.help/en/articles/825-how-to-create-a-dixa-messenger).

<img width="1193" alt="Screenshot 2022-12-12 at 21 02 43" src="https://user-images.githubusercontent.com/6588469/207162087-3132c0b8-247e-43a4-9d74-92decabe1381.png">

### Running the Demo Application on Android

1. Ensure React Native is set up. Refer to the [React Native documentation for environment setup](https://reactnative.dev/docs/environment-setup) for details.

2. Clone this project and run `npm install` to install dependencies.

3. Configure the Dixa SDK in the `OnCreate` method of your Application class. See [MainApplication.java](./android/app/src/main/java/com/dixamessengerdemo/MainApplication.java#L70) for more details.

    ```kotlin
    DixaMessenger.Configuration config = new DixaMessenger.Configuration.Builder()
              .setApiKey("<YOUR_DIXA_MESSENGER_TOKEN>")
              .setLogLevel(LogLevel.ALL)
              .build();
    ```

4. To build and launch the Android demo app, run `npx react-native run-android`.

### Running the Demo Application on iOS

1. Ensure React Native is set up. Refer to the [React Native documentation for environment setup](https://reactnative.dev/docs/environment-setup) for details.

2. Clone this project and run `npm install` to install dependencies.

3. Run `bundle install` to install gems, including `cocoapods`.

4. Navigate to the `ios` directory and run `pod install` to install the required CocoaPods for this SDK.

5. Open the `.xcworkspace` file located in the `dixa-messenger-react-native-demo/ios` directory with [Xcode](https://apps.apple.com/us/app/xcode/id497799835).

6. In Xcode, add a package dependency to your project using the URL https://github.com/dixahq/ios-messenger with the Swift Package Manager. For guidance, refer to [Managing Package Dependencies with Swift Package Manager in Xcode](https://alexandersandberg.com/articles/managing-package-dependencies-with-swift-package-manager-in-xcode/).

7. For iOS make sure to provide a Messenger token to `AppDelegate.mm` [`configureWithMessengerToken: @"<YOUR_DIXA_MESSENGER_TOKEN>"`](./ios/DixaMessengerDemo/AppDelegate.mm#L62).

7. Configure the Dixa SDK in the `didFinishLaunchingWithOptions` method of your AppDelegate class. See [AppDelegate.mm](./ios/DixaMessengerDemo/AppDelegate.mm#L62) for more details.

    ```swift
    [Messenger 
        configureWithMessengerToken: @"<YOUR_DIXA_MESSENGER_TOKEN>" 
        logLevel:3 
        pushEnvironment:1
    ];
    ```


8. To build and launch the iOS demo app, run `npx react-native run-ios`.