# vue

- todo: find my old vue notes
- vue 3

## links

- [quickstart build tools](https://vuejs.org/guide/quick-start.html#without-build-tools)
- [firefox vue devtools extension](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## terms

## about vue

- is reactive: reacts to changes in data to keep the UI in sync
- is progressive: progressively add more features
- is declarative: blah blah
- is composable: bah blah

## technical

- vue binds to native dom events

## concepts

### data binding

#### form controls

- true-value: e.g. `true-value="someString"`
- false-value: e.g. `false-value="someString"`

#### one-way binding

- templates: uses `{{ someDataKey }}`
- v-text directive: `<div v-text="someDataKey" />`
  - escapes html
  - has a jq like syntax, e.g. `someDataKey[0].poop`
  - supports any expression, e.g. `someDataKey ? '' : someOtherKey.poop.flush`
- v-html directive: see v-text
  - parses html in string context
- v-bind:someAttribute: binds some data key to an html elements attribute
  - shorthand is `:someAttribute`

#### two-way binding

- v-model: pushes user updates to data properties (e.g. in an input field) back into the app data property
  - on form controls its automatically connected to the input.value
  - can be set to dataPropertyArray, in which form elements will be kept insync per their position in the DOM
    - useful for checkboxes, in which all input.checked will be included in the dataProp[]
  - radio buttons, selects, etc. v-model should be set a string matching the radio.name in the DOM
- v-model modifiers: magic fns that parse the values before persisting from DOM to app data
  - v-model.trim: trim leading+trailing whitespace from a string
  - v-mode.lazy: persist after the DOM change event, i.e. after an input loses focus

### events

- v-on:eventName: e.g. `v-on:click="someDataKey = !someDataKey"`
  - shorthand `@eventName="runThisMethod"`
  - ^ no `()` needed if not passing arguments

## quickies

- cli

```sh
  pnpm init vue@latest # create a new vue project

```

- vue quickies

```js
<html>
  <div id="someid">{{ someAppName }}</div>
  <div v-text="otherThing" />
  <a :href="someUrl">click me</a>
  <form>
    <input v-model="options" type="checkbox" name="poop1" />
    <input v-model="options" type="checkbox" name="poop2" />
  </form>
</html>;

const SomeApp = {
  data() {
    return {
      someAppName: "my app name",
      otherThing: "im some other thing",
      someUrl: "github.com",
      options: []
    };
  },
  methods: {
    someMeth() {
      this.someUrl = 'someOtherUrl'
    }
  }
};
// app is available in the devtools
// its data is available on the app object
const app = Vue.createApp(someApp).mount("#someid");
```
