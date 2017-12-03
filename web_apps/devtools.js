need to do
  -edit the dom: https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/edit-dom
  -step through code: https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/step-code?hl=en
  -watch variables: https://developers.google.com/web/tools/chrome-devtools/debug/watch-variables/?hl=en
  
breakpoints
  https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/add-breakpoints?hl=en/
  -breakpoints 
    .enable you to pause script execution and then investigate the call stack and variable values at that particular moment in time 
    .manual breakpoints: set on a specific line of code via the chrome devtols gui, or inserting 'debugger' in your code 
    .conditional breakpoints: when a specific condition is met (e.g. onclick, exception is uncaught, etc) enabled via devtools gui
      .very useful if you dont know where the error is, and you want to set a breakpoint to catch a specific error and know where the line of the code happens
      .types of conditional breakpoints
        -DOM mutation events, stops code before (insertions, modifications, deletions) happen
        -XMLHttpRequest
        -Javascript event listeners
        -Uncaught exceptions
        
        
    -view breakpoints
      1.dev tools
      2.more toosl > developer tools
      3.sources panel
      4.breakpoints are shown in the sidebar, grouped by type
      
    -create manual breakpoints:
      1.click the line number(s) of the line(s) you want to set the breakpoint
      1.insert the debugger code at the line(s) in your code
    
    -create conditional breakpoints:
      .DOM mutation
        1.Elements panel
        2.Right click an Element
        3.Break on: subtree modifications, attributes modification, node removal
        
        -Temporarily Disable DOM mutation breakpoints by clearing its checkbox in the sidebar
        -Permenantly remove a DOM mutation breakpoint right-clicking the breakpoiint in the side bar and choose remove
        
        
      .Break on XMLHttpRequests
        -two ways:
          1.when URL of a request contains a specified string > break before request is sent 
            1.Sources menu > bottom console > XHR Breakpoints >click +
            2.in break when URL contains field, type string that the URL should contain
          2.before a specified XMLHttpRequest event (e.g. load, timeout, error, etc) > break before event is fired
            1.sources menu > bottom console > event listener breakpoints > pick one
            
      .Break before javascript event listener is fired
        1.sources menu > bottom console > event listener breakpoints> pick one
        
      .Break on uncaught exception
        1.sources menu > bottom console > click the pause icon (thats the Pause on Exceptions button)

stepping through code via breakpoints
    https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/step-code?hl=en
      
    -located in the source menu
      1.make a breakpoint
      2.reload the page 
      3.hover over var names to view their values.or copy paste them into the console
      3.expand the callstack section to see the sequence of function calls that got to this pont of the script.
      
    -step through code to observer issues/var values and test out changes through live editing
    -enable the 'async call stack' feature to gain greater visibility into the call stack of asynchronous functions
    -used named functions, vs anonymous to improve call stack readability
    
    -all step options are clickable icons 
      .playbutton with line: resume; resumes executino up to the next breakpoint, else normal execution is resumed
      .playbutton: long resume; resumes execution with breakpoints disabled for 500ms
      .round arrow: step over; executes whatever happens on the next line and jumps to the next line.
      .down arrow; step into; if the next line contains a function call, step into will jump to and pause that function at its definition on the first line. this is great to see how a function is defined
      .up arrow: step out; executes the remainder of the current function and then pauses at the next statement after the functino call.
      .right arrow with line; deactive breakpoints; temporarily disable all breakpoints; use to resume full execution without actually removing your breakpoints. click again to reactivate breakpoints.
      .stop button; pause on exceptions; automatically pauses the code when an exception occurs