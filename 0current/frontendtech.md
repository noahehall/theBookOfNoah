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
