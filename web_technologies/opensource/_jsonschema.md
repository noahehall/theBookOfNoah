# links
  - [json schema homepage](https://json-schema.org/)
  - [tutorial](https://json-schema.org/understanding-json-schema/)

# TLDR
```js
  // black json object
  // constrains nothing,
  // describes nothing
  // allows any valid json
  {}

  // keyword constraints
  // types:
  // object
  // array
  // string
  // number, integer, range, multipleOf
  // boolean
  // null
  { type: 'string'
  { type: 'array' } // items can be anything
  {
    type: 'array',
    items: { // fastify requires items property
      type: 'number', //etc
    },
    contains: { // atleast one item
      type: 'string'
    }
  }
  { type: 'object' }
  {
    type: 'object',
    properties: {
      ... //
    }
  }

```

# terminology
  - vocabulary that allows you to anotate and validate json documents
  - keywords
    - i.e. the `key` part of a key value pair


