# links
  - [take docs](https://github.com/substack/tape)

# API
```js
  const test = require('tape')

  // normal test harness
  test('my test description', t => {
    // test code

    // call t.end() after # assertions
    t.plan(#)
    // end this test case explicitly
    t.end(err)
    // fail with a msg
    t.fail(msg)
    // pass with a msg
    t.pass(msg)


    // assertions
      t.ok(val, msg)
      t.notOk(val, msg)
      t.equal(actual, expected, msg)
      t.deepEqual(actual, expected, msg)
      t.throws(fn, expected, msg) // fn should throw expected
      t.error(err, msg) //err must be falsy
  })
```