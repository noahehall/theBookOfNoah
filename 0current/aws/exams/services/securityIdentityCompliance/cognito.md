# cognito

- identity platform for web/mobile apps: sign up/in + federated identities
- a user directory, authnz server and service for oauth2 access tokens and aws credentials

## my thoughts

## links

- [intro](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)
- [user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
- [common use cases](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html)

## best practices

- The preferred way to use web identity federation for mobile applications

### anti patterns

## features

- security features such as adaptive authentication, support compliance, and data residency requirements
- Scale to millions of users with a fully managed, high-performant, and reliable identity store.
- Federate sign-in using OIDC or SAML 2.0
- add user sign-up, sign-in, and access controls to your web and mobile apps
- define roles and map users to different roles so that your app can access only the resources that are authorized for each user.

### pricing

- charges for identity management and data synchronization
  - user pools based on monthly active users
- check the docs, the free tier doesnt expire

## basics

- user management: managing user lifecycle, profile and monitor user engagement
- idp: identity providers (federated)
- cognito provides a hosted UI for sign up/in/reset/etc

### Cognito Sync

- save data & sync across devices for offline use

### Federation

- SAML workflow
  - app sends user to cognito page for auth
  - cognito determines IDP and redirects user to auth
  - if user auth is successful its POST back to cognito as a SAML assertion
    - profile is upserted in cognito
- OIDC workflow
  - app asks users to sign in: validation occurs at each transaction
  - app uses login with amazon resources to accept user credentials
  - app uses cognito API to exchange the login with amazon id token for a cognito token
  - app requests temporary creds from STS, passing in the cognito token
  - app receives STS creds, which includes the AssumeRoleWithWebIdentity permission
    - the temp creds + assumed role permissions determines the users access

#### user pools

- create & maintain user directories and create sign in/up into mobile/web apps
  - a user directory that manages the overhead of handling the tokens that are returned from social identity providers
- handles IdP interactions
- provides
  - profiles to manage users
  - OpenID Connect and oauth2 tokens

#### Identity Pools

- create unique AWS identities for federated users, and authenticate them with identity providers
- provides AWS creds for accessing resources on behalf of un/authenticated users
- rules to map users to IAM roles

## considerations

## integrations

- highly integrated with STS, check that file for more

### api gateway

- create an authorizer of type COGNITO_USER_POOLS and configure an api method to use that for authnz
