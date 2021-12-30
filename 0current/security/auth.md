# OAUTH 2.0 & OpenID Connect

## links

- [postman](https://www.postman.com/)
- [json web token](https://jwt.io/)
- [google auth playground](https://developers.google.com/oauthplayground)
- [oauths auth playground](https://www.oauth.com/playground)
- [openid OIDC playground](https://openidconnect.net/)
- [free developer account, oauth as a service](https://developer.okta.com)

- RFCs
  - [jwt RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)
  - [token revocation rfc 7009](https://datatracker.ietf.org/doc/html/rfc7009)
  - [token introspection 7662](https://datatracker.ietf.org/doc/html/rfc7662)

## Basics

- when you sign into a hotel (auth server)
  - you give the front desk your ID & credit card (authentication)
  - they give you a roomkey, that enables access to dope azz top floor suite, the jacuzi, weight room, and free breakfast and massages (authorization)

### terms

- authentication: aka authN; who are you?
- authorization: aka authZ: what can you do?
- client: the thing being authenticated
- resources: the things being protected
- authorization server: the service that evaluates authorization policies and determines which resources a client can utilize

- OAuth: an authorization framework

  - pattern to request, receive and apply authorization policies across resources
  - very loose agreement, so shouldnt be considered a contract, as many things are left undefined for you to implement for flexibility

- Oauth extensions: optional services, contracts & tech that enable oauth2 use cases; there are too many to list

### oauth extensions

- json web token: aka jwt/jot; RFC7519; easy way to encode & share json data

  - its encoded, NOT encrypted; so never use unencrypted sensitive data inside a jwt (or just use JWE/opaque token)
  - common fields
    - iss: issuer; auth server
    - iat: issued at; timestamp
    - sub: subject; client
    - aud: audience; the service that the token was created for
    - exp: expiration; max time the token is valid for

- JSON Web Encryption: JWE; an encrypted JWT token

- token revocation: cancels a token via API; in practice this is a required extension

- token introspection: examines an (opaque) token to describe its contents & determine if its still valid

- dynamic client registration
- authorization server metadata discovery

- OpenID Connect: OIDC; special use case of auth design specifically for SSO and sharing profile information

  - provides structure to a user profile and selective share elements within the profile
