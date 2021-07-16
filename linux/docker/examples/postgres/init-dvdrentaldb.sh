#!/bin/bash
# https://www.postgresqltutorial.com/load-postgresql-sample-database/
set -e


createdb dvdrental

# pg_restore -v --no-owner --username=postgres --dbname=dvdrental /docker-entrypoint-initdb.d/dvdrental.tar
# --create
pg_restore -v --if-exists --clean --no-owner --no-privileges --username=postgres --dbname=dvdrental /docker-entrypoint-initdb.d/dvdrental.tar
