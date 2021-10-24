# links
  - [good tut](https://www.sitepoint.com/react-router-v4-complete-guide/)
    - [github repo for above](https://github.com/blizzerand/react-router-v4-demo)


# basics
  - React Router lets you handle routing declaratively. The declarative routing approach allows you to control the data flow in your application, by saying “the route should look like this”:


# terminology
  - SPA expectations:
    - Each view in an application should have a URL that uniquely specifies that view. This is so that the user can bookmark the URL for reference at a later time — e.g. www.example.com/products.
    - The browser’s back and forward button should work as expected.
    - The dynamically generated nested views should preferably have a URL of their own too — e.g. example.com/products/shoes/101, where 101 is the product id.
  - routing: the process of keeping the browser URL in sync with what’s being rendered on the page.

# API
  - You can place your <Route> component anywhere that you want your route to be rendered.
  - comprises 3 packages:
    - react-router
    - react-router-dom
    - react-router-native
## components
  - Router: parent for Route and Switch components
  - Route: specific routes: renders some UI if the current location matches the route's path
  - link: used to navigate between pages without a browser refresh
  - BrowserRouter: doesnt contain a hash e.g. http://example.com/about
    - uses the html5 history API to keep track of router history
  - HashRouter: contains a hash e.g. http://example.com/#/about
    - uses the hash portion of the URL (window.location.hash) to trakc history
    - required for support legacy browsers
  - Switch: only the first child Route that matches the location gets rendered
  - history : separate JS library to manage session history: history stack, navigate, confirm navigation and persist state between sessions
