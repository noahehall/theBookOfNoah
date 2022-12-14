# traefik

Traefik is an open-source Edge Router that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them.

- its an edge router, the front door
- auto service discovery

## links

- [docs landing](https://doc.traefik.io/traefik/)

## providers

- inform traefik of the services under its purview
- e.g. dockerd will inform traefik of all running (and stopped) containers for discovery
  - docker is a LABEL based orchestrator
