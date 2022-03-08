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

- useful for checkboxes in which the input.checked should be truthy if a dataProperty is set to a specific string, e.g. on|off
  - true-value: e.g. `true-value="on"`
  - false-value: e.g. `false-value="off"`

#### one-way binding

- templates: uses `{{ someDataKey }}`
  - computed properties: keeps the mustache `{{}}` expressionless by moving the code into the appData.computed member
    - the benefit over computed vs method data props is for simple expressions, you dont need to invoke the computed prop in the mustache template
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
  - v-model.lazy: persist after the DOM change event, i.e. after an input loses focus
  - v-model.number: cast value to number

### events

- v-on:eventName: e.g. `v-on:click="someDataKey = !someDataKey"`

  - shorthand `@eventName="runThisMethod"`
  - ^ no `()` needed if not passing arguments

- v-on modifiers: add magic fns to event handlers
  - all accept the shorthands, e.g. `@click.prevent="someMethodProp"`
  - v-on:click.prevent: calls event.preventDefault();
  - @click.stop: calls event.stopImmediatePropagation() or stopPropagation();
    - ^ todo figure out which one
  - @click.self: invoke handler only if the event.target === this.el/this.el.children
  - @click.once: invoke handler once at most

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
  <div v-text="somePoop" />
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
      otherThing: "    im some other thing   ",
      someUrl: "github.com",
      options: []
    };
  },
  computed: {
    somePoop() {
      return this.someOtherThing.trim()
    }
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
