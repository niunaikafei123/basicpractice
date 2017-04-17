//package com.test.helloworld;
//
//import org.apache.cordova.CordovaPlugin;
//import org.apache.cordova.CallbackContext;
//
//import org.json.JSONArray;
//import org.json.JSONException;
//import org.json.JSONObject;
//
///**
// * This class echoes a string called from JavaScript.
// */
//public class MynewPlugin extends CordovaPlugin {
//
//  @Override
//  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
//      if (action.equals("coolMethod")) {
//          String message = args.getString(0);
//          this.coolMethod(message, callbackContext);
//          return true;
//      }
//      return false;
//  }
//
//  private void coolMethod(String message, CallbackContext callbackContext) {
//      if (message != null && message.length() > 0) {
//          callbackContext.success(message);
//      } else {
//          callbackContext.error("Expected one non-empty string argument.");
//      }
//  }
//}

package com.zjweitong;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.widget.Toast;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("func1")) {
 			String message = args.getString(0);
            Toast.makeText(cordova.getActivity(), "func1传过来的值是："+message, Toast.LENGTH_SHORT).show();
            callbackContext.success("成功的调用了func1");
            return true;
        }
		else if(action.equals("func2")){
			String message0 = args.getString(0);
            String message1 = args.getString(1);
            Toast.makeText(cordova.getActivity(), "func2传过来的值是："+message0+message1, Toast.LENGTH_SHORT).show();
            callbackContext.success("成功的调用了func2");
            return true;
		}
		else{
			callbackContext.error("错误的调用");
            return false;
		}
    }
}

