page 79: checkbox and radio

BEST PRACTICES
  Anti-pattern. Calculated values should not be stored as
    avoid this:
      constructor(props){
        super();
              //
          state.
        this.state = {day: props.date.getDay()};
      }
    and do this:
      render(){
        return (
        <div>Day: {this.props.date.getDay()}</div>
        );
      }

nodejs modules
  react-redux: combines the redux module and the react module, so that react can use redux to manage application state
  react-router: single page application router that loads components when the browser url matches the route definition assigned to the component
  react-dom: as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.
    API
      react-dom
        findDOMNode
        render
        unmountComponentAtNode
      react-dom/server
        renderToString
        renderToStaticMarkup
  react-proxy:
    Proxies React components without unmounting or losing their state

  react-addons-pure-render-mixin:
    https://facebook.github.io/react/docs/pure-render-mixin.html
    Under the hood, the mixin implements shouldComponentUpdate, in which it compares the current props and state with the next ones and returns false if the equalities pass.

  react-addons-test-utils:
    makes it easy to test React components in the testing framework of your choice
    does the samething as enzyme

  redux: Redux is a predictable state container 'for' JavaScript apps.
  babel: Babel is a JavaScript compiler. transpiles ES6 to ES5 code for use by all browsers (including IE8 and up)
    http://babeljs.io/docs/plugins/
    babel-core:
    babel-plugin-react-transform:
      .Babel plugin to instrument React components with custom transforms
      .This plugin wraps React components with arbitrary transforms. In other words, it allows you to instrument React components in any way—limited only by your imagination.
    babel-preset-airbnb:
      A babel preset 'for' transforming your JavaScript 'for' Airbnb.
    babel-preset-es2015:
      All you need to compile ES2015 to ES5
      This preset includes the following plugins:
        check-es2015-constants
        transform-es2015-arrow-functions
        transform-es2015-block-scoped-functions
        transform-es2015-block-scoping
        transform-es2015-classes
        transform-es2015-computed-properties
        transform-es2015-destructuring
        transform-es2015-duplicate-keys
        'transform-es2015-for-of'
        transform-es2015-function-name
        transform-es2015-literals
        transform-es2015-modules-commonjs
        transform-es2015-object-super
        transform-es2015-parameters
        transform-es2015-shorthand-properties
        transform-es2015-spread
        transform-es2015-sticky-regex
        transform-es2015-template-literals
        transform-es2015-typeof-symbol
        transform-es2015-unicode-regex
        transform-regenerator
    babel-preset-stage-0:
      This preset includes the following plugins:
        transform-do-expressions
        transform-function-bind
      And all plugins from presets:
        preset-stage-1
        preset-stage-2
        preset-stage-3
    babelify: use whenever youre using browserify
      Babel browserify transform.

  browserify: Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
    browserify builds with watchify
      https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

    budo:
      This is a browserify development server inspired by beefy and wzrd, but specifically focused on incremental reloading, LiveReload integration (including CSS injection), and other high-level features.

    watchify:
      Update any source file and your browserify bundle will be recompiled on the spot.
      as you update files, static/bundle.js will be automatically incrementally rebuilt on the fly.
    errorify:
      A browserify plugin that writes the error message of a failed build to the output file, rendering it in the browser.
  chai:
    Chai is a BDD / TDD assertion library 'for' node and the browser that can be delightfully paired with any javascript testing framework.
    chai-enzyme:
      Chai.js assertions and convenience functions 'for' testing React Components with enzyme
    chai-immutable:
      Chai assertions 'for' Facebooks Immutable library 'for' JavaScript collections
  enzyme: react testing utility simplifying assert, manipulate and traversal of react components output
    https://github.com/airbnb/enzyme
  gulp:
    Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file
    gulp-autowatch:
      Sugar 'for' reusing a paths object to watch and run gulp tasks
      .run tasks based on file paths
        // key = task name to run
        // value = glob or array of globs to watch
        var paths = {
          vendor: './client/vendor/**/*',
          coffee: './client/**/*.coffee',
          jsx: './client/**/*.jsx',
          stylus: './client/**/*.styl',
          html: './client/**/*.html',
          config: './server/config/*.json'
        };
        gulp.task('watch', function() {
          autowatch(gulp, paths);
        });
    gulp-mocha:
      run mocha tests from gulp in the same process as gulp
    gulp-spawn-mocha:
      run mocha tests from gulp in a child process separate from gulp
    gulp-rename: rename files
    gulp-sass: sass plugin 'for' gulp
    gulp-sourcemaps: source map support

    vinyl-buffer: An alternative to gulp-streamify that you can pipe to, instead of being required to wrap your streams.
    vinyl-source-stream:
     This module is just a bridge that makes it simple to use conventional text streams such as this in combination with gulp. Heres an example of using vinyl-source-stream and browserify, compared to using gulpify:
      take, 'for' example, browserify. Theres the gulp-browserify and gulpify plugins, which you can use in combination with gulp to get browserify working in your build. Unfortunately, these plugins come with additional overhead: an extra GitHub repository, npm module, maintainer, tests, semantics, etc. Its much simpler in this case to use the original module directly where you can, which is what vinyl-source-stream handles 'for' you.

      API
        stream = sourceStream([filename])

        Creates a through stream which takes text as input, and emits a single vinyl file instance 'for' streams down the pipeline to consume.

        gulp.task('gulpify', function() {
          gulp.src('index.js')
            .pipe(gulpify())
            .pipe(uglify())
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('./'))
        })

        // using vinyl-source-stream:
        gulp.task('browserify', function() {
          var bundleStream = browserify('./index.js').bundle()

          bundleStream
            .pipe(source('index.js'))
            .pipe(streamify(uglify()))
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('./'))
        })
    gulp-eslint: processing files with eslint

  del: delete files, very useful 'for' cleaning directories
  jsdom:
    A JavaScript implementation of the WHATWG DOM and HTML standards, 'for' use with node.js
  livereactload:
    Live code editing with Browserify and React
  lodash:
    Lodash makes JavaScript easier by taking the hassle out of working with arrays,
    numbers, objects, strings, etc. Lodash’s modular methods are great for:
      Iterating arrays, objects, & strings
      Manipulating & testing values
      Creating composite functions

  mocha:
    test framework that creates describe blocks
    runs your test assertionlibrary

  node-sass:
    Node-sass is a library that provides binding 'for' Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

    It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.


  sinon: standalone test spies, stubs and mocks 'for' use with a unit testing framework (e.g. mocha)
    .it is a mocking framework
    test spies: allow you to record method invocations 'for' later verification. i.e. to confirm a method was called with certain attributes or arguments
    stubs:
    mocks: create an object that mimicks the 'interface' of a real object, in order to test some other object
      object A depends on object B
      1.instead of including object B, you create a dummy object B and send it to object A
      2.test object A performs as expected

    sinon-chai:
      Extends Chai with assertions 'for' the Sinon.JS mocking framework.



