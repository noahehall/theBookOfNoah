#bookmarks
https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4624186
https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/5076956
https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/5076960
https://www.npmjs.com/package/node-env-file


https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/5076972
#####NEEDS CAT########


NODE environment
  set it via command line when your running something,
  NODE_ENV=production webpack =w //now process.env.NODE_ENV will = production, and you can test for it in your ndoe js code
  th
 Mocha: testing framework
  describe: allows you to group your tests for visual output

 react-addons-test-utils
 type of tests
  how many child components are rendered
  that components are rendered
  that time based things work
  that modifying state works on stateful components
  that modifying props work on child components
  that forms are submitted with valid data and not submitted with invalid data\

  notes
    never include dependencies, create dummy data for dependencies so tests are specific to the actual thing your testing

  let AppClock = require('AppClock');
    let appClock = TestUtils.renderIntoDocument(<AppClock/>);
    appClock.someRandomMethod(someRandomArgument);

    let appClock = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(<AppClock totalSeconds={62}/>));
    console.log(appClock.textContent); //outputs 01:02, becareful, it shows all the text content. this one happens to have just a simple string
      //text content = https://developer.mozilla.org/en-US/docs/Web/API/Node
      //https://developer.mozilla.org/en-US/docs/Web/API/Element

      https://facebook.github.io/jest/docs/tutorial-react.html


  el.firstChild.textContent

  it('should render pause when started', (done)=> { //dont stop the test until done is called; wait for async tests
    /*your test logic*/
    done(); //test will fail unless you call this
  });
 karma

 Chai
  expect(this).to.equal(that)
  expect(this).to.exist
 react-tools

 react WORKFLOWS
  react-redux
    items loaded in connect when passing in state are available as this.props on the component

  pass data up:
    1. on stateful component without state (needs react.createclass for custom functions)
          A. on a property that accepts (e.g. input) or that handles interactivity (e.g. click event) property
              someProperty={this.onSomeAction}
          B. in onSomeAction, call e.preventDefault(), run validation on data, then call parent component function onParentHandler
    2. in parent component function, when rendering a child component, set a property
          onParentHandler=HandleChildAction;
          A. in parent component (it should set state, or repeat steps 1 all the way up the chain) create HandleChildAction function that validates data, then calls setState({}) with new value
    3. react-redux
        1.write action that handles one event
        2.write reducer that updates state
        3.write test to confirm it happens


ASYNC REACT redux
  1. store.dispatch(actions.YourAsyncAction)

