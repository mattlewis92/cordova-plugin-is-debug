var exec = require('cordova/exec');

exports.getIsDebug = function(success, error) {
  exec(function(isDebug) {
    success(!!isDebug); // workaround for android not being able to booleans, and only 1 or 0 instead
  }, error, "IsDebug", "getIsDebug", []);
};