# cordova-plugin-is-debug
A cordova plugin to detect if the app is running in debug mode or not. Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user. Common use cases include:
* using a different API endpoint for development
* using a different push notification certificate for development and production

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
