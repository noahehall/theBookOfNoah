# TLDR

sequelize cheatsheat

## links

- [getting started](https://sequelize.org/v3/docs/getting-started/)
- [umzug: db migrations for sequelize](https://github.com/sequelize/umzug)
- reference
  - [model definitions](https://sequelize.org/v3/docs/models-definition/)
  - [CRUD](https://sequelize.org/v3/docs/models-usage/)
  - [CRUD 2](https://sequelize.org/v3/docs/querying/)
  - skipped
    - <https://sequelize.org/v3/docs/scopes/>
    - <https://sequelize.org/v3/docs/instances/>
      - skipped bulked creation
    - <https://sequelize.org/v3/docs/associations/>
    - <https://sequelize.org/v3/docs/hooks/>
      - transactions, bulkupdate, bulkdestroy, validate
      - also adds hooks for afterValidate, afterCreate/BeforeUpdate etc
    - <https://sequelize.org/v3/docs/transactions/>
      - in depth transactions
    - <https://sequelize.org/v3/docs/legacy/>
      - future proof your data model in relation to tables, fields, primary keys, foreign keys
    - <https://sequelize.org/v3/docs/raw-queries/>
      - skipped bind parameter
    - <https://sequelize.org/v3/docs/migrations/>
      - in the readme it says to use umzug
    - <https://sequelize.org/v3/api/sequelize/>
    - <https://sequelize.org/v3/api/model/>
    - <https://sequelize.org/v3/api/instance/>
    - <https://sequelize.org/v3/api/associations/>

## about

- sequelize sets up a connection pool on init so you should only have a SINGLE sequelize instance per database
- Models are defined with `sequelize.define('name', {attributes}, {options})`

## quickies

### CRUD + related

```js
// based on your model definitions, create any missing tables. If force: true it will first drop tables before recreating them.
sequelize.sync()

//////// RAW QUERIES
sequelize.query("UPDATE users SET y = 42 WHERE x = 12").spread(function(results, metadata) {
  // Results will be an empty array and metadata will contain the number of affected rows.
})

sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
  .then(function(users) {
    // We don't need spread here, since only the results will be returned for select queries
  })

// Callee is the model definition. This allows you to easily map a query to a predefined model
sequelize.query('SELECT * FROM projects', { model: Projects }).then(function(projects){
  // Each record will now be a instance of Project
})


// If an array is passed, ? will be replaced in the order that they appear in the array
sequelize.query('SELECT * FROM projects WHERE status = ?',
  { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
).then(function(projects) {
  console.log(projects)
})
// If an object is passed, :key will be replaced with the keys from that object. If the object contains keys not found in the query or vice versa, an exception will be thrown.
sequelize.query('SELECT * FROM projects WHERE status = :status ',
  { replacements: { status: 'active' }, type: sequelize.QueryTypes.SELECT }
).then(function(projects) {
  console.log(projects)
})

/////// CRUD
// the only way to log an instance
Person.create({
  name: 'Rambow',
  firstname: 'John'
}).then(function(john) {
  console.log(john.get({
    plain: true
  }))
})

// if youre getting stale data
Person.findOne({ where: { name: 'john' } }).then(function(person) {
  person.name = 'jane'
  console.log(person.name) // 'jane'

  person.reload().then(function() {
    console.log(person.name) // 'john'
  })
})

// increment a field
User.findById(1).then(function(user) {
  return user.increment('my-integer-field', {by: 2})
}).then(/* ... */)

/////////////// create instances of classes -  you must save them later
var project = Project.build({
  title: 'my awesome project',
  description: 'woot woot. this will make me a rich man'
})

var task = Task.build({
  title: 'specify the project idea',
  description: 'bla',
  deadline: new Date()
})

////////////// pupdate/ ersist unsaved instances
// way 1
task.title = 'a very different title now'
task.save().then(function() {}) //save
// way 2
task.update({
  title: 'a very different title now'
}).then(function() {})

//////////////// create & save instances in one go
Task.create({ title: 'foo', description: 'bar', deadline: new Date() }).then(function(task) {
  // you can now access the newly created task via the variable task
})


/////////// deleting
Task.create({ title: 'a task' }).then(function(task) {
  // now you see me...
  return task.destroy();
}).then(function() {
 // now i'm gone :)
})

///////////// other CRUD
// Find all projects with a least one task where task.state === project.task
Project.findAll({
    include: [{
        model: Task,
        where: { state: Sequelize.col('project.state') }
    }]
})

// Fetch 10 instances/rows
Project.findAll({ limit: 10 })
// Skip 8 instances/rows
Project.findAll({ offset: 8 })
// Skip 5 instances and fetch the 5 after that
Project.findAll({ offset: 5, limit: 5 })
// ordering
something.findOne({
  order: [
    // Will escape username and validate DESC against a list of valid direction parameters
    ['username', 'DESC'],
    // Will order by max(age)
    sequelize.fn('max', sequelize.col('age')),
    // Will order by max(age) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
    // Will order by  otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
    // Will order by name on an associated User
    [User, 'name', 'DESC'],
    // Will order by name on an associated User aliased as Friend
    [{model: User, as: 'Friend'}, 'name', 'DESC'],
    // Will order by name on a nested associated Company of an associated User
    [User, Company, 'name', 'DESC'],
  ]
  // All the following statements will be treated literally so should be treated with care
  order: 'convert(user_name using gbk)'
  order: 'username DESC'
  order: sequelize.literal('convert(user_name using gbk)')
})

// SELECT foo, bar ...
Model.findAll({ attributes: ['foo', 'bar'] });

// SELECT COUNT(hats) AS no_hats ...
Model.findAll({
  attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});

// SELECT id, foo, bar, baz, quz, COUNT(hats) AS no_hats ...
// all columns are retrieved, below, since you dont specify them as in above
Model.findAll({
  attributes: { include: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']] }
});

// SELECT id, foo, bar, quz ...
// retrieve all cols except listed as below, since you dont specify them as in above
Model.findAll({ attributes: { exclude: ['baz'] }});

// SELECT * FROM post WHERE authorId = 2
Post.findAll({where: {authorId: 2}});

// SELECT * FROM post WHERE authorId = 12 AND status = 'active';
Post.findAll({ where: { authorId: 12, status: 'active'}});


// DELETE FROM post WHERE status = 'inactive';
Post.destroy({ where: { status: 'inactive' }});

// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;
Post.update(
  {updatedAt: null},
  {where: {deletedAt: { $ne: null}}}
);

Project.findById(123).then(function(project) {
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get null
})

// search for attributes
Project.findOne({ where: {title: 'aProject'} }).then(function(project) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
})


Project.findOne({
  where: {title: 'aProject'},
  attributes: ['id', ['name', 'title']]
}).then(function(project) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  // project.title will contain the name of the project
})

// find or create a record
User
  .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
  .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }))
    console.log(created)

    /*
      {
        username: 'sdepold',
        job: 'Technical Lead JavaScript',
        id: 1,
        createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
        updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
      }
      created: true
    */
  })

// create a user
User.create({ username: 'fnord', job: 'omnomnom' })

// retrieve all matching records, and include total in count
Project
  .findAndCountAll({
     where: {
        title: {
          $like: 'foo%'
        }
     },
     offset: 10,
     limit: 2
  })
  .then(function(result) {
    console.log(result.count);
    console.log(result.rows);
  });

```

### operators

```js
$and: {a: 5}           // AND (a = 5)
$or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
$gt: 6,                // > 6
$gte: 6,               // >= 6
$lt: 10,               // < 10
$lte: 10,              // <= 10
$ne: 20,               // != 20
$not: true,            // IS NOT TRUE
$between: [6, 10],     // BETWEEN 6 AND 10
$notBetween: [11, 15], // NOT BETWEEN 11 AND 15
$in: [1, 2],           // IN [1, 2]
$notIn: [1, 2],        // NOT IN [1, 2]
$like: '%hat',         // LIKE '%hat'
$notLike: '%hat'       // NOT LIKE '%hat'
$iLike: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
$notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
$like: { $any: ['cat', 'hat']}
                       // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
$overlap: [1, 2]       // && [1, 2] (PG array overlap operator)
$contains: [1, 2]      // @> [1, 2] (PG array contains operator)
$contained: [1, 2]     // <@ [1, 2] (PG array contained by operator)
$any: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

$col: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example

//////////////////// COMBINATIONS
{
  rank: {
    $or: {
      $lt: 1000,
      $eq: null
    }
  }
}
// rank < 1000 OR rank IS NULL

{
  createdAt: {
    $lt: new Date(),
    $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
  }
}
// createdAt < [timestamp] AND createdAt > [timestamp]

{
  $or: [
    {
      title: {
        $like: 'Boat%'
      }
    },
    {
      description: {
        $like: '%boat%'
      }
    }
  ]
}
// title LIKE 'Boat%' OR description LIKE '%boat%'
```

### admin

```js

// create a connection
var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


// define a model
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});


// more database synchronization
// Create the tables:
Project.sync()
Task.sync()

// Force the creation!
Project.sync({force: true}) // this will drop the table first and re-create it afterwards

// drop the tables:
Project.drop()
Task.drop()

// event handling:
Project.[sync|drop]().then(function() {
  // ok ... everything is nice!
}).catch(function(error) {
  // oooh, did you enter wrong database credentials?
})

// let sequelize recreate all tables
// Sync all models that aren't already in the database
sequelize.sync()

// Force sync all models
sequelize.sync({force: true})

// Drop all tables
sequelize.drop()

// emit handling:
sequelize.[sync|drop]().then(function() {
  // woot woot
}).catch(function(error) {
  // whooops
})

```