/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */
#########WORKFLOWS #############
    everything is so interconnected, lets categorize by...

    mechanics: developer tools
      /**view state and props
        1.open up chrome dev tools
        2.click React tab
        3.click right arrow on list of elements until you find the component you want
        4.another tab appears with props and state
      */

      /**view components element in console
        1.repeat steps 1-3 above
        2.in the right bar, it says ($r in console), type $r in console to see it ;)
      */

    Lets get dressed: setup
      /**@name Create an alias 'for' a module
       * @see https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4624174
       * @example workflow
       * 1. Export any JS via module exports
       * 2. add a new property to resolve.alias as YourModuleName: 'your/path/to/file.jsx
       * 3. Import your modial via require('YourModuleName')
       */

       //define a module in some other file
       module.exports = { someFunc }
       //In webpack.config.js - Update Resolve.alias with your new alias
       module.exports = {
        //.... other config options//
         resolve: {
            root: __dirname,
            //import these modules using require('Alias'),
              alias: {
                SomeAlias:  'some/random/file.jsx',
                OtherAlias:   'other/random/file.jsx',
              }
          //..... other config options//
          }
        }
        //import your module
        let SomeAlias = require('someAlias')

      /**@name how JSX transforms components to javascript
       * @see https://facebook.github.io/react/docs/jsx-in-depth.html
       * @example workflow
       * 1. Define a component, e.g. var app = <Nav color="blue" />;
       * 2. JSX outputs React.createElement(Nav, {color:"blue"});
       */


      /**@name adding comments

       * @example workflow
       * 1. wrap multi line comments in { } braces
       * 2. end of line comments begin with //
       */
      var content = (
        <Nav>
          {/* this can be on multiple lines */}
          <Person
            name={window.isLoggedIn ? window.name : ''} // end of line comment
          />
        </Nav>
      );

    phreak! im lost: routes and URLs
      /**@name React Routing: basic setup
       * @see https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md
       * @see https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4624184  but dont use HashHistory
       * @example workflow
       * 0. Setup your server with a catch all route that servers your react.index.html
       * 1. Import functions from react
       * 2. Import componets you will serve on your routes
       * 3. ReactDOM.render() your routes to the client
       */
         // in your server.js file
         // handle every other route with index.html, which will contain
         // a script tag to your application's JavaScript file(s).
         app.get('*', function (request, response){
           response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
         })

         //react
         const React = require('react');
         const ReactDOM = require('react-dom');
         const {Route, Router, IndexRoute, browserHistory} = require('react-router');

         //arbitrary amount of components
         const Main = require('Main');
         const Weather = require('Weather');
         const About = require('About');
         const Examples = require('Examples');

         ReactDOM.render(
         	<Router history={browserHistory}>
         		<Route path='/' component={Main}>
              //load this component on index page
         			<IndexRoute component={Weather} />
              //load these components when URL matches path=
         			<Route path='about' component={About} />
         			<Route path='examples' component={Examples} />
         		</Route>
         	</Router>,
         	document.getElementById('app')
         );

      /**@name get query string params from URL
       * @see https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4722348
       * @example workflow
       * 1. retrieve query string from URL in componentDidMount()
       */

       var SomeRandomComponent = React.createClass({
         /*...other Component Specifications...*/
         componentDidMount() {
           let SomeQueryStringProperty = this.props.location.query.SomeQueryStringProperty;
           /*...Other logic here....*/
         }
         /*...other Component Specifications....*/
       });

    saturday night: events
      snippet:
      /**@name setState with event.type NEED TO FINISH
       * @see https://facebook.github.io/react/docs/events.html
       * @example workflow
       * 1. Create event handler, e.g. onClick()
       * 2.
       */
        function onClick(event) {
          console.log(event); // => nullified object.
          console.log(event.type); // => "click"
          var eventType = event.type; // => "click"

          setTimeout(function() {
            console.log(event.type); // => null
            console.log(eventType); // => "click"
          }, 0);

          this.setState({clickEvent: event}); // Won't work. this.state.clickEvent will only contain null values.
          this.setState({eventType: event.type}); // You can still export event properties.
        }

      /**@name Focus on input when button is clicked
       * @see https://facebook.github.io/react/docs/more-about-refs.html
       * @example workflow
       * 1. create click handler
       * 2. create ref property on component to capture
       */
        var StatefulComponent = React.createClass({
        handleClick() {
          // Explicitly focus the text input using the raw DOM API.
          if (this.myTextInput !== null) {
            this.myTextInput.focus();
          }
        },
        render() {
          // The ref attribute is a callback that saves a reference to the
          // component to this.myTextInput when the component is mounted.
          return (
            <div>
              <input type="text" ref={(ref) => this.myTextInput = ref} />
              <input
                type="button"
                value="Focus the text input"
                onClick={this.handleClick}
              />
            </div>
          );
        }
        });

        ReactDOM.render(
          <StatefulComponent />,
          document.getElementById('example')
        );

    Magic: creation
      /**@name stateful component full example
       * @see https://facebook.github.io/react/docs/more-about-refs.html
       * @see https://facebook.github.io/react/docs/component-specs.html
       * @see https://facebook.github.io/react/docs/component-api.html
       * @see https://facebook.github.io/react/docs/reusable-components.html
       * @example see source for specification
       */
        var StatefulComponent = React.createClass({
          //the internal name of the component if not provided, is set to the name of the variable its assigned to, e.g. Example
          displayName: 'YourComponentName',

          // define the interface of this component, optionally set some as required exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. Note that for performance reasons propTypes is only checked in development mode.
          propTypes: {
            //specific JS primitives
            optionalProp: React.PropTypes.array|bool|func|number|object|string,

            // Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
            optionalNode: React.PropTypes.node,

            // A React element.
            optionalElement: React.PropTypes.element,

            // You can also declare that a prop is an instance of a class. This uses JS's instanceof operator.
            optionalMessage: React.PropTypes.instanceOf(Message),

            // You can ensure that your prop is limited to specific values by treating it as an enum.
            optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

            // An object that could be one of many types
            optionalUnion: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.number,
              React.PropTypes.instanceOf(Message)
            ]),

            // An array of a certain type
            optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

            // An object with property values of a certain type
            optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

            // An object taking on a particular shape
            optionalObjectWithShape: React.PropTypes.shape({
              color: React.PropTypes.string,
              fontSize: React.PropTypes.number
            }),

            // required functions show warning in dev console during development
            requiredFunc: React.PropTypes.func.isRequired,

            // A value of any data type
            requiredAny: React.PropTypes.any.isRequired,

            // only a single element can be passed as a child to this
            children: React.PropTypes.element.isRequired,

            // You can also specify a custom validator. It should return an Error object if the validation fails. Don't `console.warn` or throw, as this won't work inside `oneOfType`.
            customProp(props, propName, componentName) {
              if (!/matchme/.test(props[propName])) {
                return new Error(
                  'Invalid prop `' + propName + '` supplied to' +
                  ' `' + componentName + '`. Validation failed.'
                );
              }
            },

            // You can also supply a custom validator to `arrayOf` and `objectOf`. It should return an Error object if the validation fails. The validator will be called for each key in the array or object. The first two arguments of the validator are the array or object itself, and the current item's key.
            customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
              if (!/matchme/.test(propValue[key])) {
                return new Error(
                  'Invalid prop `' + propFullName + '` supplied to' +
                  ' `' + componentName + '`. Validation failed.'
                );
              }
            })
          },

          //The result of getDefaultProps() will be cached and used to ensure that this.props.value will have a value if it was not specified by the parent component during instantiation.
          getDefaultProps(){
            return {
              somePropName: someValue,
              etc: etc,
            };
          },

          //The return value will be used as the initial value of this.state.
          getInitialState(){ return {SomeProp: this.props.SomeProp};},

          SomeCustomFunction(){
            //your logic
          },

          componentDidMount() {
            this._input.focus();
          },

          render(){
            <StatefulComponent
              someProp='blah'
              someOtherProp={this.prop ? true : false}
              ref={(c) => this._input = c}
            />
          }
        });

      /**creating components with children and rendering them
       * NEED TO FINISH
       */
        1. create your components with this structure
          var MyFormComponent = React.createClass({ ... });
          MyFormComponent.Row = React.createClass({ ... });
          MyFormComponent.Label = React.createClass({ ... });
          MyFormComponent.Input = React.createClass({ ... });

        2. render your components
          var App = (
            <Form>
              <Form.Row>
                <Form.Label />
                <Form.Input />
              </Form.Row>
            </Form>
          );

      /**create a stateful component
       * NEED TO FINISH
       */
        1. React.createClass({})
          -defines a component
          -must have render function that returns component content or returns a function that returns component content

            var YourComponentName = React.createClass({

              //custom component method
              SomeRandomFunction: function() {
                var name = this.refs.name
              }
              displayName: 'YourComponentName',


              getDefaultProps: function() {
                return {
                  name: 'Noah'
                };
              },

              render(){
                let someprop = this.props.someprop;
                return(
                  <div> //container

                    <div className="Blapper">
                      <h1>Hello {someprop} </h1>
                    </div>

                    <form onSubmit={this.SomeRandomFunction}>
                      <input type='text' ref='name'/> //name of this element
                      <button>Set Name</button>
                    </form>

                  </div>
                );
              };

      /**render a component in the DOM
       * NEED TO FINISH
       */
        2. ReactDOM.render()
          -this calls the component and places it into the DOM
          -takes two args
            1. component to render
            2. where to put the content (e.g. document.body || document.getElementById('someId'));
                React.render(
                  <div>
                    regular html here
                    <YourComponentName />
                    <YourComponentName propName="Value" />
                    <someOtherComponentName />
                  </div>,
                  document.getElementById('someElementId')
                ).

      /**create a stateless component that receives one prop from its parent
       * NEED TO FINISH
       */
        const HelloMessage = (props) => <div>Hello {props['name']}</div>;
        ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);

      /**nesting components
       * NEED TO FINISH
       */
        -each component should be responsible for one thing
        -maintain the single responsibility principal by breaking things out in smaller & testable components
        -types of components
          A. Presentational components: renders something visible to the screen or responds to user input
            -do not maintain its own state
            -are usually child components

          B. Container components: maintains state
            -maintains the state for child components & automatically re-render child components when state changes
            -is usually the parent component

        1. React.createClass() //component 1
            -inside of Parent component you can render additional components by insert it as a tag
              <ParentComppeont />
                -maintains state, sends data down to children
                -accepts data from children, and updates state for all children

                <ChildComponent1 />
                  -displays static content on client

                <ChildComponent2 onSomeEvent={this.handleSomeEvent} />
                  -takes props and funcs from parent, sends to client.
                  -takes changes from client and sends back to component and parent for validation and state update
            -pass callback functions to child components, e.g. event handlers/validation logic/etc
              -handleSomeEvent: level 1 function in parent
              -onSomeEvent= level 1 function in child
        2. pass data via child component ref= to container components that has function to handle the event
        3. parent container processes data and sets state if necessary, setting state updates all child components that rely on the changed state

      /**@name conditionally render components
       * @see https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4661964
       * @example workflow
       * 1. inside render, before you return the component, create a function that returns the appropriate element(s) based on state
       * 2. call the function in the return() section
       */
          let StatefulComponent = React.createClass({
            getInitialState(){
              return {
                isLoading:false
              };
            },

          render(){
            let {temp, location, isLoading} = this.state;
            //return appropriate component based on state
            let renderMessage = () => {
              if (isLoading) {
                return <h3>Fetching weather...</h3>
              }else if (temp && location){
                return <WeatherMessage location={location} temp={temp} />;
              }
            };
            return (
              <div>
                <h3>Weather Component</h3>
                <WeatherForm
                    onSearch={this.handleSearch}
                />
              //will render whatever is sent from renderMessage
              {renderMessage()}
              </div>
            );
          }
        });

      /**@name create stateless component
       * @see https://facebook.github.io/react/docs/reusable-components.html
       * @example workflow
       * 1. use an arrow function to define the component, passing in any props it receives from parent components
       * 2. these type of components do not change stage (e.g. via setState)
       * 3. be sure not use this in {this.props.yourPropName}, but call {props.yourPropName}
       */
        var yourComponent = (props) => {
          return (
            <div>
              <h2> Your Component Here </h2>
              {props.children}
            </div>
          )
        };

      /** @name define static methods
        * @see https://facebook.github.io/react/docs/component-specs.html
        * @example workflow
        * 1. use statics object to define static methods within React.createClass({..})
        * 2. each static method is a property of the static object
        */
        var MyComponent = React.createClass({
          /* ..other component Specifications...*/
          statics: {
            customMethod(foo) {
              return foo === 'bar';
            },
            otherStatic(foo) {
              return foo === 'bloop';
            }
          },
          /*...other component Specifications... */
          render() {
            /*... render your component ....*/
          }
        });
        /* call static method */
        MyComponent.customMethod('bar');  // true

    Playing with my emotions SMokeee: Props & State & Attributes

      snippet: using proprties
        1. in createClass use {this.props.somePropName} wherever you want,
        2. in render function use somePropName=value

      worfklow: spread properties
        //elsewhere in your code, who knows where
        var props = {};
        props.foo = x;
        props.bar = y;
        var component = <Component {...props} />;
        //eventually you pass it to render(), or you can place it there literally

      snippet: ternary expressions
        <SomeComponent nameOfProp={thisVar ? thisVar : false}>
        //elsewhere in code, e.g. in an event handler
        {this.props.nameOfProp.value}

      snippet: dangerouslySetInnerHTML to insert raw HTML into a component
        //somewhere else in your code
        function createMarkup() { return {__html: 'First &middot; Second'}; };
        //inside a ReactDOM.render()
        <div dangerouslySetInnerHTML={createMarkup()} />

      snippet: expressions as attributes
        // Input (JSX):
        var person = <Person name={window.isLoggedIn ? window.name : ''} />;
        // Output (JS):
        var person = React.createElement(
          Person,
          {name: window.isLoggedIn ? window.name : ''}
        );

      snippet: default props and states
        -you cannot update props, only states
        -save props to getDefaultProps > Save getDefaultProps to getInitialState >> render components with state
        ReactDOM.render(
          <ComponentName attr=value attr2=value/>,
          domElementContainer
        )
          -(instantiate) components, passing in any named properties
          -properties are available as {this.props.propertyName} inside the ComponentName.js file
          -can also pass them into child components

        React.createClass(
          {}
          .getDefaultProps() level 1 function sets default properties if they are not sent in on instantiation
          .getInitialState() level 1 function sets components initial (Default) state based on properties set by getDefaultProps or passed in as properties on component instantiation
          .render()  instantiates components based on state only (Best practice i think), you can use props, but should use states
          .customFunction() level 1 logic function : has logic to update states which triggers a re-render of instances
            this.setState({
              someStateName: variableWithNewValue
            });
        )

      snippet: update state when prop changes
        componentWillReceiveProps: function(nextProps) {
          this.setState({
            likesIncreasing: nextProps.likeCount > this.props.likeCount
          });
        }

      snippet: componentShouldUpdate
        shouldComponentUpdate: function(nextProps, nextState) {
          return nextProps.id !== this.props.id;
        }

    New Clothes: DOM Interactivity

      snippet: render a normal HTML element into div#example
        var myDivElement = <div className="foo" />;
        ReactDOM.render(myDivElement, document.getElementById('example'));

      snippet: render a react component
        var MyComponent = React.createClass({/*...*/});
          //this should be in an external file, and imported in
        var MyElement = <MyComponent someProperty={true} />;
        ReactDOM.render(MyElement, document.getElementById('example'));

      snippet: rendering components with children
        var Nav, Profile;
        // Input (JSX):
        var app = <Nav color="blue"><Profile>click</Profile></Nav>;
        // Output (JS):
        var app = React.createElement(
          Nav,
          {color:"blue"},
          React.createElement(Profile, null, "click")
        );

      snippet: rendering child components with ternary expressions
        // Input (JSX):
        var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
        // Output (JS):
        var content = React.createElement(
          Container,
          null,
          window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
        );

      snippet: rendering components with if statements outside of JSX
        var loginButton;
        if (loggedIn) {
          loginButton = <LogoutButton />;
        } else {
          loginButton = <LoginButton />;
        }

        return (
          <nav>
            <Home />
            {loginButton}
          </nav>
        );

      snippet: ref with string value (stay away from this)
        <input ref="myInput" />
          //in some other code, e.g. an event handler
          var input = this.refs.myInput;
          var inputValue = input.value;
          var inputRect = input.getBoundingClientRect();

      snippet: ref callback function inline (stay away from this)
        render() {
          return (
            <TextInput
              ref={function(input) { if (input != null) input.focus(); }}
            />
          );
        },

      snippet: ref callback in componentDidMount
        render() {return <TextInput ref={(c) => this._input = c} />;},
        componentDidMount: function() {this._input.focus();},

      snippet: ref callback in event handler
        var MyComponent = React.createClass({
          handleClick: function() {
            // Explicitly focus the text input using the raw DOM API.
            if (this.myTextInput !== null) {
              this.myTextInput.focus();
            }
          },
          render: function() {
            // The ref attribute is a callback that saves a reference to the component to this.myTextInput when the component is mounted.
            return (
              <div>
                <input type="text" ref={(ref) => this.myTextInput = ref} />
                <input
                  type="button"
                  value="Focus the text input"
                  onClick={this.handleClick}
                />
              </div>
            );
          }
        });

        ReactDOM.render(
        <MyComponent />,
        document.getElementById('example')
        );

      snippet: navigate to new page based on changes to query string params
        0.somehwere else in the component you did some action to update props
          let location = this.props.location.query.location;

        1.retrieve new value in componentWillReceiveProps() and do whatever
          componentWillReceiveProps(newProps){
            //handle any newProps in the virtualDom
            //this.props becomes newProps
            let location = newProps.location.query.location;
            if(location) {
              this.handleSearch(location);
              window.location.hash='#/';
            }
          }

      snippet: update text in DOM when user clicks button
        var LikeButton = React.createClass({
          getInitialState: function() {return {liked: false};},
          handleClick: function(event) {
            this.setState({liked: !this.state.liked});
          },
          render: function() {
            var text = this.state.liked ? 'like' : 'haven\'t liked';
            return (
              <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
              </p>
            );
          }
        });

        ReactDOM.render(
          <LikeButton />,
          document.getElementById('example')
        );

      snippet: render and update component every 500 milliseconds
        https://facebook.github.io/react/docs/displaying-data.html
        var HelloWorld = React.createClass({
          render: function() {
            return (
              <p>
                Hello, <input type="text" placeholder="Your name here" />!
                It is {this.props.date.toTimeString()}
              </p>
            );
          }
        });
        setInterval(function() {
          ReactDOM.render(
            <HelloWorld date={new Date()} />,
            document.getElementById('example')
          );
        }, 500);

    Very Tall Buildings: HTML

      snippet: html entities
        <div>First &middot; Second</div> //good
        <div>{'First \u00b7 Second'}</div> //good
        <div>{'First ' + String.fromCharCode(183) + ' Second'}</div> //good
        <div>{'First &middot; Second'}</div> // Bad: It displays "First &middot; Second", you cannot literal html entities within expressions

      snippet: custom html attributes
        If you pass properties to native HTML elements that do not exist in the HTML specification, React will not render them. If you want to use a custom attribute, you should prefix it with data-.
        <div data-custom-attribute="foo" />

        Web Accessibility attributes starting with aria- will be rendered properly.
        <div aria-hidden={true} />

        However, arbitrary attributes are supported on custom elements (those with a hyphen in the tag name or an is="..." attribute).
        <x-my-component custom-attribute="foo" />

      snippet: dangerouslySetInnerHTML
        function createMarkup() { return {__html: 'First &middot; Second'}; };
        <div dangerouslySetInnerHTML={createMarkup()} />

    Swagster: css/style

      snippet: inline styles
        var divStyle = {
        color: 'white',
        backgroundImage: 'url(' + imgUrl + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
        };

        ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);

      snippet: inline styles with shorthand values
        var divStyle = {height: 10}; // rendered as "height:10px"
        ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);

    API: APIs and navigation
      snippet: load new URL
        1.in some random component function
          //to the homepage
          window.location.hash = '#/';

          //to the homepage + query param
          let encodedValue = encodeURIComponent(someValue)
          window.location.hash = `#/?someProp=${encodedValue}`;

    Chemistry Formulas: forms
      snippet: retrieve value from form input field and clear input field
        1.create an input field with a ref property
          <form onSubmit={this.SomeOtherFunctionName}> //level 1 function
            <input type='text' ref='nameOfThisElement' />
          </form>
        2.in a random component method (usually the onSubmit handler), retrieve value then clear input field
          SomeOtherFunctionName(){
            nameOfThisElement = this.refs.nameOfThisElement.value;
              //you can swap out .value for any of the elements properties
            this.refs.navSearch.value = '';
          }

      snippet: form examples
        <input type="text" name="title" value="Untitled" /> //controlled
        <textarea name="description" value="This is a description." /> //controlled
        <textarea name="description">This is the description.</textarea> //antipattern! DO NOT DO THIS!
        <select value="B">//controlled, use defaultValue for uncontrolled
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
          //You can pass an array into the value attribute, allowing you to select multiple options in a select tag:
          //<select multiple={true} value={['B', 'C']}>.

      snippet: create a controlled input and handle users changing its value with optional validation
        var myForm = React.createClass({
          getInitialState: function() {
            return {value: 'Hello!'};
          },
          handleChange: function(e) {
            //without validation
            this.setState({value: e.target.value});
            //with validation: only take the first 140 characters
            this.setState({value: e.target.value.substr(0, 140)});
          },
          render() {
            return (
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            );
          }
        });

