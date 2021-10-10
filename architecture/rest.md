# wtf are the links?


# terminology
  - application integration styles
    - shared database
    - batch file transfer
    - invoking remote procedures (RPC)
    - exchanging asynchronous messages over a message oriented middleware (MOM)
  - xml parsers
    - SAX parser
      - read xml file line by line and divide into 3 partitions
        - start tag
        - end tag
        - data
      - slow reading and tag name dependence
    - dom parser
      - slow reading and tag name dependence
    - pull parser
  - SOA
    - service oriented architecture
    - a style for building business applications by means of services
    - applications comprises collections of services which communicate through messages
    - a design and architecture to implement other services
    - can be implemented using various protocols
      - http, https, jms, rmi, rpc, etc
    - service
      - logical encapsulation of self-contained business functionality
      - every service encapsulates one action
        - e.g. register user, send email
    - messages
      - services communicate with each other using messages
      - standard formats which everyone (every service) can read and understand
    - characteristics
      - services should support reliable messaging
      - services should support secure communication
      - services should be independent of other services
      - services should be able to communicate with each other asyncrhonously
  - distributed technologies
    - the increasing ratio of distributed applications has raised demand for distributed technologies
    - permits segmenting of application units and transferring them to different computers on different networks
  - DISCO
    - used to create discovery documents
    - groups the list of interrelated web services
    - the api creater issues a disco file on its server and that file contains the links of all the provided web services
    - this standard is good when the client knows the company already
  - SOAP
    - simple object access protocol
    - used to structure data
    - XML based protocol to exchange information over http
    - protocol for accessing web services
    - messages can be sent via HTTP, SMTP, HTTPS
    - strategies
      - contract-first
        - starts with defining first XML schema/WSDL and then creating classes based on them
      - contract-last
        - classes are defined first then WSDL is generated from them
  - WSDL
    - web services description language
    - used to create the interface definition
    - XML grammar for specifying a public interface for a web service
    - contains following key information
      - information on all publicly available functions
      - set of operations (through tag)
      - information about messages exchanges using tag in operation
      - message definition using binding information which provides information about how messages can be exchanged
        - i.e. if you need to specify transport protocol http/smtp and binding style rpc/document
      - address information for locating the specified service
      - etc
  - rest
    - REpresentaional State Transfer
    - web standards based architecture that uses http protocol for data communication
    - revolves around resources where every component is a resource and a resource is accessd by a common interface using HTTP standard methods
    - architectural style for building web services using http protocol
      - web services are treated as resources with basic HTTP methods
  - rest server
    - provides access to resources
    - responsible for passing the client the resource in the format the client] requests
  - REST client
    - accesses and presents resources
  - resource
    - identified by URIs/Global IDs
    - can be anything, e.g. text, JSON, xml, etc
    - similar to an object in OOP or an entity in a database
    - once a resource is identified then its representation is to be decided using a standard format so that the server can send the resource in the format the client can consume
  - resource representation concepts
    - understandability
      - both the server and the client should be able to understand and utilize the representation format of the resource
    - completeness
      - format should be able to represent a resource completely
      - e.g. with embedded resources (resource in a resource)
      - should be able to represent simple as well as complex structures of resources
    - linkability
      - a resource can have a linkage to another resource
      - a format should be able to handle such situations
  - web service
    - types
      - soap based
      - restful
        - contains no contract or WSDL file
    - collection of open protocols and standards used for exchanging data between heterogenous applications or systems
      - xml-rpc
        - remote procedure call (RPC) protocol which uses xml to encode its calls and HTTP as a transport mechanism
    - self documenting
      - they provide entire information regarding the available methods and parameters used via WSDL
      - you an also provide more information to explain web services
    - protocol stack
      - basically a set of various protocols that can be used to explore and execute web services
      - four layers
        - service transport
          - transfers messages between different applications (http, smtp, ftp, etc)
          - th
        - messaging (xml/json)
          - encodes messages in XML/JSON so that messages can be understood at each end
        - service description
          - describes the user interface to a web service, e.g. WSDL
        - service discovery
          - centralizes services to a common registry and offer simple publish functionality, e.g. UDDI
          - UDDI
            - universal, description, discovery and integration
            - the directory for storing information about a web service
            - used for publishing and finding businesses and web services
            - used to create business registries
            - provides consolidated directory for web services on the internet
            - clients use the UDDI to find web services as per their business needs
              - it basically hosts the web services from various companies
    - applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the internet ina manner similar to interprocess communication on a single computer
  - restful web services
    - web services based on rest architecture
    - use http methods to implement the concept of rest architecture
    - strategies
      - document style
        - send the XML message as part of SOAP request which is not possible in RPC style
        - suitable in applications where xml messages is treated as document and content of that document can change and the intention of web service does not depend on the content of the xml message
      - RPC style
        -
    - stateless
      - should not keep client state on the server
      - it is the responsibility of the client to pass its context to the server and then the server can store the context to process the clients further request
        - e.g. a session maintained by the server is identified by the session identifier passed by the client
      - advantages
        - web services can treat each method request independently
        - web services need not maintain the clients previous interactions, simplfying the application design
        - http is a stateless protocol, restful web services work seamlessly with the http protcol
      - disadvantages
        - web services have to get extra information in each request and then parse it to get the clients state
    - components
      - URI - uniform resource identifier
      - a service that provides representation such as JSON and a set of HTTP methods
  - idempotent
    - the result will always be the same no matter how many times the operation are invoked
    - is stateless
      -
  - addressing
    - locating resource(s) on the server
    - each resource is identified by its URI
      -
    - URI
      - uniform resource identifier
      - format
        - <protocol>://<service-name>/<resource-type>/<resource-id>
      - best practices
        - use plural noun for service names
          - e.g. 'users' is better than 'user'
        - avoid using spaces
          - use underscore/hyphen
        - use lowercase letters
          - although URI is case-insensitive, it is good practice to keep the URI lowercase only
        - maintain backward compatibility
          - once a URI is made public it should always be availble
          - in case the URI gets updated
            - redirect the older URI to a new URI using http status code 300/302
            - create a new version of the API
        - only use HTTP verbs
          - always use the standard http verbs to do operations on the resource


