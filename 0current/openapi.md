
# TLDR 
  - search for askholz for things we need to ask holz


# links
  - [getting started](https://oai.github.io/Documentation/start-here.html)
  - [openapi specification reference](https://spec.openapis.org/oas/v3.1.0)
  - [openapi introduction](https://oai.github.io/Documentation/introduction.html)
  - [step-by-step tutorials](https://oai.github.io/Documentation/specification.html)
  - [openapi best practices](https://oai.github.io/Documentation/best-practices.html)
  - [api stylebook](http://apistylebook.com/design/guidelines/)
  - [validation tools](https://openapi.tools/#data-validators)
  - [openapi automated tools](https://openapi.tools/)
  - [openapi text editors](https://openapi.tools/#text-editors)
  - [openapi gui editors](https://openapi.tools/#gui-editors)
  - [openapi DSLs](https://openapi.tools/#dsl)
  - [reusing descriptions](https://oai.github.io/Documentation/specification-components.html)
  - [openapi tags](https://spec.openapis.org/oas/v3.1.0#oasTags)
  - [openapi operations](https://oai.github.io/Documentation/specification-paths.html)
  - 

# terminology 
  - openapi
    - machine-readable api description
    - broadly adopted industry standard for describing new apis
  - tags: a piece of metadat (unique name and an optional description) that you attach to operations
    - tools then use tags to e.g. sort all your api operations by their tags
  - 
# openapi basics
  - http-based api designers benefit from having their api formalized in an openapi description document
  - format 
    - JSON/YAML


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
          - if openapi is your poison, follow this like moses through the red sea
            - since its difficult to understand the limitations upfront; by starting with openapi you wont enter a situation where you've coded an API endpoint that is undescribable in openapi descroptions
          - i.e. only use an API endpoint that can be described by openapi if your following the openapi spec; and the design-first approached enables this
            - askholz

  - keep a single source of truth
    - information should not be duplicated in multiple places
    - e.g. using code annotations to generate an openapi description, but only commiting the openapi description to source control
      - which one do you follow? dont do this
      - 
  - add openapi documents to source control 
    - openapi descriptions are not just a documentation artificat
    - they are first-class source files that enable various automated processes 
      - eg. boilerplate generation, unit testing, documentation rendering, CI processes, etc
      - 
  - make openapi documents available to the users 
    - rendered documents are useful, but even more so the openapi descriptions for power users
      - e.g. to generate client code, build automated bindings for programming languages, etc.
      - 
  - refrain from writing openapi documents by hand
    - any big project should not hand-write openapi descriptions
    - use the available tools:
      - openapi text / gui editors: take care of repetitive tasks, reusable components, real-time preview
      - openapi DSLs: domain specific languages tailred to specific development fields; the DSL is a language that has to be learned, but hey
      - code annotations: annotate your code from which the openapi descriptions will be generated; tools are available that parse the code annotations and generate openapi documents automatically
  - when working with big documents 
    - keep it DRY 
      - reusable description fragments should be moved to the `components` section and reference it from other places using `$ref`
    - split/decompose big docs into several files 
      - use the natural hierarchy present in your api endpoints to build your file structure
        - e.g. put all routes starting with `/users` in the same file (like a sub-api)
    - organize via tags 
      - helps  you arrange your operations and find them faster
      - 
  - [review the api sylebook design guidelines](http://apistylebook.com/design/guidelines/)