########READING ############
  has notation
    https://facebook.github.io/react/docs/events.html
      events
      synthetic events
      event pooling
      event attributes

    https://facebook.github.io/react/docs/forms.html
      forms
      interactive props
      controlled & uncontrolled components

    https://facebook.github.io/react/docs/more-about-refs.html
      refs
      ReactDOM.render
      refs=cb
      refs=string

    https://facebook.github.io/react/docs/special-non-dom-attributes.html
      key

    https://facebook.github.io/react/docs/component-specs.html
      Component class methods
      Life cycle methods
        mounting
        updating
        unmounting

    https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
      keeping the dom up to date through events and event handling
      autobinding
      event delegation
      state and how it works


    https://facebook.github.io/react/docs/component-api.html
      setState
      forceUpdate
      all other methods are deprecated

    https://facebook.github.io/react/docs/top-level-api.html
      React
      ReactDOM
      ReactDOMServer

    https://facebook.github.io/react/docs/displaying-data.html

  needs notation
    https://facebook.github.io/react/docs/transferring-props.html
      transferring props with destructuring
    https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
    https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html

    MUST DO!
      https://facebook.github.io/react/docs/multiple-components.html
        multiple components
        owner-ownee vs parent-child relationship
        children and child-reconciliation
        dynamic children
        data flow
      https://facebook.github.io/react/docs/reusable-components.html
        resusable components
        prop validation
        default prop values
        mixins
        stateless component render functions

      https://davidwalsh.name/event-delegate

