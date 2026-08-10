package com.dixamessengerdemoapp

import android.app.Application
import com.dixa.messenger.DixaMessenger
import com.dixa.messenger.LogLevel
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList =
        PackageList(this).packages.apply {
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // add(MyReactNativePackage())
          add(DixaMessengerPackage())
        },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)

    val configuration =
      DixaMessenger.Configuration.Builder()
        .setApiKey("<YOUR_DIXA_MESSENGER_TOKEN>")
        .setLogLevel(LogLevel.ALL)
        .build()
    DixaMessenger.init(configuration, this)
  }
}
