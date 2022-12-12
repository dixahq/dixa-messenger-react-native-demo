#import <DixaMessenger/DixaMessenger.h>
#import "RCTDixaMessengerModule.h"
#import <React/RCTUtils.h>
#import <React/RCTLog.h>

@implementation RCTDixaMessengerModule

RCT_EXPORT_MODULE(DixaMessengerModuleIos);

// Overriden to run from main queue
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(openMessenger)
{
  UIViewController *controller = RCTPresentedViewController();
  if (controller == nil) {
    RCTLogError(@"Tried to display Dixa Messenger but there is no application window.");
    return;
  }

  [Messenger openMessengerFrom:controller completion:nil];
}

@end