#########ELEMENTS-ATTRIBUTES-EVENTS-HANDLERS##########
  Gotchas
    ReactDOM.render VS React.render
      only stateful, stateless returns null for both React and ReactDOM

      React: returns a virtual DOM element
        var MyComponent = React.createClass({render(){return(<MyComponent />,myContainer);}});
        //stateless components return null

      ReactDOM: return a reference to your component's backing instance
        var myComponentInstance = ReactDOM.render(<MyComponent />, myContainer);

  HTML
    supported HTML elements
      a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr

    supported HTML5 attributes

      All attributes are camel-cased and the attributes class and for are className and htmlFor, respectively, to match the DOM API specification.
          className = class
          htmlFor = for

      accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked cite classID className colSpan cols content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate nonce open optimum pattern placeholder poster preload profile radioGroup readOnly rel required reversed role rowSpan rows sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap

    Non-DOM attributes

      key=
        an optional, unique identifier. When your component shuffles around during render passes, it might be destroyed and recreated due to the diff algorithm. Assigning it a key that persists makes sure the component stays.

      ref=cb|string i.e. references
        background
           invoke methods on component instances returned from render()
           In most cases, this should be unnecessary because the reactive data flow always ensures that the most recent props are sent to each child that is output from render()

          Refs are a great way to send a message to a particular child instance in a way that would be inconvenient to do via streaming Reactive props and state.

            They should, however, not be your go-to abstraction for flowing data through your application. stick with state and props as much as possible

          By default, use the Reactive data flow and save refs for use cases that are inherently non-reactive.

          when attaching a ref to a composite component like <TextInput />, you'll get the React class instance.

            you can call methods on that component if any are exposed in its class definition.

          when the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.

            This prevents memory leaks in the case that the instance is stored.

          You can define any public method on your component classes (such as a reset method on a Typeahead) and call those public methods through refs (such as this.refs.myTypeahead.reset()).

          Performing DOM measurements almost always requires reaching out to a "native" component such as <input /> and accessing its underlying DOM node using a ref.
            Refs are one of the only practical ways of doing this reliably.

          Refs are automatically managed for you! If that child is destroyed, its ref is also destroyed for you. No worrying about memory here (unless you do something crazy to retain a reference yourself).
           useful when you need to:
            find the DOM markup rendered by a component (for instance, to position it absolutely)

            use React components in a larger non-React application, or transition your existing codebase to React.

            When attaching a ref to a DOM component like <div />, you get the DOM node back;

          BE CAUTIOUS!!!!
            In most cases, it's clearer to use the built-in React data flow instead of using refs imperatively.

            Never access refs inside of any component's render method – or while any component's render method is even running anywhere in the call stack.

            If you want to preserve Google Closure Compiler advanced-mode crushing resilience
              never access as a property what was specified as a string.

              This means you must access using this.refs['myRefString'] if your ref was defined as ref="myRefString".

            If you have not programmed several apps with React, your first inclination is usually going to be to try to use refs to "make things happen" in your app.

              If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy.

                Often, it becomes clear that the proper place to "own" that state is at a higher level in the hierarchy.

                Placing the state there often eliminates any desire to use refs to "make things happen" – instead, the data flow will usually accomplish your goal.

            Refs may not be attached to a stateless function, because the component does not have a backing instance.

              You can always wrap a stateless component in a standard composite component and attach a ref to the composite component.

        ref cb
          executed immediately after the component is mounted

          The referenced component will be passed in as a parameter, and the callback function may use the component immediately, or save the reference for future use (or both).

          For composite components, the reference will refer to an instance of the component class so you can invoke any methods that are defined on that class.
            If you need access to the underlying DOM node for that component, you can use ReactDOM.findDOMNode as an "escape hatch"
              we don't recommend it since it breaks encapsulation and in almost every case there's a clearer way to structure your code within the React model.

          when writing refs with inline function expressions React sees a different function object each time
            so on every update, ref will be called with null immediately before it's called with the component instance.

        ref string
          this approach is mostly legacy at this point.

      dangerouslySetInnerHTML=
        Provides the ability to insert raw HTML, mainly for cooperating with DOM string manipulation libraries.
        used for directly inserting HTML strings into a component.
        used to indicate sanitized data. i.e. react should not escape it again (its already been escaped)

    supported non-standard attributes
      autoCapitalize|autoCorrect //for Mobile Safari.
      color 'for' <link rel="mask-icon" /> //in Safari.
      itemProp|itemScope|itemType|itemRef|itemID //for HTML5 microdata.
      security //for older versions of Internet Explorer.
      unselectable //for Internet Explorer.
      results|autoSave //for WebKit/Blink input fields of type search.

    react specific attributes

      suppressContentEditableWarning
        used to suppress the warning when using contentEditable and children.

  SVG
    SVG elements
      circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan
    SVG attributes
      accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipPathUnits clipRule colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerHeight markerMid markerStart  markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode  numOctaves offset opacity operator order orient orientation origin overflow  overlinePosition overlineThickness paintOrder panose1 pathLength  patternContentUnits patternTransform patternUnits pointerEvents points  pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits  r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions  requiredFeatures restart result rotate rx ry scale seed shapeRendering slope  spacing specularConstant specularExponent speed spreadMethod startOffset  stdDeviation stemh stemv stitchTiles stopColor stopOpacity  strikethroughPosition strikethroughThickness string stroke strokeDasharray  strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity  strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor  textDecoration textLength textRendering to transform u1 u2 underlinePosition  underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic  vHanging vIdeographic vMathematical values vectorEffect version vertAdvY  vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing  writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole  xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlLang xmlSpace  y y1 y2 yChannelSelector z zoomAndPan

  events
    pass your event handler as a camelCased prop similar to how you'd do it in normal HTML.
    all events behave similarly in all browsers by implementing a synthetic event system.

    Autobinding
      When creating callbacks in JavaScript, you usually need to explicitly bind a method to its instance such that the value of this is correct.
        With React, every method is automatically bound to its component instance (except when using ES6 class syntax).
        React caches the bound method such that it's extremely CPU and memory efficient. Its also less typing!

    Event delegation
      React doesn't actually attach event handlers to the nodes themselves.
        When React starts up, it starts listening for all events at the top level using a single event listener.
        When a component is mounted or unmounted, the event handlers are simply added or removed from an internal mapping.
        When an event occurs, React knows how to dispatch it using this mapping.
        When there are no event handlers left in the mapping, React's event handlers are simple no-ops.

    SyntheticEvent
      event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

      The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked. This is for performance reasons. As such, you cannot access the event in an asynchronous way.



    SyntheticEvent.propertyName
      If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
      boolean bubbles
      boolean cancelable
      DOMEventTarget currentTarget
      boolean defaultPrevented
      number eventPhase
      boolean isTrusted
      DOMEvent nativeEvent
      void preventDefault()
      boolean isDefaultPrevented()
      void stopPropagation()
      boolean isPropagationStopped()
      DOMEventTarget target
      number timeStamp
      string type

  event handlers
    React normalizes events so that they have consistent properties across different browsers.

    The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append Capture to the event name; for example, instead of using onClick, you would use onClickCapture to handle the click event in the capture phase.

    focus
      These focus events work on all elements in the React DOM, not just form elements.
      events
        onFocus onBlur
      properties
        DOMEventTarget relatedTarget

    form
      events
        onChange onInput onSubmit

    Mouse
      events
        onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp
        The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.
      properties
        boolean altKey
        number button
        number buttons
        number clientX
        number clientY
        boolean ctrlKey
        boolean getModifierState(key)
        boolean metaKey
        number pageX
        number pageY
        DOMEventTarget relatedTarget
        number screenX
        number screenY
        boolean shiftKey

    Touch
      events
        onTouchCancel onTouchEnd onTouchMove onTouchStart
      properties
        boolean altKey
        DOMTouchList changedTouches
        boolean ctrlKey
        boolean getModifierState(key)
        boolean metaKey
        boolean shiftKey
        DOMTouchList targetTouches
        DOMTouchList touches

    UI
      events
        onScroll
      properties
        number detail
        DOMAbstractView view

    Select
      events
        onSelect

    clipboard
      events
        onCopy onCut onPaste
      properties
        DOMDataTransfer clipboardData

    Composition
      events
        onCompositionEnd onCompositionStart onCompositionUpdate
      properties
        string data

    Keyboard
      events
        onKeyDown onKeyPress onKeyUp
      properties
        boolean altKey
        number charCode
        boolean ctrlKey
        boolean getModifierState(key)
        string key
        number keyCode
        string locale
        number location
        boolean metaKey
        boolean repeat
        boolean shiftKey
        number which

    Wheel
      events
        onWheel
      properties
        number deltaMode
        number deltaX
        number deltaY
        number deltaZ

    media
      events
      onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting

    image
      events
        onLoad onError

    animations
      events
        onAnimationStart onAnimationEnd onAnimationIteration
      properties
        string animationName
        string pseudoElement
        float elapsedTime

    transition
      events
        onTransitionEnd
      properties
        string propertyName
        string pseudoElement
        float elapsedTime

#########JSX ###############
  background
    The JSX expression always evaluates to a ReactElement.
      The actual implementation details may vary.
      An optimized mode could inline the ReactElement as an object literal to bypass the validation code in React.createElement.
      i.e. anytime you use jsx code it is compiled and converted to React.createElement

  expressions
    {}: indicates an expression

