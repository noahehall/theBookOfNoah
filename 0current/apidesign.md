# TLDR
  - various notes concerning API design 


# links
  - [api product ideation and validation](https://medium.com/api-product-management/api-product-ideation-and-validation-aef140db00b)
  
## TODO 
  - [api as a product](https://api-as-a-product.com/articles/case-study-human-centered-api-design/)
  - [rethinking service blueprints for agile delivery](https://wiprodigital.com/2018/08/30/rethinking-service-blueprints-for-agile-delivery/)
  - [how to mke effective service blueprints](https://miro.com/guides/service-blueprints/)


# tools
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
    - 
  6. *Ideation* 
    - Inspire ideas for new API products.
  7. *Prioritization*
    - Select best ideas.
  8.  *Prototyping*
    - Create API prototypes that relieve pains or create gains.
  9.  *Presentation*
    - Create hype. Enforce quality of prototypes.
  10. *Wrap Up & Next Steps*
    - Review participants’ expectations and results. Define next steps and follow-ups.