# OAUTH 2.0 & OpenID Connect

- everywhere you see `oauth` im referring to `oauth 2.0`

- when you sign into a hotel (auth server)
  - you give the front desk your ID & credit card (authentication)
  - they give you a roomkey (access token), that enables (authorization) access (scopes) to a dope azz top floor suite, the jacuzi, weight room, and free breakfast and massages (resources)
  - when you later come back with your roomkey (token), they again ask you for your ID (re-establish trust) to confirm you should still (expiration) be permitted (validation)

## links

- [postman](https://www.postman.com/)
- [json web token: JWT](https://jwt.io/)
- [google auth playground](https://developers.google.com/oauthplayground)
- [google cooud platform dashboard](https://console.cloud.google.com/apis/dashboard)
- [oauths auth playground](https://www.oauth.com/playground)
- [openid OIDC playground](https://openidconnect.net/)
- [openid appauth libraries](https://appauth.io/)
- [free developer account, oauth as a service](https://developer.okta.com)

- todo

  - [oath 2.0 simplified: read this first when implementing & researching](https://www.oauth.com/)
    - its an online version of the book by Aaron Parecki
  - [oath 2.0 server map: figure out what you should implement](https://www.oauth.com/oauth2-servers/map-oauth-2-0-specs/)
  - [smart on FHIR extensions for healthcare](https://techno-soft.com/smart-on-fhir-single-sign-on-and-oauth2.html/)
  - [open banking](https://www.reuters.com/business/finance/what-is-open-banking-2021-07-09/)

- RFCs
  - [HTTP Auth: Basic & Digest Access Auth RFC 2617](https://datatracker.ietf.org/doc/html/rfc2617#section-2)
  - [oauth 2.0 rfc 6749](https://datatracker.ietf.org/doc/html/rfc6749)
  - [jwt rfc 7519: all tokens should adhere to this spec](https://datatracker.ietf.org/doc/html/rfc7519)
  - [token revocation rfc 7009](https://datatracker.ietf.org/doc/html/rfc7009)
  - [token introspection rfc 7662](https://datatracker.ietf.org/doc/html/rfc7662)
  - [dynamic client registration protocol rfc 7591](https://datatracker.ietf.org/doc/html/rfc7591)
  - [dynamic client registration management protocol rfc 7592](https://datatracker.ietf.org/doc/html/rfc7592)
  - [authorization server metadata rfc 8414](https://datatracker.ietf.org/doc/html/rfc8414)
  - [PKCE: proof key for code exchange rfc 7636](https://datatracker.ietf.org/doc/html/rfc7636)
  - [device authorization grant RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)
  - [bearer tokens in HTTP Authorizatio header rfc 6750](https://datatracker.ietf.org/doc/html/rfc6750)
  - [JWE json web encryption RFC 7516](https://datatracker.ietf.org/doc/html/rfc7516)

- other

  - [combinations & permutations](https://www.mathplanet.com/education/pre-algebra/probability-and-statistic/combinations-and-permutations)

### best practices/gotchas

- implementation:
  - playaround with the oauth playground to test many of the major grant type (flows)
  - you can test each flow entirely with postman
  - make sure you choose the most secure grant type thats available for your application environment
- validation: ID and access tokens should always be validated with the auth server **and** by the client before using it (in case its been stolen/expired)
  - you cant have a partially validated token
    - check the token: grab the public key, decode the token, grab the header, and resign the payload, it should match the original token
    - check the token payload: decode the payload, check the cid, aud, exp and iss, they should all be what you expect
  - if using oauth across multiple components (e.g. in a microservice architecture) its useful to have a distinct validation service that other services can use to validate their tokens
- security
  - always think about the scopes your tokens permit to set a reasonable expiration timestamp
    - read only to public/sensitive info?
    - +write to public/sensitive info?
  - always use SSL/TLS (inbound & outbound should require https) to protect your tokens in transit
  - protect every token you ever use, treat encrypted tokens like they are unencrypted, defense in depth!
    - thus any API with a protected resource that uses tokens should validate the token before granting access to the protected resource
    - if someone gets your access token, they can assume your identity until the token expires
    - if someone gets your refresh token, they can retrieve a new accesstoken forever (unless it gets revoked)
    - validate locally (explained elseware)
    - validate remotely with the auth server via the introspection endpoint (has the token been revoked?)
    - ensure the scopes associated with the token match the authorization requested
    - use JWE, and move on with your life
  - always revoke refresh tokens, ALWAYYYYYYS
  - protect the auth code at all cost (for authorization code/PKCE flows)
  - protect your redirect URIs: this is where the auth server responds with tokens after a user authenticates
    - only accept requests from origins (i.e auth servers) you trust
    - whitelist the redirct_uris within the auth server so they only redirect users to the URLs you set (i.e. dont use an auth server that allows arbitrary redirect URIs)
    - dont use query params/fragments when accepting tokens from auth servers
    - use an auth server that supports CORS, and have them return the token via form post
  - never use resource owner password grant type: its the only flow that requires a user to give up their credentials
    - just never use it, you dont want to be involved in the fallout
    - once a third party has your user creds, no mititation steps fkn matter
  - log & track oauth requests (but not anything sensitive) so you can spot malicious behavior
  - always implement rate limiting for oauth requests to mitigate brute force attacks
  - always use the best grant type, with the least amount of trust involved
- scope naming conventions
  - be consistent
  - if using url-style, the real benefit is having the ORIGIN resolve (e.g. to a metadata doc) so that your API becomes self documenting
  - never use `admin` as scope, is too broad & vague

## Basics

### key elements in all flows

- a client app/user: this could be just an application, or a user (principal) + browser, depending on the flow
- client application: registers with the auth server as a service that needs access to the user data the auth server has
  - specifies the scopes required
  - responsible for validating & securing tokens it receives on behalf of users
  - responsibile for choosing the right grant type to not put users at risk
  - client side apps: never use a grant type that requires you to store secrets
  - back end apps: use a grant type that requires secrets but make sure you store it securely
- authorization server: this is the identity provider, the user/client has previously created an identity with this application, and it shares the user/client info with third party applications
- resource/api: this is the protected resource in the third party, in which the third party requires a user/client to authenticate with the auth server before they can access it
- api gateway: not required but should always be used infront of other APIs with protected services
  - enables rate limiting, token validation, logging, and better management & observability of oauth requests throughout your tech stack

### terminlogy

- combination: [1, 2, 3] = [3, 2, 1]
- permutation: [1, 2, 3] != [3, 2, 1]
- authentication: aka authN; who are you?
- authorization: aka authZ: what can you do?
- client: the thing being authenticated
- public client: any client that cant/shouldnt store secrets
- resources: the things being protected
- authorization server: i.e. identity provider; the service that evaluates authorization policies and determines which resources a client can utilize on behalf of a user
- scope: permission a client can request & are granted/denied
- access token: a set of granted scopes for a specific period of time
- refresh token: is given back to the auth server in exchange for a new access token (granted/denied)
- grant types: workflows for retrieving tokens
- Oauth extensions: optional services, contracts & tech that enable oauth2 use cases; there are too many to lis
- json web token: aka jwt/jot; RFC7519; easy way to encode & share json data
  - its encoded, NOT encrypted; so never use unencrypted sensitive data inside a jwt (or just use JWE/opaque token)
- JSON Web Encryption: JWE; an encrypted JWT token
- token revocation: cancels a token via API
  - in practice this is a required extension
- token introspection: examines an (opaque) token to describe its contents & determine if its still valid
  - mandatory if using token revocation (which you should)
  - client apps can query the auth server to determine if a token is still valid
- dynamic client registration: defines a consistent API for creating OAuth clients
  - enables systems to register themselves with the auth server for requesting tokens
  - useful in self-service API dev portals; where developers register their app clients for requesting tokens for their app users
- dynamic client management: edit & manage clients that have registered to an auth server
- authorization server metadata discovery: like an OPTIONS request; query the auth server for its oauth discovery doc
  - auth server capabilities
  - auth server endpoints
  - ^ enables you to configure your auth client on the fly
- OpenID Connect: OIDC; special use case of auth design specifically for SSO and sharing profile information
  - provides a rigid structure to the oauth2 framework
  - ^ structured JWTs and specific extensions
  - provides structure to a user profile and selective share elements within the profile

## Oauth

- delegated authorization framework
  - pattern to request, receive and apply authorization policies across resources
  - very loose agreement, so shouldnt be considered a contract, as many things are left undefined for you to implement for flexibility
- key elements
  - access & refresh tokens
  - authorization & token endpoints
  - grant types

### endpoints

- authorize & token are the only endpoints defined in the spec, all other endpoints come through an extension
- POST/authorize: interact witte user to confirm their identity: gets the authorization grant & user consent
  - used for ANY user facing grant types (e.g. auth code/implicit)
  - never fkn GET (even tho thats whats in the spec)
  - servers tend to log all get requests
- POST/token: retrieve tokens
  - used when a user is confirmed/there isnt a user at all (e.g. client credential/password grants)

#### endpoints: extensions

- catch all, since many extensions reuse the same endpoints
- these are expected names as defined in the extensions,
- ^ but an oauth provider can name them anything, so verify the implementation details with the metadata doc
- /.well-known/oauth-authorization-server: get the metadata/discovery doc
  - lists all the URL patterns for all endpoints
  - this is where you confirm the naming conventions of extension endpoints
  - all auth servers are required to provide this endpoint
- /introspect: analyze & decode a token
- /revoke: invalid an access/refresh token
- /userinfo: publishes user profile data
  - openid connect

### scopes

- combination of case-sensitive space delimited strings defined by the auth server
- ^ each string adds an additional access range to the requested scope
- open to the auth server to implement, however, a good pattern is to deploy a naming convention (github failed us)
- types of naming conventions
  - simple strings: read|write|delete|admin_read|etc (e.g. github)
  - java-style namespace structure: expressive, granular, predictable, but can get incredibly long as your auth requirements get more complex
    - com.app.resource
    - com.app.resource.read
    - com.app.resource.attribute.read
    - com.app.resource.subresource.read
    - etc
  - url style: expressive, granular, predictable, the API becomes self documenting if the ORIGIN resolves to a metadata doc (e.g. google)
    - <https://api.company.com/resource>
    - ORIGIN/resource.read
    - ORIGIN/resource.subresource.write
    - etc

### tokens

- access and refresh tokens form the foundation of oauth;
- access token: string representing an authorization issued to a client
  - i.e. a specific set of scopes & durations of access, granted by the resource owner, and enforced by the resource server & authorization server
- refresh token: string representing the authorization granted to the client by the resource owner
  - are opaque so only useful via the authservers/token endpoint
  - ^ the auth server will validate the refreshToken and issue a new access token
  - ^ can be revoked by hitting the authservers/revocation endpoint
- the entire point of grant types revolve around requesting & receiving tokens in different context & environments
- types of tokens
  - opaque: unique obsfucated string that acts as a database key; cant be decoded, extracted or decrypted (unless your the auth server that created it)
  - JWT: (pronounced JOT) plain text authorization & profile data
  - JWE: encrypted JWT;
- validation: is how you establish trust; always decode the token, grab the header, recreate the signature and compare it against the token
  - retrieve the keys document: i.e. your sigingKeys; represent the public key that the token was signed with
    - GET/authserver/someendpoint
  - split the access token on each period
    - `[header.payload.signature] = accessToken.split('.')`
    - get all the claims: `{ typ, alg, kid } = decodeBase64(header)`
      - kid: key id
        - `signature = sign(signingKeys[kid], payload, alg)`
        - `canTrustToken = signature === accessToken`
      - alg: algorithm
      - typ: ...
    - decode the payload to view the token claims
      - `tokenPayload = decodeBase64(payload)`
      - acp: the scopes related to this specific token
      - aud: audience; the service the token is suppose to be used by, e.g. `imusing.oauthformyusers.com`
      - cid: client id; the id of the service that originally requested the token
      - exp: expiration; a future timestamp afterwhich the token should be considered invalid
      - iat: issued at; timestamp
      - idpId: the identity provider, e.g. google
      - iss: issuer; auth server that created the token, e.g. `https://poop.com/oauth2/234324/234324`
      - jti:
      - scp:
      - sub: subject; the user/client this token describes
      - uid:
      - ver:

### grant types

- i.e. flows: all flows require you to:

  - register your application with an auth server as the first step: usually receiving a client ID, secret, etc to identify your application
  - specify the grant type
  - specify the scopes your application is requesting
  - have a redirect URI

- implicit: deprecated; for mobile apps/SPAs
- authorization code with PKCE: for mobile apps/SPAs
- client credentials: service accounts/microservices where there isnt a user involved
- resource owner password: for legacy apps
- device

#### authorization code

- requires a fullstack app; is the most secure by default as everything (i.e. all tokens) are kept in the BFF and the user/client never see it

- use cases

  - often used with SSO to request specific scopes to a users identity

- not useful for

  - service acocunts: as you need a user to authenticate
  - any environment where you cant store secrets (your application needs an ID and PW with the auth server)
    - even if you compile & obsfucate your source code, if your dumb azz stores your secrets in source code, youve already failed

- key elements

  - auth code: token the BFF receives after a user authenticates with an auth server; enables the BFF to retrieve an access & refresh token for this specific user
  - access token: token for a specific user
  - refresh token: refresh token for a specific user
  - client secret: your apps PW you create with an auth server
  - client id: your apps ID you create with an auth server

- flow

  - your application registers as a client with the auth server and creates a client Id and client secret (i.e. username and pw)
  - your user needs to authenticate with an auth server to prove their identity
  - on some screen in your app, they click `sign in with GOOGLE`
  - the BFF redirects the auser to an auth server (identity provider, e.g. google) and the user authenticates and grants authorization for your application to access their identity
  - the BFF receives an auth code from the auth server
  - the BFF uses its client ID & secret + the auth code to thit the authserver/token endpoint to get an access & refresh token for this specific user
  - the BFF informs the client that the user has authorized the full stack app

- benefits

  - only the one-time use authorization code is exposed
  - the third party application (the one requesitng the info on the user) never sees the users credentials
  - neither the client nor the user ever see the access or refresh token (its kept in the BFF)

- scopes: can be anything, but generally auth servers permit you to use openid connect with this flow

#### PKCE: proof key for code exchange

- aka auth code with PKCE, preffered over implicit flow
- behaves like auth code flow, but doesnt use a client secret

- use cases

  - SPA/Mobile apps/any environment where you cant (or shouldnt) store secrets
  - replacing the implicit flow because implicit flow is less secure

- limitations

  - you cant get a refresh token (thats why auth code is preferred if you can store secrets)

- key elements

  - code verifier: a random URL-safe >= 43 characters stored on the local system
  - code challenge: base 64 encoded SHA-256 hash `bae64url(sha256(code_verifier))` of the code verifier
  - ^ with the code verifier & challenge, your application is effectively authenticating itself

- flow
  - client generates a code verifier & code challenge
  - client sends the code challenge with an authorization request to an auth server
  - auth server responds with a onetime authorization code (usually expires within 60 seconds) if the user successfully authenticates
  - client posts a request to authserver/token endpoint with the auth code & and the code verifier
  - the auth server hashes & encodes the code verifier and compares with the previously sent code challenge
  - if the auth servers stored code challenge === hashed & encoded code verifier, the auth server responds with the token

#### Implicit

- originally designed from SPAs/Mobile apps
- technically not deprecated, but PKCE is now the preferred grant type flow

- limitations

  - the access token is exposed to the end-user (is passed back in the URL) & therefore at risk of theft
  - doesnt support refresh tokens (it would be at risk too)
  - its not impossible to secure, just relatively more difficult to secure than authcode + PKCE
    - generally uses URL fragments/query params to pass the access token back

- use cases

  - if you have a BFF that uses auth code/similar behind the scenes, the implicit flow can just interface with the backend for SSO
  - quick n dirty SSO with an identity provider (auth server) you trust, e.g. Google, Facebook, Github, Linkedin
  - if the auth provider doesnt support PKCE
  - if you have a supporting BFF, you can impliment SSO with a popup on the client, and accept the accesstoken via a POST from the auth server to your backend

- key elements

  - 0 trust: the user doesnt trust your app, and you dont trust the user (they have access to your source code) but you both trust the identity provider (the auth server)
    - your application never sees the users credentials
    - your application uses the underyling cookie/session storage so SSO work as expected
      - i.e. if the user is already logged in with the auth server, then they dont have to login again, they skip straight to authorizing your application
  - cookie/session storage: if the user is already authenticated with the identity provider, they skip straight to authorizing the scopes your application requests
  - url fragment/query: identity provider adds the access token to the URL when it redirects the user back to your application

- flow
  - a user on your frontend clicks `login with` and authenticates & authorizes your app with the auth server
  - the users client (e.g. browser) redirects back to your application with an access token in the URL fragment/query param

#### client credential

- doesnt involve a user
- a service authenticates itself with an auth server and gets an API key
- anywhere that you think of implementing API keys its almost certainly better to use client credential flow
- the easiest to implement as it doesnt require a user interface (there isnt a user involved)

- limitations

  - only for services without users, which is perfect
  - cant be used anywhere you cant store secrets

- use cases

  - useful for backend services & microservices: you can manage access to protected resources in your microservice architecture via an authserver
  - enables backend systems to speak oauth, enabling them to participate in more use cases and reducing the tech burden on developers (as the oauth logic can be reused across service components)
  - enables credential rotation, scopes & better tooling across you tech stack
  - there is no user, and no public requests (everything is backend) so this should be the goto for microservices

- key elements

  - client id: of the microservice
  - client secret: of the microservice
  - grant_type: client_credentials

- flow

  - a service sends its id & secret to an auth server and receives an access token
  - the service then sends that access token to other other services with protected resources

#### device grant type

- for internet connected devices without a browser/UI: e.g. smart appliances, game consoles, kiosks, and some IoT devices

- limitations

  - the device must meet 4 reqiuements as specified by the oauth RFC
    - the device is already connected to the internet
    - the device can make https requests
    - the device can communiate a URI to the end user (e.g. showing a QR code)
    - the user has to have another device (e.g. mobile phone) to visit the URI

- use cases

  - any environment without a browser/UI that can meet the 4 reqs specified in the abovel limitation

- key elements

  - client id identifying the device
  - device code: represents that device at that moment in time (a subsequent user initiating the flow will cause the device to receive a different device code)
  - user code: identifies the current user initiating the request via the device, each user gets a different user code
  - verification uri: the URI the device needs to present to the user, which they navigate to from another device (e.g. their mobile phone)
  - validation service: you need to setup a validation service (e.g. api gateway, etc) that the device can use to validate tokens

- flow
  - a user needs to authenticate through some device (i.e. machine)
  - the device sends its own ID to an auth server and it responds with a device code, end user code, and a verification URI (e.g. QR code)
  - the user visits the URI via some other mechanism (e.g. scan the QR code on their phone) and authenticates & authorizes the device
  - the auth server will POST (or unfortunately a URL fragment/query param) to the initiating device with an access token
    - or even worse the device will have to poll the auth server to determine if the user successfully authenticated

#### resource owner password

- the application receives the users identity provider credentials and logs in to the auth server on their behalf

- limitations

  - 99% of the time its not the best option: the user is required to an application their auth server credentials!
  - imagine having to give a third party application your bank login details, WTF
  - doesnt support refresh tokens
  - there is nothing any can do to prevent the third party application developers from missusing elon musks bank account credentials!
  - everything an attacker needs to impersonate the application & the user is in the request the application makes to the auth server

- use cases

  - its practical for legacy applications that only accept user name & password,
  - i.e. you have to get the users credentials in order to authenticate with the auth server

- key elements

  - grant_type should always be `password`
  - users name
  - users pw

- flow
  - user navigates to a screen in your app thats a protected resource and clicks `login to see this shiznit`
  - user is presented with a login form to enter their identity provider (e.g. google name & pw) credentials
  - the application submits the users credentials to the identity provider and gets an access token if successful

### extensions

- may repeat stuff in other sections, but relisting here when I need to focus on a specific extension
- each extension adds additional features to the base oauth framework
- there are oauth extensions that are specific for each environment and industry

- key extensions

  - oauth 2.0 rfc 6749: the base framework in which all extensions sit on top of
  - jwt rfc 7519: defines json web tokens
  - PKCE rfc 7636: should always be used in environments where you cant store secrets (SPA/mobile apps) and enables those apps to use the authorization code flow
  - device authorization grant RFC 8628: for use in IoT devices that lack a browser or only have console prompts
  - bearer tokens rfc 6750: always send tokens via HTTP Authorization header and never via url fragments/query strings
  - JWE rfc 7516: always encrypt JWTs since oauth is all about passing around user data, and to one extent or another, should always be considered sensitive
  - token introspection rfc 7662: remote validation & decoding of tokens
  - token revocation rfc 7009: always invalidate tokens when your app no longer needs it
  - support dev experience onboarding to oauth 2.0:
    - dynamic client registration rfc 7591: create client applications
    - dynamic client registration management rfc 7592: manage those client applications with consistent & predictable APIs
  - auth server metadata doc rfc 8414: the auth server should always communicate what capabilities (extensions) it supports and the various endpoints available
  - SMART on FHIR: designed specifically to integrate with electronic health records/patient portals in healthcare
    - enables a receptionist in some health care settings to see what tests(etc) youve taken, but not the test results
  - HRT: health relationship trust: to share even more specific data
  - open banking: the process of banks & other traditional financial institutions giving customers & third parties easy digital access to users financial data

#### OpenID Connect

- the most widely used oauth2.0 extension (many folks will think its distinct from oauth2)
- a structured pattern on top of auth2.0, its the `sign in with` flow you see everywhere
- primary use case are SSO, profile sharing & creation, authentication
- you must trust the auth server that issues the ID token

  - simplifies creation of user accounts (if you trust the issuer of the ID token)
  - e.g. signing into linkedin learning with your linkedin account

- key elements

  - tokens

    - ID tokens: should contain profile info
      - must be a JWT
      - is highly structured with strict properties & naming conventions in the claims in the token payload
      - genereally contains the same info as an access token, but includes more information

  - userinfo endpoints: for retrieving user info, generally contains the same info in the ID token
  - grant types

    - authorization code
    - implicit

  - scopes: what type of info is your service authorized to access?
    - profile: generally used for creating a user account in your service (doesnt contain email)
    - email: the users email, and if its been verified
    - address: usually shipping address
    - phone: usually a cell number, and if its been verified
    - offline_access: request the auth server to include a refresh token in its response