#########REACT-REACTDOM-REACTDOM/SERVER ###############
  React
    background
      npm install --save react react-dom react-router
      js library for UI and SPA
      is the View in MVC
      just the UI, virtual dom, data flows
      all react applications are just a hierarchy of components
      only updates pieces of the UI
      syntax is declarative vs imparative
      is composable i.e. modular
      react only updates changes, and does not need to recreate the entire DOM with each change, e.g. text in input fields wont change if you update another piece of the page
        It uses a fast, internal mock DOM to perform diffs and computes the most efficient DOM mutation for you.
          https://facebook.github.io/react/docs/displaying-data.html
      virtual dom:
        create js objects that represent the dom
        you only interact with the js objects, and never directly with the dom

    need to finish
      all updates to the DOM elements created by react needs to be handled by react so that it can maintain state
        1.require the following at the top of the file
          var ReactDOM = require('react-dom');
          var ReactDOMServer = require('react-dom/server');
        2.move all of your DOM modifications out of render() and into componentDidMount() and use:
          var newElementToInsert = (
            <blah>Your JSX Code here</blah>
          );
          var newDomString = ReactDOMServer.renderToString(newElementToInsert);
          var domPlaceHolder = ReactDOM.findDOMNode(this);
          use javascript to insert newDomString inside of domPlaceHolder

        3.or use CSS to hide/show without actually modifying the dom if applicable

    components
      Every component can be self-closing: <div />.
      Every component can have open and closing tags <div></div>
        only useful if the component has children

      Currently, in a component's render, you can only return one node;
        if you have, say, a list of divs to return, you must wrap your components within a div, span or any other component.

      Props
        properties are to components, what attributes are to html tags
        properties are set when initializing components in ReactDOM.Render(<SomeComponent propName='PropValue' />,Container)
        a component cannot update its own property, but can update its child components properties
        should check this.state and modify its props appropriately

      state
        internall maintained and updated by components

        React thinks of UIs as simple state machines.
          the UI is always in various states
          when you update the state of a component, React renders a new UI to reflect the changes

        A common way to inform React of a data change is by calling setState(data, callback).

        only stateful componenta have state
          can retain state
          have backing instances
          have component life cycle methods
          React.createClass({}))

        useful for responding to:
          user input
          a server request
          the passage of time.
          data that a component's event handlers may change to trigger a UI update.
            this data tends to be very small and JSON-serializable
          can be used to store props in state is to be able to know its previous values, because props may change as the result of a parent component re-rendering.

          think about the minimal possible representation of state, and only store those properties in this.state.
          Inside of render() simply compute any other information you need based on this state.

        it is not useful for:
          Computed data: do all computation within render()
          React components: Build them in render() based on underlying props and state.
          copying data from props: use props as the source of truth where possible.

        Try to keep as many of your components as possible stateless.
          By doing this you'll isolate the state to its most logical place and minimize redundancy, making it easier to reason about your application.

        A common pattern is to create several stateless components that just render data,
          have a stateful component above them in the hierarchy that passes its state to its children via props.
          The stateful component encapsulates all of the interaction logic
          the stateless components take care of rendering data in a declarative way.

      stateless components do not have state
        These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.
        const HelloMessage = (props) => <div>Hello {props.name}</div>;

      API
        React is the entry point to the React library.
          If you're using one of the prebuilt packages it's available as a global;
          if you're using CommonJS modules you can require() it.

        React.createClass({} specification) : creating stateful components

          Class properties
            displayName: 'YourCustomComponentName'
              used in debugging messages. JSX sets this value automatically but you can change it if you want

          Class Methods

            propTypes({})
              validate props being passed to your components.

            getInitialState({})
              Invoked once before the component is mounted. The return value will be used as the initial value of this.state.

            getDefaultProps({})
              invoked once and cached when the class is created. Values in the mapping will be set on this.props if that prop is not specified by the parent component
              is invoked before any instances are created and thus cannot rely on this.props

              any complex objects returned by getDefaultProps() will be shared across instances, not copied.

            render(...) send stuff to DOM & handle computation & build components
              should examine this.props and this.state and return a single child element with optional children elements.
                do all computation within render() based on this.state and this.props
                build components based on this.props and this.state

                This child element can be either a virtual representation of a native DOM component (such as <div /> or React.DOM.div()) or another composite component that you've defined yourself.

                return null or false to indicate that you don't want anything rendered.

              should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout).


            mixins([])
              share behavior among multiple components.

            statics({})
               static methods that can be called on the component class

          Class Life cycle Methods (in order)
            Mounting
              componentWillMount(){...}
                Invoked once before component is rendered, both on the client and server,
                If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
              componentDidMount(){...}
                Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.

                you can access any refs to your children (e.g., to access the underlying DOM representation).

                The componentDidMount() method of child components is invoked before that of parent components.

                If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.

                can make changes to the actual dom elements

            updating
              componentWillReceiveProps(nextProps){...}
                nextProps is a placeholder, you can call it anything
                this.props is the old props

                Invoked when a component is receiving new props as the result of a rerender.

                  because the component needs to be notified of the new props (even if the new props happen to be the same as the old props).

                  i.e. whenever there is a rerender, this is called.

                not called for the initial render.

                isnt triggered after the node is put on scene.
                  The reason for that is because componentWillReceiveProps often handles the logic of comparing with the old props and acting upon changes; not triggering it at mounting (where there are no old props) helps in defining what the method does.


                Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().

                  Calling this.setState() within this function will not trigger an additional render.

                The old mydata and the new mydata are actually the same physical object (only the object’s internal value changed).

                If you want an operation (such as a network request) to occur only when props have changed, your componentWillReceiveProps code needs to check to see if the props actually changed.

              shouldComponentUpdate(nextProps, nextState){...}
                Invoked before rendering when new props or state are being received.

                not called for the initial render or when forceUpdate is used.

                return false when you're certain that the transition to the new props and state will not require a component update.

                  render(),componentWillUpdate(), componentDidUpdate() will be completely skipped until the next state change.

                by default, always returns true to prevent subtle bugs when state is mutated in place,

                if you are careful to always treat state as immutable and to read only from props and state in render() then you can override shouldComponentUpdate with an implementation that compares the old props and state to their replacements.

                If performance is a bottleneck, especially with dozens or hundreds of components, use shouldComponentUpdate to speed up your app.

              componentWillUpdate(nextProps, nextState){...}
                Invoked immediately before rendering when new props or state are being received.

                not called for the initial render.

                cannot use this.setState() in this method.
                  If you need to update state in response to a prop change, use componentWillReceiveProps instead.

              componentDidUpdate(prevProps, prevState){...}
                Invoked immediately after the component's updates are flushed to the DOM.

                This method is not called for the initial render.

                Use this as an opportunity to operate on the DOM when the component has been updated.

            unmounting
              componentWillUnmount(){...}
                Invoked immediately before a component is unmounted from the DOM.

                Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.

        React.Component instance methods
          This is the base class for React Components when they're defined using ES6 classes
          Instances of a React Component are created internally in React when rendering
          are reused in subsequent renders, and can be accessed in your component methods as this.
          The only way to get a handle to a React Component instance outside of React is by storing the return value of ReactDOM.render.
            Inside other Components, you may use refs to achieve the same result.

          MUST implement a render method which returns one single child.
            That child may have an arbitrarily deep child structure.
            One thing that makes components different than standard prototypal classes is that you don't need to call new on them.
              They are convenience wrappers that construct backing instances (via new) for you.

          Instance Methods
            this.setState({}|func nextState,[cb]);
              Performs a shallow merge of nextState into current state and rerender components that depend on it
              When the component finishes re-rendering, the optional cb is called.
                Most of the time you'll never need to provide a callback since React will take care of keeping your UI up-to-date for you.
              primary method you use to trigger UI updates from event handlers and server request callbacks.
              will always trigger a re-render unless conditional rendering logic is implemented in shouldComponentUpdate()
                If mutable objects are being used and the logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.

              NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
              does not immediately mutate this.state but creates a pending state transition.
                Accessing this.state after calling this method can potentially return the existing value.
              There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains

              {} = this.setState({
                    someStateName: someVariable,
                    otherStateName: SomeBlah
                  });
              func = this.setState((previousState, currentProps) => {
                      return {myInteger: previousState.myInteger + 1};
                    });

            this.forceUpdate([cb]);
              force a rerender
                will cause render() to be called on the component, skipping shouldComponentUpdate()
                This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child.
                will still only update the DOM if the markup changes.

              when your component's state or props change, your component will re-render. However, if these change implicitly (eg: data deep within an object changes without changing the object itself) or if your render() method depends on some other data, you can tell React that it needs to re-run render() by calling forceUpdate().

              try to avoid all uses of forceUpdate() and only read from this.props and this.state in render(). This makes your component "pure" and your application much simpler and more efficient.

            this.replaceState({} nextState, [cb]); //dont use
              Like setState() but deletes any pre-existing state keys that are not in nextState.
              This method is not available on ES6 class components that extend React.Component. It may be removed entirely in a future version of React.

            this.getDOMNode() //dont use
              If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
              When render returns null or false, this.getDOMNode() returns null.

              useful for:
                reading values out of the DOM, such as form field values
                performing DOM measurements.

              getDOMNode is deprecated and has been replaced with ReactDOM.findDOMNode().

            this.isMounted() //dont use
              returns true if the component is rendered into the DOM, false otherwise.
              use this method to guard asynchronous calls to setState() or forceUpdate()

              This method is not available on ES6 class components that extend React.Component. It will likely be removed entirely in a future version of React, so you might as well start migrating away from isMounted() now.

            this.setProps({} nextProps, [cb]); //dont use
              change & merge component properties and trigger a re-render.
                can only be called on a root-level component, i.e. the component passed directly to ReactDOM.render() and none of its children.
                take advantage of reactive updates and pass the new prop to the child component when it's created in render().

              signal a change to a React component rendered with ReactDOM.render().
              optional callback function is executed once setProps is completed and the component is re-rendered.

              Instead of calling setProps, try invoking ReactDOM.render() again with the new props.

              This method is deprecated and will be removed soon.
              not available on ES6 class components that extend React.Component.

            this.replaceProps({} nextProps, [cb]); //dont use
              Like setProps() but deletes any pre-existing props instead of merging the two objects.
              This method is deprecated and will be removed soon. This method is not available on ES6 class components that extend React.Component. Instead of calling replaceProps, try invoking ReactDOM.render() again with the new props.

          this.props
            this.props.SomeName << myController SomeName="Boom" />
              -passed into componenets when you initialize it
              -componenets cannot update props, so save props to states, and render the states in your render() function
                  <SomeComponent thisPropName='ThisValue' /> //save this to getInitialState

          this.state

          this.props.children << <Todo>Insert this random stuff</Todo>

          this.refs.somename << represents a browser node with attribute ref='somename'

            <input type="text" ref="bopper" />
              -elsewhere in your code
                this.refs.bopper
                  .value //the element value

        React.createElement('el'|Component type, [{} props]|null, [...children]);
          Create and return a new ReactElement of the given type
          The type argument can be either an html tag name string (eg. 'div', 'span', etc), or a ReactClass (created via React.createClass).

        React.cloneElement(ReactElement element,[{} props], [...children]);
          Clone and return a new ReactElement using element as the starting point.

          The resulting element will have the original element's props with the new props merged in shallowly.
          New children will replace existing children.
          Unlike React.addons.cloneWithProps, key and ref from the original element will be preserved.
          There is no special behavior for merging any props (unlike cloneWithProps).

        React.createFactory(''|Class type);
          Return a function that produces ReactElements of a given type. Like React.createElement, the type argument can be either an html tag name string (eg. 'div', 'span', etc), or a ReactClass.

        React.isValidElement(* object);
          Verifies the object is a ReactElement.

        React.DOM
          provides convenience wrappers around React.createElement for DOM components.
          These should only be used when not using JSX. For example, React.DOM.div([children]|null, 'Hello World!')

        React.PropTypes
          includes types that can be used with a component's propTypes object to validate props being passed to your components.
          see component proptypes for more information

        React.Children
          utilities for dealing with the this.props.children opaque data structure.

          array React.Children.map(object children, function fn [, object thisArg])
            Invoke fn on every immediate child contained within children with this set to thisArg.
            If children is a nested object or array it will be traversed
            fn will never be passed the container objects.
            If children is null or undefined returns null or undefined rather than an array.

          void React.Children.forEach(object children, function fn [, object thisArg])
            Like React.Children.map() but does not return an array.

          number React.Children.count(object children)
            Return the total number of components in children, equal to the number of times that a callback passed to map or forEach would be invoked.

          object React.Children.only(object children)
            Return the only child in children. Throws otherwise.

          array React.Children.toArray(object children)
            Return the children opaque data structure as a flat array with keys assigned to each child.
            Useful if you want to manipulate collections of children in your render methods
              especially if you want to reorder or slice this.props.children before passing it down.

  ReactDOM
    npm install --save react-dom
    var ReactDOM = require('react-dom')

    background
      The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to.
      Most of your components should not need to use this module.

    API
      ReactDOM.render(ReactElement element, DOMElement container [, func cb])
        Render a ReactElement into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

          currently returns a reference to the root ReactComponent instance.
            However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases.
            If you need a reference to the root ReactComponent instance, the preferred solution is to attach a callback ref to the root element.

        controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.

          does not modify the container node (only modifies the children of the container).
            In the future, it may be possible to insert a component to an existing DOM node without overwriting the existing children.

        If the ReactElement was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React component.

        If the optional callback is provided, it will be executed after the component is rendered or updated.

      boolean unmountComponentAtNode(DOMElement container)
        Remove a mounted React component from the DOM and clean up its event handlers and state.
          If no component was mounted in the container, calling this function does nothing.
          Returns true if a component was unmounted and false if there was no component to unmount.

      DOMElement findDOMNode(ReactComponent component)
        If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
          When render returns null or false, findDOMNode returns null.

        useful for:
          reading values out of the DOM, such as form field values
          performing DOM measurements.

          In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.

        is an escape hatch used to access the underlying DOM node.
          In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.
        only works on mounted components (that is, components that have been placed in the DOM).
          If you try to call this on a component that has not been mounted yet (like calling findDOMNode() in render() on a component that has yet to be created) an exception will be thrown.
        cannot be used on stateless components.

  ReactDOMServer
    npm install --save react-dom
    var ReactDOMServer = require('react-dom/server');

    reading
      https://www.terlici.com/2015/03/18/fast-react-loading-server-rendering.html
      https://github.com/mhart/react-server-example
      https://github.com/mhart/react-server-routing-example

    background
      The react-dom/server package allows you to render your components on the server.
    API
      string renderToString(ReactElement element)
        Render a ReactElement to its initial HTML and return it as a string.
        only be used on the server.

        use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

        If you call ReactDOM.render() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

      string renderToStaticMarkup(ReactElement element)
        Similar to renderToString, except this doesn't create extra DOM attributes such as data-react-id, that React uses internally.
        This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save lots of bytes.
  // TODO:100 categorize these
    Form Components
      background
        input, textarea, option components provide interfaces that make it easier to manage forms in response to user interactions.

      User interactions
        value=blah|{blah} //supported by input,textarea,select components.
        checked=dontknowyet // supported by <input> components of type checkbox or radio.
        selected=dontknowyet // supported by <option> components.

        defaultValue="Hello!" //initialize the component with a non-empty value,
            type=input
            select components
        defaultChecked=true
          type=|checkbox|radio

        onChange={this.someCallBackFunction}
          The value= of <input> or <textarea> changes.
          The checked state of <input> changes.
          The selected state of <option> changes.

          onChange prop is supported on all native components

        controlled components: input, textarea, select
          <input type="text" value="Hello!" />;
          any input, textarea, select component with a value= set in its definition
          User input will have no effect on the rendered element because React has explicitly declared its value, and is always in control of a components state.
          To update the value in response to user input, you could use the onChange event
          A Controlled component does not maintain its own internal state; the component renders purely based on props.

        uncontrolled components: input, textarea, select
          <input type="text" />;
          any input,textares, select component withou a value= set in its definition
          render an input that starts off with an empty value. Any user input will be immediately reflected by the rendered element. If you wanted to listen to updates to the value, you could use the onChange event just like you can with controlled components.
          An uncontrolled component maintains its own internal state.

      extensions
        https://github.com/JedWatson/react-select
      <form onSubmit={this.SomeOtherFunctionName}> //level 1 function
        <input type='text' ref='nameofthiselement' />
      </form>

    research
      react
        React
          createClass
          createElement
            React.createElement('tagName','attributes', 'text content')

        getDOMNode()
          .value

        ref
          -add to a dom element as ref="blah"
            -it becomes a component property as this.refs.blah.getDOMNode().value

        getInitialState: function(){someProp1: anything, someProp:anything}
          -accessible as this.state.propProp

        setState({componentName: someNewValue, componentName: someOtherValue}) << sets the current state of the component by passing in any changes

        state.yourComponentName << get the current state of your component

        {editing:false} | component states

        this.props
          .children


      javascript
        splice
        encodeURIComponent('someRandomString')
        window.location.hash

    extended examples
      var YourComponentName = React.createClass({
        getInitialState: function(){
          return {editing:false};
        }
        edit: function(){
          alert('edit Todo');
          this.setState({editing:true});
        },
        remove: function(){
          alert('ToDo removed');
        },
        save: function(){
          alert('ToDo saved');
        }
        toDoDisplay: function(){
          return()(
            <li className='toDo'>
              <span onClick={this.edit}>
                {this.props.children}
              </span>

              <button
                  className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"
                  onClick={this.remove} />
            </li>
          );
        },
        toDoForm: function(){
          return()(
            <li className='toDo'>
              <span>
                <input type='text' placeholder='Edit ToDo' defaultValue={this.props.children} />
              </span>

              <button
                className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right"
                onClick={this.save} />
            </li>
          );
        },
        render: function(){
          return this.state.editing ?
            this.toDoForm():
            this.toDoDisplay();
        }
      });

