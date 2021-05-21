# links
  - [commonMark spec](https://spec.commonmark.org/0.27/)
    - maybe not the most appropriate place
    - but string fields accept commonMark syntax

# examples
```yaml

  dangerString: this a string without quotes, be careful
  safeString: "this is a string: can accept colons and whatnot"
  multiLineString: 
    this is a string
    requires a leading space
  literalString: |
    the pipe preservers
    line spaces and extra line feeds
  foldedString: >
    the > collapses extra line feeds
    and spaces 
```