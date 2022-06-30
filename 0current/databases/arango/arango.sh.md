# arangosh

- the arangodb shell
- a synchronous shell for interaction with the server (arangod)

## links

- [user management intro](https://www.arangodb.com/learn/operations/user-management/)

## catchall

```javascript

// create a db appdb
db._createDatabase("appdb");

// setup appuser and appadmin
var users = require("@arangodb/users");
users.save("appadmin", "secretpassword");
users.save("appuser", "secretpassword");

// setup access for appadmin
// grant appadmin admin access to appdb
users.grantDatabase("appadmin", "appdb", "rw", true); // true = active user
// grant appadmin admin access to all collections in appdb
users.grantCollection("appadmin", "appdb", "*", "rw");

// setup access for appuser
// grant appuser read access to appdb
users.grantDatabase("appuser", "appdb", "ro", true);
// grant appadmin read access to all collections in appdb
users.grantCollection("appuser", "appdb", "*", "ro");

// restrict access to a specific collection in a db
users.grantCollection("admin@arango", "dbname", "colname", "none");

// ^ connect to db example with user root@example
arangosh --server.username "root@example" --server.database example
```
