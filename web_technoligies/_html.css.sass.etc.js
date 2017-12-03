/* eslint-disable */

HTML specs
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  http://docs.webplatform.org/wiki/Main_Page
  wufu: http://www.wufoo.com/html5/types/7-number.html
  https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/#input_date
  https://html.spec.whatwg.org/#constraints

  document metadata: https://www.w3.org/TR/html5/document-metadata.html
      4.2 Document metadata
      4.2.1 The head element
      4.2.2 The title element
      4.2.3 The base element
      4.2.4 The link element
      4.2.5 The meta element
      4.2.5.1 Standard metadata names
      4.2.5.2 Other metadata names
      4.2.5.3 Pragma directives
      4.2.5.4 Other pragma directives
      4.2.5.5 Specifying the documents character encoding
      4.2.6 The style element
      4.2.7 Styling
  sections: https://www.w3.org/TR/html5/sections.html
    4.3 Sections
    4.3.1 The body element
    4.3.2 The article element
    4.3.3 The section element
    4.3.4 The nav element
    4.3.5 The aside element
    4.3.6 The h1, h2, h3, h4, h5, and h6 elements
    4.3.7 The header element
    4.3.8 The footer element
    4.3.9 The address element
    4.3.10 Headings and sections
    4.3.10.1 Creating an outline
    4.3.10.2 Sample outlines
    4.3.11 Usage summary
    4.3.11.1 Article or section?
  Grouping content: https://www.w3.org/TR/html5/grouping-content.html
    4.4.1 The p element
    4.4.2 The hr element
    4.4.3 The pre element
    4.4.4 The blockquote element
    4.4.5 The ol element
    4.4.6 The ul element
    4.4.7 The li element
    4.4.8 The dl element
    4.4.9 The dt element
    4.4.10 The dd element
    4.4.11 The figure element
    4.4.12 The figcaption element
    4.4.13 The div element
    4.4.14 The main element
  Text level semantics: https://www.w3.org/TR/html5/text-level-semantics.html
    a, em, strong, small, cite, data, time, sub/sup, i, b u, mark, span, br, tc.
  Embedded content: https://www.w3.org/TR/html5/embedded-content-0.html
    4.7.2 The iframe element
    4.7.3 The embed element
    4.7.4 The object element
    4.7.5 The param element
    4.7.6 The video element
    4.7.7 The audio element
    4.7.8 The source element
    4.7.9 The track element
    map
    area
    SVG
    MathML
  Links: https://www.w3.org/TR/html5/links.html
  Tabular Data: https://www.w3.org/TR/html5/tabular-data.html
    4.9.1 The table element
    4.9.1.1 Techniques 'for' describing tables
    4.9.1.2 Techniques 'for' table design
    4.9.2 The caption element
    4.9.3 The colgroup element
    4.9.4 The col element
    4.9.5 The tbody element
    4.9.6 The thead element
    4.9.7 The tfoot element
    4.9.8 The tr element
    4.9.9 The td element
    4.9.10 The th element
    4.9.11 Attributes common to td and th elements
  Forms: https://www.w3.org/TR/html5/forms.html
  Scripting: https://www.w3.org/TR/html5/scripting-1.html
    4.11.1 The script element
    4.11.1.1 Scripting languages
    4.11.1.2 Restrictions 'for' contents of script elements
    4.11.1.3 Inline documentation 'for' external scripts
    4.11.1.4 Interaction of script elements and XSLT
    4.11.2 The noscript element
    4.11.3 The template element
    4.11.3.1 Interaction of template elements with XSLT and XPath
    4.11.4 The canvas element
    4.11.4.1 Color spaces and color correction
    4.11.4.2 Serializing bitmaps to a file
    4.11.4.3 Security with canvas elements
  Disabled Elements: https://www.w3.org/TR/html5/disabled-elements.html
    button elements that are disabled
    input elements that are disabled
    select elements that are disabled
    textarea elements that are disabled
    optgroup elements that have a disabled attribute
    option elements that are disabled
    fieldset elements that have a disabled attribute
  Loading Web Pages: https://www.w3.org/TR/html5/browsers.html
  Web Application APIs: https://www.w3.org/TR/html5/webappapis.html
  User Interaction: https://www.w3.org/TR/html5/editing.html
  HTML Syntax: https://www.w3.org/TR/html5/syntax.html
  Rendering: https://www.w3.org/TR/html5/rendering.html
  Index of everything! SUPER COOL: https://www.w3.org/TR/html5/index.html

