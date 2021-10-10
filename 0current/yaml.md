# links

- [the yaml type spec](https://yaml.org/type)
- [commonMark spec](https://spec.commonmark.org/0.27/)
  - maybe not the most appropriate place
  - but string fields accept commonMark syntax
- [array of objects](https://stackoverflow.com/questions/33989612/yaml-equivalent-of-array-of-objects-in-json)

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


  arrayOfObjects:
    - obj1field1: val
      obj1field2: val
    - obj2field1: val
      obj2field2: val

  simpleArray:
    - index1
    - index2

  objectName:
    keyX: valueX
    keyY: valueY


```
