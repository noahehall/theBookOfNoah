# CACHING

  - **what is it**
    - temporarily storing content/responses from previous requests, core part of content delivery strategy implemented with http protocol
    - components throughout the delivery path can cache items to speed up subsequent requests, subject to caching policies declared for the content
  - **benefits**
    - decreased network costs: when content is cached closer to consumer, requests will not cause as much additional network activity beyond the cache
    - improved responsiveness: caching enables content to be retrieved faster
    - increased performance on the same hardware: for the server where the content originated, more performance can be squeezed by allowing aggressive caching.
    - availability of content during network interruptions: with certain caching policies, caching can be used to serve content to end users when it may be unavailable from origin servers
  - **terminology**
    - origin server: original location of content, responsible for serving all content that cannot be retrieved from a cache along the request route and for setting the caching policy for all content
    - cache hit ratio: a cache's affectiveness measured in terms of its cache hit ratio or hit rate
    + cached requests / total requests
    + a high cache hit ratio is usually the desired outcome
    - freshness: whether an item within a cache is still considered a candidate to serve to a client
    + content in a cache will only be used to respond if it is within the freshness time frame specified by the caching policy
    - stale content: items in cache expire according to the cache freshness settings in the cache policy. expired content is stale
    + origin servers must be re-contacted to retrieve the new content or at least verify that the cached content is still accurate
    - validation: Stale items in the cache can be validated in order to refresh their expiration time. Validation involves checking in with the origin server to see if the cached content still represents the most recent version of item.
    - Invalidation: removing content from the cache before its specified expiration date. This is necessary if the item has been changed on the origin server and having an outdated item in cache would cause significant issues for the client.
  - **types of caches**
    - application cache:
    - memory cache:
    - Intermediary caching proxies: Any server in between the client and your infrastructure can cache certain content as desired. These caches may be maintained by ISPs or other independent parties.
    - Reverse Cache: Your server infrastructure can implement its own cache for backend services. This way, content can be served from the point-of-contact instead of hitting backend servers on each request.
    - web/browser cache: Web browsers themselves maintain a small cache.
      + core design of the http protocol meant to minimize network traffic while improving the perceived responsiveness of the system as a whole
      + *how it works*
        1. caching the HTTP responses for requests according to specified rules
        2. subsequent requests for cached content are fullfilled from a cache closer tot he user instead of sending the requests all the way back tot he web server
  - **what can be cached**:
    - cache friendly items: anything that is static/near-static
      + images, especially static images like icons, logos, etc
      + stylesheets
      + javascript files
      + downloadable content
      + media files
    - cache unfriendly items: anything that is dynamic, or is changed frequently, must be cached with care
      + html pages
      + rotating images, e.g. user profile pics
      + content requested within authentication cookies
    - cache hatred items: things you should never cache
      + assets related to sensitive data ( e.g. banking )
      + user specific content and frequently changed
  - **cache headers**
    - caching policy: determined by content owner and specified via specific http headers
      + caching entity decides how much to cache, but never more than specified by caching policy
    - Http headers related to caching
      + Expires: sets a time in the future when the content will expire. replaced by Cache-Control: max-age, but this should still be used as fallback for old browsers.
        1. Any requests for the same content will have to go back to the origin server.
      + Cache-Control: replacement for the Expires header but is best to use both
        - enumerated values:
          + **for all cache types**
            1. no-cache: This instruction specifies that any cached content must be re-validated on each request before being served to a client. This, in effect, marks the content as stale immediately, but allows it to use revalidation techniques to avoid re-downloading the entire item again.
            2. no-store: This instruction indicates that the content cannot be cached in any way. This is appropriate to set if the response represents sensitive data.
            3. public: This marks the content as public, which means that it can be cached by the browser and any intermediate caches. For requests that utilized HTTP authentication, responses are marked private by default. This header overrides that setting.
            4. private: This marks the content as private. Private content may be stored by the user's browser, but must not be cached by any intermediate parties. This is often used for user-specific data.
            5. max-age: This setting configures the maximum age that the content may be cached before it must revalidate or re-download the content from the origin server. In essence, this replaces the Expires header for modern browsing and is the basis for determining a piece of content's freshness. This option takes its value in seconds with a maximum valid freshness time of one year (31536000 seconds).
            6. must-revalidate: This indicates that the freshness information indicated by max-age, s-maxage or the Expires header must be obeyed strictly. Stale content cannot be served under any circumstance. This prevents cached content from being used in case of network interruptions and similar scenarios.
            7. no-transform: This option tells caches that they are not allowed to modify the received content for performance reasons under any circumstances. This means, for instance, that the cache is not able to send compressed versions of content it did not receive from the origin server compressed and is not allowed.
          + **only for intermediary caches**
            1. s-maxage: This is very similar to the max-age setting, in that it indicates the amount of time that the content can be cached. The difference is that this option is applied only to intermediary caches. Combining this with the above allows for more flexible policy construction.
            2. proxy-revalidate: This operates the same as the above setting, but only applies to intermediary proxies. In this case, the user's browser can potentially be used to serve stale content in the event of a network interruption, but intermediate caches cannot be used for this purpose.
          + **gotchas**
            1. *no-cache* and *no-store* should not be used together
              - if they are, *no-store* wins
            2. For responses to unauthenticated requests, *public* is implied
            3. For responses to authenticated requests, *private* is implied
      + Etag: used with cache validation. The origin will either tell the cache that the content is the same, or send the updated content (with the new Etag).
        1. The origin can provide a unique Etag for an item when it initially serves the content.
        2. When a cache needs to validate the content it has on-hand upon expiration, it can send back the Etag it has for the content.
      + Last-Modified: This header specifies the last time that the item was modified.
        1. This may be used as part of the validation strategy to ensure fresh content.
      + Content-Length: Certain software will refuse to cache content if it does not know in advanced the size of the content it will need to reserve space for.
      + Vary: A cache typically uses the requested host and the path to the resource as the key with which to store the cache item. this provides you with the ability to store different versions of the same content at the expense of diluting the entries in the cache.
        1. used to tell caches to pay attention to an additional header when deciding whether a request is for the same item.
        2. This is most commonly used to tell caches to key by the Accept-Encoding header as well, so that the cache will know to differentiate between compressed and uncompressed content.
      + Accept-Encoding: This is needed to correctly serve items to browsers that cannot handle compressed content and is necessary in order to provide basic usability.
      + User-Agent:
  - caching policies:
    - purpose:
      1. aim to balance between implementing long-term caching and responding to the demands of a changing site.
      2. keep the cache hit-ration as high as possible while never serving stale content to users
    - issues:
      1. dynamically generated user content, sensitive data, should not be cached
    - questions:
      1. how should data that is not yet passed its expiration date, but has become stale due to new content availibity, be handled?
    - recommendations:
      + split your content into 3 buckets: The goal is to move content into the first categories when possible while maintaining an acceptable level of accuracy.
        1. Aggressively cached items
        2. Cached items with a short freshness time and the ability to re-validate
        3. Items that should not be cached at all
      + general recs
        1. Establish specific directories for images, css, and shared content: Placing content into dedicated directories will allow you to easily refer to them from any page on your site.
        2. Use the same URL to refer to the same items: Since caches key off of both the host and the path to the content requested, ensure that you refer to your content in the same way on all of your pages.
        3. Use CSS image sprites where possible: CSS image sprites for items like icons and navigation decrease the number of round trips needed to render your site and allow your site to cache that single sprite for a long time.
        4. Host scripts and external resources locally where possible: If you utilize javascript scripts and other external resources, consider hosting those resources on your own servers if the correct headers are not being provided upstream. Note that you will have to be aware of any updates made to the resource upstream so that you can update your local copy.
        5. Fingerprint cache items: For static content like CSS and Javascript files, it may be appropriate to fingerprint each item. This means adding a unique identifier to the filename (often a hash of the file) so that if the resource is modified, the new resource name can be requested, causing the requests to correctly bypass the cache. There are a variety of tools that can assist in creating fingerprints and modifying the references to them within HTML documents.
        6. Always provide validators: Validators allow stale content to be refreshed without having to download the entire resource again. Setting the Etag and the Last-Modified headers allow caches to validate their content and re-serve it if it has not been modified at the origin, further reducing load.
      + item type recs
        1. Allow all caches to store generic assets:
        2. Allow browsers to cache user-specific assets: For per-user content, it is often acceptable and useful to allow caching within the user's browser. While this content would not be appropriate to cache on any intermediary caching proxies, caching in the browser will allow for instant retrieval for users during subsequent visits.
        3. Make exceptions for essential time-sensitive content: If you have content that is time-sensitive, make an exception to the above rules so that the out-dated content is not served in critical situations. For instance, if your site has a shopping cart, it should reflect the items in the cart immediately. Depending on the nature of the content, the no-cache or no-store options can be set in the Cache-Control header to achieve this.
        4. Set long freshness times for supporting content: generally appropriate for items like images and CSS that are pulled in to render the HTML page requested by the user. Setting extended freshness times, combined with fingerprinting, allows caches to store these resources for long periods of time.
        5. Set short freshness times for parent content: In order to make the above scheme work, the containing item must have relatively short freshness times or may not be cached at all. This is typically the HTML page that calls in the other assisting content. The HTML itself will be downloaded frequently, allowing it to respond to changes rapidly. The supporting content can then be cached aggressively.