FORMS
  forms separate users from companies
  -someone wants to buy something, someone wants to sell something
  -someone wants to grow their userbase, someone wants to be part of a community/team/fanbase/etc
  -placeholders should be used as an aid to guide users
  -provide immediate feedback to users
  -best practices
    - use existing data to pre-populate fields
    - ensure forms are auto-fillable by browsers
    - always show progress meters
    - dont break the back button
    - provide visual calendars when selecting dates
    - use datalist to provide suggestions 'for' form inputs
      .users are not restricted to the suggestions provided
    - use labels on form inputs, and make them visible
    - use placheolders to provide guidance
    - use established names 'for' elements and include the autocomplete attribute
    - use the browsers built in validation attributes like pattern, required, min, and max
    - use javascript and the constraints validation api 'for' complex validation
    - manage focus when validation fails
    - autocorrect when you can
    - show validation errors in real time

  labels
    label.for='someInputId'
    input.id='someInputId'

  inputs
    input.placeholder='show this text when no user input exists'
    input.type='datetime-local' //calendar

  widgets:
    calendar: http://codepen.io/greenido/pen/xwGEWO

  autocomplete attribute:
    https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete
    input.autocomplete='email'

  autofocus: only one element can have it, boolean
    input.autofocus='true'

  validation
    required: if exists, this input needs a value
      input.required

    custom validation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity
      input.value='blah'
      submit.onclick=()=>{
        if input.value !== 'bloop'
        input.setCustomValidity = 'Input value should be bloop'
      }
    constraint validation:
      https://html.spec.whatwg.org/#constraint-validation-api
      https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/
      the algorithm utilizes new HTML5 attributes min, max, step, pattern, and required as well as existing attributes maxlength and type.

      //has error
      el.validity.valueMissing ||
      el.validity.typeMismatch ||
      el.validity.patternMismatch ||
      el.validity.tooLong ||
      el.validity.tooShort ||
      el.validity.rangeUnderflow ||
      el.validity.rangeOverflow ||
      el.validity.stepMismatch ||
      el.validity.badInput ||
      !el.validity.valid;

      // set error + message to user
      el.setCustomValidity(el.validationMessage);
      el.title = el.validationMessage;
      //clear error
      el.setCustomValidity('');
      //check if form is invalid
      if (!e.currentTarget.checkValidity())
      if (formElement.checkValidity())

    numeric input.number|range
      min=#
      max=#
      step=#
      input.type=range.onchange=()=>{this.innerHTML = this.value;} //only works for range inputs that have slider


ELEMENT PSEUDO STATES
  el:active
    to enable active on ios mobile you need to add an event listener for touchstart to window.onload, test userAgent for iphone/ipad,
    more here: https://developers.google.com/web/fundamentals/design-and-ui/input/touch/active-states?hl=en#enabling-active-state-support-on-ios
  el:hover
  el:focus //not avail on ios mobile
    disable the outline when focused
      btn:focus {
        outline: 0;

        // Add replacement focus styling here (i.e. border)
      }
  you can disable tap highlight style on chrome:
  .btn {
    -webkit-tap-highlight-color: transparent;
    }
  you can disable tap highlight on IE
    <meta name="msapplication-tap-highlight" content="no">

  you can disable firefoxos state styles:
    /* Firefox Specific CSS to remove button
    differences and focus ring */
    .btn {
    background-image: none;
    }

    .btn::-moz-focus-inner {
    border: 0;
    }

  disable select on long touch
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

front end design
	week 1
			Usability	is	about	how	usable	a	website	is:
				efficient,	memorable,	learnable
			User	experience	(or	UX)	is	subjecBve	–	it’s
			how	the	user	feels	about	a	website:
				happy,	frustrated,	bored
				UX = structure + content + interface design + usability

			know your audience: who are they, design 'for' them, there may be more than one type of user

			page components:
				header: where am I?
				side bars: where can I go ? i.e. navigation
					navigation: before you can plan where people can go, youll need to know the site architecture, take time to plan out a site map
						useful tools:
							site map: a way of planning out your site
								home : index.html
								main pages:  albums
										sub page: photo album 1, photo album X
											sub page: photos 1, photos X
					hierarchical: very general to the specific
					global: top level sections on each page
					local: within the text
					breadcrumbs: lets a user know where they are, and how they got there
				Main content area: What is here on the page?
					box model:
						margin > border > padding > content

			wireframing: plan your layout, simple (pape + pen)

			type of links
				relative path:
					indx.html | images/myimage.html /etc
				absolute path:
					http://blah.blah.blah/blha
					better 'for' search engine indexing
					easier to move things around without them breaking

			web accessibility: encompasses all disabilities that affect access to the web, including:
				visual, auditory, physical, speech, cognitive, neurlogical

			design appraoches
				cognition/evidence-based: what is the inofrmation ? how do we make the infromation clear?

				user centric: who are our users? what do they want? how do they want it? how do they get the information?

				User experience must come before any code is written
				user experience must be consitent
				not knowing how your website will be used, is the worse thing you can do
				there should be a minimum number of clicks to get to information/content


				dark pattern: offerring information that is not relevant to the site
				questions
					how long does it take to find the information?
					how long does it take to understand the information?


			notes
				poeple look for objects with white spaces around them to know where to focus
				People sweep out an F shape with their eyes

full stack web development
	week 1
		front end (client side): presenting data to the users
			html, css, javascript
		backend (server side): business logic & data aspect of web applications
			PHP, Java, ASP.net, Ruby, Python
		Three Tier Architecture
			Presentation Layer: UI related issues and how to present the data to the users
			Business Logic Layer: data validation, dynamic content processing
				implemented in a server via ruby, python, java, c++, php, etc.
			Data Access Layer: data persistence, data access through API, and storage in a database
				holds the DB

		Full stack javascript development
			presentation: single page apps using javascript frameworks like AngularJS
				UI with Bootstrap
				JS with Angular JS

			business logic: NodeJS and NodeJS Modules
				BaaS
				NodeJS + NodeJS MOdules NPM (node package manager)
				Less and Saas
				Bower
			Data Access Layer: MongoDB (stores JSON data), JSON Documents
				Mongo DB
			Server side is delivered via a REST API that can be rendered on mobile devices/ web browsers/ etc

		Front end web UI frameworks
			What are they?
				collection of ready-to-use html,css, and javascript templates for UI componenets
					typography, forms, buttons, tables, navigations, dropdowns, alerts, modals, tabs, accordion, cariousel, etc.
				responsive web design: mobile first
				cross-browser compatibiity: dealing with quirks of browsers
				increased productivity: easy to get started
				community support: resources and web page templates
				popular front end frameworks
					bootstrap, zurb, semantic UI, pure, ui kit, gumby, susy, etc

			Bootstrap
				mobile first, html & css based design tempaltes 'for' all areas of the UI

