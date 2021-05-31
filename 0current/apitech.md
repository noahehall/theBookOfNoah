# TLDR
  - technology supporting API 

# links
  - [http mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  - [api doc & description guide stoplight](https://stoplight.io/api-documentation-guide/basics/)
  - [tcp mdn](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
  - 


# terminology
  - user agent: any tool that acts on behalf of the user
  - load balancing: a collection of servers sharing the load of client requests. appears as a virtual single server from the client perspective
# ip

# tcp: transmission control protocol
  - network protocol that lets two hosts connect and exchange data streams
  - role: 
    - guarantees the delivery of data and packets in the same order as they were sent
    - ensure packats are delivered error free


# udp
# security
## tls: transport layer security
  - encrypted TCP, formally known as SSL
    - client-server protocol that ensures communication privacy by using cryptographic protocols to provide security over a network
  - role:
    - prevent tampering and eavesdropping on email, web browsing, messaging, etc
    - 
## ssl 
  - old standard security for creating an encrypted network link between as erver and a client
    - use TLS instead
  - role
    - ensure all data between client and server is private and secure

# dns

# http
  - client-server protocol for the fetching of resources
    - request are initiated by the recipient(client) and responses sent from the server
    - communication between parties are exchanged via individual messages (as opposed to a stream of data like http2)
    - applicationn layer protocol sent over TCP/TSL 
  - components of http based systems
    - client >< proxy >< proxy >< proxy >< server
    - client: the user agent; primarily performed by the web browser
      - the browser
        - is always the netity initiating the request
          - sends an original request to fetch an HTML doc representing a page
          - parses this file
          - makes additioanl requests corresponding to the execution scripts, layout (CSS), and sub resources contained within the page (images/videos/etc)
    - web server: serves resources requested by clients
    - 
## http2

## speedy
