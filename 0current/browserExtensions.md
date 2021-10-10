# all about building cross-browser extensions

## general stuff

### links

- general
  - [chrome + firefox extensions tool](https://github.com/mozilla/webextension-polyfill)
  - [ff web-ext webpack plugin](https://github.com/hiikezoe/web-ext-webpack-plugin/blob/master/README.md)
  
- firefox
  - [development portal](https://extensionworkshop.com/documentation/develop/)
  - [opensource dev tools](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)
  - [ff web-ext tool](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
  - [ff node pkg for scaffolding web exts](https://github.com/web-ext-labs/create-web-ext)

  - read first
    - [workflow overview](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/)
    - [webextension scaffolding via web](https://webextensions.in/)
    - [addon policies](https://extensionworkshop.com/documentation/publish/add-on-policies/)
    - [distrubtion agreement](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)
    - [packaging your firefox extension](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-build)
    - [linting](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-lint)
    - [webext cmd reference](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
    - [api access creds](http://addons-server.readthedocs.org/en/latest/topics/api/auth.html#access-credentials)
    - [obtain person access creds](https://addons.mozilla.org/developers/addon/api/key/)
    - [self host your ext](https://extensionworkshop.com/documentation/publish/self-distribution/)
    - [using google analytics in extensions](https://blog.mozilla.org/addons/2016/05/31/using-google-analytics-in-extensions/)
    - [building secure extensions](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)
    - [requesting user permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)
    - [data best practices](https://extensionworkshop.com/documentation/develop/best-practices-for-collecting-user-data-consents/)
    - [onboarding & offboarding usrs](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/)
    - [user experience best practices](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
    - [porting a google chrome extension](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)
    - [debugging](https://extensionworkshop.com/documentation/develop/debugging/)

  - extension tuts/docs
    - [onboarding flow](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/)
    - [user experience best practices](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
    - [build an accessible extension](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
    - [debug your ff extension](https://extensionworkshop.com/documentation/develop/debugging/)
    - [extensions and the add-on id](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)
    - [testing persistent and restart features](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
    - [testing permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/)
    - [cross browser compatibility matrix](https://extensionworkshop.com/documentation/develop/browser-compatibility/)
    - [third part library usage requirements](https://extensionworkshop.com/documentation/publish/third-party-library-usage/)
    - [addon ownership](https://extensionworkshop.com/documentation/publish/add-on-ownership/)
    - [create a captating listing](https://extensionworkshop.com/documentation/develop/create-an-appealing-listing/)
    - [make money from browser extensions](https://extensionworkshop.com/documentation/publish/make-money-from-browser-extensions/)
    -

  - extension API docs
    - [contextual identities](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)
    - [sidebar UI component](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
    - [find and highlight webpage text](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/find)
    - [perform search engine searches](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/search)
    - [update browser theme at runtime](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme)
    - [modify global browser settings](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)
    - [un/register content scripts at runtime](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)
    - [integrate with external services: protocol handlers](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)
    - [resolve domain names](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/dns)
    - [proxy web requests](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
    - [advanced security: keys and certs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11)
    - [sidebar action manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
    - [sidebar action api](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)
    - [page action manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
    - [page action api](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
    - [browser action manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
    - [browser action api](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)
    - [option pages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
    - [options ui manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)

### terminology

- webextensions api: provide a user-controlled, web-focused extension develpoment platform for extending features of firefox
  - offers cross-browser compatibility with chromium-based browsers (chrome, edge and opera)

## gotchas

- ff vs chromium based browsers
  - namespace: how to access javascript APIs
    - chromium: `chrome.POOP` e.g. `browser.browserAction.setIcon({path: "path/to/icon.png"});`
    - ff: `browser.POOP` e.g. `browser.browserAction.setIcon({path: "path/to/icon.png"});`
  - async APIs:
    - chromium: use callbacks
    - ff: promises
  - API support: the wild west
  - manifest key support: the wild west
- when do you need an addon-id
  - most importantly for any of the following APIs
    - storage.managed
    - storage.sync
    - identity.getRedirectURL
    - native messaging
    - pkcs11
    - runtime.onMessageExternal
    - runtime.onConnectExternal
  - using the `dictionaries` key in manifest.json
  
## development workflow

- use firefox dev edition for development & testing
- [create a developer account](https://extensionworkshop.com/documentation/publish/developer-accounts/)
- [enable the browser toolbox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox)
  - then open it the addon dev tools `ctrl alt shift i`
- [ensure you review the debugging docs](https://extensionworkshop.com/documentation/develop/debugging/)
- [if not using webext, install the extension temporarily](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [testing persistent & restart features](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
- [test permissions request](https://extensionworkshop.com/documentation/develop/test-permission-requests/)
- [publishing](https://extensionworkshop.com/documentation/publish/)
- [ensure your not violating any policies](https://extensionworkshop.com/documentation/publish/add-on-policies/)
- [signing and distributing](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [package the extension](https://extensionworkshop.com/documentation/publish/package-your-extension/)
- [distribute pre-release versions](https://extensionworkshop.com/documentation/publish/distribute-pre-release-versions/)
- [submitting an addon](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [source code submission](https://extensionworkshop.com/documentation/publish/source-code-submission/)
- [distribute an addon yourself](https://extensionworkshop.com/documentation/publish/self-distribution/)
- [build a cross browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)
- [understand differences in browser support for javascript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [review docs for javascript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [check the extension workshop for quickies](https://extensionworkshop.com/)
- [review example extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples)
  - [or better yet jump straight to the source](https://github.com/mdn/webextensions-examples)
- [review browser styles](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)

## examples

```js
  // chromium vs ff
  // ^ async apis
    // in chrome
    function logCookie(c) {
      if (chrome.extension.lastError) {
        console.error(chrome.extension.lastError);
      } else {
        console.log(c);
      }
    }
    chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);

    // in ff
    function logCookie(c) {
      console.log(c);
    }
    function logError(e) {
      console.error(e);
    }
    var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
    setCookie.then(logCookie, logError);
```
