# TLDR

- storybook cheatsheet
  
## todo

- [args](https://storybook.js.org/docs/react/writing-stories/args)  
  - component args
- [argtypes](https://storybook.js.org/docs/react/api/argtypes)
- [toolbars and globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals)
- [building pages with storybook](https://storybook.js.org/docs/react/workflows/build-pages-with-storybook)
- [docblocks](https://storybook.js.org/docs/react/writing-docs/doc-blocks#source)
- [actions](https://storybook.js.org/docs/react/essentials/actions)
- [component story format](https://storybook.js.org/docs/react/api/csf)
- [how to document components](https://storybook.js.org/docs/react/writing-docs/introduction)
- [configuration](https://storybook.js.org/docs/react/configure/overview)
- [with react](https://github.com/storybookjs/storybook/blob/master/app/react/README.md)

## alternatives

- [docz](https://www.docz.site/)
- [react-cosmos](https://reactcosmos.org/)
  
## links

- [install](https://storybook.js.org/docs/react/get-started/install)
- [tuts](https://storybook.js.org/tutorials/)
- [with react](https://github.com/storybookjs/storybook/blob/master/app/react/README.md)
- [writing args](https://storybook.js.org/docs/react/writing-stories/args)
- [testing with storybook](https://storybook.js.org/docs/react/workflows/testing-with-storybook)
- [toolbar and globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals)
- [addons](https://storybook.js.org/docs/react/configure/storybook-addons)
  - [actions addon](https://storybook.js.org/docs/react/essentials/actions)
  - 
- [configuration](https://storybook.js.org/docs/react/configure/overview)
  - usually in `root/.storybook/main.js`
  - always check this to see whats available
  - see story decorator & parameter links
- [configure: babel](https://storybook.js.org/docs/react/configure/babel)
- [story decorator](https://storybook.js.org/docs/react/writing-stories/decorators)
  - must read when components in stories cant be isolated, but need other components
- [story parameters](https://storybook.js.org/docs/react/writing-stories/parameters)
- [how to write stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [how to document components](https://storybook.js.org/docs/react/writing-docs/introduction)
- [component story format](https://storybook.js.org/docs/react/api/csf)
- 

## reading

- A component’s stories are defined in a story file that lives alongside the component file. 
  - A *.stories.js file defines all the stories for a component. 
  - Each story has a corresponding sidebar item. 
  - When you click on a story it renders in the Canvas, an isolated preview iframe.
- The toolbar contains tools that allow you to adjust how the story renders 
  - Canvas tab: top of screen
    - zooming button:
    - background button:
    - viewport button:
  - docs tab: top of screen
    - auto-generated documentation about components (inferred from the source code)
  - controls tab: when you use templates + args (bottom of screen)
  - actions tab: toolbar addons (bottom of screen)
- parameters: set of static, named metadat about a story
  - typically used to control the behavior of storybook features/addons
  - inheritance: story > component > global
    - enables you to override a single specific sub-parameters on a per-story basis
- decorators: wrap a story in extra rendering/markup/context mocking
  - inheritance: story > component > global
    - enables overriding global decs at the component/story level
  - used to provide data in mocked way without having to refactor your components
- args: the arguments the story component (fn) requires to render
  - available in decorators/directly in the story implementation
  - enables live editing of components
    - the an arg value changes, the component re-renders (e.g. when editing in the UI)
- argTypes: customize & fine-tune story args
- globals: storybook-wide globals, 
  - e.g. toolbar features allow you to change these values using storybooks UI
- hooks: storybook's API hooks (e.g. useArgs)
- viewMode: storybook's current active window (e.g. canvas, docs)

# copypasta

- on the cli

```sh
  # Starts Storybook in development mode
  npm run storybook

```

- in react

```js
  // .storybook/preview.js
  export const parameters = {
    // for all stories
  }

  export const decorators = [
    // for all stories
    (story, context) => ( // contexg === { args, argTypes, globals, hooks, parameters, viewMode }
      <div id='story-wraper'> <Story /></div>
    ),
    // ...
  ]


  // a button story
    import React from 'react';
    import { Button } from './Button';

    // where the story goes in the left sidebar
    // describes the component
    // sets defaults for all stories about the component
    export default {
      component: Button,
      // sidebar/group
      title: 'Components/Button',
      // wrap a component in arbitrary markup when rendering a story
      decorators: [
        (Story) => (
          <div style={{ margin: '3em' }}>
            <Story />
          </div>
        ),
      ],
      // static metadata for stories.
      // provide configuration to various addons at the level of a story or group of stories.
      parameters: {
        // for the backgrounds addon
        backgrounds: {
          values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
            { name: 'blue', value: '#00f' },
          ],
        },
      },
    }

    // each named export below is a different way to describe the stories that belong to the component config (the default export)


    //👇 We create a “template” of how args map to rendering
    // ^ Buttons callbacks are logged into the Actions tab. Click to try it.
    // ^ Buttons arguments are dynamically editable in the Controls tab. Adjust the controls
    // ^ renders a `controls` section for users to preview props
    const Template = (args) => <Button {...args} />;
    //👇 Each story then reuses that template
    // be a professional, and use this

    // each story can use this template, and override if necessary
    // makes a copy of the function which reduces code duplication. 
    // Similarly,...Primary.args makes a copy of the data, reducing data duplication.
    export const Primary = Template.bind({});

    Primary.decorators = [
      // provide a decorator just for stories based on Primary
      //...
    ]
    
    //👇 Each story then reuses that template
    export const Primary = Template.bind({});
    Primary.args = { background: '#ff0', label: 'Button' };

    export const Secondary = Template.bind({});
    Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

    export const Tertiary = Template.bind({});
    Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };


    // without template args (only use this as last resort)
    export const Primary = () => <Button primary>Button</Button>;

    // override the story name for clarity
    Primary.storyName = 'I am the primary';


    // import args to reuse when writing stories for other components.
    // This pattern allows you to reuse your data definitions up and down your component hierarchy, making your stories more maintainable.
    //👇 Imports the Button stories
    import * as ButtonStories from './Button.stories';
    export const Pair = Template.bind({});
    // reuse the button stories in the Pair stories
    Pair.args = {
      buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
      orientation: 'horizontal',
    };

    // reuse stories from the child ListItem in your List component. 
    // easier to maintain because you don’t have to keep the identical story definitions up to date in multiple places.
    //👇 We're importing the necessary stories from ListItem
    import { Selected, Unselected } from './ListItem.stories';
    // use other stories in this story
    export const ManyItems = (args) => (
      <List {...args}>
        <Selected {...Selected.args} />
        <Unselected {...Unselected.args} />
        <Unselected {...Unselected.args} />
      </List>
    );
```