## caching
  - choosing the optimal `Cache-Control` header policy
    1. response not resusable ? use `no-store`
    2. browser needs to revalidate the resource each time ? use `no-cache`
    3. cacheable by intermediate caches?
      - yes: use `public`
      - no: use `private`
    4. maximum cache life time ? set `max-age=#` to # of seconds
    5. add `Etag` header
  - add a fingerprint to files in order to extend cache times and invalidate cache responses
    1. e.g. turn blah.css to blah.timestamp.css
    2. else embed a blah.css?v=timestamp inside of content
### headers
  1. `Etag`: validation token to determine if a file has changed
    - if a browser has an asset that is expired, it can make a request to the server for the assets ETag
      1. if the servers etag === browser etag, it will continue to use the browser version from cache
      2. if they are different, it will send an additional request for the updated resource
    - the client automatically provides the ETag token in the "If-None-Match" HTTP request header.
      1. The server checks the token against the current resource. If the token hasn't changed, the server returns a "304 Not Modified" response
        - which tells the browser that the response it has in cache hasn't changed
        - updated `Cache-Control` header to be applied to the browser's version of the resource, e.g. to be renewed for another 120 seconds.
  2. `Cache-Control`: control who can cache the response, under which conditions, and for how long
    - you can set multiple directives in `Cache-Control`
      1. `Cache-Control: private, max-age=600`
    - `Cache-Control: max-age=120`: cache for 120 seconds
    - `Cache-control: no-cache`: the returned response cant be used to satisfy a subsequent request to the same URL without first checking with the server to see if the response has changed (i.e. via `Etag` header)
    - `Cache-Control: no-store`: disallows the browser and all intermediate caches from storing any version of the returned response, e.g. for private or personal ifnormation like banking stuff
    - `Cache-Control: public`: this can be cached
      1. even if it has http authentication data associated with it
      2. even if the http response status code isnt normally cacheable
    - `Cache-Control: private `: the browser can cache it, but not intermediate caches
      1. this is usually for resources that are meant for a single user
    - `Cache-Control: max-age=#`: sets the max age for this resource to # in seconds

  3. `Expires`:
