# vue

- todo: find my old vue notes
- vue 3

## terms

## about vue

- is reactive: reacts to changes in data to keep the UI in sync
- is progressive: progressively add more features
- is declarative: blah blah
- is composable: bah blah

## concepts

### data binding

- templates: uses `{{ someDataKey }}`
- v-text directive: `<div v-text="someDataKey" />`
  - escapes html
  - has a jq like syntax, e.g. `someDataKey[0].poop`
- v-html directive: see v-text
  - doesnt escape html

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
</html>;

const SomeApp = {
  data() {
    return {
      someAppName: "my app name",
      otherThing: "im some other thing",
    };
  },
};
Vue.createApp(someApp).mount("#someid");
```