#########REACT ROUTER ###############
  https://github.com/reactjs/react-router/tree/master/docs/guides
  https://github.com/reactjs/react-router/blob/master/docs/Glossary.md#routeconfig

  Terminalogy
    Route Configuration:
      set of instructions that tell a router how to try to matc the URL and what code to run when it does.


  API
    <Router>
      <Route path='/' component={YourApp}> //Specify the home page
        <IndexRoute component={DefaultComponentName} /> //the componnent to laod on the home page.
          //other routes here
        <Route component={OtherComponent}> //use this component, but dont include it in the URL
          <Route path="/blap/:id" component={blap} />
        </Route>
      </Route>

  Router:
  Route:
    defines route, the path for the route, and a component to load
      - the order matters, the first matching route is loaded
      <Route path='/' component={Root} /> //root route with children
        <Route path='about' component={About} /> //child route with no children
      </Route>
  IndexRoute:
  Link:
    dont use this 'for' child links when you're using IndexRoute, instead use IndexLink
      Link will cause the active page to be styled/classed a certain way if the current URL matches the path
      IndexLink will only current the child Link,
        root = /
        about = / about
           Link styles both as bold,
           indexLink only styles About
    creates links between components
      <Link to='about'>About</Link>
    very similar to a tag (which it creates once compiled)
    but the benefits are:
      customize the class of the current link
        <Link to='about' activeClassName='active'>About</Link>
      customize the style tag of the current link
        <Link to='about' activeStyle={{fontWeight: 'bold'}}>About</Link>
          -notice you have to double {{}}
          -notice you CSS is camelcased
  IndexRoute:
    same as link, read its description
    It is great for child links, e.g.
      root = /
      about = /about
      about us = /about/us
      only /about/us will get activeClassName and activeStyle
  HashHistory:
      adds # plus id to url
      http://localhost:3000/#/?_k=hc6o3t
      this is to remember navigation between routes

  examples
    import React from 'react';
    let {Link, IndexLink} = require('react-router');

    const MainNav = () => {
        return (
          <nav className="main-nav">
            <menu className="navlist">
              <a>Dashboard</a>
              <IndexLink to="/" activeClassName="current">Home</IndexLink>
              <Link to="/products" activeClassName="current">Other Link</Link>
              <a>Catalog</a>
            </menu>
          </nav>
        )
    }

    export default MainNav;

#########REACT DEVELOPER TOOLS############
  hmm, maybe in workflows?

#########WEBPACK ###############
  tuts:
    webpack
      http://humaan.com/getting-started-with-webpack-and-react-es6-style/
      http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
    7-1 patter (Sass)
      https://sass-guidelin.es/#the-7-1-pattern
      https://github.com/HugoGiraudel/sass-boilerplate
      http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/
      http://humaan.com/getting-started-with-webpack-and-react-es6-style/
      https://webpack.github.io/docs/stylesheets.html#separate-css-bundle
      *https://github.com/JedWatson/classnames
      https://github.com/css-modules/css-modules
    jsx:
      https://facebook.github.io/react/docs/jsx-in-depth.html
  background
    npm install webpack -g
      //g allows us to use it from command line
      //alternatively we could issue ./node_modules/bin/webpack
    npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react

  CLI
    webpack -h //help
    webpack ./some/file/jsx.js ./some/other/bundle.js
      -converts jsx to js
      -this is 'for' super simple files
    webpack
      -will run the webpack.config.js in the root folder
    webpack -w
      -run webpack, and watch 'for' file changes, and rebundle
    webpack --production (or -p)
      minifies the bundle for production

  Loaders:
    A loader is simply a transformer, applied on all files matching a regular expression. So, implement a JSX loader to deal with our components:

  CONFIGURATION
    webpack.config.js
      -config file 'for' webpack
        module.exports = {
          entry: './public/app.jsx',
          output: {
            path: __dirname, //current dir
            filename: './public/bundle.js' //output file
          },
          resolve: {
            root: __dirname, //current dir
            alias: { //find these files by their alias, then use require('Alias'), e.g. require('Greeter')
              Greeter: 'public/components/Greeter.jsx',
              GreeterMessage: 'public/components/GreeterMessage.jsx',
              GreeterForm: 'public/components/GreeterForm.jsx'
            },
            extensions: [ //process all of these files
              '',
              '.js',
              '.jsx'
            ]
          },
          module: {
            loaders: [
              {
                loader: 'babel-loader', //use babel-loader
                query: {
                  presets: [
                    'react', //do this first
                    'es2015', //use output of previous item as input to this item
                    'stage-0' //same as above, als requires npm install babel-preset-stage-0 --save-dev
                  ]
                },
                test: /\.jsx?$/, //any file ending in .jsx, process it
                exclude: /(node_modules|bower_components)/ //dont process any files in these folders
              }
            ]
          }
        }

  webpack dev server: 'for' live reload
    npm install --save-dev webpack-dev-server

    run your server with:
      ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors

  SASS, css, and style loaders, extract-text-webpack-plugin
    npm install --save-dev sass-loader css-loader style-loader node-sass extract-text-webpack-plugin
    1.add new loader
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
            //loaders: ['style', 'css', 'sass'] //without extracttext
        }
    1.update plugins array
      new ExtractTextPlugin('public/style.css', { //save all chunks to public/style.css
          allChunks: true
      })
    2.create scss styles
    3.load in components with require('./styles/nav.scss');

  jquery & script loaders
    npm install --save-dev script-loader jquery

