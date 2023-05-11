# Tanstack

- the missing parts of react

## links

- [tanstack query](https://tanstack.com/query/latest/docs/react/overview)
- [tanstack eslint](https://tanstack.com/query/latest/docs/react/eslint/eslint-plugin-query)
- [tanstack query devtools](https://tanstack.com/query/latest/docs/react/devtools)
- plugins
  - [query key factory](https://tanstack.com/query/latest/docs/react/community/lukemorales-query-key-factory)
  - [react query kit](https://tanstack.com/query/latest/docs/react/community/liaoliao666-react-query-kit)
- tanstack query docs
  - [important: query client options](https://tanstack.com/query/latest/docs/react/guides/important-defaults)
  - [important: caching](https://tanstack.com/query/latest/docs/react/guides/caching)
  - [important: default queries](https://tanstack.com/query/latest/docs/react/guides/default-query-function)
  - [important: blog posts with quickies](https://tanstack.com/query/latest/docs/react/community/tkdodos-blog)
  - [important: queryKey factory](https://tanstack.com/query/latest/docs/react/community/lukemorales-query-key-factory)
  - [queries](https://tanstack.com/query/latest/docs/react/guides/queries)
  - [query keys](https://tanstack.com/query/latest/docs/react/guides/query-keys)
  - [parallel queries](https://tanstack.com/query/latest/docs/react/guides/parallel-queries)
  - [dependent queries](https://tanstack.com/query/latest/docs/react/guides/dependent-queries)
  - [query lifecycle](https://tanstack.com/query/latest/docs/react/guides/disabling-queries)
  - [paginated queries](https://tanstack.com/query/latest/docs/react/guides/paginated-queries)
  - [infinite queries](https://tanstack.com/query/latest/docs/react/guides/infinite-queries)
  - [initial query data](https://tanstack.com/query/latest/docs/react/guides/initial-query-data)
  - [placeholder data](https://tanstack.com/query/latest/docs/react/guides/placeholder-query-data)
  - [prefetch](https://tanstack.com/query/latest/docs/react/guides/prefetching)
  - [mutations](https://tanstack.com/query/latest/docs/react/guides/mutations)
  - [mutations with updates](https://tanstack.com/query/latest/docs/react/guides/updates-from-mutation-responses)
  - [query invalidation](https://tanstack.com/query/latest/docs/react/guides/query-invalidation)
  - [query cancellation](https://tanstack.com/query/latest/docs/react/guides/query-cancellation)
  - [ssr](https://tanstack.com/query/latest/docs/react/guides/ssr)
  - [react: suspense support](https://tanstack.com/query/latest/docs/react/guides/suspense)
  - [react: testing](https://tanstack.com/query/latest/docs/react/guides/testing)
  - [batch requests with batshit](https://tanstack.com/query/latest/docs/react/community/batching-requests-using-bathshit)

## Query

- data fetching & caching library for web apps; performant patterns for fetching, caching, synchronizing and updating server state
- its all about mapping string(s) to fetches, integrates supremely well with react router and enables route level caching, prefetching, etc
- the focus is on server (i.e. fetch) state, not application state
- integrates supremely well with react
- enables the following patterns out of the box/minimal setup
  - infinite/paginated (+page cache) queries
  - online/online Always/offline first network modes
  - state management (caching/mutatation)
  - parallel & dependend queries
  - loading (hard fetch) / isfetching (background fetch) and other states like error
  - prefetch, lazy, disabled, paused fetches based on arbitrary state
  - fetch retry (with delay) on error
  - scroll restoration
  - ssr

### gotchas / best practices with react

- prefer useQueries > useQuery to ensure parallel queries work regardless of reacts suspense mode (which will pause on the first fetch)

### API overview

- QueryClientProvider: provides QueryClient to components
- QueryClient: instantiated once in approot, is the brain & state for all queries and mutations
- useQuery: maps arbitrary keys to GETS and returns isLoading and error and data observables
- useQueryClient: enables access to the QueryClient
- useMutation: maps up arbitrary keys to POST/PUTS
- devtools (package): observe queries in development (but not mutations)

#### plugins

- Query key factory: plugin for declaring all query keys in a single file
- react query kit: makes react query hooks reusable and typesafe

### terms

- query: dependency on some async fetch tied to a unique key; whenever you need to fetch (get/post/etc) you supply the key to the useQuery which executes/returns the previous fetch
- query keys: can be a string, or an array of strings/JSON to describe when the data should be fetched new or returned from cache
  - keys are hashed deterministically: i.e.
    - the order of keys in objects DONT matter, if all undefined values are equal the fetch will be returned from cache
    - the order of keys in objects DO matter
- query functions: the fetch, any async function that always resolves with data or throws an error
  - you can access all the keys attach to a fn via the QueryFunctionContext
    - queryKey: all the query keys attached to this fn
    - pageParam: for infinite queries
    - signal: for cancelling the invocation through AbortController
    - meta: arbitrary data attached to the query
- network modes
  - online: wait for network connection before firing any queries
  - online always: ignore network connection and always fetch
  - offline first: useful to integrating with a service worker, will ways fetch (service worker should respond in outage) but never retry
