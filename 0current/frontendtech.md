# TLDR 
  - catch all for
    - accessibility
    - responsive design
    - cross-browser compatibility
    - performance
    - web standards
    - consise JS snippets


# links 
  - [comparison of accessibility tools](https://medium.com/pulsar/which-accessibility-testing-tool-should-you-use-e5990e6ef0a)
  - [web standards def = links](https://developer.mozilla.org/en-US/docs/Glossary/Web_standards)
  - [eloquent javascript 3rd 2018](https://eloquentjavascript.net/)


## specs and stuff
  - accessibility
    - [WCAG 2.1: web content accessibility guidelines](https://www.w3.org/TR/WCAG21/)
    - [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
    - [mdn learn accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
    - [ARIA: accessible rich internet applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
    - [WAI: web accessibility initiative](https://www.w3.org/WAI/)
    - [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/s)
  
  - javascript 
    - [ecmascript 2020 standard](https://262.ecma-international.org/11.0/)
    - [mdn javascript reference](https://developer.mozilla.org/en-US/docs/Web/gJavaScript/Reference)
  
  - layouts
    - [css layout introduction](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)
    - [responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
    - [layout comprehension assessment](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)


## accessibility tools
  - [lighthouse](https://github.com/GoogleChrome/lighthouse)
  - [webaim: web accessibhttps://developer.mozilla.org/en-US/docs/Learn/Accessibilityility in mind](https://wave.webaim.org/extension/)
    - #!@#!! their CLI .25 fee
    - but the extensions are an absolute necessity
  - [axe: accessibility testing engine](https://github.com/dequelabs/axe-core)

# terms 
  - web standards: rules established by international standards bodies and defining how the web works
    - IETF: internet engineering taskforce: govern setup and use of URIs, HTTP, and MIME
    - W3C: specifications for markup language (HTML), style definitions (CSS), DOM, and accessibility
    - IANA: internet assigned numbers authority: naame and number registries
    - Ecma Intl: scripting standards, prominently for javascript
    - ISO: international organization for standardization; standards governing a diverse array of aspects, e.g. character encodings, website management and UI design


# accessibility
  - ARIA: accessible rich internet applications; set of attributes that define ways to make web content and applications more accessible to people with disabilities
  - WCAG 2: Web Content Accessibility Guidelines
    - defines how to make web content more accessible to people with disabilities
      - visual:
      - auditory:
      - physical:
      - speech: 
      - cognitive:
      - language:
      - learning:
      - neurological:
      - 
  


# responsive web design RWD
  - responsive design 
    - describes an approach to webdesign utilizing a set of best practices
      - create a layout that can respond to the device being used: in terms of dimensions and resolution and capabilities

## key techniques
  - responsive images: fluid images
    - setting hte max-width property to 100%; images will scale down smaller if their containers width is smaller, but never grow larger than 100% of the images intrinsic width even when their contianer is larger 
    - thus images maintain their dimensions as the height scales with the width, which scales smaller but never larger
    - downsides
      - users may download an image thats too big for their device (i.e. image scales down so why not just send a super huge 10000px image)
      - relative difficulty in adjusting aspect ratio of images 
        - (e.g. widthxheight likely should be different if mobile vs desktop)
        - i.e. square image for mobile and landscape for desktop


  - responsive images: `picture` + `img` elements
    - utilizes `srcset` and `sizes` to provide sets of images targeted at various screen sizes and the browser is responsible for choosing which image the user will download
    - overcomes the downsides of using fluid images
  
  - media queries
    - tests browser resolution, and viewport dimensions for targeting css rules
    - breakpoints: the point at which a media query takes affect is known as the breakpoint
    - mobile first design: create a single-column layou for narrow devices (e.g. mobile phones) then expand to more complex layouts for larger devices
    - responsive typography: changing the font sizes within media queries to reflect the screen real estate


  - flexible grids: 
    - the layout scales up to a point, then media queries are introduced to readjust the base design for to scale further, possibly in a different dimension where the breakpoint takes affect
    - e.g. a single column may scale up to a point, then become a double column which scales on an additional axis
  
  - floats: 
    - flexible floated layouts gives each element a percentage of total width, and ensuring the totaly width of all floats never exceeds 100%
    - e.g. convert a pixel based layout to floats: target (element width) / context (total width) = result (element width in %)
    - considered legacy, I consider it aged like wine
  
  - positioning techniques 
    - static positioning 
    - relative positioning 
    - absolute positioning 
    - fixed positioning 
    - sticky positioning

  - multicol
    - column-count: specify a `column-count` indicating the # of columns the content will be split into and the browser is responsible for sizing these based on screen width
    - column-width: specify a minimum width for each column and the browser will create as many columns that comfortably fit into the screen width and share any extra space between all columns

  - flexbox 
    -  flex items shrink & grow and distribute space between siblings according to the space in their container 
    -  `flex-grow` how siblings shrink and distribute space
    -  `flex-grow` how siblings grow and distirbute space



  - css grid
    - specify the distribution of space across grid tracks
    - - utilizing `display: grid` `grid-template-columns` and `grid-template-rows
    - `fr` unit specifying how to distribute space and the number of tracks in the grid


  - css tables 
    - utilizing `display: table`, `table-row` and `table-cell`


  - viewport meta tag 
    - instructs browsers how to set the browser width in relaton to the viewport width
      - `<meta name="viewport" content="width=device-width,initial-scale=1">`
        - set browser width to device width, and scale 100%
    - `initial-scale` initial zoom of te page, e.g. `1`
    - `height` speicific height for the viewport
    - `minimum-scale` minimum zoom level
    - `maximum-scale` maximum zoom level
    - `user-scalable` prevent zooming if set to `no`
  
  - repsonsive units 
    - `vw`: viewpoint unit; `1vw` is equal to 1% of the viewport width
      - useful in responsive typography when paired with a fixed with unit (e.g. em/rem)
        - this is the only way to allow the text to be zoomable (as `vw` disables text responding to zoom)
        - i.e. `font-size: calc(1.5rem + 3vw)`