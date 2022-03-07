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

## quickies

- cli

```sh
  pnpm init vue@latest # create a new vue project

```

- vue quickies

```js
<html>
  <div id="someid">{{ someAppName }}</div>
</html>;

const SomeApp = {
  data() {
    return {
      someAppName: "my app name",
    };
  },
};
Vue.createApp(someApp).mount("#someid");
```
