## React Router

### Actions

- [docs](https://reactrouter.com/en/main/route/action)
- perform data mutations
- Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route
- Route params are parsed from dynamic segments and passed to your action. This is useful for figuring out which resource to mutate:
- Route request is a Fetch Request instance being sent to your route. The most common use case is to parse the FormData from the request

```js
// forms
<Form method="post" action="/songs" />;
<fetcher.Form method="put" action="/songs/123/edit" />;

// imperative submissions
let submit = useSubmit();
submit(data, {
  method: "delete",
  action: "/songs/123",
});
fetcher.submit(data, {
  method: "patch",
  action: "/songs/123/edit",
});
```
