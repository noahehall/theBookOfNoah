# random at work with youtube in background
  - functional programming:
    + is using functions to complete tasks (without relying on objects)
    + utilizing pure functions (as opposed to functions relying on side effects)
    + using higher order functions
    + avoid mutating data (i.e. changing stuff in place)
      - use persistent datastructures to get around copying huge objects everytime you need to create a new object
      - e.g. if you have a huge array, but you need to change a single item, you'll have to create a new array (because its immutable)
      

https://hpbn.co/primer-on-latency-and-bandwidth/#speed-of-light-and-propagation-latency
# High Performance Browser Networking
  - WPO: web performance optimization (WPO) industry
  - Need For Speed:
    + Faster sites lead to better user engagement.
    + Faster sites lead to better user retention.
    + Faster sites lead to higher conversions.
  - Content delivery network (CDN): distributes content around the globe, and serving that content from a nearby location to the client, enables us to significantly reduce the propagation time of all the data packets.
  - Measures
    + bps: Bits Per Second
      - Network data rates are typically measured in bits per second (bps)
      - there are 8 bits for every byte
    + Bps: Bytes Per Second
      - data rates for non-network equipment are typically shown in bytes per second (Bps). This is a common source of confusion, pay close attention to the units.
      - there is 1 byte for every 8 bits
        + For example, to put a 10 megabyte (MB) file "on the wire" over a 1Mbps link, we will need 80 seconds. 10MB is equal to 80Mb because there are 8 bits for every byte!
    + speed of light: 299,792,458 meters per second, or 186,282 miles per second.
    + Lag: but studies have shown that most of us will reliably report perceptible "lag" once a delay of over 100–200 milliseconds is introduced into the system. Once the 300 millisecond delay threshold is exceeded, the interaction is often reported as "sluggish," and at the 1,000 milliseconds (1 second) barrier, many users have already performed a mental context switch while waiting for the response

## Network Traffic
  - Latency: the time it takes for a message, or a packet, to travel from its point of origin to the point of destination
  - Bandwidth: Maximum throughput of a logical or physical communication path
  - Router: responsible for relaying a message between the client and the server
  - Distance between client and server is the sum of:
    + Propagation delay: Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal propagates.
      - Propagation time is dictated by the distance and the medium through which the signal travels
      - propagation speed is usually within a small constant factor of the speed of light.
    + Transmission delay: Amount of time required to push all the packet’s bits into the link, which is a function of the packet’s length and data rate of the link.
      - transmission delay is dictated by the available data rate of the transmitting link and has nothing to do with the distance between the client and the server.
      - As an example, let’s assume we want to transmit a 10 Mb file over two links: 1 Mbps and 100 Mbps. It will take 10 seconds to put the entire file "on the wire" over the 1 Mbps link and only 0.1 seconds over the 100 Mbps link.
    + Processing delay: Amount of time required to process the packet header, check for bit-level errors, and determine the packet’s destination.
    + Queuing delay: Amount of time the packet is waiting in the queue until it can be processed.
      -  if the packets are arriving at a faster rate than the router is capable of processing, then the packets are queued inside an incoming buffer. The time data spends queued inside the buffer is, not surprisingly, known as queuing delay.
      - Bufferbloat: is a term that was coined and popularized by Jim Gettys in 2010, and is a great example of queuing delay affecting the overall performance of the network.
        + The underlying problem is that many routers are now shipping with large incoming buffers under the assumption that dropping packets should be avoided at all costs. However, this breaks TCP’s congestion avoidance mechanisms (which we will cover in the next chapter), and introduces high and variable latency delays into the network.
