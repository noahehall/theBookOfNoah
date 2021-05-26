# TLDR
  - various notes concerning API design 


# links
  - [towards a vlidated human-centered workshop design](https://www.slideshare.net/TobiasBlum/innovating-the-api-economy-towards-a-humancentered-workshop-design)
    - master thesis by tobias blum; creator of the human-centered api methdology
  - [human-centered api design](https://medium.com/api-product-management/design-apis-human-centered-to-build-successful-api-products-ffe35015cee5)
  - [api product ideation and validation](https://medium.com/api-product-management/api-product-ideation-and-validation-aef140db00b)
  
## other links
  - [selecting a rapid prototyping process](https://engineeringproductdesign.com/rapid-prototyping-process-selection-key-factors/)
  - [rapid prototyping](https://engineeringproductdesign.com/knowledge-base/rapid-prototyping-techniques/)


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

# human-centered api design
  - api design approach that explores the needs, wants and wishes of users and other stakeholders to create API products that fit their needs

## outline
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


  9.  *Presentation*
    - Create hype. Enforce quality of prototypes.
  10. *Wrap Up & Next Steps*
    - Review participants’ expectations and results. Define next steps and follow-ups.