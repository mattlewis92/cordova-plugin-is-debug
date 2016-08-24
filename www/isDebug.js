var exec = require('cordova/exec');

exports.getIsDebug = function(success, error) {
  exec(function(isDebug) {
    console.log('ORIGINAL VALUE', isDebug);
    success(!!isDebug); // workaround for android not being able to return actual 1 or 0
  }, error, "IsDebug", "getIsDebug", []);
};