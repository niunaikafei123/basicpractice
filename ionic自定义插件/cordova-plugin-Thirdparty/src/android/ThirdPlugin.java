package com.zjweitong;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;
import android.app.Activity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.widget.ImageView;
import android.widget.TextView;

import com.third.sdk.ThirdActivity;

public class ThirdPlugin extends CordovaPlugin {
	private WebView wv_service;
	@Override
	    protected void onCreate(Bundle savedInstanceState) {
	        super.onCreate(savedInstanceState);
	        setContentView(R.layout.activity_main);
	        wv_service = (WebView)findViewById(R.id.wv_service);
	        wv_service.getSettings().setJavaScriptEnabled(true);
	        wv_service.loadUrl(Config.WEB_SERVICE);
	    }	
	@JavascriptInterface
	    public void toActivity(String activityName) {
	       //此处应该定义常量对应，同时提供给h5页面编写者
			if(TextUtils.equals(activityName,'a')){
				Toast.makeText(MainActivity.this,"gotoActivity A"+activityName,0).show();
			}else{
				Toast.makeText(MainActivity.this,"gotoActivity B"+activityName,0).show();
			}
	    }

}