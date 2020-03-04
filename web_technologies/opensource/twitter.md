# links
  - [docs](https://dev.twitter.com/rest/public)

# APIs
## [rest](https://dev.twitter.com/rest/public)
  - purpose:  programmatic access to read and write Twitter data. Create a new Tweet, read user profile and follower data, and more

### [search](https://dev.twitter.com/rest/public/search)
  - purpose: allows queries against the indices of recent or popular Tweets
  - [reference](https://dev.twitter.com/rest/reference/get/search/tweets)
  - searches against a sampling of recent Tweets published in the past 7 days.
#### notes
  - by defualt only returns 15 tweets
  - includes *search_metadata* object in the response that includes
    1. max id
    2. next results query
    3. refresh url
    4. count of tweets returned
    5. since_id
    6. other data that may be useful
#### build a query
  1. The best way to build a query and test if it’s valid and will return matched Tweets is to first try it at twitter.com/search.

## [streaming](https://dev.twitter.com/streaming/overview)
  - purpose: monitor or process Tweets in real-time
  -  low latency access to Twitter’s global stream of Tweet data
  - A streaming client will be pushed messages indicating Tweets and other events have occurred, without any of the overhead associated with polling a REST endpoint.
