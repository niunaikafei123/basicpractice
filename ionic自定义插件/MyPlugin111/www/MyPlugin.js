var exec = require('cordova/exec');

//exports.coolMethod = function(arg0, success, error) {
//  exec(success, error, "MyPlugin", "coolMethod", [arg0]);
//};
//cordova.exec(function(winParam) {},
//           function(error) {},
//           "service",
//           "action",
var  MyPlugin = function() {	
};
//
//MyPlugin.create = function(success) {
//	exec(success, null, "MyPlugin", "create", []);
//};
//
//MyPlugin.enter = function(success, pattern) {
//	exec(success, null, "MyPlugin", "enter", [pattern]);
//};
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