import { logIt } from "../logit.mjs";

var dict = Object.setPrototypeOf({}, null);

logIt("dict", dict);

/*
- sort an object by value

  ```
    Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
  ```

  - method determines whether two values are the same value.

```js
  Object.is(value1, value2):
```

*/
