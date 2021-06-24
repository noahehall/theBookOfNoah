bookmark: `guideline 1.2 time-based media`
https://www.w3.org/TR/WCAG21/

bookmark: just started
https://www.w3.org/WAI/WCAG21/quickref/

bookmark: just tsarted, but continue on this before the other shit
section -> States and Properties
https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility

next up
  check out the dope shit list in this doc

# quick search 
	- quickly finding things, search for:
  	- *failures* for things **not** to do 
  	- *advisory techniques* best things to do 
  	- *sufficient techniques* where to start 

# links 
  - [comparison of accessibility tools](https://medium.com/pulsar/which-accessibility-testing-tool-should-you-use-e5990e6ef0a)
  - [microsoft silverlight](https://www.microsoft.com/silverlight/)


  - accessibility
    - WCAG
      - [WCAG 2.1: web content accessibility guidelines](https://www.w3.org/TR/WCAG21/)
      - [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
      - [components of web accessibility](https://www.w3.org/WAI/fundamentals/components/)
      - [WCAG: understanding conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance)
      - [WCAG: understanding techniques for WCAG success criteria](https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html)
      - [WCAG: techniques for success criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques)
      - [WCAG: understanding metadata](https://www.w3.org/WAI/WCAG21/Understanding/understanding-metadata)
      - [WCAG: understanding 2.2 ](https://www.w3.org/WAI/WCAG21/Understanding/)
      - dope shit
        - [WCAG: how to meet WCAG quick reference](https://www.w3.org/WAI/WCAG21/quickref/)
        - [WCAG: techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG21/Techniques/)
        - [WCAG: document relation, explains where to go for what?](https://www.w3.org/WAI/standards-guidelines/wcag/docs/)
        
    - aria
      - [how people use the web](https://www.w3.org/WAI/people-use-web/)
      - [ARIA: accessible rich internet applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
      - [WAI: web accessibility initiative](https://www.w3.org/WAI/)
      - [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/s)
      - [WAI-ARIA overview](https://www.w3.org/WAI/standards-guidelines/aria/)
      - [wai-aria accessibility feature support](https://caniuse.com/?search=aria)
      - [accessibility of wai-aria](https://alistapart.com/article/the-accessibility-of-wai-aria/)
      - [browser and assistive technolgy tests redux](https://www.tpgi.com/browser-assistive-technology-tests-redux/)
      
      - dope shit
        - [aria in html](https://www.tpgi.com/aria-in-html-there-goes-the-neighborhood/)
        - [wai-aria 1.3](https://w3c.github.io/aria/)
          - make sure you scroll down to mid-screen for the full list
        - [lullabot fundamentals](https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility)
        - [html5 & wai-aria](https://zufelt.ca/blog/are-you-confused-html5-and-wai-aria-yet)
        - [aria attribute support](https://a11ysupport.io/)
        - [html5 accessibility support](https://www.html5accessibility.com/)
        - [using aria](https://w3c.github.io/using-aria/)
          - make sure to click into each element screen
        - [html5 landmarks exposed](https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html)
        - [jaws aria role support](https://freedomscientific.gith>ub.io/VFO-standards-support/aria.html)
        - [web apps and aria FAQ](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
        - [power mapper wai-aria](https://www.powermapper.com/tests/screen-readers/aria/)
        - [w3c tools and techniques](https://www.w3.org/WAI/people-use-web/tools-techniques/)

    - other 
      - [mdn learn accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
      - [UAAG: user agent accessibility guidelines overview](https://www.w3.org/WAI/standards-guidelines/uaag/)
      - [ATAG: authoring tool accessibility guidelines overview](https://www.w3.org/WAI/standards-guidelines/atag/)
  

## accessibility tools
  - [lighthouse](https://github.com/GoogleChrome/lighthouse)
  - [webaim: web accessibhttps://developer.mozilla.org/en-US/docs/Learn/Accessibilityility in mind](https://wave.webaim.org/extension/)
    - #!@#!! their CLI .25 fee
    - but the extensions are an absolute necessity
  - [axe: accessibility testing engine](https://github.com/dequelabs/axe-core)


# accessibility
## big things popping
    - [apply name, role and value to all user interface components](https://www.w3.org/TR/WCAG21/#name-role-value)
    - always provide descriptive identifications of content that cannot be made accessible in a meaningful way
    - think: what purpose is this serving, and how do I serve this purpose in another form
      - i.e. what is the purpose of this user interface item: how is this purpose fulfilled for people who cant read/see/perceive colors/ hear/ etc.
    - questions to ask when crafting accessible content
      - what is the information component or user interface component
        - is it text-content or non-text content
      - what is its purpose
      - what is the situation
      - what are the alternative techniques for success in this situation


## terms 
	- user interface components:
	- information components:
  - mainstream user agents: e.g. common web browsers built for people without disabilities, or targeting broad and diverse audiences that usually include people without disabilities
    - provide important functionality to support assistive technologies
      - retrieving web content from program objects
      - parsing markup into identifiable bundles
  
  - [assistive technologies](https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies): 
    - target narrowly defined populations of users with specific disabilities
    - hardware/software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents
    - categories:
      - visual reading assistance:
        - target population: people with visual, perceptual and physical print disabilities 
        - purpose: 
          - change text font, size, sacing, color, synchronization with speech, etc
          - improve the visual readability of rendered text and images
        - examples: screen magnifiers
      - screen readers 
        - target population: people who are blind 
        - purpose: 
          - read textual information through syntesized speech or braille
          - examples:
      - text-to-speech software 
        - target population: people with cognitive, language and learning disabilities 
        - purpose:
          - convert text into synthetic speech 
        - examples:
      - speech recognition software 
        - target population: people with physical disabilities 
        - purpose: 
        - examples
      - alternative keyboards
        - target population: people with physical disabilities 
        - purpose 
          - simulate a normal keyboard
        - examples 
          - head pointers 
          - single switches
          - sip/puff/other special input devices 
      - alternative pointing devices 
        - target population: people with physical disabilities 
        - purpose:
          - simulate mouse pointing 
          - simulate button activations 
        - examples
    
    - features:
      - alternative presentations:
        - synthesized speech
        - magnified content
        - ...
      - alternative input methods 
        - voice
        - ...
      - additional navigation 
      - additional orientation mechanisms
      - content transformations
        - make tables more accessible
    
    - capabilities 
      - monitoring mainstream user agents API invocations (e.g. the HTML5 audio api) to provide alternatives
    - 
  - sensory characteristics: aspects of UI components, e.g. 
    - shape
    - color
    - size
    - visual location
    - orientation
    - sound
  
  


## ARIA
  - ARIA: accessible rich internet applications; set of attributes that define ways to make web content and applications more accessible to people with disabilities
    - web accessibility issues cannot be managed with native HTML, ARIA bridges the gap between HTML and assistive technologies

  - main concepts and brief examples
    - `roles`: used to define a typ eof user interface element, e.g. `role=ROLE_NAME`
      
      - `abstract roles`: utilized by user agents (e.g. browsers) and should not be used in code
        - give `roles` their meanings behind the scenes
      
      - `document structure roles`: arent normally interactive, but isntead provide descriptions for sections wihtin a page
        - e.g. `role='img|document|heading|list|listitem|toolbar'`
        - used to identify ontent while navigating a page
        - provides context of the context their viewing 
        - the most robust choice is to use `document structure roles` and `html5 semantic elements` together
      
      - `landmark roles`: for easier navigation, identify eachh section of content within a page
        - e.g. `role='banner|contentinfo|form|main|navigation|search'`
        - assistive technologies will announce the start and end of each landmark role set on a page and display list of these roles/regions (e.g. screen readers do this)
      
      - widget roles: add semantic meaning to elements and user interfaces
        - e.g. standalone widgets `role='alert|button|checkbox|link|menuitem|tab|tabpanel`
        - e.g. composite widgets `role='combobox|grid|listbox|menu|radiogroup|tablist`
        - widge roles are for elements users interact with to get things done
          - e.g. completing forms, open/closing tabs/panels, navigating a main/sidebar menu
    - states and properties
      - used together to suppor ARIA roles existing on a page
      - `states` change based on user interaction or state of UI components via JS event handlers
        - e.g. `checkbox[aria-checked|disabled]`
      - `properties` rarely changed once set
        - e.g. `div[class='fakeinput'][aria-labelledby|describedby]`
      - common states and props
        - `aria-describedby|haspopup|hidden|label|labeledby`
      
      - drag-and-drop attributes
        - conveyes information to assistive technologies about drag-and-drop elements, including draggable elmenets and their drop targets
        - e.g. `aria-dropeffect|grabbed`
      
      - live region attributes
        - indicates changes in content for a users assistive technology, 
        - these elements dont need to have focus and can include infomration on how the user should proceed
          - e.g. whether a message will be read aloud with the flow of content (`aria-alive='polite'`) 
          - e.g. wheter a message will inerrupt the flow of ocntent and be read aloud immediately (`aria-live='assertive'`)
          - e.g. `aria-atomic|busy|live`
      
      - relationship attributes
        - add relationships between elements that cant be determined otherwise
        - for understanding how informatin is related when nevaginat the page and gathering additional data from various elements like forms, menus, tabs/panels
        - e.g. `aria-describedby|labeledby`
        - 
      
      - widget attributes
        - for common UI elements that receive input from users while processing those actions and information
        - for avoiding confusion and easily utilizing interactive UI elements like forms, overlays/modals/popups
        - e.g. `aria-autocomplete|checked|disabled|label|required`
  

  - rules of aria
    - rule 1
      - dont use aria if there a native HTML element already provides the accessibility support
        - [check the html element here](https://www.html5accessibility.com/)
      - exceptions 
        - the design doenst allow for a specific native element because of limitations on styling
        - the desired accessibility feature isnt uspported by native html
          - [check the accessibility feature status here](https://www.tpgi.com/aria-in-html-there-goes-the-neighborhood/#html5na)
    
    - rule 2
       - do not change the native HTML semantics unless you absolutely have to 
          - ARIA does not get added to the DOM immediately
            - so first get the DOM semantically correct, then add ARIA
            - e.g. instead of `span.role=button` just use a friggin `button`
    
    - rule 3
      - all interactive ARIA controls must be keyboard accessible 
        - add `tabindex='0'` to force them into the logical tab order and able to receive keyboard focus

    - rule 4
      - never add `role='presentation'` or `aria-hidden='true'` to a focusable element
        - this will cause them to lose focasibility and be removed from the logical taborder
    
    - rule 5
      - give all interactive elements an accessible name
        - i.e. apply an label element or `aria-label` attribute to all interactive elements (e.g. inputs)  
    
    - common aria use-cases 
      
      - descriptive labels
        - whenever you need to provide additional context to HTML elements like buttons or links
          - `aria-label='your extended description'`
      
      - alerts
        - inform assistive technologies of important events in response to user interactions or application life cycles by adding aria `live regions` and `alert messages` to HTML elements
          - `<div class='alert-message' role='alert'>something happened!</div>` 


## WCAG: quick reference 
	- link in `specs and stuff` for more information on this section

### principle 1: perceivable 
	- information and user interface components must be presentable to users in ways they can perceive
	
	1.1 text alternatives 
		- provide text alternatives for any non-text content
		- examples: large print, braille, speech, symbols, simpler language
		
		1.non-text content (LEVEL A)
			- failures
  			- using CSS to include images that convey important information
  			- text alternatives that do not include information that is conveyed by color differences in the image
  			- not updating text alternatives when changes to non-text content occur
  			- using text alternatives that are **not** alternatives
    			- examples: filenames, placeholder texts
  			- not marking up decorative images in HTML in a way that permits assistive technology to ignore them 
  			- providing a text alternative that is **not null** for images that should be ignored by assistive technology 
    			- examples: `alt='spacer'` `alt='image'`
  			- omitting the alt attribute or text alternative on `img`, `area`, and `input.type=image` elements
  			- providing long descriptions for non-text content that does not serve the same purpose/does not present the same information
  			- using text look-alikes to represent text without providing a text alternative
  			- using ASCII art without providing a text alternative
			
			- advisory techniques
  			- using `noembed` with `embed`
  			- using css margin and padding rules instead of spacer images for layout design
  			- providing user instructions with `AutomationProperties.HelpText` in silverlight
			
			- sufficient techniques
  			- situation A: if a short description can serve the same purpose and present the same information as the non-text content
    			- TODO: alternative techniques
  			
				- situation B: i.e. not situation A; a short description **can not** serve the same purpose *or* present the same information as te non-text content
    			- examples: charts, diagrams
    			- TODO: alternative techniques
  			
				- situation C: non-text content is a control/accepts user input 
    			- TODO: alternative techniques
  			
				- situation D: if non-text content is time-based media, a test/exercise that would be invalid if present in text, or primarily intended to create a specific sensory experience
    			- examples: live video-only and live audio-only
    			- TODO: alternative techniques

				- situation E: if non-text content is a captcha:
  				- TODO: technique

				- situation F: if non-text content should be ignored by assistive technology 
	
	1.2 time-based media 
		- provide alternatives for time-based media
		
		1. audio-only and video-only (prerecorded)
		2. captions (prerecorded)
		3. audio description or media laternative (prerecorded)
		4. captions (live)
		5. audio description (prerecorded)
		6. sign language (prerecorded)
		7. extended audio description (prerecorded)
		8. media laternative (prerecorded)
		9. audio-only (live) 
	
	1.3 adaptable
		- create content that can be presented in different ways without losing information/structure
		- examples: simpler layout

		1. info and relationships (LEVEL A)
   		- information, structure, and relationships conveyed through presentation can be programmatically determined/are available in text
   		- failures
     		- using changes in text presentation to convey information without using the appropriate markup or text
     		- using white space characters to create multiple columns in plain text content
     		- using white space characters to format tables in plain text content
     		- emulating links
     		- using structural markup in a way that does not represent relationships in the content
     		- using `th` elements, layout tables
     		- using `pre` element to markup tabular information
     		- inserting non-decorative content by using `:before`or `:after` elements or the `content` property in css
     		- incorrectly associating table headers and content via the `header` and `id` attributes
     		- not correctly marking up table headers
     		- use of `role` presentation on content which conveys semantic information
     		
   		- advisory techniques
     		- using css to control visual presentation of text
     		- positioning labels to maximize predictability of relationships
     		- using the `aria-describedby` property to provide a descriptive label for user interface controls
     		- identifying a required field with the aria-required property
     		- organizing a page using headings
   		
       - sufficient techniques
         - situation A: the technology provides a semantic structure to make information and relatinships conveyed through resentation programmatically determinable
           - TODO: alternative techniques
         
         - situation B: the technology in use does not provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable 
           - TODO: alternative techniques
         
		2. meaningful sequence (LEVEL A)
   		- when the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined
   		
      - failures
        - using white space characters to format tables in plain text content
        - using white space characters to create multiple columns in plain text content
        - using white space chracters to control spacing within a word
        - using an HTML layout table that does not make sense when linearized 
        - changing the meaning of content by positioning information with CSS

      - sufficient techniques 
        - ordering the content in a meaningful sequence
          - using a unicode `right-to-left` mark (RLM) or `left-to-right` mark (LRM) to mix text direction inline
          - using the `dir attribute on an inline element to resolve problems with nested directional runs
          - positioning context based on structural markup
          - using css `letter-spacing` to control spacing within a word
        - making the DOM order match the visual order
        - using the tabindex property to specify a logical reading order and a logical tab order in flash
          - fk flash 
        - ensuring correct tab and reading order in PDF documents
        - using the silverligh defualt tab seuqence and altering tab sequences with properties

		3. sensory characteristics (LEVEL A)
      - instructions provided for understanding and operating content do not rely solely on sensory characteristics of components (see terms)
      
      - failures
        - identifying content only by its shape or location
        - using a graphical symbol alone to convey information

      - sufficient techniques 
        - providing textual identification of items that otherwise rely only on sensory infomration to be understood


		4. orientation (LEVEL AA)
      - content does not restrict its view and operation to a single display orientation, e.g. portrait/landscape, unless a specific display orientation is essential
      
      - failures 
        - locking the orientation to landscape/portrait view
      
      - sufficient techniques 
        - using CSS to set the orientation to allow both landscape and portrait
        - use of show/hide controls to allow access to content in different orientations  
   		
    5. identify Input Purpose (LEVEL AA)
      - the purpose of each input field collecting information about the user can be programmatically determined when: 
        - input field serves a purpose identified in the `input purposes for user interface components setion`
        - the content is implemented using technologies with support for identifying the expected meaning for form input data 
    
		5. identify purpose (LEVEL AAA)
      - in content implemented using markup languages, the purpose of user interface components, icons and regions can be prorammatically determined
      
      - advisory techniques
        - enable user agents to find the version of the content that best fits their needs
        - using semantics to identify important features `coga-simplification=simplest`
        - use of `aria-invalid` and `aria-required`

      - sufficient techniques
        - using aria landmarks to identify regions of a page
        - using microdata to markup user interface components (future link)
        

	1.4 distinguishable
    - make it easier for user sto see and hear content including separating foreground from back
		1. use of color
		2. audio control
		3. contrast (minimum)
		4. resize text
		5. images of text
		6. contrast (enhanced)
		7. low or no background audio
		8. visual presentation
		9. images of text (no exception)
		10. reflow
		11. non-text contrast
		12. text spacing
		13. content on hover/focus


### principle 2: operable
	2.1 keyboard accessible
		1. keyboard
		2. no keyboard trap
		3. keyboard (no exception)
		4. character key shortcuts

	2.2 enough time 
		1. timing adjustable
		2. pause, stop, hide
		3. no timing
		4. interruptions
		5. re-authenticating
		6. timeouts

	2.3 seizures and physical reactions
		1. three flashes or below threshold
		2. three flashes
		3. animation from interactions

	2.4 navigable
		1. bypass blocks
		2. page titled
		3. focus order
		4. link purpose (in context)
		5. multiple ways
		6. headings and labels
		7. focus visible
		8. location
		9. link purpose (link only)
		10. section headings

	2.5 input modalities 
		1. pointer gestures
		2. pointer cancellation
		3. label in name
		4. motion actuation
		5. target size
		6. concurrent input mechanisms


### principle 3: understandable 
	3.1 readable
		1. language of page
		2. language of parts
		3. unusual words
		4. abbreviations
		5. reading level
		6. pronunciation

	3.2 predictable
		1. on focus
		2. on input
		3. consistent navigation
		4. consistent identification
		5. change on request

	3.3 input assitance
		1. error identification
		2. labels or instructions
		3. error suggestion
		4. error prevention (legal, financial, data)
		5. help
		6. error prevention (all)


### principle 4: robust 
	4.1 compatible
		1. parsing
		2. name, role, value
		3. status messages


## WCAG: in depth
  - WCAG: Web Content Accessibility Guidelines
    - defines how to make web content more accessible to people with disabilities
      - visual:
      - auditory:
      - physical:
      - speech: 
      - cognitive:
      - language:
      - learning:
      - neurological:
    
    
    - WCAG guidance dimensions 
      1. principles: 4 principles provide the foundation for web accessibility 
        - perceivable: information and user interface components must be presentable to users in ways they can perceive
          - text alternatives: for any non-text content to be perceivable by users in other forms
            
            - common (sensory perception) forms:
              - print
              - braille
              - speech
              - symbols
              - simpler language
            
            - content types (potentially) not available in other forms and how to adapt them
              - controls/input: [must have a name attribute to describe its purpose](https://www.w3.org/TR/WCAG21/#dfn-name)
              - [time-based media](https://www.w3.org/TR/WCAG21/#time-based-media): at least provide descriptive identification of the content
              - test or exercise: if unable to provide a text alternative, at least provide a descriptive identificatoin of the non-text content
              - [sensory experiences](https://www.w3.org/TR/WCAG21/#dfn-specific-sensory-experience): text alternatives provide descriptive identification of the non-text content
              - CAPTCHA: if the purpose it so confirm that content is being accessed by a person rather than a computer (i.e. a normal fkn captcha),  text alternatives should identify and describe the non-text content are provided, and alternative forms of captcha using different types of sensory perception are provided to accomodate different disabilities
              - Decoration, formatting, invisible: if non-text content is pure decoration, used only for visual formatting/not presented t users. then it is implemented in a way that it can be ignored by assistive technology
        
        - operable:
        
        - understandable:
        
        - robust:
      
      2. guidelines: 13 guidelines provide the basic goals in order to make content more accessible to users with different disabilities 
      
      3. success criteria: for each of the 13 guidelines, exist *testable success criteria* for *requirements* and *conformance* **testing** 
         - design specification
         - purchasing 
         - regulation
         - contractual agreements 
         - conformance levels: rough thresholds to assess how well web content meet the success levels
           - A: lowest success 
           - AA: medium success
           - AAA: the gold standard!
      
      4. sufficient and advisory techniques: for each *guideline* and *success criteria* a number of techniques are documented.
         - techniques sufficient for *meeting* success crtieria
         - techniques sufficient for *meeting* and **go beyond** (these are *advisory techniques*)
    
    - WCAG versions 
      - each version *builds on* and *meets* the guidelines set by the previous version
      - thus 2.2 meets and expands on 2.1, which does the same for 2.0, etc
  
