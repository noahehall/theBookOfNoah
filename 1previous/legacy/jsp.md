bookmark
  https://www.tutorialspoint.com/jsp/jsp_syntax.htm
  control-flow statements
  
# TLDR
  - JSP primer
  - sometimes you need to go back, in order to go forward

# links
  - [oracle jsp (java 5) portal](https://docs.oracle.com/javaee/5/tutorial/doc/bnagy.html)
  - [tutorialspoint learn jsp](https://www.tutorialspoint.com/jsp/index.htm)
  - [jsp syntax](https://www.tutorialspoint.com/jsp/jsp_syntax.htm)

## review if necessary
  - I generally skipped as much as I could, however, review these if necessary
  - [jsp lifecycle](https://www.tutorialspoint.com/jsp/jsp_life_cycle.htm)
  - [jsp directives](https://www.tutorialspoint.com/jsp/jsp_directives.htm)
  - [jsp actions](https://www.tutorialspoint.com/jsp/jsp_actions.htm)
  - [jsp implicit objects](https://www.tutorialspoint.com/jsp/jsp_implicit_objects.htm)
  - [jsp client request](https://www.tutorialspoint.com/jsp/jsp_client_request.htm)
  - [jsp server response](https://www.tutorialspoint.com/jsp/jsp_server_response.htm)
  - [jsp http status codes](https://www.tutorialspoint.com/jsp/jsp_http_status_codes.htm)
  - [jsp form processing](https://www.tutorialspoint.com/jsp/jsp_form_processing.htm)
  - [jsp filters](https://www.tutorialspoint.com/jsp/jsp_writing_filters.htm)
  - [jsp cookie handling](https://www.tutorialspoint.com/jsp/jsp_cookies_handling.htm)
  - [jsp session tracking](https://www.tutorialspoint.com/jsp/jsp_session_tracking.htm)
  - [jsp file uploading](https://www.tutorialspoint.com/jsp/jsp_file_uploading.htm)
  - [jsp handling date](https://www.tutorialspoint.com/jsp/jsp_handling_date.htm)
  - [jsp page redirection](https://www.tutorialspoint.com/jsp/jsp_page_redirect.htm)
  - [jsp hit counter](https://www.tutorialspoint.com/jsp/jsp_hits_counter.htm)
  - [jsp autorefresh](https://www.tutorialspoint.com/jsp/jsp_auto_refresh.htm)
  - [jsp database access](https://www.tutorialspoint.com/jsp/jsp_database_access.htm)
  - [jsp xml data](https://www.tutorialspoint.com/jsp/jsp_xml_data.htm)
  - eventually youll need to review these
    - [jsp exception handling](https://www.tutorialspoint.com/jsp/jsp_exception_handling.htm)
    - [jsp STL: standard tag library](https://www.tutorialspoint.com/jsp/jsp_standard_tag_library.htm)
    - [jsp javabeans](https://www.tutorialspoint.com/jsp/jsp_java_beans.htm)
    - [jsp custom tags](https://www.tutorialspoint.com/jsp/jsp_custom_tags.htm)
    - [jsp expression language](https://www.tutorialspoint.com/jsp/jsp_expression_language.htm)
    - [jsp debugging](https://www.tutorialspoint.com/jsp/jsp_debugging.htm)
    - [jsp security](https://www.tutorialspoint.com/jsp/jsp_security.htm)
    - [jsp internationalization](https://www.tutorialspoint.com/jsp/jsp_internationalization.htm)
    - 


# terms
  - jsp scriptlet: can contain any number of java language statements, vaiable or method declarations, or expressions that are valid in the page scripting languagehttps://www.tutorialspoint.com/jsp/jsp_syntax.htm
    - text, html tags, and jsp elements must be outside the scriptlet
  
  - jsp declarations: one/more variables/methods that you an use in java  code later in the jsp file

  - jsp expression: contains a scripting language expressions that is evaluated, converted to a stirng, and inserted where the expression appears in the jsp file

  - jsp comments (breaks vscode markdown syntax highlighting
    - ```<%-- a comment --%>```

  - jsp directives: affects the overall structure of the servlet class
    - page: defines page-dependent attributes, e.g. scripting language, error page, buffering requirements
    - include: includes a file during the translation phase
    - taglib: declares a tab library, containing custom actions, used in the page
    - there are many more, see the `review...` section
  
  - jsp actions: use constructs in XML syntax to control the behavior of the servlet engine
    - dynamically insert a file, reuse javabeans components, forward the user to another page, generate HTML for the java plugin
    - are basically predefined functions
    - `action_name` 
      - include: includes a file at the time the page is requested
      - useBean: finds/instantiates a javabean
      - setProperty: sets the property of a JavaBean
      - getProperty: inserts the property of a JavaBean into the output
      - forward: forwards the requester to a new page
      - plugin: generates a browser-specific code that makes an OBJECt/EMBED tag for the java plugin
      - element: defines XML elements dynamically
      - attribute: defines dynamically-defined XML elements attribute
      - body: defines dynamically-defined XMl elements body
      - text: used to write template text in JSP pages and documents
  
  - jsp implicit objects: automatically defined variables
    - request: the HttpServletRequest object associated with the request
    - response: the HttpServletResponse object associated with the response to the client
    - out: is the PrintWriter object used to set output to the clinet
    - session: the HttpSession object associated with the request
    - application: the ServletContext object associated with the application context
    - config: the ServletConfig object associated with the page
    - pageContext: this encapsulates use of server-specific features like higher performance JspWriters
    - page: i.e. `this`, used to call the methods defined by the translated servlet class
    - Exception: the Exception object allows the exception data to be accessed by the designated JSP

  - control-flow statements
    - you can use all the APIs and building blocks of java in your JSP programming, e.g. decision-making statements, loops, etc
    - decision-making statements
      - if-else blocks
    - loops
      - for loop
      - while loop
  
  - JSP operators
    - [see section: JSP Operators](https://www.tutorialspoint.com/jsp/jsp_syntax.htm)


```jsp
  <% jsp scriptlet %>
  <%
    out.println("Your IP address is " + request.getRemoteAddr());
  %>


  <%! jsp declarations %>
  <%! int i = 0; %> 
  <%! int a, b, c; %> 
  <%! Circle a = new Circle(2.0); %> 


  <%= jsp expressions %>
  <%= (new java.util.Date()).toLocaleString()%>

  <%@ directive attribute="value" %>

  <jsp:action_name attribute="value" />

  <-- if else block -->
    <%! int day = 3; %> 
    <% if (day == 1 || day == 7) { %>
      <p> Today is weekend</p>
    <% } else { %>
      <p> Today is not weekend</p>
    <% } %>

  <-- switch case block -->
    <% 
      switch(day) {
          case 0:
            out.println("It\'s Sunday.");
            break;
          case 1:
            out.println("It\'s Monday.");
            break;
          case 2:
            out.println("It\'s Tuesday.");
            break;
          case 3:
            out.println("It\'s Wednesday.");
            break;
          case 4:
            out.println("It\'s Thursday.");
            break;
          case 5:
            out.println("It\'s Friday.");
            break;
          default:
            out.println("It's Saturday.");
      }
    %>

  <-- loop examples -->
  <-- for loop -->
    <%for ( fontSize = 1; fontSize <= 3; fontSize++){ %>
      <font color = "green" size = "<%= fontSize %>">
          JSP Tutorial
      </font><br />
    <%}%>
  <-- while loop -->
    <%while ( fontSize <= 3){ %>
        <font color = "green" size = "<%= fontSize %>">
          JSP Tutorial
        </font><br />
        <%fontSize++;%>
    <%}%>
```