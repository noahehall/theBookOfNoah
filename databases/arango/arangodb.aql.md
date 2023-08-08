# arangodb aql

- arangodb query language

## links

- [main docs intro](https://www.arangodb.com/docs/stable/aql/)
- [tutorial](https://www.arangodb.com/docs/stable/aql/tutorial.html)
- [coming from sql](https://www.arangodb.com/docs/stable/getting-started-coming-from-sql.html)
- docs
  - [data queries](https://www.arangodb.com/docs/stable/aql/data-queries.html)
  - [functions: array](https://www.arangodb.com/docs/stable/aql/functions-array.html)
  - [functions: basics](https://www.arangodb.com/docs/stable/aql/operations.html)
  - [functions: document](https://www.arangodb.com/docs/stable/aql/functions-document.html)
  - [functions](https://www.arangodb.com/docs/stable/aql/functions.html)
  - [operators](https://www.arangodb.com/docs/stable/aql/operators.html)

## terms

- projection: returning a subset of a document

## CRUD

```python

####################################
# Creating
####################################
## INTO is required for inserts
INSERT { name: "Katie Foster", age: 27 }
  INTO users
  RETURN NEW # returns [{...}, ...]

####################################
# Reading
####################################
## get a single doc
RETURN DOCUMENT("users/659") # [{...}, ...]
## get multiple docs
RETURN DOCUMENT( ["users/9883", "users/9915", "users/10074"] )
## get all docs
FOR user IN users RETURN user
FOR u IN users RETURN u # same as above
## with all query options
FOR u IN users
  FILTER u.age > 30
  SORT u.age DESC # DESC is optional
  RETURN u
  RETURN u.name # or specific field
  RETURN {first: u[0].name} # return the first one found
  RETURN { hobbies: u.hobbies[*].name } # return list of hobbie names from hobbies object
  RETURN { userName: u.name, age: u.age, isold: CONCAT(u.name, " is about ", u.age) } # or set of fields

## multiple loops
FOR user1 IN users
  FOR user2 IN users
    FILTER user1 != user2
    RETURN [user1.name, user2.name]

## define temporary vars for filtering on computed values
FOR user1 IN users
  FOR user2 IN users
    FILTER user1 != user2
    LET sumOfAges = user1.age + user2.age # temp var
    FILTER sumOfAges < 100 # filtering on temp var
    RETURN {
        pair: [user1.name, user2.name],
        sumOfAges: sumOfAges # or just sumOfAges since its the same name as the var
    }


####################################
# Update: UPDATE and REPLACE
####################################
## enables partial edits of an existing document
UPDATE "9915" WITH { age: 40 } IN users RETURN NEW
## replaces the entire doc with
### except _key and _id
REPLACE "9915" WITH { age: 40 } IN users RETURN NEW


####################################
# delete
####################################
## remove a single document
REMOVE "9883" IN users
## remove multiple docs

FOR user IN users
    FILTER user.age >= 30
    REMOVE user IN users
```
