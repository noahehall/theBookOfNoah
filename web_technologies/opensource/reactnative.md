# next: https://facebook.github.io/react-native/docs/network

# links
  - [setup env for android development](https://facebook.github.io/react-native/docs/getting-started.html)
  - setup KVM
    - https://help.ubuntu.com/community/KVM/Installation
    - https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux
    - setup inotify
    - setup virt mananger https://askubuntu.com/questions/930491/group-libvirtd-does-not-exist-while-installing-qemu-kvm

# doc links
  - [layout props](https://facebook.github.io/react-native/docs/layout-props)
  - [compopnents and APIs](https://facebook.github.io/react-native/docs/components-and-apis)
  - [View component](https://facebook.github.io/react-native/docs/view.html)
  - [navigation](https://facebook.github.io/react-native/docs/navigation)
  - [react navigation](https://reactnavigation.org/docs/en/hello-react-navigation.html)
  - [react native elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)

  
# quickies
  - start app
    - start virtual device in android Studio
    - start app `react-native run-android`


# background
  - framework for building native apps
  - the syntax is the same as react
  - the difference is the set of UI components that you will use in your Presentation
  - how it works
    - uses native components and API from the devices native language
    - javascript runs on its own thread powered by the javascript core
    - native components communicate asyncrhonously with the javascript core
  - can dynamically update applications installed on user devices when you release a new version to app stores
    - you distribute a javascript bundle that contains your application
    - when you update your application this bundle is replaced on the store
    - when your app loads on user devices, the application will always check the store for new versions and will download it if a new one exists
      - that means you can bypass the approval proccess on app stores
  - development process
    - code your app
    - when you build your app a new terminal process opens
    - the package bundles all of your source code into a single js bundle file
    - when you save changes to the source, the react packager updates your js bundle and sends the updated bundle to the simular

# terminology
  - bridge: manages the UI using native components
    - constructed in the native language
    - follows the react instructions and constructs a UI using native components in APIs
    - iOS bridge uses iOS components written in objective-c & swift
    - android bridge would writes components in Java
  - web view: a mini web browser within a native application
    - hybrid frameworks runs your entire app within a webview, i.e. all UI rendering & interaction is controlled by a singel thread that could not keep up with user interaction

# Ecosystem
  - node js
  - react-native cli

## ios
  - watchman: react uses this to watch our source files for changes
    - `brew install watchman`
  - xcode: apples ide
  - OS10: operating system for ios apps
  - apple developer acocunt: required to distribute your application in the apple app store
  - homebrew: used to install react native dependencies


## android
  - [Android studio](https://developer.android.com/studio/install.html)
    - do custom install and be sure to install everything
    - sdk manager: allows you to install and manage other versions of the sdk
      - select configure from the bottom of the Android Studio welcome screen
      - select SDK Manager
      - react native requires Android 6.0
        - click Show PAckage Detail checkbox
        - scroll down and select:
          - android 6 marshmellow sdk
          - google APIs
          - intel x 86 atom system image
          - intel X 86 atom 64 system image
          - google apis for intel X atom 64
        - SDK tools
          - click show package details
            - install build tools version 23.0.1
    - avd manager: android virtual device; used to create emulators to run android apps
  - [gradle build system](https://docs.gradle.org/current/release-notes.html)
    - brew install gradle
## starting project in android
  - open android studio
  - open android project dir: reactnativeproject/android
  - tools > android > android avd manager
  - click + to create new virtual device
  - select phone from list
  -
# releasing your app
  - general process
    - relea


## google play store
## itunes

# react native project structure
  - root: all of your source code
    - /App.js: the root of your application
    - /index.js: mounts your application in the app registry
  - /ios: where the ios application is located
  - /android: where the android application is located


# cli
## react-native-cli
  ```js
    yarn add react-native-cli //install
    react-native --version //get version of react native-cli used to create the project and the version of react-native the project will use at runtime if within a react native project dir
    react-native init NAME// create boilerplate project NAME for ios + android
    react-native run-ios
      // alternatively you can open the /ios/projectname.xcodeproj file in xcode and clicking the play button in top left
      // start the ios app.
      // 1 terminal for building the application and starting the iphone simular, another terminal for the react packager that manages the react ajs bundle and sends it to the running application in the iphone simular
      // on error: Failed to load optimized model
        sudo xcode-select -s /Applications/Xcode-beta.app/Contents/Developer
      // on error: Port 8081 already in use, packager is either not running or not running correctly Command /bin/sh failed with exit code 2
        lsof -n -i4TCP:8081
        sudo lsof -n -i4TCP:8081 // if above returns blank
        sudo launchctl list | grep PID // use the pid from the first cmd
        sudo launchctl unload -w /Library/LaunchDaemons/com.mcafee.agent.macmn.plist // use file returned from previous
    react-native run-android
      // start android studio > avd simular > play before running this cmd
      // on error: java home set to invalid directory
      // or error: error tool.jar not found
        export JAVA_HOME='/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/'
          // or whatever yours is
  ```
## ios simular
  ```js
    cmd + r // reload the app
    cmd + d // debugging window
      // enable live reload so you dont have to do reload
      // debugger: use chrome dev tools to debug your js code
  ```
## andrid simulator
  ```js
    RR // tap r twice to reload
    cmd + m // dev tools
  ```
# watchman
  ```js
    watchman --version // get version
  ```

# react-native components

## display component
  ```js
    import { blah } from 'react-native'
    AppRegistry // similar to reactdom.render
      // registery your app NAME
      // provide function that returns your app
      // instructs react native that when your app starts this is the first component it should load
      AppRegistry.registerComponent('HelloWorld', () => App);
    View // div tag, limited by screen size, use ScrollView when you have a lot of content
    Text // p tag
    StatusBar // control over status bar in the app
    Image // for rendering images
      import yourImg from './assets/blah.png'
      <Image source={yourImg} />
    Dimensions // get dimensions of user device
      // useful for setting dimensions based on the users device dimensions
    Alert // duh
      Alert.alert('poop')
    ActivityIndicator // visual that something is loading
      <ActivityIndicator
        size='large'
        animating={true}
      />
    TouchableHighlight // make a group of elements respond to the same touch/press event
    WebView // render a mini browser
      <WebView
        source={{uri: 'http://blah.com'}}
      />
    ScrollView // when you have a lot of content
    ListView // manages large lists of data via a datasource you create in the constructor
      this.ds = new ListView.DataSource({
        rowHasChanged(r1, r2) {
          return r1 !== r2
        }
      })
      const availColors = ['red', 'blue']
      this.state = {
        availColors,
        dataSource: this.ds.cloneWithRows(availColors)
      }
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(color) =>
          <Text>{color}</Text>
        }
        renderHeader={() =>
          <Text>Ima header for listview</Text>
        }
      />

    TextInput // form input
      <TextInput
        placeholder='enter blah'
        onChangeText={(newText) => this.setState({newText})}
        value={this.state.newText}
      />
    StyleSheet // a subset of common css rules for layout and appearance
        const styles = StyleSheet.create({
          container: {
            // uses flexbox for layouts
            flexDirection: 'row'
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
          },
          welcome: {
            // all dimensions expect a number in pixels
            fontSize: 20,
            flex: 1,
            textAlign: 'center',
            margin: 10,
          },
          instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            borderWidth: StyleSheet.hairlineWidth // research
          },
          img: {
            width: Dimensions.get('window').width,
            resizeMode: 'cover'
          }
        });

      // place the styles on elements
        // single style
          <Text style={styles.instructions}>
        // multiple styles with an array
          <Text style={[
            styles.instructions,
            styles.container
          ]}>
        // without stylesheet component
          <Text style={{ backgroundColor: 'white'}} />
  ```
## BIGLIES
  - props: set byu the parent component and are fixed throughout the lifetime of a component
  - state: used for data that is going to change, and owned by the current component
  - can use redux/mobx

### style
  - all of the core components accept a prop named style
  - the style naems and values usually match how CSS works on the web, except names are written using camel casing
  - style prop
    - plain javascript object
    - can also pass an array of styles in which the last style in the array has precedence
      - this can be sued to inherit styles
  - use `StyleSheet.create` to define several styles in one place
    ```js
          import React, { Component } from 'react';
          import { AppRegistry, StyleSheet, Text, View } from 'react-native';

          export default class LotsOfStyles extends Component {
            render() {
              return (
                <View>
                  <Text style={styles.red}>just red</Text>
                  <Text style={styles.bigblue}>just bigblue</Text>
                  <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                  <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                </View>
              );
            }
          }

          const styles = StyleSheet.create({
            bigblue: {
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 30,
            },
            red: {
              color: 'red',
            },
          });

          // skip this line if using Create React Native App
          AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
    ```
  - fixed dimensions: All dimensions in React Native are unitless, and represent density-independent pixels.
    ```js
      import React, { Component } from 'react';
      import { AppRegistry, View } from 'react-native';

      export default class FixedDimensionsBasics extends Component {
        render() {
          return (
            <View>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
          );
        }
      }
    ```
# flexbox https://facebook.github.io/react-native/docs/flexbox
  - flex dimensions: Use flex in a component's style to have the component expand and shrink dynamically based on available space.
    - Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst each other component with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.
    - A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.
    ```js
      import React, { Component } from 'react';
      import { AppRegistry, View } from 'react-native';

      export default class FlexDimensionsBasics extends Component {
        render() {
          return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
              <View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
          );
        }
      }

    ```
  - layout with flexbox
    - You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.
    - Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with flexDirection defaulting to column instead of row, and the flex parameter only supporting a single number.
  - API
    - flex direction: Adding flexDirection to a component's style determines the primary axis of its layout. Should the children be organized horizontally (row) or vertically (column)? The default is column
    - justify content: Adding justifyContent to a component's style determines the distribution of children along the primary axis. Should children be distributed at the start, the center, the end, or spaced evenly? Available options are flex-start, center, flex-end, space-around, space-between and space-evenly.
    - align items: Adding alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa). Should children be aligned at the start, the center, the end, or stretched to fill? Available options are flex-start, center, flex-end, and stretch.
      - For stretch to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.


# user input
  - text input: allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.

# handling touches
  - Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map
  - compponents
    - button: Button provides a basic button component that is rendered nicely on all platforms
    - touchables: If the basic button doesn't look right for your app, you can build your own button using any of the "Touchable" components provided by React Native.
      - The "Touchable" components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized.
        - TouchableHighlight: anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.
        - TouchableNativeFeedback: on Android to display ink surface reaction ripples that respond to the user's touch.
        - TouchableOpacity: can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down
        - TouchableWithoutFeedback: If you need to handle a tap gesture but you don't want any feedback to be displayed,
        - In some cases, you may want to detect when a user presses and holds a view for a set amount of time. These long presses can be handled by passing a function to the onLongPress props of any of the "Touchable" components.

        ```js
          import React, { Component } from 'react';
          import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

          export default class Touchables extends Component {
            _onPressButton() {
              Alert.alert('You tapped the button!')
            }

            _onLongPressButton() {
              Alert.alert('You long-pressed the button!')
            }


            render() {
              return (
                <View style={styles.container}>
                  <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableNativeFeedback
                      onPress={this._onPressButton}
                      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableWithoutFeedback
                      onPress={this._onPressButton}
                      >
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              );
            }
          }

          const styles = StyleSheet.create({
            container: {
              paddingTop: 60,
              alignItems: 'center'
            },
            button: {
              marginBottom: 30,
              width: 260,
              alignItems: 'center',
              backgroundColor: '#2196F3'
            },
            buttonText: {
              padding: 20,
              color: 'white'
            }
          })

        ```
# scrolling lists, swiping pages, pinch to zoom
  - ScrollView: is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).
    - The ScrollView works best to present a small amount of things of a limited size
    - All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen
    - - can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPagerAndroid component.
    - ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
## lists of data
  - FlatList: component displays a scrolling list of changing, but similarly structured, data.
    - FlatList works well for long lists of data, where the number of items might change over time.
    - Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.
  - sectionlist: If you want to render a set of data broken into logical sections, maybe with section headers,


# networking

# API
  - setState
  -
## api components
  - View
  - Text
  - Image


### view
  - used as a container for other components to help control style and layout
  -
### image
  ```js
        import React, { Component } from 'react';
        import { AppRegistry, Image } from 'react-native';

        export default class Bananas extends Component {
        render() {
          let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
          return (
            <Image source={pic} style={{width: 193, height: 110}}/>
          );
        }
        }

        // skip this line if using Create React Native App
        AppRegistry.registerComponent('AwesomeProject', () => Bananas);

  ```
  ```js
  fetch('url').then() // same as html5 fetch,is a global so no need to import
    AsyncStorage // save/load data to the device asynchronously
      // ios: dictionary & filesystem
      // android: sqlite/rocksddb
      AsyncStorage.setItem(
        '@StoreName:Key',
        JSON.stringify(blah)
      )
      AsyncStorage.getItem(
        '@StoreName:Key',
        (err, data) => {
          this.setState({
            blah: JSON.parse(data)
          })
        }
      )
    Navigator // controls which views are un/mounted based on user interactivity
      <Navigator
        initialRoute={{
          name: 'SomeName'
          renderScene={(route, navigator) =>
            switch (route.name) {
                case 'SomeName': return <Blah blah={route.bap}
                  onPress={() =>
                    navigator.pop() // go back
                  }
                />
              default: return <Bloop
                onPress={(bap) =>
                  navigator.push({
                    name: 'SomeName',
                    bap
                  })
                }
              />
            }
          }
        }}
      />
  ```

# react-navigation
  ```js
    yard add react-navigation
      import { StackNavigator } from react-navigation
      const App = StackNavigator({
        // takes a list of screens and components
        Home: { screen: HomeComponent }
      })
      // define this on the Stateful component
      static navigationOptions = {
        title: 'page title',
      }
      // on a functional component
      // with optional function
      functionalComponent.navigationOptions = ({navigation}){
        title: navigation.state.params.someProp,
      }
      // all screens receive a navigate prop automatically
      this.props.navigate('Home', { someProp: 'to pass'})
      navigation.state.params.someProp
  ```
