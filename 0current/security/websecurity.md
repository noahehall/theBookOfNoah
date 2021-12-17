# web security

## basics

### links

- envs
  - [kali linux](https://www.kali.org/)
  - [caine](https://www.caine-live.net/)
  - [blackbox](https://www.backbox.org/)
  - [parrot](https://www.parrotsec.org/)
  - [demon](https://www.demonlinux.com/)
- tools
  - [metasploit](https://www.metasploit.com/)
  - [samurai](https://owasp.org/www-project-samuraiwtf/#SamuraiWTF_Project)
  - [nessus](https://www.tenable.com/products/nessus)
  - [portswigger](https://portswigger.net/burp)
  - [wireshark](https://www.wireshark.org/)
  - [cobalt strike](https://www.cobaltstrike.com/)
  - wmap
  - nmap

### terminology

- exploit: a piece of code that illustrates how to take advantage of a secuirty flaw
- 0 day: type of exploit that has be publicized for less than a day/not publicized at all
- white hat: discovery security holes and will advise owners of the exploits before making them public
- black hat: hoard exploits to maximize the time windows during which they can use vulnerabilities
- dark web: websites available oly via special network nodes that anonymize incoming IP address

#### internet protocol suite

- internet protocol suite: dictates how computers exchange data over the web
  - there are over 20 protocols collectively under this umbrella

- TCP: transmission control protocol
  - background
    - created in response ARPANET (predecessor to the internet)
    - the first msg sent was a LOGIN command destined for a remote computer at stanford university, but crashed after the first two letters

  - high level workflow
    - messages sent via TCP are split into data packets
    - the servers that make up the internet push these packets from sender to receiver without having to read the entire msg
    - the receiver reassembles all the data packets into a usable order according to the sequence number on each packet
      - each packet the receiver gets, it responds with a receipt back to the sender
      - without the receipt, the sender will resend the packet
        - possibly along a different network path
        - possibly at an adjusted speed based on the speed of consumption by receiver
    - this send & receipt workflow guarantees msg delivery

- UDP: User Dataram Protocol
  - commonly used with video/situations where dropped data packets are expected/msg guarantee isnt required
