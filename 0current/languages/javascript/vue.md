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

### technical

- vue binds to native dom events

### conventions

- community frounds on imperative code embedded within the html
  - prefers keeping expressions in the app.methods/app.computed

## concepts

### components

- generally custom components are `<lower-cased-snake></lower-cased-snake>`
- ^ and registered as `someApp.component('lower-cased-snake', someOptionObj );`

#### component options object

- generally accepts the same keys as appData,
  - child components do not have access to parent component properties/methods
  - ^ you have to pass the data down from parent to child
    - you can reference passed props in the childs appData via the property name, e.g. to assign a passed prop to a data property in a child
  - ^ child components cant mutate properties owned by parent components
- but can also use a `template` property if its not mounted on a specific dom element
  - `template: `<div>any html and vue directives</div>`
  - you generally dont want to use the `template` property, but instead use a buildtool to compile the template automatically

### data binding

- almost any html attribute has a `:someAttribute` syntax for binding to an appDataProperty, see `v-bind`
  - without the leading `:` the attribute becomes a static property, instead of dynamically binding to appData

#### form controls

- useful for checkboxes in which the input.checked should be truthy if a dataProperty is set to a specific string, e.g. on|off
  - true-value: e.g. `true-value="on"`
  - false-value: e.g. `false-value="off"`

#### one-way binding

- templates: uses `{{ someDataKey }}`
  - computed properties: keeps the mustache `{{}}` expressionless by moving the code into the appData.computed member
    - the benefit over computed vs method data props is for simple expressions,
      - you dont need to invoke the computed prop in the mustache template
      - computed properties are cached
- v-text directive: `<div v-text="someDataKey" />`
  - escapes html
  - has a jq like syntax, e.g. `someDataKey[0].poop`
  - supports any expression, e.g. `someDataKey ? '' : someOtherKey.poop.flush`
- v-html directive: see v-text
  - parses html in string context
- v-bind:someAttribute: binds some data key to an html elements attribute
  - shorthand is `:someAttribute`
- :style: bind the inline style attribute to you some appDataProperty, propably want to use `:class` instead
  - e.g. `<div :style="{fontSize: someDataProp + 'px'}">`
  - can also use `{'font-size'}` if you dont want to use camelCase
  - can also set it to `:style="someDataProp"` and set someDataProp to an object with camelCase keys
  - can also set it to an array `:style="[styleObj1, styleObj2]`
- :class: bind classnames to boolean conditions in a appData
  - e.g. `:class="{someClassName: !!someDataProp}" class="normal static classes`

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
  - list of events, click, keydown.someKey,

- v-on modifiers: add magic fns to event handlers
  - all accept the shorthands, e.g. `@click.prevent="someMethodProp"`
  - v-on:click.prevent: calls event.preventDefault();
  - @click.stop: calls event.stopImmediatePropagation() or stopPropagation();
    - ^ todo figure out which one
  - @click.self: invoke handler only if the event.target === this.el/this.el.children
  - @click.once: invoke handler once at most

#### custom events

- $emit: some arbitrary event, e.g `@click="$emit(\'poopEvent\')"`
  - useful when needing to trigger events in parent component from a child component
  - you $emit in templates, and then you can use the parents methods/properties in the HTML
  - you have to escape the eventName
  - you still

### control flow

- v-if,else-if, and else will not render their elements in the DOM if condition is false

  - use v-show instead to hide the element, instead of totally removing it
  - v-if: e.g. `v-if="!someDataProp" v-text="someOtherDataProp"`
    - is connected to the previous `v-if` in the DOM
      - v-else-if: same syntax as `v-if`
      - v-else: e.g `v-else v-html="someDataProp"`

- v-show: more appropriate for elements that should always exist in the DOM, but their visibilty toggled based on some condition

  - `v-show="!someDataProp"`

- v-cloak: attribute that can be assigned to an element and used in css declarations for hiding elements that arent ready to be displayed

  - e.g. dont set el.visible === true until its binded data properties are ready, e.g. waiting for an promise to fullfil
  - i.e. until vue has completed compiling

- v-for: for loop, useful iterating over some dataPropArray
  - e.g. `<div v-for="(poop, thizIndex) in dataPoopArray">render me and my children</div>`
  - ^ `poop` and `thizIndex` can be used anywhere in the DOM el tree

## quickies

- cli

```sh
  pnpm init vue@latest # create a new vue project

```

- vue quickies

```js
<html>
<style>
  [v-cloak] { display: none; }
</style>
<body>
  <div id="someid">{{ someAppName }}</div>
  <div v-text="otherThing" />
  <div v-cloak v-text="somePoop" />
  <a :href="someUrl">click me</a>
  <form>
    <input v-model="options" type="checkbox" name="poop1" />
    <input v-model="options" type="checkbox" name="poop2" />
  </form>
  <lower-cased-snake :someprop="someAppDataProp" staticprop="string value" @poopEvent="parentMethod" />
</body>
</html>;

const SomeApp = {
  data() {
    // default values, can be changed if using v-model
    return {
      someAppName: "my app name",
      otherThing: "    im some other thing   ",
      someUrl: "github.com",
      options: []
    };
  },
  // cached
  computed: {
    somePoop() {
      return this.someOtherThing.trim()
    }
  },
  // exected on each render
  methods: {
    someMeth() {
      this.someUrl = 'someOtherUrl'
    }
  }
};
// app is available in the devtools
// its data is available on the app object
const app = Vue.createApp(someApp).mount("#someid");
app.component('lower-cased-snake', {
  template: `<div @poopEvent="parentProp = !parentProp">any html + vue directives</div>`
  name: 'LowerCasedSnake',
  props: ['someprop', 'thisonetwo'],
  data() {
    return {
      myProp: someprop, // sync child prop to parent prop
    }
  }
});

```
