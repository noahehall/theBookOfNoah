### [idb promised](https://github.com/jakearchibald/idb)

- idb: IndexedDB Promised; a library built to convert IndexedDB to promises
- background: whenever IndexeDB would return a request, IDB returns a promise

#### idb promised examples

- open DB: always use in switch statement

```

    const someDb = idb.open('someDbName',3, (upgradeDb){
      switch(upgradeDb.oldVersion) {
        case 0:
          // original create db
          someTable = upgradeDb.createObjectStore('someName1');
          // all db 0 version logic here
        case 1:
          //add new object store with key id
          someOtherTable = upgradeDb.createObjectStore('someName2', { keyPath: 'id' })
          // all db version 2 logic here
        case 2:
          //modify someTable and add new index
          var someTable = upgradeDb.transaction.objectStore('someName1');
        someTable.createIndex('animal', 'favriteAnimal'); // index name = animal, sorts on key favoriteAnimal
      }
    })

```

- create db and create record

```

    const dbName = idb.open('newDbName', 1, (upgradeDb) => {
      const keyValStore = upgradeDb.createObjectStore('keyval');
      keyValStore.put('value', 'keyName') // create record
      // create objectStore and define index
      upgradeDb.createObjectStore('people', { keyPath: 'name' });
    })

```

- read from db

```

    dbName.then((db) => {
      const transaction = db.transaction('keyval');
      const keyValStore = transaction.objectStore('keyval');
      return keyValStore.get('keyName'); // returns promise
    }).then((value) => {
      console.log('the value from transaction is', value);
    })

```

- read and write to db

```

    dbName.then((db) => {
      const transaction = db.transaction('keyval', 'readwrite');
      const keyValStore = transaction.objectStore('keyval');
      keyValStore.put('value', 'keyName');
      return transaction.complete; // returns promise
    }).then(() => {
      console.log('transaction completed successfully if promise resolves');
    })

```

- get all records

```

    dbName.then(function(db) {
      var tx = db.transaction('people');
      var peopleStore = tx.objectStore('people');
      return peopleStore.getAll(); // all objects in store

      //or get all people by idnex
      var ageIndex = peopleStore.index('age');
      return ageIndex.getAll(); // all objects in store

    }).then(function(people) {
      console.log('people', people)
    })

```

- get records one at a time

```

    dbName.then(function(db) {
      var tx = db.transaction('people');
      var peopleStore = tx.objectStore('people');
      var ageIndex = peopleStore.index('age');
      return ageIndex.openCursor();

      //loop through records backwords
      store.index('indexName')
        .openCursor(null, 'prev')
        .then(function(cursor){...})

    }).then(function(cursor) {
      if (!cursor)  return;
      // skip first two items
      return cursor.advance(2);
    }).then(function logPerson(cursor){
      if (!cursor) return;
      console.log('cursored at', cursor.value.keyName);
      // cursor.update(newValue)
      // cursor.delete()
      return cursor.continue().then(logPerson); // recursively call logPerson
    }).then(function() {
      console.log('done cursoring');
    })

```
