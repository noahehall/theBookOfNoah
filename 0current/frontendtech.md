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
  - [WCA 2.1G: web content accessibility guidelines](https://www.w3.org/TR/WCAG21/)
  - [responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - [mdn learn accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
  - [ARIA: accessible rich internet applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  - [WAI: web accessibility initiative](https://www.w3.org/WAI/)
  - [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/s)
  - [ecmascript 2020 standard](https://262.ecma-international.org/11.0/)
  - [mdn javascript reference](https://developer.mozilla.org/en-US/docs/Web/gJavaScript/Reference)


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
  - ARIA: accessible rich internet applications; set of attributes that define ways to make web content and applications more accessible to people with disabilities
  - responsive web design: RWD; set of practices that allow web pages to alter their layout and appearance to suit different screen widths, resolutions, etc


# responsive web design RWD
  - responsive design 
    - describes an approach to webdesign utilizing a set of best practices
      - create a layout that can respond to the device being used: in terms of dimensions and resolution and capabilities

## key techniques
  - fluid images: setting hte max-width property to 100%; images will scale down smaller if their containers width is smaller, but never grow larger than 100% of the images intrinsic width even when their contianer is larger 
    - thus images maintain their dimensions as the height scales with the width, which scales smaller but never larger
  
  - media queries
    - tests browser resolution, and viewport dimensions for targeting css rules
    - breakpoints: the point at which a media query takes affect is known as the breakpoint
    - mobile first design: create a single-column layou for narrow devices (e.g. mobile phones) then expand to more complex layouts for larger devices

  - flexible grids: the layout scales up to a point, then media queries are introduced to readjust the base design for to scale further, possibly in a different dimension where the breakpoint takes affect
    - e.g. a single column may scale up to a point, then become a double column which scales on an additional axis
  
  - floats: flexible floated layouts gives each element a percentage of total width, and ensuring the totaly width of all floats never exceeds 100%
    - e.g. convert a pixel based layout to floats: target (element width) / context (total width) = result (element width in %)
    - 
