# cordova-plugin-is-debug
A cordova plugin to detect if the device is running in debug mode or not.

## Install

```
cordova plugin add cordova-plugin-is-debug
```

## Usage
```
cordova.plugins.IsDebug.getIsDebug(function(isDebug) {
    console.log('Is debug:', isDebug);
}, function(err) {
    console.error(err);
});
```

## Supported platforms
* iOS
* Android

## Credits

* https://mobiarch.wordpress.com/2014/02/19/detecting-debug-and-release-builds-in-ios-and-android/
* https://github.com/ozexpert/cordova-plugin-device-meta

## License
MIT