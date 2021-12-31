# OAUTH 2.0 & OpenID Connect

## links

- [postman](https://www.postman.com/)
- [json web token](https://jwt.io/)
- [google auth playground](https://developers.google.com/oauthplayground)
- [oauths auth playground](https://www.oauth.com/playground)
- [openid OIDC playground](https://openidconnect.net/)
- [free developer account, oauth as a service](https://developer.okta.com)

- RFCs
  - [oauth 2.0 6749](https://datatracker.ietf.org/doc/html/rfc6749)
  - [jwt 7519](https://datatracker.ietf.org/doc/html/rfc7519)
  - [token revocation 7009](https://datatracker.ietf.org/doc/html/rfc7009)
  - [token introspection 7662](https://datatracker.ietf.org/doc/html/rfc7662)
  - [dynamic client registration protocol 7591](https://datatracker.ietf.org/doc/html/rfc7591)
  - [dynamic client registration management protocol 7592](https://datatracker.ietf.org/doc/html/rfc7592)
  - [authorization server metadata](https://datatracker.ietf.org/doc/html/rfc8414)

## Basics

- when you sign into a hotel (auth server)
  - you give the front desk your ID & credit card (authentication)
  - they give you a roomkey (access token), that enables (authorization) access (scopes) to dope azz top floor suite, the jacuzi, weight room, and free breakfast and massages (resources)

### terms

- authentication: aka authN; who are you?
- authorization: aka authZ: what can you do?
- client: the thing being authenticated
- resources: the things being protected
- authorization server: the service that evaluates authorization policies and determines which resources a client can utilize
- scope: permission a client can request & are granted/denied
- access token: a set of granted scopes for a specific period of time
- refresh token: is given back to the auth server in exchange for a new access token (granted/denied)
- grant types: workflows for retrieving access tokens

- Oauth extensions: optional services, contracts & tech that enable oauth2 use cases; there are too many to list

#### oauth extensions

- json web token: aka jwt/jot; RFC7519; easy way to encode & share json data

  - its encoded, NOT encrypted; so never use unencrypted sensitive data inside a jwt (or just use JWE/opaque token)
  - common fields
    - iss: issuer; auth server
    - iat: issued at; timestamp
    - sub: subject; client
    - aud: audience; the service that the token was created for
    - exp: expiration; max time the token is valid for

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

## Oauth 2.0

- delegated authorization framework

  - pattern to request, receive and apply authorization policies across resources
  - very loose agreement, so shouldnt be considered a contract, as many things are left undefined for you to implement for flexibility

- key elements
  - access & refresh tokens
  - authorization & token endpoints
  - grant types

### endpoints

#### oauth 2 spec endpoints

- authorize & token are the only endpoints defined in the spec, all other endpoints come through an extension

- POST/authorize: interact witte user to confirm their identity: gets the authorization grant & user consent

  - used for ANY user facing grant types (e.g. auth code/implicit)
  - never fkn GET (even tho thats whats in the spec)
  - servers tend to log all get requests

- POST/token: retrieve tokens
  - used when a user is confirmed/there isnt a user at all (e.g. client credential/password grants)

#### extension endpoints

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

### grant types

- authorization code: for backend apps
- implicit: deprecated; for mobile apps/SPAs
- authorization code with PKCE: for mobile apps/SPAs
- client credentials: service accounts/microservices where there isnt a user involved
- resource owner password: for legacy apps

### oauth2 extensions

#### OpenID Connect

- the most widely used oauth2.0 extension (many folks will think its distinct from oauth2)
- a structured pattern on top of auth2.0
- primary use case are SSO & profile sharing

  - simplifies creation of user accounts (if you trust the issuer of the ID token)
  - e.g. signing into linkedin learning with your linkedin account

- key elements
  - +oauth2.0 key elements
  - ID tokens: must be a JWT with properties & naming convetions
    - is usually the user profile info
  - userinfo endpoints: for retrieving user info, generally contains the same info in the ID token
  - grant types
    - authorization code
    - implicit