terminology
  state: JSON object representing all the mutable values of your application, i.e. anything that can change based on an event/interaction/etc
    applicationState = {
      searchText: 'boom',
      completed: false,
      todoItems: [
        {
          id:1,
          text: 'do this'
        },
        {
          id:2,
          text: 'do that'
        }
      ]
    }

  actions: JSON objects that represent events that may trigger state changes through reducers
    someAction = {
      type: 'UPDATE_VALUE',
      value: '123 blah boop'
    }

  action creators: functions return formal JSON action objects
    someActionCreator = (value){
      return {
        type: 'UPDATE_VALUE',
        value: value
      }
    }

  dispatching an action: components dispatch actions to reducers in order for reducers to update redux state. this is the only way to update state with redux
    dispatch(actionCreator(blah));
    dispatch({type:'THIS_EVENT',data:blah}})

  reducers: functions that take an action and the current state, apply actions to the current state, and returns a new state. Redux then re-renders all components that are impacted by the state changes

  store: a single object representing the entire state of your application
    import redux from 'redux';
    store = redux.createStore();

  presentational components: react specific component, no redux logic should be in here

  container components: parent component 'for' presentational components, contain all of the redux logic and passes data down to presentational components

  higher order components: container components that take a child component as an argument and return another component
    -uses props to pass data to its child components
    -typically used for:
      1.global events
      2.binding to flux stores
      3.timers/intervals
      4.any imperative API that you want to use declaratively
      5.powerful abstractions to eliminate code repition and keeping components focused

  component: render DOM data directly, or render other components that render DOM data. They also list 'for' user and server events

  Provider (from react-redux): allows a root component to provide the redux store to its children. use with Connect

  Connect (from react-redux): allows you to specify which state from the redux store this component needs to operator
    -connect gets called after the component has been created
    -this automatically updates this.state and this.props with the values from the redux store
    -on this.props inside your component you will have access to:
      dispatch() //import the actions and you can use this to dispath actinos to the store


