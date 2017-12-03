# [links]
  - [javascript security slides](https://www.slideshare.net/jgrahamc/javascript-security-2064979)
  - [javascript static security analysis tool](https://github.com/dpnishant/jsprime)
  - [javascript security tools](https://nvisium.com/blog/2014/06/27/javascript-security-tools/)
  - [nodejs security tools](https://geekflare.com/nodejs-security-scanner/)
  - [general javascript security practices](https://www.sitepoint.com/importance-client-side-javascript-security/)

# [Cross-site scripting (XSS)]
  - is a type of computer security vulnerability typically found in web applications.
  - XSS enables attackers to inject client-side scripts into web pages viewed by other users.
  - A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.

# [cross site request forgery]
  - [wikipedia](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

# [SQL injection]
  - refers to the act of someone inserting a MySQL statement to be run on your database without your knowledge. Injection usually occurs when you ask a user for input, like their name, and instead of a name they give you a MySQL statement that you will unknowingly run on your database.

# [session fixation]
  - [wikipedia](https://www.owasp.org/index.php/Session_fixation)

# [sidejacking]
  - [computer hope](https://www.computerhope.com/jargon/s/sidejacking.htm)

 # [json hijacking]
  - [capec](https://capec.mitre.org/data/definitions/111.html)

# [same origin policy]
  - [wikipedia](https://en.wikipedia.org/wiki/Same-origin_policy)
  - the same-origin policy is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

# [computer security model]
  - [wikipedia](https://en.wikipedia.org/wiki/Computer_security_model)

# [security policy]
  - [wikipedia](https://en.wikipedia.org/wiki/Security_policy)


# security
### Same Origin policy
  - Javascript is not allowed to access the origin of any other origin than its own
  - origin scheme: change any of the following and you are on a different origin
    1. data scheme: the protocol, e.g. http / https
    2. hostname: the domain, e.g. localhost, www.udacity.com
    3. port: e.g. :3000, :80
  - rules specific to Same Origin policy
    + same origin policy is enforced by the browser
    + this is so you cannot request data from other origins and make modifications on a users' behalf
    1. you cannot make fetch requests to other origins
      - 'Access-Control-Allow-Origin' must be enabled on the requested resource if you want to bypass this rule
      - you can also set the request's mode to 'no-cors' to bypass this rule
    2. you cannot inspect iframes/windows with javascript on different origins
    + exceptions to the above rules
      1. you can get scripts/images, etc from other origins
        - however, you cannot interactive with them the same way
          1. you cant inspect the pixel details of images via javascript
          2. you cant inspect the script content via javascript
### Cross Origin Resource Sharing (CORS)
  - is a set of HTTP headers to allow sharing resources across origins
    + the server specifies a set of origins that are allowed to access its resources
    + the request headers:
      1. GET /some/resource/blah
      2. HOST: api.someOtherOrigin.com
      3. Referer: your.site.com
    + the response headers:
      1. HTTP/1.1 OK
      2. DATE: December 12, 1985 00:22:54 GMT
      3. Access-Control-Allow-Origin: your.site.com
  + Preflight Requests:
    - uses the OPTIONS header to inform the server that the client only wants to request what http methods are allowed
    - you can view these in the network tab, any request which uses the OPTIONS header (check methods tab in network) is a preflight request
  - JSONP is one way to get around same origin policy
    1. you request a JSONP API and provide a callback function
    2. the API calls your callback function with the script contents as its only parameter
    2. since the callback function is from your origin, you can access the script contents, effectively bypassing same  origin policy
### Cross Site Request Forgery (CSRF)
  - CSRF is a token put on a form by the server, and is also stored server slide
    + if someone submits the form, it checks the CSRF token against the one it has stored and only executes the request if the tokens match
### Cross Site Scripting (XSS)
  - when javascript is executed in another site via some input field, and now has access to all of the sites data
  - you must validate all user input on the client, and more importantly, on the server