#########REDUX-REACT-REDUX-REACT-THUNK#################
background
  observer pattern
    something dispatches an action, others subscribe(observer) to actions

  redux tracks the applications state in the redux store, which is a plain javascript object

    example application state
      let reduxState = {
        searchText: 'blah',
        showCompleted: false,
        todos: [{
          id: 123,
          text: 'bloop'
        }]
      };

  to update application state you need to dispatch an action


  pure functions
    always return the same output given the same input
    no side effects
    does not change any variable/data outside of itself
    does not rely on any variable/data outside of itself
    does not have any async requests (promises/callbacks)
    does not update its arguments (but instead returns a new object representing the new values)
      use es6 destructuring
        function changeProp(obj){
          return {
            ...obj,
            name: 'Noah'
          };
        }

        let sen = {name:'boom'};
        let res = changeProp(sen);

        console.log(res,sen);

  actions: objects that specify how to update state
     let action = {
       type: 'CHANGE_NAME',
       name: 'noah'
     }

     store.dispatch(action) //send the action to the store, which sends it to the reducer

  reducers: pure function that updates state base on dispatched action

  subscribers: get called everytime state changes
   let unsubscribe = store.subscribe(()=>{
      let state = store.getState();

      //do this stuff whenever state changes

    });
    //unsubscribe(); //call this to stop observering the state

