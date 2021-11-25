# TLDR

- needed information for vpc, terraform, etc

## links

- [ipv4 addressing](https://www.tutorialspoint.com/ipv4/ipv4_addressing.htm)
- [ipv4 address classes](https://www.tutorialspoint.com/ipv4/ipv4_address_classes.htm)
- [ipv4 vlsm](https://www.tutorialspoint.com/ipv4/ipv4_vlsm.htm)
  - to understand the slash `/bits` in ip addresses
- [ipv4 reserved addresses](https://www.tutorialspoint.com/ipv4/ipv4_reserved_addresses.htm)
- [subnet cheatsheet](https://www.dnsstuff.com/subnet-ip-subnetting-guide)

## ipv4

- ip address: identifier for any device connected to a network
  - uses 32 binary bits spplit into 4 groups of eight, each group represented as a decimal number
- broadcast address: `255.255.255.255`
- addressing modes:
  - unicast: data is sent only to one destined host; ip contains 32-bit ip address of host
  - broadcast: data is addressed to all hosts in the network
  - multicast: mix of unicast + broadcast; destination starts with `244.x.x.x`

### ip4 address scheme

- uses hierarchical addressing scheme

```sh
  # hierarchical addressing scheme
  # ^ network.network.subnetwork.host
  # ^ a single ip can contain info about its network, subnet, and a specific host
  xxx.xxx.xxx.xxx

  # (router)subnet mask
  192.168.1.152 # host ip
  255.255.255.0 # router subnet mask
  192.168.1.0 # network address: ip + mask is ANDed


```

## ipv6
