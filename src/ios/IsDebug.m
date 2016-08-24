/********* IsDebug.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "IsDebug.h"

@implementation IsDebug

- (void)getIsDebug:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    #ifdef DEBUG
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK  messageAsBool:(true)];
    #else
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK  messageAsBool:(false)];
    #endif

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end