APIs
  redux
    const store = redux.createStore(reducer, initialState, compose())

  redux store
    const currentState = store.getState(); //current state of the store
    let subscriber = store.subscribe( () =>{
      //do this on each update to the state
      //e.g.
    });

  redux compose
    apply middleware to redux

  redux combineReducers
    combine multiple reducers into one object, and pass that into the redux store

  react-router
    https://github.com/reactjs/react-router/blob/master/docs/API.md

  enzyme
    https://github.com/airbnb/enzyme
    shallow rendering
      component no children
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find(Foo)).to.have.length(3);
      component with children
        const wrapper = shallow(
          <MyComponent>
            <div className="unique" />
          </MyComponent>
        );
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
      simulate click event
        const onButtonClick = sinon.spy();
        const wrapper = shallow(
          <Foo onButtonClick={onButtonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);
    full DOM rendering
      testing set props
        const wrapper = mount(<Foo bar="baz" />);
        expect(wrapper.props().bar).to.equal("baz");
        wrapper.setProps({ bar: "foo" });
        expect(wrapper.props().bar).to.equal("foo");

      simulate click events
        const onButtonClick = sinon.spy();
        const wrapper = mount(
          <Foo onButtonClick={onButtonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);

      calls a function
        sinon.spy(Foo.prototype, 'componentDidMount');
        const wrapper = mount(<Foo />);
        expect(Foo.prototype.componentDidMount.calledOnce).to.be.true;
        Foo.prototype.componentDidMount.restore();

book
  React is essentially a “state machine,” helping you manage the complexity of state changing over time. It achieves this by having a very narrow scope. It is concerned with only two things:
    1. Updating the DOM
    2. Responding to events

  JSX
    (JavaScript XML) is a way of writing declarative XML style syntax inside JavaScript

  COMPONENTS
    -everything in react boils down to components.
    -the entire UI is represented as components
    -components are used to separate concerns, not templates and display log
    1. JSX is a syntactic transform — each JSX node maps to a JavaScript function.
    2. JSX neither provides nor requires a runtime library.
    3. JSX doesn’t alter or add to the semantics of JavaScript—it’s just simple function calls.

    NON JSX
      React.createElement('h1', {className: 'question'}, 'Questions');

    WITH JSX
      <h1 className="question">Questions</h1>

  DYNAMIC VALUES
    React will automatically evaluate arrays by rendering each item in the array as a node.
    var text = ['hello', 'world'];
    <h2>{text}</h2> // <h2>helloworld</h2>

  CHILD NODES
    <div>text</div>
    text is a child text-node of div.
    -in react. all child nodes between the open and close tags are contained in this.props.children
    -the actual structure of children is undocumented, so dont try to access it, just pass it around as is

  ATTRIBUTES
    someAttribute='literal value'
    someAttribute={variable}
    someAttribute={functionCall()}
    someAttribute={truthyVar ? 'literal' : ''}
    someAttribute={truthyVar && 'literal'} //literal is used if truthyVar is truthy, can be a function call as well
    To create a form label with the 'for' attribute use htmlFor.
      <label htmlFor="for-text" ... />
    To specify a 'class' name
      <div className={classes} ... ></div>

  PRESENTATIONAL COMPONENTS
    //stateless, no React API methods available
    const Prezi = (props) => {
      return props.blah ? <div> {props.blah} </div>: null;
    }

    //stateful, all React API Methods available
    class Prezi1 extends React.Component {
      super(props) {
        //check props
        //setup state

      }
      render() {
        return (
          <div>...</div>
        )
      }
    }

  CONTAINER COMPONENTS
    -container with child of single type
      class Container1 extends React.Component {
        ...
        render() {
          return (
            <div>
              <Prezi ... />
            </div>
          )
        }
      }
    -container with child of multiple type
      class Container2 extends React.component {
        ...
        renderMultiple() { //random function
          this.props.preziChild.map((item) => {
            return (
              <Prezi ... />
            );
          })
        }

        render() {
          return (
            <div>
              {this.renderMultiple()}
            </div>
          )
        }

      }
    -container that handles state with callback
      class Container2 extends React.Component {
        constructor(props){
          super(props)
          ...
          this.handleChanged = this.handleChanged.bind(this) //bound the function to the instance
        }

        handleChanged(value) {
          //sanitize and validate value
          ...
          this.setState({value:value})
          this.props.onCompleted(value) //update child props to re-render children
        }
        render() {
          return (
            <div>
              ...
              <SomeInput
                ...
                onCompleted={this.props.onCompleted} //will force rerender when changed
                onChanged={this.handleChanged}
                />
            </div>
          )
        }
      }
        --the child component should watche 'for' changes, and pass the value up to its parent
        class SomeInput extends React.Component {
          constructor(props){
            super(props)
            //state and props!
            this.handleChanged = this.handleChanged.bind(this)
          }

          handleChanged(e){
            e.preventDefault();
            let checked = e.target.checked;
            this.setState({checked:checked});
            if(checked){
              this.props.onChanged(this.props.value)
            }
          }

          render() {
            return (
              <div>
                <input onChange={this.handleChanged} />
              </div>
            )
          }

        }

    -higher order component that provides some prop
      1.create the function that returns the component
        function providesHigherOrderComponent(Component){
          return class someHigherOrderComponent extends React.Component {
            render() {
              return <Component {...this.props} someProp='blah' />
            }
          }
        }

      2.call the function
        var SomeComponent = providesHigherOrderComponent(
          class thisComponent extends React.Component{
            render() {
              return (
                <div>
                  ...
                  This does that {this.props.someProp}
                </div>
              )
            }
          }
        )

    -sending info from child to parent via props
      1.pass callback via props from parent to child
      2.the child calls callback when it needs to send data to parent
      3.the parent handles data, e.g. updating state/this.props
      4.when parent updates props, react forces all child componetns dependent on props to re-rende

  LIFE CYCLE METHODS
    summary
      instantiation:
        1. constructor(props)
        1. getDefaultProps({})
        1. getInitialState({})
        1. propTypes({}) //instance specification
        1. mixins[] //instance specification
        1. statics{} //class methods
        2. componentWillMount() //client + server, update state
        3. render() //never set state, pure function
        4. componentDidMount() //access refs, integrate with 3rdpartylibraries, set timers, ajax requests
      lifetime:
        1. componentWillReceiveProps(nextProps) //inspect new properties, set state
        2. shouldComponentUpdate(nextProps, nextState) //compare props+state, eturn false to stop re-rendering
        3. componentWillUpdate(nextProps, nextState) //never set state, chance to prepare for changes
        4. render()
        5. componentDidUpdate(prevProps, prevState) //operate on actual dom elements
      teardown/cleanup:
        1. componentWillUnmount() //cleanup: timers, undo actions in componentDidMount()

    instantiation: called the first time an instance is created
      1.constructor: setup instance properties and set state values if not using redux
        constructor(props,context)
        -example
          class Foo extends React.Component {
            constructor(props){
              super(); // call the parent constructor, required
              var id = props.id ? props.id : uniqueId();
              this.state = {x: 'y', id:id};
            }
          }

      2.componentWillMount: invoked immediately before the initial render. the last chance to affect the component state before render is called

      3.render: build the virtual DOM that represents your component output
        -the only data it can access is this.props and this.state
        -you can return null, false, or any react element
        -must be pure & cannot change state or modify DOM output

      4.componentDidMount: after the render is successful and the actual DOM has been rendered.
        -IS NOT CALLED WHEN RUNNING ON THE SERVER
        -you can access it inside of compondentDidMount via React.findDOMNode(this) or by using a ref
        -use to access the raw DOM
        -measure the height of rendered output
        -manipulate timers
        -run a custom jquery plugin, etc
        -example
          // A list of strings to autocomplete
          var datasource = [...];
          class MyComponent extends React.Component {
            componentDidMount() {
              $(React.findDOMNode(this)).autocomplete(
                {sources: datasource}
              );
            }
            render() {
              ...
            }
        }

    lifetime: as the app state changes and your component is affected
      1.componentWillReceiveProps: chance to change the new props passed to the component or update state
        -example
          componentWillReceiveProps(nextProps) {
            var boardId = nextProps.params.boardId; if(boardId !== this.props.params.boardId) {
                  Actions.State.changeBoard({type: 'board', name: boardId});
                }
          }
      2.shouldComponentUpdate: helpful to make react even faster and optimize when a component renders
        -If you are certain that the new props or state will not require your component or any of its children to render, return false.
          -returning false will:
            -skip render()
            -skip componentWillUpdate()
            -skip componentDidUpdate()
        -not called on the initial render or if you use forceUpdate
      3.componentWillUpdate: triggered immediately before rendering when new props/state have been received
      4.render
      5.componentDidUpdate: opportunity to update the rendered DOM

    teardown and cleanup: when the component will be removed from the DOM
      1.componentWillUnmount: any custom work you may have done in componentDidMount(), e.g. creating timers/adding event listeners, should be removed here

  SPECIAL ATTRIBUTES
    key=uniqueIdentifier
      -Items and lists can change relative to their sib- lings, 'for' example as the user performs a search or items are added, removed, or reordered in a list. When this happens, your component might be needlessly destroyed and recreated React may perform naive updates.
    ref=someName
      this.refs.someName //retrieve the component
      this.refs.someName.value //retrieve the value from an input
        -you can retrieve this component after its rendered
        -especially good 'for' accessing input component values or retrieving anything from the real DOM

    dangerouslySetInnerHTML: used to set HTML content as a string
      -example
        ...
          render() {
        var htmlString = {
        __html: "<span>an html string</span>"
        };
        return <div dangerouslySetInnerHTML={htmlString} ></div>; }
        ...

  STYLES
    -React normalizes all styles to camelCased names, consistent with the DOM style JavaScript property.
      var styles = { borderColor: "#999", borderThickness: "1px" };
      <div style={styles}>...</div>

  EVENTS
    -Event names are normalized across all browsers and are represented in camelCase. For example, change becomes onChange, and click becomes onClick.
    example
      ...
      handleClick(event) {...}
      render() {
        return (
          <div onClick={(e) => this.handleClick(e)} >
          ...
          </div>
        );
      }
      ...

  DATA FLOW
    -is unidirectional, from parent to child

    STATE
      -is internal to the component

    PROPS
      -short 'for' properties
        1.
          var comments = [{ author: 'Example', body: 'Hey' }];
          <Comments comments={comments} ></Comments>
        2.
          <Link to={'/user/' + comment.author}></Link>

    PROPTYPES
      -used to document the API of your component

    DEFAULTPROPS
      -default set of properties 'for' your component

  DOM MANIPULATION
    -using ref attribute
      class randomComponent extends React.Component {

        componentDidMount() {
          let thisComp = this.refs.someUniqueName;
          let thisHtml = thisComp.innerHTML;
          ...
        }
        handleSomeEvent() {
          let thisComp = this.refs.someUniqueName;
          let thisHtml = thisComp.innerHTML;
          ...
        }
        render() {
          return (
            <div ref='someUniqueName'></div>
          )
        }
      }
    -finding any dom node
      class someComp extends React.Component{
        handleSomeEvent() {
          let thisComp = ReactDOM.findDOMNode(this);
          let html = thisComp.innerHTML;
          ...
        }
      }
    -event handlers and componentDidMount
      .can lead to memory leaks or other problems if your compo- nentDidMount has side effects that can survive the DOM node’s removal.
      .If this is a concern, make sure to specify a componentWillUnmount handler to have the component clean up after itself when its DOM node is going away.
    -If you have a very bad plugin that modifies par- ent elements, there’s nothing you can do, and it’s incompatible with React.
      -page 70

  FORMS: UN/CONTROLLED COMPONENTS
    best practices:
      1.useability: support as many browser/mobile events as appropriately possible
      2.communicate requirements: use labels, placeholders, and auto-complete attributes
      3.show validation hints on the side of inputs, not as placeholders (when they type the placeholder dissapears)
      4.give immediate feedback: validation errors should show immedately (e.g. on blur event/or when they leave the input)
      5.use animations: spinners, progress bars, notification messages, etc. to show activity is happening
      6.REDUCE USER INPUT!

    form events:
      .All of the events produced by HTML are supported in React.
      .They follow camel case naming conventions and are converted to synthetic events.
      .They are standardized, with a common 'interface' cross browser.
      .All synthetic events give you access to the DOMNode that emitted the event via event.target.

      example:
        .This is one of the easiest ways to access the value of Controlled components.
        .For elements that have children you need to use event.currentTarget

          handleEvent(syntheticEvent) {
            var node = syntheticEvent.target;
            var newValue = node.value;
          }

    focusing on elements:
      -Since React forms are not always rendered at browser load, the auto focus 'for' form in- puts needs to operate a little differently.
        -React has implemented autoFocus so when the component is first mounted, if no other form input has focus, React will place focus on the input.
        //jsx
        <input type="text" name="given_name" autoFocus="true" />
        //or in an event handler
        this.refs.todo.focus();
        
    uncontrolled:
      -When an HTML <input/> is given a value, the <input/> can then mutate the value of the <input/>
      -i.e. the form component’s value is Uncontrolled by your Re- act component.
      -Uncontrolled components are rarely good to use.
        .They don’t allow you to render based on the current value of inputs, and your code is written in a DOM-centric way rather than in a data-centric way.
        .They also make composition more difficult because there’s no standard way to get the value of an input in a composite component.

      examples:
        .input with default value
          <input
            type="text"
            defaultValue="Hello World!"
          />
          //this is uncontrolled, because the input can modify its own value property (i.e if a user types something into it). and it is not being controlled by react

        .input with ref and form submit handler
          class blah extends.... {
            submitHandler(event) {
              event.preventDefault();
              //access the input by it's ref
              var helloTo = this.refs.helloTo.value;
              alert(helloTo);
            }

            render() {
              <form onSubmit={(e) => this.submitHandler(e)}>
                <input
                  ref="helloTo"
                  type="text"
                  defaultValue="Hello World!" />
                <br />
                <button type="submit">Speak</button>
              </form>
              ); }
            }
          }

    controlled:
      -The state of the form component is Controlled by your React component, with it’s value being stored in your React component’s state.
      -A Controlled component is where the parent component set’s the value of the input.

      examples:
        .controlled input with form submit handler
          1.constructor now sets the defaultValue
          2.<input/> value is set during render
          3.onChange of the <input/> value the change handler is invoked
          4.change handler updates the state
          5.<input/> value is updated during render
          class form extends .... {
            constructor() {
              super();
              this.state = {
                helloTo: 'Hello World!'
              }
            }

            handleChange(value) {
              this.setState({
                helloTo: value
              });
            }
            submitHandler(event) { event.preventDefault();
              alert(this.state.helloTo);
            }

            render() {
              return (
                <form onSubmit={(e) => this.submitHandler(e)}>
                  <input
                    type="text"
                    value={this.state.helloTo}
                    onChange={(e) => this.handleChange(e.target.value)} />
                  <br />
                  <button type="submit">Speak</button>
                </form>
              )
            }
          }

    labels:
      JSX:
        <label htmlFor="name">Name:</label>
      after render:
        <label for="name">Name:</label>

    textarea:
      -<textarea/> is changed to be closer to <input/> allowing you to specify value and defaultValue.

      Uncontrolled:
        <textarea defaultValue="Hello World" />
      Controlled:
        <textarea value={this.state.helloTo} onChange={this.handleChange} />

    select:
      -<select/> now accepts value and defaultValue to set which option is select- ed.

      Uncontrolled:
        <select defaultValue="B">
          <option value="A">First Option</option>
          <option value="B">Second Option</option>
          <option value="C">Third Option</option>
        </select>

      Controlled:
        <select value={this.state.helloTo} onChange={this.handleChange}>
          <option value="A">First Option</option>
          <option value="B">Second Option</option>
          <option value="C">Third Option</option>
        </select>

    multiselect:
      -In order to use multi select you must pass an array to value and defaultValue.
      -the value of the select component is not updated when the options are selected.
        .Only the selected property of the option is changed.
        .Using a given ref or syntheticEvent.target you can access the options and check if they are selected.

      Uncontrolled:
        <select multiple="true" defaultValue={["A","B"]}>
          <option value="A">First Option</option>
          <option value="B">Second Option</option>
          <option value="C">Third Option</option>
        </select>

      controlled:
        -loop over DOM to see which option is selected
        class blah extends .... {
          constructor() {
            super();
            this.state = {
              options: ["B"]
            };
          }
          handleChange(event) {
            var checked = [];
            var sel = event.target;
            for(var i=0; i < sel.length; i++){
              var option = sel.options[i];
              if (option.selected){
                  checked.push(option.value);
              }
            }
            this.setState({
              options: checked
            });
          }

          submitHandler(event) {
            event.preventDefault();
            alert(this.state.options);
          }
          render() {
            return (
              <form
                onSubmit={(e) => this.submitHandler(e)}>
                <select
                  multiple="true"
                  value={this.state.options}
                  onChange={(e) => this.handleChange(e)} >
                  <option value="A">First Option</option>
                  <option value="B">Second Option</option>
                  <option value="C">Third Option</option>
                </select>
                <br />
                <button type="submit">Speak</button>
              </form>
            );
          }
        }

    checkbox and radio:
      -To control a checkbox or radio input, you need to control the checked attribute.
      -You can also use defaultChecked in an uncontrolled checkbox or radio input.
      -the value never changes, only the checked attr changes

      example:
        uncontrolled: checkbox
          class blah extends....{
            submitHandler(e){
              e.preventDefault();
              alert(this.refs.mycheckbox.checked);
            }
            render() {
              return (
                <form onSubmit={(e) => this.submitHandler(e)}>
                  <input
                    ref="mycheckbox"
                    type="checkbox"
                    value="A"
                    defaultChecked="true" />
                  <br />
                  <button type="submit">Speak</button>
                </form>
              );
            }
          }
        controlled: checkbox
          class blah extends ... {
            constructor() {
              super();
              this.state = {
                checked:true
              }
            }
            handleChange(event) {
              this.setState({
                checked: event.target.checked
              });
            }
            submitHandler(event) {
              event.preventDefault();
              alert(this.state.checked);
            }
            render() {
              return (
                <form onSubmit={(e) => this.submitHandler(e)}>
                  <input
                    type="checkbox"
                    value="A" checked={this.state.checked}
                    onChange={this.handleChange}
                        />
                  <br />
                  <button type="submit">Speak</button>
                </form>
              );
            }
          }

        uncontrolled: radio group
          class blah extends .... {
            constructor() {
              super();
              this.state = {
                radio: "B"
              }
            }
            handleChange(event) {
              this.setState({
                radio: event.target.value
              });
            }
            submitHandler(event) {
              event.preventDefault();
              alert(this.state.radio);
            }
            render() {
              return (
                <form onSubmit={(e) => this.submitHandler(e)}>
                  <input
                    type="radio"
                    value="A"
                    checked={this.state.radio == "A"}
                    onChange={(e) => this.handleChange(e)} /> A
                  <br />
                  <input
                    type="radio"
                    value="B"
                    checked={this.state.radio == "B"}
                    onChange={(e) => this.handleChange(e)} /> B
                    <br />
                  <input
                    type="radio"
                    value="C"
                    checked={this.state.radio == "C"}
                    onChange={(e) => this.handleChange(e)} /> C
                  <br />
                  <button type="submit">Speak</button>
                </form>
              );
            }
          }

    name attr:
          -name attr on form elements carry less importance in react
            .you can access them by their 'value' attribute
            .you can access them by their 'ref' attribute
            .you can manage their properties via state
            .name attr is still important outside react
              -allow third party form serializers to work within react
              -required if the form is natively submitted
              -used by the client 'for' auto filling common information
              -crucial 'for' uncontrolled radio inputs
                .that is how they are grouped to ensure only one radio with the same name in a form can be checked at once
          examples:
            .use string literal to identify inputs and update state
              class blah extends .... {
                constructor() {
                  super();
                  this.state = {
                    given_name: '',
                    family_name: ''
                  };
                }
                handleChange(name, event) {
                  //oldschool
                  var newState = {};
                  newState[name] = event.target.value;
                  this.setState(newState);

                  // or the es6 version
                  this.setState({
                    [name]: event.target.value,
                  });
                }

                submitHandler(event) { event.preventDefault(); var
                  words = [
                    "Hi",
                    this.state.given_name,
                    this.state.family_name
                  ];
                  alert(words.join(" "));
                }
                render() {
                  return (
                    <form onSubmit={this.submitHandler}>
                      <label
                        htmlFor="given_name">Given Name:</label>
                      <br />
                      <input
                        type="text"
                        name="given_name"
                        value={this.state.given_name}
                        onChange={(e) => this.handleChange('given_name', e)}/>
                      <br />
                      <label
                        htmlFor="family_name">Family Name:</label>
                      <br />
                      <input
                        type="text"
                        name="family_name"
                        value={this.state.family_name}
                        onChange={(e) => this.handleChange('family_name',
                        e)}/>
                      <br />
                      <button type="submit">Speak</button>
                    </form>
                  );
                }
              }

            .use name attr to identify inputs and update state
              -same structure as example 1
                handleChange(event) {
                  this.setState({
                    [event.target.name]: event.target.value
                  });
                }
                render() {
                  return (
                    <form onSubmit={this.submitHandler}>
                      <label
                        htmlFor="givenName">Given Name:</label>
                      <br />
                      <input
                        type="text"
                        name="givenName"
                        value={this.state.givenName}
                        onChange={(e) => this.handleChange(e)}/>
                      <br />
                      <label
                        htmlFor="familyName">Family Name:</label>
                      <br />
                      <input
                        type="text"
                        name="familyName"
                        value={this.state.familyName}
                        onChange={this.handleChange}/>
                      <br />
                      <button type="submit">Speak</button>
                    </form>
                  );
                }

    custom form components:
      examples:
        .custom radio component:
          class Radio extends React.Component {
            static propTypes = {
              onChange: React.PropTypes.func
            }
            constructor() {
              super();
              this.state = {
                value: this.props.defaultValue
              }
            }
            handleChange(event) {
              if (this.props.onChange) { this.props.onChange(event);
              }
              this.setState({
                value: event.target.value
              });
            }
            render() {
              var value = this.props.value || this.state.value;
              var children = React.Children
                .map(this.props.children, (child, i) => {
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name={this.props.name}
                        value={child.props.value}
                        checked={child.props.value == value}
                        onChange={this.handleChange} />
                      {child.props.children}
                      <br/>
                    </label>
                  );
                });
              return this.transferPropsTo(<span>{children}</span>);
              //dont use transferpropsto https://gist.github.com/sebmarkbage/a6e220b7097eb3c79ab7
            }
          }

        .implementation of example1: uncontrolled
          var MyForm = React.createClass({
            submitHandler: function (event) { event.preventDefault(); alert(this.refs.radio.state.value);
            },
            render: function () {
              return (
                <form onSubmit={this.submitHandler}>
                  <Radio
                    ref="radio"
                    name="my_radio"
                    defaultValue="B">
                      <option value="A">First Option</option>
                      <option value="B">Second Option</option>
                      <option value="C">Third Option</option>
                  </Radio>
                  <button type="submit">Speak</button>
                </form>;
              );
            }
          });

        .implementation of example1: controlled
          var MyForm = React.createClass({
            getInitialState: function () {
              return {my_radio: "B"};
            },
            handleChange: function (event) {
              this.setState({
                my_radio: event.target.value
              });
            },
            submitHandler: function (event) {
              event.preventDefault();
              alert(this.state.my_radio);
            },
            render: function () {
              return (
                <form
                  onSubmit={this.submitHandler}>
                  <Radio
                    name="my_radio"
                    value={this.state.my_radio}
                    onChange={this.handleChange}>
                    <option value="A">First Option</option>
                    <option value="B">Second Option</option>
                    <option value="C">Third Option</option>
                  </Radio>
                  <button type="submit">Speak</button>
                </form>
              );
            }
          });

  ANIMATIONS
    -CSS Transition Groups facilitate applying CSS animations to transitions, by strategically adding and removing classes during appropriately timed renders and re-renders.
      -This means the only task you are le  with is to specify the appropriate CSS styles 'for' those classes.

      CSS Transition Groups:
        https://facebook.github.io/react/docs/animation.html
        -the transition group will defer removing child components until animations complete.
          .This means that if you wrap a list of components in a transition group, but do not specify any CSS 'for' the transitionName classes, those components can no longer be removed, even if you try stop rendering them!
        -transition group children must each have a unique key attribute set.
          .The transition group uses these values to determine when components are entering or leaving the group, so animations can fail to run and components could become impossible to remove if they are missing their key attributes.
          .even if the transition group only has a single child, it must still have a key attribute.

        examples:
          -transition an element in an out.
          -editingPane is either a component/null
          var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
          <ReactCSSTransitionGroup
            transitionName='EditingPaneTransition'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={1200}>
            {editingPane}
          </ReactCSSTransitionGroup>

        Styling transition classes:
          -transitionName automatically applies the following classes during transitions:
            BLAH-enter,
            BLAH-enter-active,
            BLAH-leave,
            BLAH-leave-active.
              BLAH = the string you supplied to transitionName='blah'
          -you can alternatively supplie your own names instead of passing a string literal, pass an object
            <ReactCSSTransitionGroup
              transitionName={ {
                enter: 'enter',
                enterActive: 'enterActive',
                leave: 'leave',
                leaveActive: 'leaveActive',
                appear: 'appear',
                appearActive: 'appearActive'
              } }>
              {item}
            </ReactCSSTransitionGroup>
          -you can disable certain transitions 'for' components by supplying false boolean
            <ReactCSSTransitionGroup
              transitionName='EditingPaneTransition'
              transitionEnter={this.props.enableAnimations}
              transitionLeave={this.props.enableAnimations} >
              {questions}
            </ReactCSSTransitionGroup>
          -you need to provide the appropriate styling in your CSS file
            .BLAH-enter {
              transform: scale(1.2);
              transition: transform 0.3s cubic-bezier(.97,.84,.5,1.21);
            }
            .BLAH-enter-active {
              transform: scale(1);
            }
            .BLAH-leave {
              transform: translateY(0);
              opacity: 0;
              transition: opacity 1.2s, transform 1s cubic-bezier(.
              52,-0.25,.52,.95);
            }
            .BLAH-leave-active {
              opacity: 0;
              transform: translateY(-100%);
            }
            .BLAH-appear {
              //other stuff
            }
            .BLAH-appear-active {
              //other stuff
            }

    -Interval Rendering gives you more flexibility and control, at a cost to performance (requires a lot of rerendering).
      -It requires many more re-renderings, but allows you to animate more than just CSS, such as scroll position and Canvas drawing.
      -periodically trigger a component state update that specifies how far the animation has progressed across its total running time.
        .By incorporating this state value into a component’s render function, the component can represent the appropriate stage of the animation each time the state change causes it to re-render.
      -it’s typically best to use it in conjunction with requestAnimationFrame in order to avoid unnecessary renders.
        .However, in environments where requestAnimationFrame is unavailable or otherwise undesirable, falling back on the less-predictable setTimeout can be the only alternative.
    -somethings can only be done with interval renderings
      .such as scroll position or a Canvas drawing

    requestAnimationFrame(): https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
      -method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.

