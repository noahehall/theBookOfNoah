# links
  - [setup env for android development](https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html)


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
## api components
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