# HTTP


## messaging
  - restful web services make use of http protocols as a medium of communication between client and server
  - a client sends a message in form of a http request
  - the server responds in the form of an http response
  - both http response and request contain data and metadata (headers)


## methods
  - get
    - provides a read only access to a resource
  - post
    - used to create a new resource
  - delete
    - used to remove a resource
  - put
    - used to update an existing resource or create a new resource
  - options
    - used to get the supported operations on a resource


## protocols
  - http request
    - verb
      - indicates the http methods e.g. get, post etc
    - URI
      - uniform resource identifier to identify the resource on the server
    - http version
      - indicates the http version, e.g. http v1.1
    - request header
      - contains metadata for the http request message as key-value pars
    - request body
      - message content or resource representation
    - format
      1. Verb URI http version
      2. request header
      3. request body
  - http response
    - status/response code
      - indicates the server status for the requested resource
      - 200
        - OK
        - success
      - 201
        - created
        - when a resource is successfully creating using post/put request
        - returns the link to the newly created resource using the location header
      - 204
        - no content
        - when response body is empty
        - e.g. a DELETE request
      - 304
        - not modified
        - used to reduce network bandwidth usage in case of conditional get requests
        - response body should be empty
        - headers should have date, loation, etc
      - 400
        - bad request
        - states that an invalid input is provided
        - e.g. validation error, missing data
      - 401
        - unauthorized
        - states that user is using invalid/wrong authentication token
      - 403
        - forbidden
        - states that the user is not having access to the method being used
        - e.g. delete access without admin rights
      - 404
        - not found
        - states that the method is not available
      - 409
        - conflict
        - states conflict situation while executing the method
        - e.g. adding duplicate entry
      - 500
        - internal server error
        - states that the server has thrown some exception while executing the method
    - http version
      - indicates the http version, e.g. http v1.1
    - response header
      - contains metadata for the http response message as key-vale pairs
      - e.g.
        - content length
        - content type
        - response date
        - server type
    - response body
      - response message content or resource representation
    - format
      1. response code http version
      2. response header
      3. response body


# caching
  - storing the server response in the client itself
  - thus clients need not make a server request for the same resource again and again
  - the server response instructs the client how caching is to be done
    - logic
      - reusable resource ?
        - no - no-store
        - yes always re-validate
          - no-cache
          - cachable by intermediary
            - private
            - public
            - max-age

  - server response cache headers
    - date
      - date and time of the resource when it was created
    - last modified
      - date and time of the resource when it was last modified
    - cache-control
      - primary header to control caching
      - values
        - public
          - indicates that a resource is cacheable by any component
         - private
          - indicates the resource is cacheable only by the client and the server
            - i.e. no intermediary can cache the resource
        - no-cache/no-store
          - indicates that a resource is not cacheable
        - max-age
          - indicates the caching is valid up to max-age in seconds
          - after this, the client has to make another request
        - must-revalidate
          - indication to server to revalidate resource if max-age has passed
    - expires
      - expiration date and time of caching
    - age
      - duration in seconds from when resource was fetched from the server


# security
  - restful web services work with HTTP url paths, thus its important to safeguard a restful web service in the same manner as a website
  - best practices
    - validation
      - validate all inputs on the server
      - protect against SQL/NoSQL injection attacks
    - session based authnetication
      - use session based authentication to authenticate a user whenever a request is made to a web service method
    - no sensitive data in the URL
      - any sensitive data should be passed from client to server via POST
    - restriction on method execution
      - allow restricted use of HTTP methods
      - the GET method should NOT be able to delete data
    - validate malformed XML/JSON
      - check for well-formed input passed between client and server
    - throw generic error messages
      - a web service method should use standard HTTP error messages
  - foundation security services
    - the foundation/basics of
      - integration
      - authentication
      - authorization
      - digital signatures
      - encryption proccess
  - entrust identification service
    - comes from the entrust security transaction platform
    - permits companies to control the identities that are trusted to perform transactions with specific web services
  - entrust entitlements service
    - verifies entities that attempt to access a web service
    - ensures security in business operations
  - entrust privacy service
    - deals withs ecurity and confidentiality
    - encrypts data to ensure that only concerned parties can access the data
  - PKI
    - public kkey infrastructure


# JSON
  - JSON-RPC
    - a simple remote procedure call protocol similar to xml-rpc
    - uses the lightweight JSON format instead of XML
  -


# deployments
  - components that need to be published during a web service deployment


# testing tools
  - soapUI
    - for soap web services
  - firefox plugin
    - testing restful services


# examples
  - web service
    - GET /userservice/users
      - get list of users
      - type - read only
    - GET /userservice/users/1
      - get user with ID 1
      - type - read only
    - PUT /userservice/users/1
      - insert user with id 1
      - type - idempotent
    - POST /userservice/users/1
      - update user with ID 1
      - type - N/A
    - DELETE /userservice/users1
      - delete user with id 1
      - type -- idempotent
    - options /userservice/users
      - list the supported operations in the userservice/users
      - type - read only
    - head /userservice/users
      - returns only http header, no body
      - type - read only
  - resource
    - XML
      ```html
        <user>
          <id>1</id>
          <name>noah hall</name>
        </user>
      ```
    - JSON
      ```js
        {
          id: 1,
          name: 'noah hall'
        }
      ```