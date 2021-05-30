bookmark
  https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
  limiting which fields are returned by the api

  https://medium.com/api-product-management/asset-discovery-and-api-product-ideation-7f23ccde6939
  overfiew of API workshop 2

nextup
  https://stoplight.io/api-design-guide/basics/
# TLDR
  - various copypasta concerning API design 


# links
  - [towards a vlidated human-centered workshop design](https://www.slideshare.net/TobiasBlum/innovating-the-api-economy-towards-a-humancentered-workshop-design)
    - master thesis by tobias blum; creator of the human-centered api methdology
  - [human-centered api design](https://medium.com/api-product-management/design-apis-human-centered-to-build-successful-api-products-ffe35015cee5)
  - [api product ideation and validation](https://medium.com/api-product-management/api-product-ideation-and-validation-aef140db00b)
  - [best practices for REST api design (stackoverflow.blog)](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
  - [best practices in API Design (swagger)](https://swagger.io/resources/articles/best-practices-in-api-design/)
  - [RESTful web API design (microsoft)](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
  - [REST API: concepts, best practices and benefits (altexsoft)](https://www.altexsoft.com/blog/rest-api-design/)
  - [HATEOAS driven REST APIs](https://restfulapi.net/hateoas/)
  - [best practices for designing pragmatic RESTful apis (enchant)](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
  - [REST (roy fielding)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
  - [REST (wikipedia)](https://en.m.wikipedia.org/wiki/Representational_state_transfer)
  - [roy fielding](https://roy.gbiv.com/)
  - 
  
## other links
  - [selecting a rapid prototyping process](https://engineeringproductdesign.com/rapid-prototyping-process-selection-key-factors/)
  - [rapid prototyping](https://engineeringproductdesign.com/knowledge-base/rapid-prototyping-techniques/)
  - [CRUD](https://en.m.wikipedia.org/wiki/Create,_read,_update_and_delete)
  - [api versioning](https://stackoverflow.com/questions/389169/best-practices-for-api-versioning)
  - [api versioning (stripe)](https://stripe.com/docs/api/pagination/auto)
  - 

## put this shit elseware
  - [etag](https://en.m.wikipedia.org/wiki/HTTP_ETag)
  - [oath 2.0 authorization framework](https://datatracker.ietf.org/doc/html/rfc6750)
  - [oath 2](https://oauth.net/2/)
  - [stackoverflow teams](https://stackoverflow.com/teams?utm_source=so-owned&utm_medium=banner&utm_campaign=campaign-17&utm_content=blog-1)
  - [dogfood](https://en.m.wikipedia.org/wiki/Eating_your_own_dog_food)
  - [HEADER field definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
  - [JSONP](https://en.m.wikipedia.org/wiki/JSONP)
  - [Fetch specification](https://fetch.spec.whatwg.org/)
  - [web linking](https://datatracker.ietf.org/doc/html/rfc5988)
  - [HTTP status codes](https://datatracker.ietf.org/doc/html/rfc6585)
  - [rate limiting](https://stackoverflow.com/questions/16022624/examples-of-http-api-rate-limiting-http-response-headers)



## TODO 
  - [api as a product](https://api-as-a-product.com/articles/case-study-human-centered-api-design/)
  - [rethinking service blueprints for agile delivery](https://wiprodigital.com/2018/08/30/rethinking-service-blueprints-for-agile-delivery/)
  - [how to mke effective service blueprints](https://miro.com/guides/service-blueprints/)


# terms
  - prototype: preliminary version of the end-product for:
    - evaluating the design
    - testing the technology
    - analyse the working principle
    - provide product specification for the real working system

# tools
  - product story telling
  - product elevator pitch

  - out-of-the-box brainstorming: approach to contemplating completely new ideas
    - scrabble bag it: pick a random letter from the alphabet which represents the first letter of your new idea
    - pocket dictionary: pick a random word from the dictionary and describe your problem/solution in the context of this word
    - opposite day: think of different ways to NOT SOLVE THE PROBLEM, or reasons why the customer SHOULDNT USE YOUR EXISTING SOLUTION
      - lol people do this shit too much already
    - there are others, but these are the coolest
  
  - rapid prototyping 
    - the proceess of creating prototypes quickly to visually and functionally evaluate an engineering product design
    - key factors affecting the prototype
      1. purpose
      2. quality
      3. quantity
      4. complexity
      5. cost


  - api valuation matrix
    - evaluate (rank) different api ideas
    - plot each api product card on the x-y map and focus on the ones with high potential and highviabiility
      - vectors
        - top right: the best product APIs with both high potential and viabiility
        - top left: viable ideas but dont provide value/have great potential
          - might be potential in the future, so return to these ideas
        - bottom left: least (umm worse) product apis: neither viable or potential
        - bottom right: ideas with great potential because they provide high value, however low viabiility becuase you dont have to resources to execute
      - dimensions 
        - potential: x axis
          - the value the api brings to the team, organization, customers
        - viabiility: y axis
          - how realistic it is to build the api AND provide it to consumers based on avaiable resources, experience and reputation
          - docs read build OR provide, but i prefer to GROUP them as one


  - api product cards
    - consists of:
      - short descriptive name
      - visual icon representing functionality/value proposition
      - short description of the functionality
      
  - api service blueprint
    - document illustrating how an API supports a customer journey?
      - useful in outling a customer journey by mapping all  relevent customer interactions and backend processes
      - identifying pain points in each step and creating api products that alleviates them
    
    - layers/steps
      1. physical evidence: elements that influence customers perception
         - e.g. product info, ads, websites
      2. user action: steps users take to get a job done
         - e.g. registering on a website, searching, etc
      3. front stage: interfaces the user interacts with
         - e.g. web site
      4. back stage: services and processes that are used
         - e.g. product search, cart checkout
      5. api stage: apis that can be applied.
        - e.g. payment api
    
    - dimensions
      1. technical depth: the lower the layer/step the more technical it is (i.e. layer 5 is more technical than layer 1)
      2. timeline: represents the customer journey, documenting each step a user takes (left > right) through a specific layer


# rest api design
## best practices
  - before you do anything
    - start with a stable data model before releasing a public API


  - structure & design: an API is a user interface for a developer
    - use plural NOUNS (things) and not ACTIONS (http methods) in your endpoint URLs
      - wtf is the difference between goose & geese?
    
    - use web standards
    - should be explorable via a browser address bar
      - this should also include common search queries
        - package up common sets of conditions into easily accessible endpoints
        - e.g. recently closed could be `/tickets/recentlyclosed` versus a long as fkn filter query param
    - have a single source of documentation
      - available without logging in
      - not embedded (e.g. as a PDF) but by default via browser
      - include copypasta examples
        - im personally not using shit without a working copypasta
        - 
    
    - use restful URLs and actions
      - structure your API into logical resources that are manipulated using HTTP methods (CRUD)
        - dont map to your data model 1to1
          - this is likely not effective from an API consumer perspective
          - a security risk by revealing the structure to your data modal
          - brittle in the event your data model changes
        - hierarchy 
          1. if resource Y is always a child of X, then `/v1/x/:id/y
          2. if resource Y is independent but associated: include an identifier with X where Y can be retrieved with a second API call
          3. if resource Y is independent but always requested with X: see #1 or embed the resource within the call to retrieve X
             - this avoid the second call with approach #2
        - http methods have meaning: e.g. a single `/users` endpoint can receive GET, PUT, POST, PUT, PATCH, etc without needing 5 different URIs
          - GET: retrieve thing(s)
          - POST: create thing(s)
          - PUT: update thing(s)
          - PATCH: partially update thing(s)
            - arguable if PATCH should ever be used
            - however PATCH can be used to make an ACTION on a resource appear as a FIELD ona resource
              - e.g. ACTIVATE action could be a PATCH on a resource, even tho the backend data model supports this via other logic (and not an activate field)
          - DELETE: delete thing(s)
        - 
    
    - return useful confirmations from POST, PATCH & PUT requests
    - only/always use (fk the rest)
      - JSON syntax (fk xml) for all HTTP methods
        - some HTTP clients wont be supported, but fk them (unless their paying u)
      - camelCase (fk snake)
      - compression (e.g. gzip) unless in test mode 
      - pretty print unless in unless in prod prod
    - effectively use HTTP status codes
    - define a consumable error payload


  - versioning
    - have a predictable and publicly available versioning scheme and update schedule
      - CHANGE is coming, everyone knows it, versioning helps manage it
    - version via the URL (lol1)
      - prevents invalid requests from hitting updated endpoints
      - smooth transition to newer versions while sunsetting legacy endpoints
      - ensures browser explorability across versions
      - provides structural stability
    - version via HEADER fields (lol2)
      - useful for specifying minor/patch versions of a major versions
        - e.g. field deprecedations, endpoint changes, etc
  
  

  - features
    - HATEOAS
      - implement it (lol1)
      - dont implement it (lol2)
    - many features require extended set of options
      - filtering
        - use a unique query param for each field e.g. `poop?field1=yes&field2=no`
      - sorting
        - use a generic queyr param for sorting rules e.g. poop?sort=-field1&field2
          - unary operators -/+ indicate DESC & ASC
      - searching: 
        - /users?search=field1...: 
          - some resources require SEARCH as a mechanism to filtering and retrieving matches
        - /search?...: 
          - a distinct endpoint for searching all resources
      - pagination
        - via link headers (lol1)
        - via query params (lol2)
    - ability to toggle/specify specific features
      - toggle
        - response envelopes: required by JSONP and other limited http clients
      - specify
        - version: major version in the URL, minor/patch versions via HEADER fields (see stripe/enchant)
        - returned fields: do you need every user field every time?
    - autoloading
    - http-method-override
      - never on GET requests
    - caching
      - via response headers
  
  - security
    - use SSL everywhere
      - encrypt communication between parties
      - inhibit eavesdropping/impersonation if authentication credentials are hijacked
      - enables use of access tokens instead of having to sign each API request
    - token based authentication
    - oauth2 in case delegation is required
    - use HARD errors
      - e.g. a client requests a non secure version of an API endpoint
        - an automatic redirect to the SSL version could leak request params over the unencrypted endpoint

# human-centered api design
  - api design approach that explores the needs, wants and wishes of users and other stakeholders to create API products that fit their needs

## Workshop 2
  - asset discovery and api product ideation
  - [todo](https://medium.com/api-product-management/asset-discovery-and-api-product-ideation-7f23ccde6939)
  - there are other steps, these are the most relevant to me, at this time
  1. Beginning of Workshop. The objective is to welcome and wake up participants’s creativity. Provide overview to participants.
  2. Data Finding. Find data assets.
  3. Service Finding. Find service assets.
  4. Data & Service Landscaping. Get overview and understanding of data and service landscape
  5. Foresight Thinking. Understand what makes API successful
  6. Prioritization. Select most important assets.
  7. API Product Definition. Create drafts of API products.
  8. Stakeholder Mapping. Identify stakeholders to collaborate with.
  9. Outlook & Feedback. Review participants’ expectations and results. Define next steps and follow-ups.


## Workshop 3
  - api production ideation and validation
  - goals: 
    1. understand customers' journey and pain points
    2. generate develop and validate ideas for API products
   
  - there are other steps, these are most relevant to me, at this time
  1. *Intro of Companies & Participants*
    - Participants get to know each other.
    - fk that ^ you should spend this time to get to know your stakeholders:
      - who they are
      - what they do
      - general industry experience
      - history with working with APIs

  2. *Customer Journey*
    - Understand customer’s job to get done.
    - build customer empathy and understand the journey of a customer]
    - create an API SERVICE BLUEPRINT
  
  3. *Pain Point Identification* 
    - Identify biggest pains and gains to tackle.
    - each step in the service blueprint should be forced ranked
      - knowing where a customer is most disatisfied in relation to your business is critical in building solutions that ease the transaction process
      - from an API perspective: focus on how(and if) a new/modified API can reduce the pain
  
  4. *Additional Problems & Needs*
    - map each pain point to a specific need, and add missing pain points & needs
      - e.g. pain: battery always dieing when using app, need: spend more time on tinder
    - discover incremental innovations
      - replacing one part of a customer journey with an existing but better one
      - e.g. instead of hella fkn captas and clicking those lame fkn images, how about simple login?
    - Discover radical innovations.
      - replacing  one part of a customer journey with a new one
  
  5. *Problem/Solution Fit*
    - Identify what pain points can be solved with API product ideas.
      - create API PRODUCT CARDS for each pain point that can be resolved with an existing API
  

  6. *Ideation* 
    - Inspire ideas for new API products.
    - if pain points remain without appropriate API PRODUCT CARDS, develop new API ideas
  
  7. *Prioritization*
    - Select best api product card to work on from the previous step
    - use the API VALUATION MATRIX to compare each idea
    
  8.  *Prototyping*
    - Create API prototypes that relieve pains or create gains.
    - use the RAPID PROTOTYPING method to test the api idea
      - output:
        - ultimately the prototype should reflect how the interaction with the customer changes when using the prototyped idea
        - a testable prototype
        - clear vision about the apis task
        - a short story that explains the apis impact


  9.  *Presentation*
    - Create hype. Enforce quality of prototypes.
    - use STORY TELLING and ELEVATOR PITCH

  10. *Wrap Up & Next Steps*
    - Review participants’ expectations and results. Define next steps and follow-ups.
    - 