#!/bin/bash
# http://postgresguide.com/setup/example.html
set -e

createdb pgguide

# --create
pg_restore -v --if-exists --clean --no-owner --no-privileges --username=postgres --dbname=pgguide /docker-entrypoint-initdb.d/pgguidedb.dump