async
  When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).
    start the call: requires synchronous state change
      action to reducers that request began by toggling isFetching status (show spinner)

    success: requires synchronous state change
      action to reducers that request finished successfully by toggling isFetching status (hide spinner)
    error: requires synchrnous state change
      action to reducers that request failed by toggling isFetching status (hide spinner)

    example using status flag
      { type: 'FETCH_POSTS' }
      { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
      { type: 'FETCH_POSTS', status: 'success', response: { ... } }

    example using different types
      { type: 'FETCH_POSTS_REQUEST' }
      { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
      { type: 'FETCH_POSTS_SUCCESS', response: { ... } }

react-redux
  remove the need to pass data from the top to the bottom
    no more handlers

  provider: provide access to the store to its children
    child components can access store attributes
    let {Provider} = require('react-redux');
  connect: used to dispatch actions from child components
    no need to pass data down from parent components
    use connect to connect child components with specific state attributes and the dispatch function
    remove all handlers!

    first and only option is the state, only return the state attributes the child component needs
    export connect with your component as 'this' module.exports = connect(extract items from state)(yourComponent)

react-thunk
  allows you to create asynchronous actions

  workflow:
    1.on some event in a component, dispatch a 'make request action', e.g. dispatch(todoItemRequest(blah));
    2.the make request action should handle all the logic for creating the request and handling the response
      A. success: call the success response
      B. failure: call the failure response
    2.
########REDUX DEVELOPER TOOLS ###########
sample setup
  //create a new store specifying its reducer
  let store = redux.createStore(
    reducer,
    redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );



#######BABELIFY + BROWSERIFY############


#########DEMO #############

How many people have used react?
my goal
my background
agenda

What is it?
  3
  React: A Library for rendering UIs
  Noah: Paradigm for creating view-first applications, or view-centered-development (taken shamelessy from user-centered design[29])

  10
  Philosophy
    React Values:
      Simplicity:
        26
        is a pure function of state and props, i.e. given the same state and props, will always render the same output with no side effects
      Togetherness:
        27
        Colocation of concerns, vs separation of technologies:
          React, renders a view coupling the technology required. Its concern? rendering a view. Its single responsibility? rendering a view.
            Is our front end this?
              HTML - Semantic Content
              CSS - Presentation (rendering)
              JavaScript - Behavior
            Is our front end this?
              HTML - Model
              CSS - View
              JavaScript - Controller
          From the perspective of web development, what is the concern of html, css, and javascript?
              HTML, CSS, and JavaScript all have the same concern, to render a view.

    *
    3084 Watchers
    42203 Stars
    7158 Forks

    Functional programming
    11
    Declarative API
      behavior
      style
      structure
    Horizontal Platform
      Share:
        APIs:
        Tools and Languages: dev tools, javascript
        Code: (some)
      Native:
        computation
    Oh, and, complete javascript toolkit

          who made it and why?
          internal facebook tool, went open source after acquiring instagram (of course they wanted to use it!)
          Declarative
    JSX:  concise and familiar syntax for defining tree structures with attributes.
11
How does it work?
  Virtual DOM
    Workflow
  The Machine
  Life Cycle
  Synthetic Events

  Initial Render, Data Changes, User updates. The view
    Render: output Structure, Behavior, and Style
    Initial Render:2 pass rendering
      A. Generate Mark up
      B. Attach Events

    Updates:
      Reconciliation (no mutations): Reconciliation is the process by which React updates the DOM with each new render pass. [30]
      Render() returns representation of current state of a component (and child components)
        A. whats the current state?
        B. whats the new state?
        C. whats the diff ?
        D. Batch minimum set of DOM Mutations
        E. Update Views

          20
          Pair-wise Diff: In order to do a tree diff, we first need to be able to diff two nodes. There are three different cases being handled.
            Different Node/Component types: treated as two different trees and do not even try at matching what they render. It is just going to remove the first one from the DOM and insert the second one.

  renderA: <div />
  renderB: <span />
  => [removeNode <div />], [insertNode <span />]

                  It is very unlikely that a <Header> element is going to generate a DOM that is going to look like what a <Content> would generate. Instead of spending time trying to match those two structures, React just re-builds the tree from scratch.
                  As a corollary, if there is a <Header> element at the same position in two consecutive renders, you would expect to see a very similar structure and it is worth exploring it.

            Same Node/component: When comparing two DOM nodes, we look at the attributes of both and can decide which of them changed in linear time.

  renderA: <div id="before" />
  renderB: <div id="after" />
    => [replaceAttribute id "after"]

              CSS Styles: Instead of treating style as an opaque string, a key-value object is used instead. This lets us update only the properties that changed.

  renderA: <div style={{color: 'red'}} />
  renderB: <div style={{fontWeight: 'bold'}} />
  => [removeStyle color], [addStyle font-weight 'bold']

          20
          List-Wise Diff: In order to do children reconciliation, React adopts a very naive approach. It goes over both lists of children at the same time(important!) and generates a mutation whenever there's a difference.

          Insert new div at end

  renderA: <div><span>first</span>                   </div>
  renderB: <div><span>first</span><span>second</span></div>
  => [insertNode <span>second</span>]

          Insert new div at beginning: !oops

  renderA: <div><span>first</span>                    </div>
  renderB: <div><span>second</span><span>first</span></div>
  => [replaceAttribute textContent 'second'], [insertNode <span>first</span>]

          Keys on child elements fix this issue, whenether there is a possibility for insertion, deletion, substitution, moves


  renderA: <div><span key="first">first</span></div>
  renderB: <div><span key="second">second</span><span key="first">first</span></div>
  => [insertNode <span>second</span>]
    the key only has to be unique among its siblings, not globally unique.

          Trade offs:
            It is important to remember that the reconciliation algorithm is an implementation detail. React could re-render the whole app on every action; the end result would be the same. We are regularly refining the heuristics in order to make common use cases faster.
            In the current implementation, you can express the fact that a sub-tree has been moved amongst its siblings, but you cannot tell that it has moved somewhere else. The algorithm will re-render that full sub-tree.
            Because we rely on two heuristics, if the assumptions behind them are not met, performance will suffer.
            The algorithm will not try to match sub-trees of different components classes. If you see yourself alternating between two components classes with very similar output, you may want to make it the same class. In practice, we haven't found this to be an issue.
            Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many nodes to be unnecessarily re-created, which can cause performance degradation and lost state in child components.


    Components:
      25.
      Traditional: separate views (HTML) from functionality (Javascript) and styles (css). This leads to monolithic Javascript files containing all functionality for one "page", and you have to trace complex flow from JS > HTML > JS > bad-news-sad-time.
  Virtual DOM
    DOM: A single stateful hierarchical tree-representation of an HTML or XML document describing the relationship between nodes.

      <human from='earth'>
        <woman type='mom' name='opal'>
          <child type='son'>
            <boy name='noah' smart='maybe'>Loves ice cream</boy>
          </child>
        </woman>
      </human>

    6,7,8
    The Shadow DOM (segment of web components) is a stateful hierarchical multi-tree representation of Javascript, CSS, and templates representing Web Components/widgets
      no global scope, private, and render along side other 'trees'

      <script>
        let shadow = document.querySelector('woman[name="opal"]').createShadowRoot();
        shadow.innerHTML =
          <man smart='definitely' id='noah'>
            Loves vintage clothing;
            classical man with a poetic demeanor and captivating, piercing eyes.
            <child type='son'>
              <boy name='prince' smart='maybe'>Loves ice cream</boy>
            </child>
          </man>
        shadow.appendChild(document.querySelector('#noahTemplate'));
      </script>

      <template id='noahTemplate'>
        <style>...</style>
      </template>

    4,35
    The Virtual DOM: Similar in theory, but different in implementation and design to webcomponents
      Is separate and distinct from the DOM, whereas web components are native and domain specific
      Multiple Hierarchical tree-represetionation of javascript objects representing the DOM (see above)
      19
      ...is a descriptor of a DOM subtree rendered in the browser.
        14
        1. walk the virutal DOM
        2. find the diffs
        3. update the DOM synchronously

  Immutable data: Best performance gains with immutable data; The value of immutable data often relates to optimization. Immutable data allows you to compare direct object references instead of doing deep-tree comparisons.

            This is much faster. And, in ReactJS, the .shouldComponentUpdate() method allows you to compare the current props and state to the "next" props and state in order to determine if the component can skip the regeneration of the virtual DOM as a performance boost. This latter point wouldn't make sense with mutable data as the before and after references are actually the same.

            ReactJS also provides a .componentWillReceiveProps() method for comparing the current props to the "next" props. This method is not concerned with optimization but rather with setting state based on the delta in props. Of course, if you are using mutable data, the delta may not make any sense as the before and after props references are the same.

            If you are using .shouldComponentUpdate() or .componentWillReceiveProps(), then immutable data is a clear value-add.

            While I mutating state directly, never mutate state in an inappropriate context. Meaning, I never directly mutating props - always defer the mutation to the component that "owns" the state. This is a best practice regardless of whether or not you are using immutable data.

    why change(mutate) it when you can throw it away and start over? Dont mutate
      22
      mutations do not change the results of reference equality checks. They change the results of value equality checks.
        does this new A = old A ? yes, they refer to the same object in memory, so nothing has changed
        does this new A.2 == new A.3 ? no, 2 does not equal 3 so something has changed, and I know what it is
        thus, the only way to know what changes is to deep a deep reference of your enter object, which can be expensive

        Whenever your object would be mutated, don’t do it. Instead, create a changed copy of it.

    updates do not mutate the view
    updates initiate a re-render of the view, based on the diff of the old state, and the new state
      1.rerender everything to a virtual dom (set.state: trigger a re-calculation of the virtual DOM.)
      2.diff the previous virt. dom with the next virt.
      3.update the real dom with what actually changed


    immutability in plain old JS
      var yourCarRepainted = Object.assign({}, yourCar, { color: 'blue' });
      yourCarRepainted === yourCar; // false


    Data Binding

  4
  The Machine
    React elements: Declarative javascript functions describing stateless DOM elements
      ReactElement Factory

    ReactNode
    ReactComponent: Declarative javascript class instantiations describing stateful composite React Elements representing the user interface at any point in time
      ReactComponent Class
      encapsulations with embedded state.
        Legos + Raspbery pie = UI
  Reactive Data Flows
    state

    props

  4
  components:
    create composite react elements that are dependent on common state

  state: pub/sub

  props

  lifecycle methods: Points to break out of the abstraction, or interrup/augment the react flow
    21
    Mounting:
      componentWillMount //set state here
        Invoked once, both on the client and server, immediately before the initial rendering occurs.
        If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.

      componentDidMount //talk to children, inspect DOM, integrate with other libraries, setTimeout/Interval, Ajax,
        Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
        access any referencess to your children (e.g., to access the underlying DOM representation). The componentDidMount() method of child components is invoked before that of parent components.

    21
    updating
      componentWillReceiveProps //inspect/respond to new/old props, update state for this render only
        Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). T
        the old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.

      12,15
      shouldComponentUpdate (memoization) //inspect/respond to new/old props & state. return false to stop virtual dom comparison and dom reconciliation,
        19
        triggered before the re-rendering process starts (virtual DOM comparison and possible eventual DOM reconciliation)
        return false when you're certain that the transition to the new props and state will not require a component update, componentWillUpdate and componentDidUpdate will not be called.

      componentWillUpdate //Use this as an opportunity to perform preparation before an update occurs, cannot use setState in this method
        Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.

      componentDidUpdate
        Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
        Use this as an opportunity to operate on the DOM when the component has been updated.
    21
    Unmounting
      componentWillUnmount
        Invoked immediately before a component is unmounted from the DOM.
        Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.

Whats it look like?
  React Elements

  React Components
    2
    stateful React.createClass({})
      var MyComponent = React.createClass({
        render: function() {
          return <div>Hello World</div>;
        }
      });

    stateful ES6 Classes
      class HelloMessage extends React.Component {
        render() {
          return <div>Hello {this.props.name}</div>;
        }
      }
  state

  props

9
Ecosystem
  JSX
  Babel
  Redux (based on flux design pattern)
    https://facebook.github.io/flux/
  webpack
  Victory.js
  Static Analysis
    ESLint
    JSHint

  Many More!
    https://github.com/facebook/react/wiki/Complementary-Tools

Whose using it?
  facebook
    10,11,12
    Mobile Ads Manager (RN, ios android)
    Facebook (RN, ios android)
    Frends Day Video (RN, ios android)
    Events Dashboard (desktop)
    Graph search (desktop)
    Page insights (desktop)
    Data visualizations on canvas (desktop)
    Photo uploads (mobile web)
    Search (mobile)

  Instagram: the whole shebang

Tips with using react
  1
  1.keep your components small, smaller than you think they need to be

0.https://en.wikipedia.org/wiki/Reactive_programming
0.http://calendar.perfplanet.com/2013/diff/
0.https://auth0.com/blog/2015/11/20/face-off-virtual-dom-vs-incremental-dom-vs-glimmer/
0.http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
0.https://www.linkedin.com/pulse/what-reactjs-why-i-recommend-other-javascript-sandip-das


1.https://camjackson.net/post/9-things-every-reactjs-beginner-should-know
2.https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
3.https://facebook.github.io/react/
4.https://facebook.github.io/react/docs/glossary.html
5.https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
6.https://w3c.github.io/webcomponents/spec/shadow/
7.http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/
8.https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM
9.https://github.com/facebook/react/wiki/Complementary-Tools
10.https://ww.youtube.com/watch?v=MGuKhcnrqGA
11.https://ww.youtube.com/watch?v=XxVg_s8xAms
12.https://ww.youtube.com/watch?v=-DX3vJiqxm4
13.https://msdn.microsoft.com/en-us/library/ms752347(v=vs.100).aspx
14.https://www.youtube.com/watch?v=mVjpwia1YN4#t=348
15.https://en.wikipedia.org/wiki/Memoization
16.https://davidwalsh.name/pubsub-javascript
17.https://github.com/FormidableLabs/victory
18.https://webkit.org/blog/4096/introducing-shadow-dom-api/
19.https://facebook.github.io/react/docs/advanced-performance.html
20.https://facebook.github.io/react/docs/reconciliation.html
21.https://facebook.github.io/react/docs/component-specs.html
22.http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/
23.http://www.bennadel.com/blog/2903-why-should-i-care-about-immutable-data-in-reactjs.htm
24.http://www.bennadel.com/blog/2904-shouldcomponentupdate-will-short-circuit-an-entire-subtree-of-components-in-reactjs.htm
25.http://blog.andrewray.me/reactjs-for-stupid-people/
26.https://thebhwgroup.com/blog/intro-to-react
27.https://hashnode.com/post/does-react-really-violate-separation-of-concern-by-putting-html-and-js-in-a-single-file-cil3bn5hj0011a65347rsdut0
28.https://ww.youtube.com/watch?v=xE3SIN_U9gw
29.https://en.wikipedia.org/wiki/User-centered_design
30.https://facebook.github.io/react/docs/multiple-components.html
31.https://en.wikipedia.org/wiki/Declarative_programming
32.https://en.wikipedia.org/wiki/React_(JavaScript_library)
33.http://techcrunch.com/2012/04/09/facebook-to-acquire-instagram-for-1-billion/
34.https://en.wikipedia.org/wiki/Functional_programming
35.http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
36.http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/
37.https://en.wikipedia.org/wiki/Expressive_power_(computer_science)
38.https://facebook.github.io/react/docs/jsx-in-depth.html
39.https://en.wikipedia.org/wiki/Leaky_abstraction
40.https://www.toptal.com/react/navigating-the-react-ecosystem

*As of May 18, 2016
Vocab
  Data binding & the observer pattern: 13
    Data binding is the process that establishes a connection between the application UI and business logic. If the binding has the correct settings and the data provides the proper notifications, then, when the data changes its value, the elements that are bound to the data reflect changes automatically. Data binding can also mean that if an outer representation of the data in an element changes, then the underlying data can be automatically updated to reflect the change. For example, if the user edits the value in a TextBox element, the underlying data value is automatically updated to reflect that change.
      -key value Observation (ember,knockout, backbone, etc)
        observables and computed properties
          observables: values that can notify other things when they change
          computed properties: combining one/more observables into another thing with other things
          have to remember all of the observables and hold it in memory (very expensive)
      14
      -Dirty Checking (angular, google polymer)
        periodically check for changes for all items in scope, if any elements within scope are dirty (different that current state), update relevant nodes and set new state
          big scope? lots of objects? a lot of compute time
      Virtual Dom:
        1. observe a signal that something changes
        2. diff prev state with next state
        3. update
  mutating state directly: when you change the value of a state object (array/object) instead of creating a new object
    changing state directly does not update ther eference, so object A will always == Object B if both point to object C

    34
  functional programming
    In functional code, **the output value of a function depends only on the arguments that are input to the function, so calling a function f twice with the same value for an argument x will produce the same result f(x) each time**. Eliminating side effects, i.e. changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.
    In contrast, imperative programming changes state with commands in the source language, the most simple example being assignment. Imperative programming does have functions—not in the mathematical sense—but in the sense of subroutines. **They can have side effects that may change the value of program state. Functions without return values therefore make sense. Because of this, they lack referential transparency, i.e. the same language expression can result in different values at different times depending on the state of the executing program.**[3]

notes
  observables: this.state
  observers: <div>{this.state.textContent}</div>
  performance
    mobile: all about memory
    desktop: all about cpu
    benchmarks
      initial render
      warm updates
      steady state memory (after garbage collection)
  Big O notation (o of n)
    O(v) : O of your view
    O(m): O of your model
