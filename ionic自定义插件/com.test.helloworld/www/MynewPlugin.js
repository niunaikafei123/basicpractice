//var exec = require('cordova/exec');
//
//exports.coolMethod = function(arg0, success, error) {
//  exec(success, error, "MynewPlugin", "coolMethod", [arg0]);
//};


var exec = require('cordova/exec');
var  MyPlugin = function() {	
};
MyPlugin.func1 = function(HTMLParagraphElement,success,error){
	exec(success, error, "MyPlugin", "func1", [arg0]);
}
MyPlugin.func2 = function(arg0, arg1, success, error) {
    exec(success, error, "MyPlugin", "func2", [arg0,arg1]);
};
MyPlugin.func3 = function(success, error) {
    exec(success, error, "MyPlugin", "func3",[]);
};
module.exports = MyPlugin;
