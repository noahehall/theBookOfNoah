# MUI

- material ui

## components

- generally all components accept an sx prop which can be used to apply fns/css declarations

### css

#### palette

- [palette](https://mui.com/system/palette/)
- color utilities that include support for styling links with hover states

#### @mui/system

- [mui system](https://mui.com/system/properties/)
- system properties that map to css declarations
- generally applied as props to the box component

#### box

- a wrapper component for most of the CSS utility needs
  - from the docs it appears everything should be wrapped in a Box
- packages all the style functions that are exposed in @mui/system
  - use the sx prop, which can also set arbitrary css

#### cssbaseline

- [cssbaseline](https://mui.com/material-ui/react-css-baseline/)
- MUI's version of normalize.css
- can be scoped to the page, or to children components

### layout

#### container

- centers content horizontally

#### grid2

- 2 dimensional responsive layout grid adapts to screewn size and orientiation
- works best for a layout with a known number of columns
- FYI
  - even tho its called grid, it actually uses CSS Flexbox
  - the grid itself is a flex item, uses the container prop to add a flex container that similates a grid layout for its children
  - item widths are set in percentages
  - uses negative margins & padding to create gaps between children
  - doesnt support row spanning, recommends using css grid directly
  - doesnt support auto-placement of children, so if theres no room for a child, its moved to the next row, recommends using css grid directly

#### stack

- one dimensional layout of immediate children along vertical/horizontal axis with optional spacing and/ dividers between each

### surfaces

#### app bar

- displays info & actions related to the current screen: branding, titles, navigation & actions
- can transform into a contextual action bar/navbar

### Forms

#### Text Field

- [text field](https://mui.com/material-ui/react-text-field)

### Content

#### List

- [list](https://mui.com/material-ui/react-list)

- list of text/images

#### Alert

- [alert](https://mui.com/material-ui/react-alert/)

#### Snackbar

- [snackbar](https://mui.com/material-ui/react-snackbar/#customization)

- its like a toast, use it with alerts
