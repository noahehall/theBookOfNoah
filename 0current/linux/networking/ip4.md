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
  - uses `32 binary bits` split into 4 groups of eight, each group represented as a decimal number
  - `network.network.subnet.host`
  - ip address block: each subnet creates a new block (with 254 ip addresses for hosts on the network)
    - `200.1.0.0`
    - `200.1.1.0`

- ip class: system for organizing ip addresses
  - class a: 0.0.0.0 -> 127.255.255.255
    - 8 bits for the network
    - 24 for the host
    - mask: 0.0.0
  - class b: 128.0.0.0 -> 191.255.255.255
    - mask: 255.0.0
  - class c: 192.0.0.0 -> 223.255.255.255
    - 24 bits for the network
    - 8 for the host
    - mask: 255.255.0

- subnet: portion of the networkin within class A, B or C
  - create and usesubnets to organize/categorize your network
  - ^ e.g. using specific ip address blocks for different types of network requests/biz depts
- subnetting: way to divide an ip address block into smaller portions, so fewer ip addresses are waisted
  - `ipaddress/number` the number divides the ipaddress block into fewer ip addresses (down from 254)

- subnet masks: way of identifying which part of the ip address relates to the network vs the host

- broadcast address: `255.255.255.255`
- addressing modes:
  - unicast: data is sent only to one destined host; ip contains 32-bit ip address of host
  - broadcast: data is addressed to all hosts in the network
  - multicast: mix of unicast + broadcast; destination starts with `244.x.x.x`

### ip4 address scheme

- uses hierarchical addressing scheme

```sh
  # (router)subnet mask
  192.168.1.152 # host ip
  255.255.255.0 # router subnet mask
  192.168.1.0 # network address: ip + mask is ANDed


```

## ipv6