workflows
  synchronous workflow
    user clicks something >
      1. action creator produces a
      2. action that flows into
      3. middleware that passes action into (dispatch starts here)
      4. reducers that produces a new
      5. state that flows into
      6. react: a user clicks something...

  asynchronous workflow with redux-thunk
    background:
      gives you control over redux dispatch method (triggers a state change based on the action passed in)
      allows you to return an action that is a javascript function instead of a javascript object as
      1.create an action describing the minimum mutation in this.state
      2.create an action generator representing that action
      3.create an reducer 'for' the action generator


sample code
  onclick event
    onClick={(e)=>{e.preventDefault();console.log(e);}}

  using es6 classes instead of react.createComponent
    export class blah extends React.component{
      constructor(props) {
        super(props);

        //without redux
        this.state = {
          blah: this.props.bloop,
          blap: this.props.group
        }
        this.customFunction = this.custmFunction.bind(this)

        //everything in componentWillMount here
      }

    }

  creating simple components
    class Divider extends React.Component {
      render() {
        return (
          <div className="divider">
            <h2>Questions</h2><hr />
          </div>
        );
      }
    };

  creating a Link
    import { Link } from 'react-router';
    <Link to='some/path'>Some Clickable Text</Link>

  creating routes 'for' components
    <Router>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/widgets" component={Widgets} />
    </Router>
  creating nested routes: without IndexRoute
    /*
      Components will be nested in accordance with how the router nests its routes. When the user visits the /users route, React Router will place the UserList component inside SearchLayout and then both inside MainLayout. The end result of visiting /users will be the three nested components placed inside 'root'.
    */
    <Router>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route component={SearchLayout}>
          <Route path="users" component={UserList} />
          <Route path="widgets" component={WidgetList} />
        </Route>
      </Route>
    </Router>
  creating nested routes: with IndexRoute
    //accomplishes the same thing as above
    //indexRoute specifies the extra components to load on its parent path
    <Router>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchLayout}>
          <Route path="users" component={UserList} />
          <Route path="widgets" component={WidgetList} />
        </Route>
      </Route>
    </Router>
  creating nested routes that use parent routes path
    // product/settings = ProductSettings component, etc.q
    <Route path="product">
      <IndexRoute component={ProductProfile} />
      <Route path="settings" component={ProductSettings} />
      <Route path="inventory" component={ProductInventory} />
      <Route path="orders" component={ProductOrders} />
    </Route>
  creating 404 routes 'for' specific paths
    <Route path='/' component={Layout} >
      <IndexRoute component={MyComponent} />
      <Route path='/users' component={MyComponent}>
          <Route path='user/:id' component={MyComponent} />
          <Route path='*' component={UsersNotFound} />
      </Route>
      <Route path='/settings' component={MyComponent} />
      <Route path='*' component={GenericNotFound} />
    </Route>

  importing everything needed 'for' redux
    import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
    import thunk from 'redux-thunk'; //required for async actions

  create a reducer
    const someReducer = (state = ['default','state','value'], action) => {
      switch(action.type){
        case 'THIS_ACTION':
          return state + 1;
        case 'OTHER_ACTION':
          return state - 1;
        default: return state;
      }
    }
  create a redux store
    import redux from 'redux';
    store = redux.createStore(someReducer);

  adding the store to your root component
  1.update your root component to use the store
    import store from '../data/store/Configure';
    import {Provider} from 'react-redux'; //wrap your component in <Provider store={store}>...your app components...</Provider>
    import * as actions from 'your/actions/file.js' //so that you can dispatch actions
  2.update your stateful components to use the store to get the state
    module.exports = connect(
                            (state) => { //pull off values from the redux state and make available in this component
                              return {
                                somePropName: state.value // available as props.somePropName inside the component
                              }
                            },
                            )(yourComponentName);


