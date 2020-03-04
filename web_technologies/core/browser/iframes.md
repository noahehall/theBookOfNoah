# iframes
  - Sandboxing third-party widget/applications
    1. To prevent malicious developers from stealing identity cookies, Facebook requires third party application to be hosted in IFrames (unless you're using FBML).
    2. http://www.ccheever.com/blog/?p=10
  - Display banners
    1. Most ad networks offer publisher a one line iframe code for developers to drop into their website.
  - Cross domain communication
    1. Facebook Connect, for example, allows websites to query Facebook through the use of hidden IFrames.
  - Comet (bidirectional channel between browser and web server)
    1. Applications like Gmail Chat, Facebook Chat, Etherpad, and Quora utilizes comet to allow servers to stream data and commands back to the browser without a page refresh. Hidden IFrames is one of the ways used to enable this.

