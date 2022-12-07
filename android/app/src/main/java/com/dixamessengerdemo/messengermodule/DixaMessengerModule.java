package com.dixamessengerdemo.messengermodule;

import android.util.Log;

import androidx.annotation.NonNull;

import com.dixa.messenger.DixaMessenger;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Objects;

public class DixaMessengerModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext ctx;

    DixaMessengerModule(ReactApplicationContext context) {
        super(context);
        ctx = context;
    }

    @ReactMethod
    public void openMessenger() {
        Log.d(this.getClass().getName(), "openMessenger");

        DixaMessenger.openMessenger(Objects.requireNonNull(ctx.getCurrentActivity()));
    }

    @NonNull
    @Override
    public String getName() {
        return "DixaMessengerModuleAndroid";
    }
}
