package com.message_test;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Arrays;
import java.util.List;

public class SmsPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.asList(new SmsModule(reactContext));
    }

    @Override
    public List<ViewManager<?, ?>> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.asList();
    }
}
