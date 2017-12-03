# jquery ui progress bar
	- http://www.lynda.com/jQuery-tutorials/Progressbar-control/186963/368829-4.html

```
// A $( document ).ready() block.
$( document ).ready(function() {
		console.log( "ready!" );
});
```
# selectors & filters
	- used to select parts of the webpage using a common CSS style stynax
    ```
    	Syntax	Description	Example
    	$("*")	Selects all elements
    	$(this)	Selects the current HTML element
    	$("p.intro")	Selects all <p> elements with class="intro"
    	$("p:first")	Selects the first <p> element
    	$("ul li:first")	Selects the first <li> element of the first <ul>
    	$("ul li:first-child")	Selects the first <li> element of every <ul>
    	$("[href]")	Selects all elements with an href attribute
    	$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
    	$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
    	$(":button")	Selects all <button> elements and <input> elements of type="button"
    	$("tr:even")	Selects all even <tr> elements
    	$("tr:odd")	Selects all odd <tr> elements
    ```
  - advanced selectors
    ```
      $("blah > blah") # > is a child selector, so only select level 1 child elements
      $(blah blah2) #select all blah2 that are an ancestor (no matter level) of blah
      $(blah + blah2) #select all blah2 that come immediately after blah
      $(blah ~ blah2) #select all blah2 that are siblings (come after) blah
    ```
# filters
	- used to further refine the results from selectors
    ```
  		$("p:first") grabs the first paragraph tag
  		$("h2:not(.class)") grabs all h2 tags that do not have class="class"
    ```
	- additional filters
    ```
			:first, :list
			:even, :odd
			:gt(), :lt(), :eq() #pass in javascript indexes
			:animated #items currently being animated
			:focus
			:not(expr) #elements that do not match the given expression
				$("p:not(p:eq(2))") #paragraphs that are not equal to index 2
				-uses regular selectors & filters as the expression
    ```
	- advanced (attribute) filters
    ```
  		$("p[class]") #select all paragraphs that have a class attribute
  		$("p[class=1]") #select all paragraphs that have a class attribute set to 1
  		$("p[class^=1]") #select all paragraphs that have a class atttribute whose value starts with 1
  		$("p[class^=1][lang*=en]") #select all paragraphs that have a class attribute whos value start with 1, AND whose lang attribute has a value that contains en

  		$("p:contains('sometext')") #select all paragraphs that contains 'sometext' as text content, i.e. not empty
  		$("p:parent") #select all paragraphs that have child elements or text content
  		$("p:has(span[class=blah])") #select all paragraphs that have a child span element with the class attribute set to blah

  		$("div p:first-child") #select all paragraphs that are the first child of a div tag
  		$("div p:last-of-type") #select all paragraphs that are the last child paragraph of a div
  		$("div p:nth-child(3)") #select all paragraphs that are the third child of a div #not index based
  		$("div p:nth-child(2n)") #select every second paragraph that is a child of a div #not index based
    ```
# CSS
	`$(blah).css("property", "value")`
# creating HTML
  ```
  	var newP = $("<p>"); #create new paragraph
  	$("someelement").append("<div>blah</div>") #adds a new div with blah text at the end of somelement
  ```
# traversing html
  ```
  	$(blah).next() #select blahs next sibling element
  	$(blah).prev() #select blahs previous sibling
  	$(blah).parent()
  	$(blah).parents() #select all of blah's parent's elements
  	$(blah).parentsUntil($("body")) #select all of blahs parents that are child elements of the body element
  	$(blah).children() #return an array of all of blahs immediate children (no grand children, etc.)
  		.children() method differs from .find() in that .children() only travels a single level
  		down the DOM tree while .find() can traverse down multiple levels to select descendant
  		elements (grandchildren, etc.) as well. Note also that like most jQuery methods,
  		.children() does not return text nodes; to get all children including text and comment
  		nodes, use .contents().

  	$(blah).find("#blah2") find the descendent (including grandchildren) element of blah
  	>that has an id of blah2 (includin)
  ```
# functions
  ```
  	$("blah").ready(your function);
  		once blah is ready to be operated on, it will run 'your function'

  		$("document").ready(function() { yourfunctionhere; });

  	$("blah").onload(your function);
  		once blah has been loaded (images, and everything) it will run 'your function', slower than .ready

  	$("blah").append("your item");
  		adds 'blah' as the last child of blah

  	$("blah").prepend("your item");
  		inserts  your item as the first child of blah

  	$("blah").html("blah2")
  		replaces the content of blah with blah2

  	$("blah").text("escaped code");
  		will insert escaped code as PLAIN TEXT, thus any code will be readable as text and not executed
  	$("blah").focusout() method is just a shorthand for .on( "focusout", handler ), detaching is possible using .off( "focusout" ).
  ```
# statement chaining
	`$(blah).function1().function2().etc`

# loops
  ```
  	$(blah).each(function(index, element)){your code}
  		#loop over each blah and do something to it
  		#index = index of current item
  		#element = the current element
  		#inside the code, use $(element) to turn the current element into a jquery object that can accept jquery functionsvar images = $("img");
  ```
# events
  ```
  	$("p").click();
  	$("blah").on("mousemove", yourfunction);
  		.on binds a function to a specific event
  	$("blah").off("mousemove", yourfunction);
  		.off unbinds a function from a specific event

  		function yourfunction(evt){
  			 evt.type
  			 evt.pageX
  			 evt.pageY
  			 evt.metaKey
  				research other properties of the evt object that is passed by event listeners
  		}

  	$("blah").trigger("event")
  ```
	- evt
		  - an event object that jquery uses to send event information to functions
      ```
    		evt.type #type of event, e.g. click
    		evt.pageX #x coordinates of the mouse
    		evt.pageY #y coordinates of the mouse
      ```
# animations
  ```
  	$("blah").animate({property: newvalue}, timeinmilliseconds);
  	$("blah").animate({property: "+=100"}, "slow");
  	$("blah").animate({propert1: value1, property2:value2}, timeinmilliiseconds)
  ```
# ajax
	- ajax(): used to perform generic ajax requests
	- load(): loads ajax content directly into a page elmeent
  ```
  	$.ajax(
  		"www.blah.com/somefile.php",
  		{success: yoursuccessfunction, type: "GET", dataType: "text"}
  	);
  		url to call
  		succesS: the success function to call
  		type: the HTTP type, e.g. POST, PUT, DELETE, etc
  		data: the type of data your expecting to be returned

  		function yoursuccessfunction (data, status, jqxhr){
  			$("blah").text(data);
  			$("blah").text(status);
  			$("blah").text(jqxhr);
  		}

  			data: the data returned from the ajax call
  			status: the status of the ajax call
  			jqxhr: the xml http request object

  		second way to load content from the server

  			$("blah").load("www.blah.com/somefile.php")
  				load will make the ajax request, retrieve the data, and load it into the php
  ```
