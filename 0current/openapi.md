
# links
    - [getting started](https://oai.github.io/Documentation/start-here.html)
    - [openapi specification reference](https://spec.openapis.org/oas/v3.1.0)
    - [openapi introduction](https://oai.github.io/Documentation/introduction.html)
    - [step-by-step tutorials](https://oai.github.io/Documentation/specification.html)
    - [openapi best practices](https://oai.github.io/Documentation/best-practices.html)
    - [api stylebook](http://apistylebook.com/design/guidelines/)

# openapi basics
    - http-based api designers benefit from having their api formalized in an openapi description document


## advantages of openapi 
    - all about permitting automated tools to process your api via a machine-readable format 
    - api description valildation and linting is
      - syntactically correct
      - adheres to a specific version of the openapi spec + internal team formatting guildelines
    - data validation
      - ensure bidirectional data flowing through your api is correct in all envs
    - documentation generation 
      - create human-readbale docs based ont he machine-readble description via automation 
    - code generation 
      - automated creatino of both server and client code in any programming language
    - graphical editors 
      - creation of description files using a gui instead of typing them by hand
        - fk ur gui wheres the one-liner xterm?
    - mock servers
      - create fake servers with example responses for testing
        - available before actual code is written
    - security analysis
      - discover potential vulnerabilities at the api design stage
    - openapi marketing selling points 
      - openapi description is a non-propriety format 
      - developed tooling ecosystem relative to other api description formats
      - openapi description format is readbale by both machines and humans
        - any modern description format is but hey

## openapi best practices
    - not limited to just openapi, but apis in general
    - use a design-first approach (vs code-first)
      - code-first
        - the api is first implemented in code and then it description is created from it 
          - uses coe comments, code annotations or simply written from scratch
      - design-first 
        - the api description is writen first and then the code follows 
        - this enables the code to already have a skeleton (the description) from which to build, and tools can automate from there
      - which one better?
        - openapi stresses the design first approach 
          - the number of apis that can be created in code is far superior to what can be described in openapi
            - if openapi is your poison, follow this
              - since its difficult to understand the limitations upfront; by starting with openapi you wont enter a situation where you've coded an API endpoint that is undescribable in openapi descroptions
            - i.e. openapi is not capable of describing every possible http api
            - 
    - keep a single source of truth
    - add openapi documents to source control 
    - make openapi documents available to the users 
    - refrain from writing openapi documents by hand
    - when working with big documents 
      - keep it DRY 
      - split/decompose big docs into several files 
      - organize via tags 
    - [review the api sylebook design guidelines](http://apistylebook.com/design/guidelines/)

# terminology 
    - openapi
      - machine-readable api description
      - broadly adopted industry standard for describing new apis
      - 