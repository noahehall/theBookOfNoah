# cognito

- identity platform for web/mobile apps: sign up/in + federated identities
- a user directory, authnz server and service for oauth2 access tokens and aws credentials

## my thoughts

## links

- [intro](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)
- [user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)

## best practices

### anti patterns

## features

- security features such as adaptive authentication, support compliance, and data residency requirements
- Scale to millions of users with a fully managed, high-performant, and reliable identity store.
- Federate sign-in using OIDC or SAML 2.0

### pricing

- charges for identity management and data synchronization
  - user pools based on monthly active users
- check the docs, the free tier doesnt expire

## terms

## basics

## integrations

### api gateway

- create an authorizer of tyype COGNITO_USER_POOLS and configure an api method to use that for authnz

## considerations
