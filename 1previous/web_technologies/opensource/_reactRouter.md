# links
  - [main tutorial](https://reacttraining.com/react-router/web/guides/quick-start)


# components
  - Route:
    - each component set as the routes component={} receives
      - match object:
        - match.url
        - match.path
    ```
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
    ```
  - Link
    ```
      <Link to="/about/">About</Link>
    ```