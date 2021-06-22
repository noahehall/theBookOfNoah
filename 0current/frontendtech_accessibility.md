bookmark: `guideline 1.2 time-based media`
https://www.w3.org/TR/WCAG21/

bookmark: just started
https://www.w3.org/WAI/WCAG21/quickref/

next up
  check out the dope shit list in this doc


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
    
    - other 
      - [UAAG: user agent accessibility guidelines overview](https://www.w3.org/WAI/standards-guidelines/uaag/)
      - [ATAG: authoring tool accessibility guidelines overview](https://www.w3.org/WAI/standards-guidelines/atag/)
      - [mdn learn accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
      - [ARIA: accessible rich internet applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
      - [WAI: web accessibility initiative](https://www.w3.org/WAI/)
      - [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/s)
  

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
  
  - ARIA: accessible rich internet applications; set of attributes that define ways to make web content and applications more accessible to people with disabilities

## WCAG: quick reference 
	- link in `specs and stuff` for more information on this section

### principle 1: perceivable 
	- information and user interface components must be presentable to users in ways they can perceive
	
	1.1 text alternatives 
		- provide text alternatives for any non-text content
		- examples: large print, braille, speech, symbols, simpler language
		
		1.non-text content 
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
		1. info and relationships
		2. meaningful sequence
		3. sensory characteristics
		4. orientation
		5. identify input purpose
		6. identify purpose 

	1.4 distinguishable
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
  