random notes
https://github.com/rajaraodv/react-redux-blog
sample action creators:
  https://github.com/rajaraodv/react-redux-blog/tree/master/public/src/actions


sample reducers:
  https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/reducers/reducer_posts.js
  https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/reducers/index.js


life cycle methods:
  https://www.youtube.com/watch?v=pW5xnis7ABk


react router:
  https://css-tricks.com/learning-react-router/
  https://github.com/reactjs/react-router-tutorial
  great explanation 'for' react-router browserHistory refresh issue
    http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
    basically first request always goes to the server, which loads the javascript needed 'for' client-side routing
      if a user loads blah.com/bam/jam and there is no server-side routing, then no javascript is loaded and the page does not workflow
        thus no client-side magic will allow you to handle that request, because no javascript is sent to the page
        client-side rendering only takes affect AFTER the server loads the page, which is why browserHistory requires server-side rendering


testing actions, reducers, and stores
  https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4867112
  https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4867188
  https://dictionary.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4867434

  chai testing: http://ricostacruz.com/cheatsheets/chai.html
  chai enzyme api: https://www.npmjs.com/package/chai-enzyme#classnamestr
  enzyme api: https://github.com/airbnb/enzyme
  complete guide to est6: http://jamesknelson.com/the-complete-guide-to-es6-with-babel-6/

todoItems
  redux tut: https://egghead.io/series/building-react-applications-with-idiomatic-redux
  https://github.com/reactjs
  react-router tutorials:
    https://github.com/reactjs/react-router-tutorial
    https://egghead.io/series/getting-started-with-react-router
    https://www.themarketingtechnologist.co/react-router-an-introduction/
  isomoporphic reactjs:
    https://strongloop.com/strongblog/node-js-react-isomorphic-javascript-why-it-matters/
    https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app
  react file structure:
    http://marmelab.com/blog/2015/12/17/react-directory-structure.html
  test spies vs mocks
    https://robots.thoughtbot.com/a-closer-look-at-test-spies
  test spies: https://robots.thoughtbot.com/spy-vs-spy
  test async actions: https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md#async-action-creators
  type of tests: http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

  mocks vs stubs: http://martinfowler.com/articles/mocksArentStubs.html
  babel and ES6
    complete guide: http://jamesknelson.com/the-complete-guide-to-es6-with-babel-6
    testing mocha and babel 6: http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
