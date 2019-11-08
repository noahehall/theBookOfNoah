# links
  - [docs](https://www.styled-components.com/docs/basics#motivation)
  - [styled components babel plugin](https://www.styled-components.com/docs/tooling#babel-plugin)
  - [some blog post](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)
  - [with react hooks blog post](https://medium.com/@kamish1/getting-started-with-styled-component-and-react-hook-ba851bbdeae3)
  - 

# about
  - the result of enhancing CSS for specifically styling react components
    - styled components focuses on this single use case
  - basically combines html and css in a single tagged template
    - This means that when you're defining your styles, you're actually creating a normal React component
    - `component = styled.div....` -> `render(<component>...)`


# use cases
  - automatic critical CSS
  - generates unique class names for styles
  - adapting thhe style to a component based on props/global theme
  - automatic vendor prefixing



# examples
```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);

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
`;
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

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
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
render(
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="/">Link with Button styles</Button>
    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
  </div>
);
```