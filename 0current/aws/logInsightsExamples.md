# TLDR

```sh

# top 50 tcp src ips
  filter protocol=6
    | stats count(*) as numberOfSessions by srcAddr
    | sort numberOfSessions desc
    | limit 50

```
