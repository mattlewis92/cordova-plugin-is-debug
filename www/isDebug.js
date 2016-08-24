var exec = require('cordova/exec');

exports.getIsDebug = function(success, error) {
  exec(success, error, "IsDebug", "getIsDebug", []);
};