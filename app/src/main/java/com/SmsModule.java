package com.message_test;

import android.database.Cursor;
import android.net.Uri;
import android.provider.Telephony;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import org.json.JSONArray;
import org.json.JSONObject;
import android.util.Log;

public class SmsModule extends ReactContextBaseJavaModule {
    public SmsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SmsModule";
    }

    @ReactMethod
    public void fetchSms(Promise promise) {
        try {
            JSONArray smsArray = new JSONArray();
            Uri uri = Telephony.Sms.CONTENT_URI;
            Cursor cursor = getReactApplicationContext().getContentResolver().query(
                uri, new String[]{"_id", "address", "body"}, null, null, "date DESC"
            );

            if (cursor != null) {
                while (cursor.moveToNext()) {
                    JSONObject smsObject = new JSONObject();
                    smsObject.put("id", cursor.getString(0));
                    smsObject.put("address", cursor.getString(1));
                    smsObject.put("body", cursor.getString(2));
                    smsArray.put(smsObject);
                }
                cursor.close();
            }

            promise.resolve(smsArray.toString());
        } catch (Exception e) {
            promise.reject("ERROR", "Failed to fetch SMS", e);
        }
    }
    @ReactMethod
public void fetchSms(Promise promise) {
    try {
        JSONArray smsArray = new JSONArray();
        Uri uri = Telephony.Sms.CONTENT_URI;
        Cursor cursor = getReactApplicationContext().getContentResolver().query(
            uri, new String[]{"_id", "address", "body"}, null, null, "date DESC"
        );

        if (cursor != null) {
            while (cursor.moveToNext()) {
                JSONObject smsObject = new JSONObject();
                smsObject.put("id", cursor.getString(0));
                smsObject.put("address", cursor.getString(1));
                smsObject.put("body", cursor.getString(2));
                smsArray.put(smsObject);
            }
            cursor.close();
        }

        Log.d("SmsModule", "Fetched SMS: " + smsArray.toString()); // 添加日志输出
        promise.resolve(smsArray.toString());
    } catch (Exception e) {
        Log.e("SmsModule", "Error fetching SMS", e); // 错误日志输出
        promise.reject("ERROR", "Failed to fetch SMS", e);
    }
}
}
