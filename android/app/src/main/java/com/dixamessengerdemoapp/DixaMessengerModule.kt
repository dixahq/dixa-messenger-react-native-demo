package com.dixamessengerdemoapp

import android.app.Activity
import android.util.Log
import com.dixa.messenger.DixaMessenger
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Objects


class DixaMessengerModule internal constructor(private val ctx: ReactApplicationContext) :
    ReactContextBaseJavaModule(ctx) {

    @ReactMethod
    fun openMessenger() {
        Log.d(this.javaClass.name, "openMessenger")

        DixaMessenger.openMessenger(Objects.requireNonNull<Activity>(ctx.currentActivity))
    }

    override fun getName(): String {
        return "DixaMessengerModuleAndroid"
    }

}