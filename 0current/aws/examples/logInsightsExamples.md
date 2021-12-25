# TLDR

- common queries

## TODO

- find a good set of common queries, no need to create your own

## basics

- line & stacked require you to group by time `bin(60m)` for an hr

```sh

# top 50 tcp src ips
  filter protocol=6
    | stats count(*) as numberOfSessions by srcAddr
    | sort numberOfSessions desc
    | limit 50

# hourly packet transfer in bytes
  stats sum(bytes) by bin(60m)

# top 50 sources of traffic
  stats sum(bytes) as totalTraffic by srcAddr
    | sort totalTraffic desc
    | limit 50
```
