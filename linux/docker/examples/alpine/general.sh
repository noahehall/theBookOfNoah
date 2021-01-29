# general shit useful for alpine images

# create user and group, e.g. postgres
RUN set -eux; \
  addgroup -g 70 -S postgres; \
  adduser -u 70 -S -D -G postgres -H -h /var/lib/postgresql -s /bin/sh postgres; \
  mkdir -p /var/lib/postgresql; \
  chown -R postgres:postgres /var/lib/postgresql


