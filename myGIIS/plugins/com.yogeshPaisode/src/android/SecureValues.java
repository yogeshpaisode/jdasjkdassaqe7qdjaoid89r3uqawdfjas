/**
 *
 * @author yogesh
 */
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.*;

/**
 *
 * @author yogesh
 */
public class SecureValues extends CordovaPlugin {

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        JSONObject j=new JSONObject();
        j.put("gsf_appname", "GSF App Android");
        j.put("gsf_clientid", "7351C2CF-5EA8-415E-8DF7-E1A964292301");
        j.put("gsf_privatekey", "19FAA6D6-314C-4E7C-9C8F-580585989226");
        j.put("debug_URL", "http://192.168.0.43:111/gsfapi/");
        j.put("live_URL", "");
        System.out.println(j.toString());
        callbackContext.success(j);
        return true; //To change body of generated methods, choose Tools | Templates.
    }
}

