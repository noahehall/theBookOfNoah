# TLDR
  - single file for distinct packages
  - any differences will be stated

## TODO
  - skipped `emotion/react` and `emotion/styled` as it isnt required at the moment


# links
  - styled-components
    - [docs](https://www.styled-components.com/docs/basics#motivation)
    - [styled components babel plugin](https://www.styled-components.com/docs/tooling#babel-plugin)
    - [some blog post](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)
    - [with react hooks blog post](https://medium.com/@kamish1/getting-started-with-styled-component-and-react-hook-ba851bbdeae3)
  
  - emotion
    - [emotion](https://emotion.sh/docs/introduction)
    - [emotion/css agnostic docs](https://emotion.sh/docs/@emotion/css)
    - [emotion/react package](https://www.npmjs.com/package/@emotion/react)
    - [emotion/react css prop docs](https://emotion.sh/docs/css-prop)
    - [emotion/styled package](https://www.npmjs.com/package/@emotion/styled)
    - [emotion/styled docs](https://emotion.sh/docs/styled)
    - [emotion style composition](https://emotion.sh/docs/composition)
    - [emotion nested selectors](https://emotion.sh/docs/nested)
    - [emotion media queries](https://emotion.sh/docs/media-queries)

# react-emotion
  - inspired by `glam`, `glamor` `styled-components` and `glamorous`
  - 
## basics
  - has three packages supporting 2 modes
    - framework agnostic `npm i @emotion/css`
      - requires no setup, babel plugin or other config changes
        - unless you need to support SSR
      - has support for:
        - auto vendor-prefixing
        - nested selectors
        - media queries
      - use `css` fn to generate class names
      - use `cx` to compose class names
    - react specific `npm i @emotion/react`
      - for react with a build configurable build environemnt
      - `css` prop support
        - similar to `style` prop, but has support for
          - auto vendor prefixing
          - nested selectors
          - media queries
          - accepts a fn that can modify the current theme and provides access to common & customizable values
          - reduces boilerplate when composing components and styled with emotion
      - SSR with zero configuration
      - theming works out of the box
      - esling plugins available to ensure proper patters and configurations
    - react specific with `style syntax` requires an additional package `npm i @emotion/styled @emotion/react`

## examples
  - skipped
    - emotion/css
      - keyframes
      - injectGlobal
      - createEmotion
  ```js
    // importing
      // framework agnostic
      import { css, cx } from '@emotion/css';
      // emotion + react
      import { css, jsx } from '@emotion/react';
      // emotion + react + styled API format
      import styled from '@emotion/styled' ;

    // apply class to a DOM node
      const app = document.getElementById('root')
      const myStyle = css`
        color: rebeccapurple;
      `
      app.classList.add(myStyle)
  ```
  ```js
    // css prop examples
    // remember css fn returns a classname that you add to a component

    // css string interpolation
      const color = 'white'
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      />

    // css object style 
    // more powerful than string templates
      // basic with some variable
      const color = 'darkgreen'
      <div
        className={css({
          backgroundColor: 'hotpink',
          '&:hover': {
            color
          }
        })}
      />

    // array of objects
    // applied top -> bottom (takes precedence)
      // with conditional style
      <div
        className={css([
          {
            backgroundColor: 'hotpink',
            '&:hover': {
              color
            }
          },
          isDanger && { // wont be included if falsy
            color: 'red'
          }
        ])}
      />
  ```
  ```js
    // cx examples
    // emotions version of the classnames library
    // detects emotion generated class names
    // + ensuring styles are overwritten in the correct order
    // + styles are applied from left to right
    // + subsequent styles overwrite property values of previous styles
      // basic
      const cls1 = css`
        font-size: 20px;
        background: green;
      `
      const cls2 = css`
        font-size: 20px;
        background: blue;
      `

      <div className={cx(cls1, cls2)} />
      // conditional class names with object syntax
      // ^ again object syntax is more powerful, just use it
      const foo = true
      const bar = false
      <div
        className={cx(
          { [cls1]: foo },
          { [cls2]: bar }
        )}
      />
      // using class names from other sources
      <div
        className={cx(cls1, 'profile')}
      />
  ```
  ```js
    // react examples
    // skipping as dont need at this time
      // TODO: check if this works wiht the css from emotion/css
      //  if css is passed down via props, it will take precedence over the css in the component. 
      import { jsx, css } from '@emotion/react'
      const pinkInput = css`
        background-color: pink;
      `;
      const RedPasswordInput = props => (
        <input
          type="password"
          css={css` // <---------passing css as props
            background-color: red;
            display: block;
          `}
          {...props}
        />
      )

      render(
        <div>
          <RedPasswordInput placeholder="red" />
          <RedPasswordInput placeholder="pink" css={pinkInput} />
        </div>
      );
  ```

# styled-components
## about
  - the result of enhancing CSS for specifically styling react components
    - styled components focuses on this single use case
  - basically combines html and css in a single tagged template
    - This means that when you're defining your styles, you're actually creating a normal React component
    - `component = styled.div....` -> `render(<component>...)`


## use cases
  - automatic critical CSS
  - generates unique class names for styles
  - adapting thhe style to a component based on props/global theme
  - automatic vendor prefixing



## examples
  - these should also work for `emotion/css` & `emotion/react` & `emotion/styled`
  ```js
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
  ```;
  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  ```

  ```js
    // Use Title and Wrapper like any other React component – except they're styled!
    render(
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    );
  ```;

  ```js
  // with props
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  ````;
  ```js
  render(
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
  ```;

  ```js
  // The Button from the last section without the interpolations
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  ```;

  ```js
  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  ```;

  ```js
  // changing the type of HTML element being rendered
  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
  ````;
  ```js
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  ````;
  ```js
  render(
    <div>
      <Button>Normal Button</Button>
      <Button as="a" href="/">Link with Button styles</Button>
      <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
    </div>
  );
  ```;

  ```js
  //The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.
  // This could be react-router-dom's Link for example
  const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  ````;
  ```js
  render(
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
  ```

