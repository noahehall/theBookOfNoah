
# APIs
## WINDOW: the lord of the ring
## DOM
	- nodes: represent elements, comments, text, comments, etc. there are 12 node types, most important are element, attribute, and text
	- checking node types
    ```
  		someVar.nodeType
  			1 = element
  			2 = attribute
  			3 = text
    ```
	- grabbing elements
    ```
  		var myelement = document.GetElementById('idname');
  			getElementById can be used at any level, not just the document level
  			e.g. if you grab a UL, you can use getElementsByTagName to grab its child li tags
  		var myelement = document.getElementsByTagName('p'); //returns an array containing 0/more elements
    ```
	- working with attributes
    ```
  		myelemen.getAttribute('attributename');
  		myelement.setAttribute('attributename', 'attributevalue');
    ```
	- change html content
		`document.getElementById("demo").innerHTML = "Hello JavaScript";`
	- change html styles (CSS)
		`document.getElementById("demo").style.fontSize = "25px";`
	- creating element and inserting elements into the DOM
    ```
  		var newElement = document.createElement('li');
  		var newText = document.createTextNode('add this text');
  		newElement.appendChild(newText);
  		otherElement.appendChild(newElement);
    ```
	- good tricks
    ```
  		window.onload = function() {
  			do stuff once the entire page has loaded

  		}
    ```
	- display data to the user
    ```
      alert('your message') //give user information
      prompt('your question') //ask user for information
      document.write('your html') //rewrite the entire page
      element.innerHTML = 'Your Text' //add text to an element
      console.log('your message') //writes tot he console during program execution
    ```

### [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
  - simplified XMLhttpRequest
### Fetch examples
  - fetch with a request object
  `fetch(requestObject).then(...)`

  - Simple response handling
  ```
    fetch('https://davidwalsh.name/some/url')
      .then(function(response) {

      }).catch(function(err) {
      	// Error :(
      });
  ```

  - url (required), options (optional)
  ```
    fetch('https://davidwalsh.name/some/url', {
    	method: 'get'
    }).then(function(response) {

    }).catch(function(err) {
    	// Error :(
    });
  ```

  - Chaining for more "advanced" handling
  ```
    fetch('https://davidwalsh.name/some/url')
    .then(function(response) {
    	return //...
    }).then(function(returnedValue) {
    	// ...
    }).catch(function(err) {
    	// Error :(
    });
  ```

  - The fetch signature, however, acts like Request so you could also do:
  ```
    fetch('https://davidwalsh.name/users.json', {
    	method: 'POST',
    	mode: 'cors',
    	redirect: 'follow',
    	headers: new Headers({
    		'Content-Type': 'text/plain'
    	})
    }).then(function() { /* handle response */ });
  ```

### [window.Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
  - A Request instance represents the request piece of a fetch call.
    + important properties
        1. method - GET, POST, PUT, DELETE, HEAD
        2. url - URL of the request
        3. headers - associated Headers object
        4. referrer - referrer of the request
        5. mode - cors, no-cors, same-origin
        6. credentials - should cookies go with the request? omit, same-origin
        7. redirect - follow, error, manual
        8. integrity - subresource integrity value
        9. cache - cache mode (default, reload, no-cache)
### Request examples
  **sample request and fetch**
    ```
      var request = new Request('https://davidwalsh.name/users.json', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      });
      // Now use it!
      fetch(request).then(function() { /* handle response */ });
    ```

### [window.Response](https://developer.mozilla.org/en-US/docs/Web/API/Response):
  - properties
    1. type - basic, cors
    2. url
    3. useFinalURL - Boolean for if url is the final URL
    4. status - status code (ex: 200, 404, etc.)
    5. ok - Boolean for successful response (status in the range 200-299)
    6. statusText - status code (ex: OK)
    7. headers - Headers object associated with the response.
  - methods
    1. clone() - Creates a clone of a Response object. VERY USFUL! as you can only read a response body once, so clone it to read it multipel tiems (e.g. to send to multiple places)
    2. error() - Returns a new Response object associated with a network error.
    3. redirect() - Creates a new response with a different URL.
    4. arrayBuffer() - Returns a promise that resolves with an ArrayBuffer.
    5. blob() - Returns a promise that resolves with a Blob.
    6. formData() - Returns a promise that resolves with a FormData object.
    7. json() - Returns a promise that resolves with a JSON object.
    8. text() - Returns a promise that resolves with a USVString (text).
### response examples
  - json example
    ```
      fetch('https://davidwalsh.name/demo/arsenal.json').then(function(response) {
      	// Convert to JSON
      	return response.json();
      }).then(function(j) {
      	// Yay, `j` is a JSON object
      	console.log(j);
      });
    ```

### [window.Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
  - Allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing.
