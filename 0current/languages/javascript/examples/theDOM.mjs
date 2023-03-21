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


















*/
