# OAUTH 2.0 & OpenID Connect

- everywhere you see `oauth` im referring to `oauth 2.0`

- when you sign into a hotel (auth server)
  - you give the front desk your ID & credit card (authentication)
  - they give you a roomkey (access token), that enables (authorization) access (scopes) to (resources) a dope azz top floor suite, the jacuzi, weight room, and free breakfast and massages
  - when you later come back with your roomkey, they again ask you for your ID (establish trust) to confirm you should still (expiration) be permitted (validation)

## links

- [postman](https://www.postman.com/)
- [json web token: JWT](https://jwt.io/)
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

- other

  - [combinations & permutations](https://www.mathplanet.com/education/pre-algebra/probability-and-statistic/combinations-and-permutations)

### best practices/gotchas

- validation: ID and access tokens should always be validated with the auth server before using it (in case its been stolen)

  - you cant have a partially validated token
    - check the token: decode the token, grab the header, and resign the payload, it should match the original token
    - check the token payload: decode the payload, check the cid, aud, exp and iss, they should all be what you expect

- security

  - always think about the scopes your tokens permit to set a reasonable expiration timestamp
    - read only to public/sensitive info?
    - +write to public/sensitive info?
  - if someone gets your access token, they can assume your identity until the token expires
  - if someone gets your refresh token, they can retrieve a new accesstoken forever (unless it gets revoked)
  - protect every token you ever use, treat encrypted tokens like they are unencrypted, defense in depth!
  - always revoke refresh tokens, ALWAYYYYYYS

- scope naming conventions
  - be consistent
  - if using url-style, the real benefit is havint the ORIGIN resolve (e.g. to a metadata doc) so that your API becomes self documenting
  - never use `admin` as scope, is too broad & vague

## Basics

### terms

- combination: [1, 2, 3] = [3, 2, 1]
- permutation: [1, 2, 3] != [3, 2, 1]
- authentication: aka authN; who are you?
- authorization: aka authZ: what can you do?
- client: the thing being authenticated
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

- combination of case-sensitive space delimited combination of strings defined by the auth server
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
      - aud: audience; the service the token is suppose to be used by, e.g. `imusing.oauthformyusers.com`
      - cid: client id; the id of the service that originally requested the token
      - exp: expiration; a future timestamp that represents when the token is invalid
      - iat: issued at; timestamp
      - iss: issuer; auth server that created the token, e.g. `https://poop.com/oauth2/234324/234324`
      - jti:
      - scp:
      - sub: subject; client
      - uid:
      - ver:

### grant types

- implicit: deprecated; for mobile apps/SPAs
- authorization code with PKCE: for mobile apps/SPAs
- client credentials: service accounts/microservices where there isnt a user involved
- resource owner password: for legacy apps
- device

#### authorization code

- generally implemented by BFFs; is the most secure by default
- often used by fullstack apps that request specific scopes to a users identity
- flow
  - client navigates to a front and request a login
  - the BFF sends you to an auth server (identity provider) and client authenticates and grants authorization the BFF requests
  - the BFF receives an auth code, client id, and client secret from the auth server
  - the BFF uses the 3 elements to thit the authserver/token endpoint to get an access & refresh token
  - the BFF informs the client that the user has authorized the full stack app

### extensions

- may repeat stuff in other sections, but relisting here when I need to focus on a specific extension
- each extension adds additional features to base oauth framework

#### OpenID Connect

- the most widely used oauth2.0 extension (many folks will think its distinct from oauth2)
- a structured pattern on top of auth2.0, its the `sign in with` flow you see everywhere
- primary use case are SSO, profile sharing & creation, authentication
- you must trust the auth server that issues the ID token

  - simplifies creation of user accounts (if you trust the issuer of the ID token)
  - e.g. signing into linkedin learning with your linkedin account

##### openID connect: key elements

- tokens

  - ID tokens: should contain profile info
    - must be a JWT
    - is highly structured with strict properties & naming conventions in the claims in the token payload

- userinfo endpoints: for retrieving user info, generally contains the same info in the ID token
- grant types

  - authorization code
  - implicit

- scopes: what type of info is your service authorized to access?
  - profile: generally used for creating a user account in your service (doesnt contain email)
  - email: the users email, and if its been verified
  - address: usually shipping address
  - phone: usually a cell number, and if its been verified
