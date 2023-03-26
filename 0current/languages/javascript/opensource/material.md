# material UI

- React UI components that implements Googles Material Design
-

## links

### docs

- [overview](https://mui.com/material-ui/getting-started/overview/)
- [getting started](https://mui.com/material-ui/getting-started/installation/)
- [faq](https://mui.com/material-ui/getting-started/faq/)
- [material design > material UI components](https://mui.com/material-ui/getting-started/supported-components/)
- theme
  - [intro](https://mui.com/material-ui/customization/theming/)
- components
  - [CssBaseline](https://mui.com/material-ui/react-css-baseline/)

### ecosystem

- [emotion](https://emotion.sh/docs/introduction)
- [fontsource](https://fontsource.org/docs/introduction)
- [material + google web fonts](https://fonts.google.com/icons?icon.set=Material+Icons)

## basics

### packages

- material ui: likely what you want; optimized to work with emotion / styled-components
- MUI Base: material UI without the styles
  - mui/system: think this is base?
- MUI/lab: forgot what this is, but we use it in nirv
  - this provides one of the layouts
- mui/icons-material: ...

## Material UI

- by default it uses emotion, which is preferred and why we switch to material in the first place
  - alternatively you can use the oldschool styled-components
- suports nodejs >= 12.0 for SSR
- requires react >= 17
- requires typesript >= 3.5

### basic setup

- fall through the getting started docs to setup material, emotion, fonts and icons
- be sure to setup the Theme provider in the beginning, its a hassle to do it after a project has started
- FYI
  - theres extra steps needed to use react without having to `import react` all over the place
  - dont use a CDN with material fonts: it requires the client to download the entire library

### theme

- ..

### core components

#### CssBaseline

- materials normalize.css

## material icons

- ...

## material fonts
