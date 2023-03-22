/*

someVar.nodeType
1 = element
2 = attribute
3 = text
`	- grabbing elements
`
var myelement = document.GetElementById('idname');
getElementById can be used at any level, not just the document level
e.g. if you grab a UL, you can use getElementsByTagName to grab its child li tags
var myelement = document.getElementsByTagName('p'); //returns an array containing 0/more elements
`	- working with attributes
`
myelemen.getAttribute('attributename');
myelement.setAttribute('attributename', 'attributevalue');
``	- change html content
		`document.getElementById("demo").innerHTML = "Hello JavaScript";`
	- change html styles (CSS)
		`document.getElementById("demo").style.fontSize = "25px";`
	- creating element and inserting elements into the DOM
``
var newElement = document.createElement('li');
var newText = document.createTextNode('add this text');
newElement.appendChild(newText);
otherElement.appendChild(newElement);
`	- good tricks
`
window.onload = function() {
do stuff once the entire page has loaded

}
`	- display data to the user
`
alert('your message') //give user information
prompt('your question') //ask user for information
document.write('your html') //rewrite the entire page
element.innerHTML = 'Your Text' //add text to an element
console.log('your message') //writes tot he console during program execution

```


**sample request and fetch**
`  var request = new Request('https://davidwalsh.name/users.json', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      });
      // Now use it!
      fetch(request).then(function() { /* handle response */ });`


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



### localStorage examples

```

localStorage.setItem('thisVar','toThisString')
localStorage.getItem('thisVar')
localStorage.removeItem('thisVar')
localStorage.clear();

```

// this came from a DOM section
- setting CSS
  ```
  	someelement.style.property = value
  		any property wtih hyphens (e.g. background-color) becomes camel case (e.g. backgroundColor)
  		to access the elements class, you have to use somelement.style.className
  ```



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

```

```









*/
