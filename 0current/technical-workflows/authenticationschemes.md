# TLDR

## links

- guides
  - [why JWT suck](https://developer.okta.com/blog/2017/08/17/why-jwts-suck-as-session-tokens)

## basics

- authentication: receiving, verifying users
  - currently: JWT

- authorization: controlling access privileges for authenticated users

  -

## rbac

- role based access controls
  - establish permissions based onthe functional roles in the enterprise, then appropriately assign users to a role/set of roles
- roles: represent the tasks, responsiblities, and qualifications associated with an enterprise (i.e. distinct for each business)
  - roles are genenrally persistent with respect to user turnover (i.e. dont change as users come and go)

- flat rbac
  - users are assigned to roles
  - permissions are assigned to roles
  - and users acquire permissions by being members of roles
  - user-role and permission-role assignment should be many-to-many
  - you can determine which roles are assigned to which users, and which user is assigned to which role(s)
  - users can simultaneously exercise permissions o fmultiple roles