### headers examples
  - Create an empty Headers instance
    ```
      var headers = new Headers();
      // Add a few headers
      headers.append('Content-Type', 'text/plain');
      headers.append('X-My-Custom-Header', 'CustomValue');
      // Check, get, and set header values
      headers.has('Content-Type'); // true
      headers.get('Content-Type'); // "text/plain"
      headers.set('Content-Type', 'application/json');
      // Delete a header
      headers.delete('X-My-Custom-Header');
      // Add initial values
      var headers = new Headers({
        'Content-Type': 'text/plain',
        'X-My-Custom-Header': 'CustomValue'
      });
    ```

### [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
  - localStorage is the same as sessionStorage with the same same-origin rules applied but it is persistent.
### localStorage examples
  ```
    localStorage.setItem('thisVar','toThisString')
    localStorage.getItem('thisVar')
    localStorage.removeItem('thisVar')
    localStorage.clear();
  ```

### [window.indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
  - IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data.
  - background:
    - positives:
      + every major browser supports indexeddb
    - negatives:
      + is async but predates promsies, so its eventbased system is horrid.
        1. use [IndexedDB Promised library instead](https://github.com/jakearchibald/idb)
  - location: resources > indexedDB

  - structure:
    + db: can be multiple per website
      + object store: each db can have multiple object stores (i.e. tables) to store data
          - object stores can only be created via the upgrade funcion when creating the DB
            - you have to bump up the version to modify the object store (e.g. add object stores / create indexes)
            - upgrade version only gets called with the upgradeDb() function
        - values: any data type, each item can have a primary key/one of its values can be set as the primary key
        - transactions: (i.e. CRUD), all CRUD operations must be part of a transaction
          1. if a transaction fails for a series of steps/actions, none of the steps/actions are applied and the whole transaction is reverted
          2. create a transaction object > use it to return an objectStore > operate CRUD on object store
        - indexes: you can create multiple indexes per object store, which orders (i.e. sorts) the values by a specific property making it faster to look up

  - API
    - indexedDb: found on window object
      1. .deleteDatabase('dbName')
    - IDBObjectStore: interface for an object store
      - methods: add, clear, delete, get, getAll, getAllKeys, etc.
      - properties: indexNames, keyPath, name, transaction, autoIncrement
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

### [window.document](https://developer.mozilla.org/en-US/docs/Web/API/document)
### document important properties
  - readyState: has 3 States (values); everytime readState changes, a ready state change event fires
    1. loading: document still loading
    2. interactive: document has loaded and has been parsed, but sub resources (images, css, frames, etc) hasnt loaded
      + loaded === dom.contentLoaded event
      useful for running code after all of the initial DOM content has been loaded
    3. complete: everything has loaded
### document examples
  - implement jQuery on .ready() handler:
    ```
      function ready() {
        // Credit to Jake Archibald
        // https://github.com/jakearchibald/svgomg/blob/master/src/js/page/utils.js#L7
        return new Promise(function(resolve) {
          function checkState() {
            if (document.readyState !== 'loading') {
              resolve();
            }
          }
          document.addEventListener('readystatechange', checkState);
          checkState();
        });
      };
      ready().then(run your other code);
    ```

### window.navigator
  - The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

### [window.Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
  + Web worker: runs separately from the page, isnt visible to the user, cant access the DOM,
        .it intercepts and controls requests made by the browser

### [window.caches](https://developer.mozilla.org/en-US/docs/Web/API/cache)
  - updating static cache:
    1. create new SW
    2. remove old SW
    3. when #1 is actived, deleted old cache
    4. create new cache
  - see cache: dev tools > resources/application > cache storage
  - cache names in prod should be auto generated and cache times set to a year a more, when the file changes, you can just upload the new file (with a different name) and that will force an update since the url to the file changes
    + be sure the cache names are versioned or auto-generated, e.g. somecache-v1 | somecache-!@#s
  - opening a cache returns a response objects
    +  a response object can only be used once, you will need to call response.clone() to use it more than once
  - methods
    1. caches.open('createOrOpenACache').then(function(cache){...})
      + create or open a cache-box by name
      + returns a promise of request and response pairs from any secure origin
      + can store fonts, scripts, images, etc. from your origin, and any origin on the web
    2. cache.put(request, response);
      + store a request response in
    3. cache.addAll([request1, request2, 'url3', 'url4'])
      + accepts request objects / urls, makes the requests, and stores the results
      + are atomic requests, if any fail, none are added
    4. cache.match(requestObjectOrUrlString)
      + retrieve something from the cache
      + returns matching response or null
    5. caches.match(requestObjectOrUrlString)
      + same as cache.match, only searches ALL CACHES starting with the oldest first
      + retrieve response from cache for all matching requests
    6. caches.delete('cacheName|cacheObject') //always clean your cache
    7. caches.keys() //get names of all your caches
#### cache examples
  - check if request is in cache
    ```
      self.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request).then(function(response) {
            console.log('res', response);
            if (response) return response;
            return fetch(event.request);
          }).catch(function(error) {
            console.log('err', error);
            return fetch(event.request);
          })
        );
      });
    ```