HTML
  input
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type
    -used to create interactive controls for web-based forms in order to accept data from the user
    -attributes (only important)
      .type: the type of control to display
        values: button, checkbox, color, date, datetime, datetime-local, email, file, hidden, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week
      .autocomplete: whether the value of the control can be automatically completed by the browser
        .values: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type
      .checked: when type=radio|checkbox
      .disabled: not available for interaction
      .form: the id of the form element that the input element is associated with (its form owner)
        .this allows you to put input elements anywhere
      .formaction: URI of a program that processes the info submitted by the input element.
        .it overrides any parent form action attribute
      .list: identifies a list of predefined options to suggest to the user
        .the value  must be the ID of a datalist element in the same document
      .max: maximum numeric/date-time value
      .maxlength: max # of characters
      .min: minimum numeric/date-time value
      .minlength: minimum # of characters
      .multiple: when input type=email|file
      .name: name of the control, submited with the form data
      .pattern: regexp that the input's value is checked against
        .use the title attribute to describe  the pattern to help the user
      .placeholder: hint to user of what can be entered in the control
      .readonly: indicates the user cannot modify the value of the control
      .required: specifies that the user must fill in a value before submitting the form
      .step: works with the min an max attributes to limit the increments at which numeric/date-time value can be set
      .tabindex: the position of the element in the tabbing navigation order for the current document
      .value: the initial value of the input


      .
	forms
		<form> id="formID" name="formname">
		</form>
			input tag to create elements in forms
				type=text|password|submit|radio|checkbox|button|color|date|datetime|email|month|number|range|search|tel|time|url|week

			textarea
			button
			select
				option

		field values
			someElement.value //return and set the value

		select
			myselect.options[#].selected //loop through each select option to see if its been selected

		main properties
			.value //for text elements
			.checked //for radio/checkboxes, returns true/false
			.type //great for select elements, to determine if they are single selects or multiple selects
			.selected //for selects and options, returns true/false

		main events
			onfocus
			onblur
			onchange
			onkeypress
			onkeydown
			onkeyup
			onclick
			onsubmit //can be used to stop the form from immediately submitting by returning false
		DOM
			document.forms.formname
			document.forms.formname.elementname

	tables
		<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="black">
			<tr border="0" valign="middle" align="center" cellpadding="0" cellspacing="0">
				<td>
				</td>
			</tr>
		</table>

		table
			cellpadding= # space between cell wall and content
			cellspacing # space between cells
			valign: vertical alignment:top, middle, bottom, baseline
			align: horizontal alignment: left, right, center, justify
				'use' this instead of float
			bgcolor= background color
			width= #
			height= #
			border= # #deprecated html5
		tr
		td
			valign: vertical alignment:top, middle, bottom, baseline
			align: horizontal alignment: left, right, center, justify
			bgcolor= background color
			width= #
			height= #
			border= # #deprecated html5

	images
		img
			alt="alternative text"
			target="_blank"
			set display:block to remove white lines that look like table borders

	workflows: setup your head tag so the webpage is responsive
		<head>
			<meta charset="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="ID=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</head>

	html email design & best practices:
		- call to actions: should be big, perhaps buttons
		- call outs: should be a distinct, perhaps a separate color/style
		- width: never set the container width to more than 600px;
		- set width=# html attribute on ALL images
		- floated elements should come first, so that the next elements float around them
		to stop the float, add <br / style="clear:both;">
			always set on tables
				border, cellpadding, cellspacing, height, width, id/id

			always set on td
				align, valign

			only set width on the container table, 'use' % on all others

		steps
			1. create the basic structure, not including the rows
			2. create the first row, and add its content
			3. repeat until you finish all of the rows with all of the content
			4. setup all of the basic table, td, span tags with inline styles
			5. go back and do progressive enhancements via media queries,
			add class= attributes to all tables & tds 'for' targeting with media queries

		progressive enhancements
			- not all email clients support tds with background images
			- 'use' align left on tables structured as columns to similute floates
			then 'use' float on the tables 'for' those email clients that support them
			then 'use' a final <br style="clear:both;" /> after the last floated element
			to ensure the container wraps around all floated elements

		type of pprogressive enhancements
			border-radius

		tables
			-put distinct set of content in its own table
			so that it can be responsive when the width changes
			-table structure
			-body: the body tag may be stripped out, but include it anyway
				-body imposter: sets width to 100%, copy bgcolor from body
					-container: set the max width contains 1 TR+ TD 'for' each row
						-if the TD in the container will need multiple columns
						create a new table 'for' each column, else just drop everything
						in the containers td row

			-styles you set on the TD will be inherited by all its content,
			if you add an element, you will need to repeat the styles via inline CSS

			-tables formatted as columns in the same row should be the same height,
			or there can be an issue with stacking, or you should create a new column

		body
			-you can set background color on the body tag
			but you should also set it on the container table
			because some email clients reject the bgcolor= on body

		notes:
			dont 'use' short-hand 'for' anything
				bad: font: 12px arial, helvetica, etc
				good: font-family: blah; font-size:blah;, line-height:blah;

			Putting the closing td tag right after (on the same line as) the img tag eliminates the annoying and mystifying 1-pixel gap.
			For background images, 'use' the tables background attribute instead of using CSS.
			all your images 'use' the alt, height, and width
			'Use' the target="_blank" attribute 'for' the a tags,
			Define the background color in a td cell with the bgcolor attribute, not the CSS style.
			If it works better, 'use' the padding declaration to control margins within a td cell. The margin style does not work in these cells, but padding does.
			Google Mail aggressively uses the right-hand column of the Google Mail user interface, which squeezes the HTML email into the center panel. Be sure the padding style in the content tds is set to 10 pixels all round, so that text does not hit against the left and right edges.

			phones and tablets support @media declarations
				the CSS @media definition to target the HTML table TD cells
				@media only screen and (max-width: 480px) {
					/* mobile-specific CSS styles go here */
					table[class=email], table[class=email-content] {
						clear: both;
						width: 320px !important;
						font-size: 13px !important;
					}
				}

					Place this @media code directly below your body tag class="email" to
					your table definition and class="email-content" to your TD cells.
					When your HTML email is viewed with a device (or web browser
						horizontally re-sized) less than 480 pixels, these
					definitions will activate.

					The secret to coding a two-column HTML email to adapt to small
					phone and tablet screens? Put each column into its own table. Next,
					for each HTML table, 'use' inline CSS to float: left and HTML
						align="left" to float and align each content column table to
					the left. Then add  class="email" to your table definition and
					class="email-content" to your TD cells.

css
	keys + values
		shorthand pixels
			top right bottom left

	text-align:center #for images & text
		background-color: #000;
		background-image: url(images/bg.gif);
		background-repeat: no-repeat;
		background-position: top right;

	fonts
		font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;
		font-style: normal|italic|oblique|initial|inherit;
		font-variant: normal|small-caps|initial|inherit;
		font-weight: normal|bold|bolder|lighter|number|initial|inherit;
		text-decoration: none|underline|overline|line-through|initial|inherit; #mainly used 'for' a tags
		font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;
		line-height: normal|number|length|initial|inherit;
		font-family: font1, font2, font3, font4;

	border
		border-width: 1px;
		border-style: solid;
		border-color: color|transparent|initial|inherit;
		border-spacing: length|initial|inherit;

	margin + padding #do not work on inline elements
		margin-top|right|bottom|left: 10px;
		margin doesnt work on td
		padding DOES work on td

	buttons, use inline style
		background-color: #731C2D;
		border-radius: 5px;
		color: black;
		padding: 5px 10px;
		text-decoration: none;
		text-shadow: xoffset yoffset blursize blurcolor;
		letter-spacing:1px;

	float:left|right
		require a "width" to be set on the element

	CSS tricks
		center block element inside its parent
			child.margin: 0px auto; #only works if display:block; is set

  position:static|absolute|relative|fixed
      static: normal positioning
      absolute: is placed on top/below everything else, based on z-index
      relative: moves
      fixed: sticks on the page where its defined, and never leaves that position

  box-shadow:
  	https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

	media queries:
		#since we start at 660, it will be applied to everything under 660
		# at 510, it will only be applied up to 510
		@media Only screen and (max-width:510px){
			smaller screens
			table.container { width: 100% !important; }
		}


		@media Only screen and (max-width:660px){
			for medium screens
			be sure to adjust all images here
			table.container { width: 480px !important; }

		}

		@media screen and (min-width:661px){
			/*css styles customized for desktop */
		}

		@media screen and (min-width:1200px){
			/*css styles customized for large-desktop */
		}

SASS:
  CSS extension
  pre-processed
  extensible
  written in ruby


	define variables
	    $variableName : VALUE
	    .navbar {
	      background-color: $navbar-color
	    }


	nesting rules <a class='parent'> <b class='child'></b></a>
	  dont nest more than 3 levels, just 'for' sanity sake
	    .parent {
	      style1

	      childstyle {
	        style2

	        grandchildstyle {
	          style 3
	        }
	      }
	    }
	    loads the rule as div.parent.child.grandchild

	parent selectors div.parent.child
	    parentClass
	      css definitions
	      &.chidClass
	        css definitions
	partials
	    @import "path/to/css/file.scss";

	    convention
	        name partial.scss files as _fileName.scss

	extensions/inheritance : base one style declaration on another
	    .someBaseClass {
	      blah blah blah
	    }

	    .childClass {
	      @extend .someBaseClass
	      overwite style1
	      new style1
	    }

	    .message {
	      border: 1px solid #ccc;
	      padding: 10px;
	      color: #333;
	    }

	    .success {
	      @extend .message;
	      border-color: green;
	    }

	    .error {
	      @extend .message;
	      border-color: red;
	    }

	    .warning {
	      @extend .message;
	      border-color: yellow;
	    }

	Operators: use basic math to set/not set styles
	    math operators: '+, -, *, /, and %'

	    $border = 1px;
	    $thicker = $border * 5;

	    .blah {
	      @if ($border < 1){
	        style:value;
	      }@else{
	        style:value;
	      }
	    }

	    .container { width: 100%; }


	    article[role="main"] {
	      float: left;
	      width: 600px / 960px * 100%;
	    }

	    aside[role="complimentary"] {
	      float: right;
	      width: 300px / 960px * 100%;
	    }

	mixins: macros, like javascript functions
	    @mixin rounded ($radius : 10px) { /*10px is the default value*/
	      style1: $radius;
	      style2: blah
	    }
	    .ul {
	      @include rounded(20px); /*call rounded with 20px to override its defualt value */
	    }

	    @mixin border-radius($radius) {
	      -webkit-border-radius: $radius;
	         -moz-border-radius: $radius;
	          -ms-border-radius: $radius;
	              border-radius: $radius;
	    }

	    .box { @include border-radius(10px); }

bootstrap
	notes
		responsive design: adapt to the users viewport, and is built into the core of the site
			includes: grid system, fuild images, css media queries
		mobile first design: first satisfy mobile constraints, then extend to satisfy tablet, then satisfy laptop, then satisfy desktop
		Information Architecture: the organization, labeling, and navigation methods provided to access information
			Typically websites are orgnaized in a hierarchical fashion
			Some websites include:
				up-down navigation
				cross navigation
		Navigation bars:
			users expect it at the top of the website
			guidelines:
				use simple terms, standardize across website, highlight current location, clicking logo take syou back to homepage, dont have too many items, dont use generic labels
		breadcrumbs: tells the user their current location in the hierarchy
			usually placed below the primary navigation and above the content
			types of breadcrumbs:
				path based: set of steps
				location based: hierarchy
				attribute based: set of choices
		Navigation Aid types:
			tabs, pills, pagination, dropdowns, acordion, tags/tag cloud, scrollspy, affix

		icon fonts
			set of symbols and glyphs that can be used like regular fonts and replace images
			can be styled with CSS just like regular fonts

	bootstrap colors
		primary (blue)
		success (green)
		info (light blue)
		warning (orange)
		danger (red)

		usage
			text-primary
			alert-danger
			bg-info
			btn-success

	bootstrap floats (apply to any element)
		clearfix - clears floats on both sides
		pull-right - float to the right
		pull-left - float to the left

	bootstrap syntax
		all 'class' groups have a base class, and then a list of modifiers

		navigation
			nav
				navbar-nav | nav-tabs (js)| nav-pills (js)

	bootstrap container class:
		container for all the content of the site
		fixed width (or you can use container-fluid) (Width depends on the screen size)
		use as the outermost div to wrap all the site content 'for' the grid to work correctly
		.container-fuild 'class' allows full width container

	bootstrap rows
		divide the page into multiple rows
		rows act as horizontal grouping 'for' columns
		rows must be inside containers 'for' the bootstrap grid to work correctly

	jumbotron
		lightweight, flexible component 'for' shocasing key cotnent, e.g. company name, logo, and key infromation
		can be used outside a container to span the entire screen width
		use a container inside if you wish to contain the content within a fixed width

	grid system: responsive, mobile first, fluid
		setting the meta name="viewport" ensures:
			the screen width is set to the device width and the content is rendered with this width in mind
			designing the websites to be responsive to the size of the viewport
		structure
			container class: defines the width the webpage will occupy on the screen in conjuction with the css media queries
			row class: occupies the entire width of the container, and separates content into rows
			grid system: each row is divided into 12 equal columns
				you can specify how many columns each content occupies within each row, but the total SHOULD ALWAYS ADD UP TO 12!!!
					between each column there is a gutter (white space)
					col-xs-X #mobile < 768px col width = auto container width = auto
						everything is stacked
					col-sm-X #tablet > 768px col width = 62px container width = 750
					col-md-X #laptop > 992px col width = 81px container width = 970
					col-lg-X #desktp > 12k   col width = 97px container width = 1170
					hidden-xs #hide on xs screen sizes
					hidden-SIZE #hide this element on this size screen
					gutter width is always 30px (15px on each side)
				specifying column width precidences
					class="col-xs-X col-sm-X col-md-X col-lg-X"
						if you dont include one, the lower one will be used


				col-sm-push-X
					(push right by X, occupy the last X columns)
				div.col-xs-12.col-sm-9.col-sm-push-3
					will take up 9 columns, but floats to the right by 3 cols
				col-sm-pull-X
					(push left by X, occupy the first X columns)
				div.col-xs-12.col-sm-3.col-sm-pull-9
					will take up 3 columns, but floats to the left by 9 cols
					notice it is the oppositve of the push
				div.col-sm-4.col-sm-offset-X
					(move to the right X columns)

				examples
					specify a container, a row header, and a column
						div.container
				      div.row.row-header
			          div.col-xs-12.col-sm-8

	        specify a container, a row 'for' content, and a column and push it to the right 9 columns
						div.container
							div.row.row-header
				        div.col-xs-12.col-sm-3.col-sm-push-9

				  row with 2 columns
            div.row.row-content
	            div.col-xs-12.col-sm-3
	            div.col-xs-12.col-sm-9

	glyphicons: included as part of bootstrap
		always embed glyphicon icon-fonts in span tags
		<span class="glyphicon glyphicon-home" area-hidden="true"></span>

	Lists
		no style: ul.list-unstyled
		unordered lists
			ul class="list-unstyled"
				or  list-inline

	breadcrumbs
		ol.breadcrumb
			li <!--repeat li a 'for' each breadcrumb-->
				a[href="link"]
					link text

	getting user input
		buttons
			btn btn-COLOR btn-SIZE btn-block
				color: any of the colors
					default, primary, success, info, warning, danger, link
				size: any of the sizes
					xs, sm, lg

				btn-block makes it a block, instead of inline
			button location:
				inside a form a button has a different expectation and role
			button classes
				can only be applied to <a><button> and <input>
				btn btn-primary btn-lg
				btn btn-default
				btn btn-success btn-sm
				btn btn-info btn-xs
				btn btn-link
				btn btn-warning btn-block
				btn btn-danger btn-block
					btn-block makes the button tak ethe full width
				i.e.
					class="btn btn-COLOR btn-SIZE btn-block"

			button groups
				horizontal button group
				<div class="btn-toolbar" role="toolbar">
					<div class="btngroup btn-group-sm" role="group">
						<button with classes> Click Here </button>
						<button with classes> click here </button>
					</div>
				</div>

				vertical button group
					<div class="btngroup-vertical" role="group">
						<button with classes> Click Here </button>
						<button with classes> click here </button>
					</div>

				btn group classes
					btn-toolbar
					btn-group
					btn-group-vertical
					btn-group-justified buttons will stretch to the full width of the parent
					btn-group-*

		anchor tag
			hyperlinks
			can be styled as buttons

		form
			input tag to create elements in forms
				type=text|password|submit|radio|checkbox|button|color|date|datetime|email|month|number|range|search|tel|time|url|week
			textarea
			button
			select
				option

      labels: match labels with elements
        label.for='blah'
        input.id='blah
			horizontal forms
				<form class="form-horizontal" role="form">
					<div class="form-group"><!--must use to group the label and input-->
						<label for="firstname" class="col-sm-2 control-label">first name</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="firstname" name="firstname" placeholder="Enter first name"/>
						</div>
					</div>
				</form>

			inlne forms: the entire form is in a single line
				<form class="form-inline">
					<div class="form-group"><!--must use to group the label and input child elements can use col-xs-SIZE-->
						<label class="sr-only" for="email">Email</label>
							<input type="email" class="form-control" id="email" name="email" placeholder="Email"/>
					</div>

					<div class="form-group"><!--must use to group the label and input-->
						<label class="sr-only" for="password">Password</label>
							<input type="password" class="form-control" id="password" name="password" placeholder="Password"/>
					</div>

					<div class="checkbox">
						<label><input type="checkbox"/> Remember Me</label>
					</div>

					<button type="submit" class="btn btn-default"> Sign In</button>
				</form>

			Input groups: allows you to group together elements with your input fields

				<div class="input-group">
					<div class="input-group-addon">(</div>
					<input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area Code"/>
					<div class="input-group-addon">)</div>
				</div>

			element examples
				checkbox
					<div class="checkbox col-sm-4 col-sm-offset-3">
              <label class="checkbox-inline">
                  <input type="checkbox" name="approve" value=""/>

                  <strong>May we contact you?</strong>
              </label>
          </div>

			Notes
				any element with .form-group provides the row 'class' functionality, allowing you to set col-blah-size on any child elements

	tables
		display tabular data in a web page

		<table class="table"> always use table class when formatting tables that hold tabular data</table>

		table classes
			table-striped zebra striped rows
			tabled-bordered 'for' borders to table cells
			table-hover 'for' hilighting rows when you hover over a row
			table-condensed 'for' cutting the cell padding in half
			table-responsive 'for' making tables responsive, can horizontally scroll tables on screen sizes less than 768px

		table td/tr classes to color table rows/cells
			active
			success
			info
			warning
			danger

		responsive table example
			<div class="table-responsive">
        <table class="table table-striped">
        	your tr & td/th here
        </table>
     </div>

	bootstrap panels & wells
		allows you to highlight content on your website

		panels: display content in a box with a heading
			heading: one liner
			body: can hold any type of content
			footer: one liner

			panel color classes
				panel-default, .panel-primary, .panel-success, .panel-info, .panel-warning, or .panel-danger
		Well: display content in a box without a heading
			can hold any type of content

			well classes
				<div class="well">
					or: well-lg, well-sm
				</div>

			example well
				<div class="well col-xs-12">
						<blockquote>
								<p>Good music reflects the reality of our paradigms</p>
								<footer>Kenoah Hall</footer>
								<cite title="Source Title">Medicinal Meditations of KeNoah Hall, unreleased</cite>
						</blockquote>
				</div>

	description list classes
		term & definition are displayed on one line
		<dl class="dl-horizontal">
			<dt>Blah</dt>
			<dd>Term Definition</dd>
		</dl>
			can also use dl-vertical

	blockquotes
		<blockquote>
			<p> some quote </p>
			<footer> Author
				<cite title="Source title"> the source
				</cite>
			</footer>
		</blockquote>

	bootstrap images
		shapes
			img-rounded rounded corners
			img-circle circular image
			img-thumbnail thumbnail image

		force responsiveness
			img-responsive
				will resize to the parent

		thumbnails
			div class="thumbnail"
				a href
					img class="media-object img-thumbnail"
				div class="caption"
					h2
					h4
					p

	media objects: images grouped with content
		media classes
			media, media-object, media-body, media-heading

		positioning classes
			media-left, media-right
			media-top, media-middle, media-bottom

		media list classes
			media-list (on ul and media classes on li)

	responsive embed classes
		embed-responsive-SIZE
			size = 16by9|4by3
		embed-respnosive-item

		can be added to iframes/videos

	Alerting Users
		labels and badges: 'for' simple updates

			<span class="label label-danger label-xs">HOT</span>

				syntax: label label-COLOR label-SIZE

			<span class="badge">4.99</span>

				syntax: just use the 'class' badge


		alert/error/warning messages

			<div class="alert alert-warning alert-dismissable"	role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="close">
					<span area-hidden="true">BOOM</span>
				</button>
				<strong>WARNING</strong>
				<a href="#" class="alerti-link">CLICK HERE</a>
			</div>

		dismissable alerts (has x to close)
			<div class="alert alert-warning alert-dismissible" role="alert">
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			  <strong>Warning!</strong> Better check yourself, you're not looking too good.
			</div>

	progress bars
		<div class="progress">
			<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">
				<span class="sr-only">80% Complete</span>
			</div>
		</div>

bootstrap javascript components
	notes
		is built upon jquery, so jquery must be included to use bootstrap javascript components
		bootstrap js < jquery < javascript
		plugins can be individually loaded, or you can load them all

	loading bootstrap js components
		data-* attributes: e.g. data-toggle, data-spy, etc.
		instead of using the data-* attributes, you can also use the full js api by using jquery/syntax to call the plugins directly

	navigation
		Navbar- no collapsing
			nav.navbar.navbar-default
				div.container
					div.navbar-header
						a.navbar-brand[href="index.html"]
							your brand image/name
					ul.nav.navbar-nav <!--these links are to the left-->
						li.active <!--one li and a tag 'for' each link. only one should be active
							a[href="link"]
						li.divider[role="separator"] <!--add a horizontal line between links-->
					ul.nav.navbar-nav.navbar-right <!--this nav floats to the right-->
						li.active <!--one li and a tag 'for' each link. only one should be active
							a[href="link"]


	    navbar with collapse
	    	nav.navbar.navbar-default.navbar-inverse
	    		div.container-fluid
	    			div.navbar-header <!--group the brand with the toggle so the brand always shows-->
	    				button.navbar-toggle.collapsed[data-toggle="collapse"][data-target="pagenav"][aria-expanded="false"][type="button"]
	    					<!--data-toggle = load the collapse plugin-->
	    					<!--data-target = collapse/show the element with this ID-->
	    					span.sr-only
	    						Toggle Navigation
	    					span.icon-bar <!--these horizontal lines create the toggle icon-->
	    					span.icon-bar
	    					span.icon-bar
	    				a.navbar-brand[href="index.html"]
	    					your brand image/name
	    		div#pagenav.collapse.navbar-collapse
	    			ul.nav.navbar-nav
	    				li.active <!--one li and a tag 'for' each link. only one should be active
	    					a[href="link"]

		add a dropdown menu inside a nav
			li.dropdown
				a.dropdown-toggle[data-toggle="dropdown"][href="#"][role="button"][aria-haspopup="true"][aria-expanded="false"]
						Click Here!
						span.caret
				ul.dropdown-menu
					li
						a[href="link"]

		add a button to a navbar that is not inside a form or an element with navbar-nav
			a|input|button.btn.btn-default.navbar-btn[type="button"]
				navbar-btn vertically aligns the button inside the nav
				normally a form element would do this

		add text to the navigation
			p.navbar-text
				your text

		add non-nav links
			a.navbar-link

		float an element inside a nav
			element.navbar-left|.navbar-right

		add a search form inside a nav
			form.navbar-form.navbar-left[role="search"]
				div.form-group
					input.form-controle[type="text"][placeholder="Search"]
				button.btn.btn-default[type="submit"]
					Click to Search

		navbar classes
		nav.navbar-default.navbar-fixed-top
			div.container|.container-fluid
				.navbar-fixed-top fixed and does not scroll
				.navbar-fixed-bottom fixed and does not scroll
				.navbar-static-top will be at the top, but can dissapear when scrolled
				.navbar-inverse make it dark bg with light text
				.navbar-default make it light bg with dark text

		Tabs
			ul class="nav nav-tabs"
				li class="active"
					a href="#content1" role="presentation"
				li
					a href="#content2" role="presentation"
				li
					a href="#content3" role="presentation"


		Pils
			ul.nav.nav-pills
				li.active
					a[href="#content1"][data-togle="tab"] a pane should have id content1
				li
					a[href="#content2"][data-togle="tab"] a pane should have id content2
				li
					a[href="#content3"][data-togle="tab"] a pane should have id content3

				data-toggle="tab" is what activates the javascript
		additional classes
			nav-justified : stretch tabs/pills to the width of the parent
			nav-stacked : stack PILLS instead of horizontal
			disabled : disable an element

		content classes
			enclose entire content in div class="tab-content"
			enclose panes (items that correspond to each tab) within the div.tab-content
				div.tab-content
					div#content1.tab-pane.fade.in.active[role="tab-panel"]
					div#content2.tab-pane.fade[role="tab-panel"]
					div#content3.tab-pane.fade[role="tab-panel"]

	collapse plugin: shows and hides content
		must be used on a button or a tag

			div#content.collapse.in
				[content]
				.in = content will start open
				remove .in = content will start closed
			a.btn.btn-primary[data-toggle="collapse"][href="#content"]
				Click me!

	Accordion
		div#accordion.panel-group[role="tablist"][aria-multiselectable="true"]
			//repeat the entire panel.panel-default for each panel
			div.panel.panel-default
				div#panel1heading.panel-heading[role="tab"]
					h3.panel-title
						a[data-toggle="collapse"][data-parent="#accordion"][href="#panel1content"][role="button"][aria-expanded="true"][aria-controls="panel1content"]
							panel heading text

				div#panel1content.panel-collapse.collapse.in[role="tabpanel"][aria-labaledby="panel1heading"]
					div.panel-body
						panel body content

						only the first panel1content should have .in class, all other panel#content should not have .in 'class' so that start collapsed


	scrollspy & affix
		scrollspy: as you scroll your web page, whatever is currently visible on the page will be highlighted on the nav in-page link

		affix: enables your nav element to move with the scroll up to a certain point, and then it fixes the position  of the nav so it becomes fixed

		body[data-spy="scroll"][data-target="#myScrollSpy"][data-offset="400"]

			data-offset= positive numbers start the tracking higher up in the page
				i.e. 500, says highlight the current inpagenav 500px earlier before the scroll
			set this as the same value of the ul element

			nav#myScrollSpy
				ul.nav.nav-pills.nav-stacked[data-spy="affix"][data-offset-top="400"]
						data-spy=affix = this loads the affix plugin
						data-offset=400 = at 400px turn this nav to fixed so it stays on the page

					li a[href="#inpage1"]
					li a[href="#inpage2"]

			add this CSS class, so the nav is fixed at 50px (i.e. below the topnav, or wherever you want it)
			.affix {
				top:50px;
				/*additional classes*/
			    left:0px;
			    background-color: darkgray;
			    text-transform: uppercase;
			    font-weight: bolder;
			    z-index: 100; /*should be less than the nav bar*/
			    width:100%;

			}

	showing/revealing/overlaying content to be displayed content to users
		tooltips, popovers, modals
		flexibility: tooltip < popover < modal
		simplicity: tooltip > popover > modal

		tooltips: pops up on hover/click and displays a message
			element[data-toggle="tooltip"][data-placement="top|bottom|left|right"][title="your message"]
				can also be applied to a button
			add the javascript
				<script>
					$(document).ready(function(){
						$('[data-toggle="tooltip"]').tooltip();
					});
				</script>

		popovers: includes a title and a message, triggered on click
			a[data-toggle="popover"][data-placement="top|bottom|left|right"][title="your title"][data-content="your message"]

			add the javascript
					<script>
					$(document).ready(function(){
						$('[data-toggle="popover"]').popover();
					});
				</script>

		Modals: more detailed information can be presented than tooltips/popovers
			contain both header, body, and footer
			can use bootstrap grid in the body to organize content
			include the modal code at the top of the page, so subsequent changes to the webpage doesnt affect the modal code
				e.g. directly below the nav

			div#modal1.modal.fade[role="dialog"]
				div.modal-dialog.model-sm|lg
					div.modal-content
						div.modal-header
							button.close[type="button"][data-dismiss="modal"]
								&times; <!-- this content will place an X -->
							h#.modal-title
							modal-header content
						div.modal-body
							modal-body content
						div.modal-footer
							modal-footer content

			link to trigger modal (a|button)
				a[data-toggle="modal"][data-target="#modal1"]

	carousel: slide show with timed duration, loops forever, can manually override

		div#slideshow1.carousel.slide[data-ride="carousel"][data-interval="3000"]

			ol.carousel-indicators <!--this shows white circles as the controls-->
				li.active[data-target="#slideshow1"][data-slide-to="0"]
				li[data-target="#slideshow1"][data-slide-to="1"] <!--repeat this 'for' each slide

			div.carousel-inner[role="listbox"]
				div.item.active <!--active indicates this is the first slide-->
					img.img-responsive[src="link"][alt="your alt text"]
					div.carousel-caption
						your html code 'for' the caption
				div.item <!--repeat this section 'for' each slide in the carousel-->
					img.img-responsive[src="link"][alt="your alt text"]
					div.carousel-caption
						your html code 'for' the caption

			a.left.carousel-control[href="#slideshow1"][role="button"][data-slide="prev"]
				span.glyphicon.glyphicon-chevron-left[aria-hidden="true"]
				span.sr-only <!--this shows the text 'Previous' 'for' screen readers, change to whatever-->
					Previous
			a.right.carousel-control[href="#slideshow1"][role="button"][data-slide="next"]
				span.glyphicon.glyphicon-chevron-right[aria-hidden="true"]
				span.sr-only <!--this shows the text 'Next' 'for' screen readers, change to whatever-->
					Next


			possible CSS
				.carousel { background-color}
				.carousel .item {height}
				.carousel .item img {position:absolute;top:0;left:0;height:should match .carousel .item;}
					this forces the image to be the same height as the carousel
					puts in the top left corner of the carousel

			control carousel via jquery
			 $("#pageslideshow.carousel").carousel({interval:100;}) //set the interval to 100 milliseconds

			 other commands
			 	.carousel('blah')
			 		cycle :cycle items left to right
			 		pause :stops the carousel
			 		#	  :enter a number, e.g. 2, to show that slide
			 		prev  :go to the previous item
			 		next  :go to the next item

			 carousel events
			 	slide.bs.carousel : fires when the slide transition begins
			 	slid.bs.carousel : fires when the carousel has completed its transition

			 	how to use:
			 		$("#myCarousel").on('slide.bs.carousel', function(){ do this stuff;})

			notes
				default delay between slides = 3 seconds
				mouse hover pauses transition

bootstrap-social
	bootstrap-social makes use of font-awesome fonts that represent icons 'for' social networks
	bootstrap-social turns font-awesome icons into buttons
	<a class="btn btn-social-icon btn-facebook" href="http://some.facebook.page"><i class="fa fa-facebook"></i></a>
		always surround the icon-font in an a tag, and set the bootstrap social classes as needed

font awesome: similar to glyphicons
	download
	include the bootstrap social & font awesome css into the head of the page

	<i class="fa fa-phone"></i>
		always include font awsome icon-fonts in i tags

other notes
	phone sizes in CSS pixels: http://mydevice.io/devices/
		minimum width: 320
		maximum width: 504

		minimum height: 346
		maximum height: 695
