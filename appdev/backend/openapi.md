# bookmark

- <https://oai.github.io/Documentation/specification-docs.html>

# TLDR

# links

- [openapi home](https://www.openapis.org/)
- [openapi introduction](https://oai.github.io/Documentation/introduction.html)
- [openapi best practices](https://oai.github.io/Documentation/best-practices.html)
- [api stylebook](http://apistylebook.com/design/guidelines/)
- [validation tools](https://openapi.tools/#data-validators)
- [openapi automated tools](https://openapi.tools/)
- [openapi text editors](https://openapi.tools/#text-editors)
- [openapi gui editors](https://openapi.tools/#gui-editors)
- [openapi DSLs](https://openapi.tools/#dsl)
- [openapi map](https://openapi-map.apihandyman.io/)
  - check thiz out
- [rfc6838 media types](https://tools.ietf.org/html/rfc6838)
- [json references](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)

-

## OAS tuts

- [tic tac toe sample api](https://oai.github.io/Documentation/examples/tictactoe.yaml)
- [step-by-step tutorials](https://oai.github.io/Documentation/specification.html)
- [getting started](https://oai.github.io/Documentation/start-here.html)
- [reusing descriptions](https://oai.github.io/Documentation/specification-components.html)
- [openapi operations](https://oai.github.io/Documentation/specification-paths.html)
- [parameters and payload of an operation](https://oai.github.io/Documentation/specification-parameters.html)
- [api servers](https://oai.github.io/Documentation/specification-servers.html)
- [response object content field](https://oai.github.io/Documentation/specification-content.html)
- [documentation](https://oai.github.io/Documentation/specification-docs.html)
- [schema object](https://spec.openapis.org/oas/v3.1.0#schemaObject)
  
## OAS reference

- [openapi specification reference](https://spec.openapis.org/oas/v3.1.0)
- [openapi tags](https://spec.openapis.org/oas/v3.1.0#oasTags)
- [paths object](https://spec.openapis.org/oas/v3.1.0#pathsObject)
- [path item object](https://spec.openapis.org/oas/v3.1.0#pathItemObject_)
- [operation object](https://spec.openapis.org/oas/v3.1.0#operationObject)
- [responses object](https://spec.openapis.org/oas/v3.1.0#responsesObject)
- [response object](https://spec.openapis.org/oas/v3.1.0#responseObject)
- [media type objects](https://spec.openapis.org/oas/v3.1.0#mediaTypeObject)
- [request body objects](https://spec.openapis.org/oas/v3.1.0#requestBodyObject)
- [parameter object](https://spec.openapis.org/oas/v3.1.0#parameterObject)
- [parmater style field examples](https://spec.openapis.org/oas/v3.1.0#style-examples)
- [components object](https://spec.openapis.org/oas/v3.1.0#componentsObject)
- [reference object](https://spec.openapis.org/oas/v3.1.0#referenceObject)
- [server object](https://spec.openapis.org/oas/v3.1.0#serverObject)

# my notes

- openapi is all about describing a set of API endpoints in machine readable format
  - never forget you are not only specifying the contract of the api
    - but actually translating ANY api written in ANY language in format consumable by machines and automated tooling
    - so when shit is like wtf, remember, your just describing an api

# terminology

- openapi
  - machine-readable api description
  - broadly adopted industry standard for describing new apis
- API: applicatin programming interface
  - defines the allowed interactions between two pieces of software
  - composed of the list of possible:
    - methods to call (requests to make)
    - method parameters
    - return values
    - data format methods require + other useful information
- local API: both interacting parties run on the same machine
  - think machine apis, programming language apis, etc
- remote API: the interacting parties run on seperate machines and communicate over a network
- API provider: the party offering up its services through an API
- API consumer: the party requesting the API providers services
- API information hiding: neither side of the API (provider/consumer) know the implementation details of the other
  - the assumption is that both parties adhere to a strict contract
- API contracts: APIs sometimes called contracts as the assumption the API defintiion is binding & non-changing
  - the provider promises not to change its API and honor it during its promised lifetime
- API reference guide: piece of literature explaining to a developer how to use the API
- time sinks: the bullshit waste of time due to incomplete/inaccurate/fkboy reference guides causing devs to waste time searching for correct information
- api description file: aka api contract; a machine-readable specification of an API
  - should be complete, fully-detailed, and unambiguous
  - used to generate
    - human-readable documentation
    - boilerplate code (sdks) for provider/consumer applications in any programming language
    - auto-generate mock servers for early API testing
- method signatures

## terminilogy: openapi specific

- tags: a piece of metadata (unique name and an optional description) that you attach to operations
  - tools then use tags to e.g. sort all your api operations by their tags
- documents: machine-readable api descriptions
- paths: aka operations, aka routes, i.e. api endpoints lol
- path items: describes the http operations that can be performed ona path with a separate operation object for each one allowed
- media type objects: map directly to RFC6838 media types
  - describes the structure (schema) of the content
  - provides examples for document and mocking purposes
- input data
  - specified via parameters and requestBody fields
  - is the additional information that complements the endpoint and the operation ot fully detail a request

# introduction

- http-based api designers benefit from having their api formalized in an openapi description document
- format
  - JSON/YAML
- openapi specification: OAS
  - vendor neutral description format for http-based remote APIs
  - allows the description of a remote api accessible through http or http-like protocols
    - restful endpoints (http)
    - constrained application protocol CoAP
    - websockets
  - originally based on the swagger 2.0 spec, which was donated by smartbear software in 2015
  - does not describe every possible API; only the most common use cases
- openapi initiative: OAI
  - maintains, evolves and promotes the OAS
  - a consortium of industry experts with an open governance structure under the linux foundation umbrella

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
    - components object is a mechanism to remove redundancy from an openapi document by reusing portions of it
  - split/decompose big docs into several files
    - use the natural hierarchy present in your api endpoints to build your file structure
      - e.g. put all routes starting with `/users` in the same file (like a sub-api)
  - organize via tags
    - helps  you arrange your operations and find them faster
    -
- [review the api sylebook design guidelines](http://apistylebook.com/design/guidelines/)

# openapi specification: OAS

## openapi specificaiton: intro

- the following provide brief introductions to the main domains within the opanpi spec

### structure of an openapi document

- document: describes an http-like API in one/more machine-readable files

  - a textfile, commonly called `openapi.json  or`openapi.yaml` for the root document
    - i.e. a single JSON/yaml object containing fields adhering to the structure defined in the [oas](https://spec.openapis.org/oas/v3.1.0)
- document syntax
  - object fieldnames are case-sensitive
  - JSON/YAML
    - json:
      - numbers, strings, booleans, nulls, arrays, objects
      - syntax more rigid, less readable...
    - yaml:
      - json features + comments,
      - syntax less rigid but also requires strict indentation, hyphens, and potentially more cumbersome than json in certain contexts
      - benefits: reduced file size, interchangable with json (yaml v1.2), is a superset of JSON (thus can be intermixed)
- endpoint responses descriptions
  - described via `paths.PATH.VERB.responses.HTTPCODE.content`
- endpoint input data descriptions
  - decribed via paths.PATH.

-

### openapi document schema condensed view

- TODO clean this shit up based on spec not the examples
- TODO: add fields & parent sublist to each item

#### common fields

- description field
  - most openapi objects accept this field
  - provides additional information for developers, beyond what cn be automatically generated from the API descriptions
    - useful for explaining the purpose of parameters/effect each value has or possible interactions with other parameters
  - auto-doc tools can then merge both into a comprehensive, strucuted reference guides
  - permit the use of commonMark spec, e.g. basic markdown [see more](https://oai.github.io/Documentation/specification-docs.html#the-commonmark-syntax)

- summary field
  - provides a short description (summary of description field)
  - auto-doc tools use this in path list, page headers, etc.
  
- example object
  - *example, examples*
    - one vs multiple examples permitted
  - many openapi objects permit this field
  - list examples explicitly rather than embedded them within description fields
    - useful for auto-doc tools, mock servers, and special rendering of the examples within the documentation

- reference object
  - *$ref*
  - any object of the types supported by the components object can be replaced by a reference object pointing to a component
  - are actually json referneces (see links)
    - contain a single field whose string value is a URI pointin to the renferenced objects

- media type object
  - *schema*

  - schema object
    - *title, description, type, items, properties, example*
    - schema object describing the response/request body object

- parameters object
  - can reside in various locations, e.g. *path item* and *operation* objects, indicated by the *in* field
  - typically used to identify a resource
  - *name, in, description, required, style, content*, schema*
    - in: string; required; location of parameter
      - path: the parameter is part of the route of this operation (i.e. in th url)
      - query: parameter is appended to the query string part of the operations url
    - name: string; required; case-sensitive; unique
    - description: string; useful for documentation
    - required: bool(false); whether this parameter must be present
    - style: defines how a parameter is to be serialized in relation to its data-type
      - *simple, form, label, matrix*
        - primitive types e.g. integer
          - simple === 1234
          - form === id=1234
          - label === .1234
          - matrix === ;id=1234

        - array types e.g. array.id containing 1,2,3
          - *exploded=false*
            - used to separtae each field into a separate parameter
            - simple === 1,2,3
            - form === ids=1,2,3
            - label === .1.2.3
            - metrix === ;ids=1,2,3
          - *exploded=true*
            - simple === 1,2,3
            - form === ids=1&ids=2&ids=3
            - label === .1.2.3
            - matrix === ;ids=1;ids=2;ids=3

        - object types e.g. object.color containing {r:1,g:2,b:3}
          - *exploded=false*
            - simple === r,1,g,2,b,3
            - form === color=r,1,2,b,3
            - label === .r.1.g.2.b.3
            - matrix === ;color=r,1,b,2,g,3
          - *exploded=true*
            - simple === r=1,g=2,b=3
            - form === r=1&g=2&b=3
            - label === .r=1.g=2.b=3
              - askholz: when is this ever actually used
            - matrix === ;r=1;g=2;b=3

    - content/schema must exist, but not both
      - schema: schema object; used to specify a parameters type (e.g. integer)
      - content: used to specify a parameters type (similar to schema) but in more advanced situations

  - subfield of pathitem
    - all specified parameters are shared by all operations on that path
      - will override ndividual parameters at the operation object level but not remove them

- server object
  - fields: *url, description, variables, ...*
  - parent: *root openapi object, path item object, operation object*
  - specify the server (base urls) where the API can be accessed (is being served)
    - can contain multiple URLs, variable portions, etc

  - variables map object
    - fields: *var1, varX...*
      - each being a *server variable object*

    - server variable object
      - fields: *enum, default, description*

#### specific fields

- openapi object
  - *openapi, info, paths, components, servers*
  
  - components object
    - *schemas, responses, parameters*
    - contains definitions for objects to be reused in other parts of the document
      - most objects in a document can be replaced by a reference to a component
        - only objects listed as fields of the components object can be referenced
        - each field is a map pairing component names with objects to be reused

  - paths object
    - list of paths in form `/route1`, `/route2` etc
      - each path is a path item object
  
    - path item object
      - *get, put, post, delete, parameters*
        - each are operation objects
  
      - operation object
        - *summary, description, requestBody, responses, operationId, parameters*

        - request body object
          - the message payload
            - provides content for the resource (e.g. when updating a record in a db)
          - *description, content, required*
            - content: required;
            - required: bool(false); whether the message payload is required

        - responses object
          - list of http codes (i.e. response objects)
            - *"200", "500", etc*

        - response object
          - *description, content*
            - content describes the API response structure (in this context)
              - *application/json, text/html* etc
                - each a specific *media type object*

- content subfields
  - TODO: common|specific field?
  - provides a single-entry map of media types to media type objects
  - remember content is consumed in response & request body objects
  - parameters
  - media map
  - media type object
  - schema object
    - title, description, items, properties, example, type,

# examples

- TODO: move spec shit into the condensed view
- TODO: this should be working examples not explanations

```yaml
  # see json/yaml md docs elseware for extended review
  # JSON format
    {
      "anObject": {
        "aNumber": 42,
        "aString": "This is a string",
        "aBoolean": true,
        "nothing": null,
        "arrayOfNumbers": [
          1,
          2,
          3
        ]
      }
    }

  # YAML format
    anObject:
    aNumber: 42
    aString: This is a string
    longerString: 
      this is a longer string
      make sure to have a leading space
    aBoolean: true
    nothing: null
    arrayOfNumbers:
      - 1
      - 2
      - 3

  # YAML with json intermixed
    anObject:
      aString: This is a string
      arrayOfNumbers: [ 1, 2, 3 ] # Abbreviated array representation


  # minimal openapi document structure
  # see docs for full spec
    poopApi:
      openapi: 1.2.3 # string: OAS version used by this doc
      info: # object
        title: api name # string
        version: 1.2.3 # string: api version, not OAS version
      paths: {} # object: empty object = no endpoints defined

  
  # paths, path items, operatons
    poopApi:
      ...
      # endpoint list
      # use {} for no paths
      paths:
        # path objects
        # container for all operations supported by the api
        # must start with a '/'
        /flush:
          # path item objects
          # each describes a single api endpoint
          # +get, put, post, delete, etc
          get:
            # operation object
            # describes the operations paramaters
            # +payload
            # +potential server responses (mandatory field)
            summary: it aint brown let it drown
            description: it order to conserver water we only flush the tuff stuff
            parameters:
              ...
            responses:
              ...
          put:
            ...
        /wipe:
        ...

  `paths.PATH.OPERATION.responses.HTTPCODE.content`
  # responses object
  # mandatory field within the operations object
  # container for the expected answers the server can give to this request
  # each field is an http response cod enclosed in quotation marks
  # +its value is a response object (no s)
  # ++containing details about the response
    poopApi:
      ...
      /flush:
        get:
          # at least one response must be given
          # +recommended to be the success case
          # 5 wildcards are allowed
          # +[1-5]xx e.g. 1xx
          # + explicit codes > wildcards
          responses:
            "200":
              # should be specific to compliment the general 200 response code
              description: successful X if Y and Z are present
              content:
                ...
            "501":
              ...

  # response object content field
  # +use to describe
  # ++possible payloads of the response
  # ++content of queries via the parameters object (see below)
    poopApi:
      ...
      /flush:
        "200":
          # describes the type(s) of returning content
          # each format has its own special schema
          # +wildcards accepted
          # ++explicit > wildcards
          content:
              # media type object
              # describes the structure of the content
              # +provides examples for documentation and mocking purposes
            application/json:
              # defines a data type
              # can be a primitive/array/object depending on its type field
              schema:
                # the type.value determines other fields available within the schema definition
                type: # string: number|string|boolean|array|object
                ...
            text/html:
            text/*:

  # schema extended examples
  ## type.value options map
    schema:
      # available for all types
      # +limits available options to a specific set
      enum:
        - number1
        - number2
        - number3
      # alternative format
      enum: ["#1", "#2", "3"]
    schema:
      type: string
      minLength:
      maxLength:
    schema:
      type: integer
      minimum:
      maximum:
    schema:
      type: array
      minItems:
      maxItems:
      # required for array types
      # a schema object (thus can contain schema options)
      items:
        type:
        ...
    schema:
      type: object
      # required for object types
      # list the properties of the object
      # pairing property names with a schema object
      # +thus the above applies to this
      properties:
        someFieldName:
          type: # schema object
        otherFieldName:
          ...

  # parameters object
  # examples of various locations a paramater can be found
  # remember this represents an actional parameter in an API
    paths:
      /users/{id}: # <--- see *in* notes
        get:
          parameters:
          - name: id
            in: path #name must be delimited by curly braces in the path and required must be true
            required: true # <-- see *in* notes

    # e.g. /users?id=1234
    paths:
      /users:
        get:
          # +https://oai.github.io/Documentation/specification-parameters.html#parameter-type
          parameters:
            - name: id
              in: query
              schema:
                type: integer
                minimum: 1
                maximum: 1234

    # +https://oai.github.io/Documentation/specification-parameters.html#parameter-location

  # requestBody 
    paths:
      /board:
        put:
          requestBody:
            content:
              application/json:
                schema:
                  type: integer
                  minimum: 1
                  maximum: 100


  # components + references object

    # defines 
    # +two comoponents
    # +2 references linking to the components
    components:
      schemas:
        coordinate: # a schema component
          type: integer
          ...
      parmeters:
        rowParam: # a parameter component
          name: row
          in: path
          schema:
            $ref: "#/components/schemas/coordinate"
          ...
    paths:
      /board/{row}/{column}:
        parameters:
          - $ref: "#/components/parameters/rowParam"



  # descriptions, examples, summaries
  #+ documentation related fields
    # example field example
    schema:
      coordinate:
        type: integer
        minimum: 1
        maximum: 3
        example: 1 # must match format of parent field

    # examples object example
    responses:
      "400":
        description: the provided params are incorrect
        content: 
          text/html: # media type object
            schema:
              type: string
            examples: # notice the values below are all strings, as specified above
              illegalPoop:
                value: "must wipe before flush"
              illegalFlush:
                value: "if it aint brown let it drown"



    

  # server object
    servers:
      - url: https://poop.com/v1
        description: v1 of poop api
      - url: https:poop.com/v2
        description: v2 of poop api
    
    # server with individual api endpoints
    # +accessed via https:/poop.com/v3/flush
      servers:
        - url: https://poop.com/v3
      paths:
        /flush:
          get:
          ...

    # multiple server arrays for a given operation
    # +the lowest level (deepest child) takes precedence
    # +multiple servers must list the SAME API,
    # ++e.g. testing vs production servers should be in diff documents
      servers:
        - url: https://poop.com
      paths::
        /flush:
          get:
            servers:
              - url: https://poop.com/v2 #takes precedence


    # server variables
      servers:
        - url: https:{action}.server.com:{port}/{version}
          variables:
            action:
              default: flush
              description: never make action a subdomain
            port:
              enum:
                - "8443"
                - "443"
              default: "443"
            version:
              default: v1







```
