<?php

bookmark: http://www.codeigniter.com/user_guide/tutorial/static_pages.html


vids
  MVC full demo in 5 minutes: https://www.youtube.com/watch?v=9nDO-UIofrg&index=13&list=PLpztgC0NSODZtnufs-HSCqh4i7qB04Xzl

flow chart
  index.php > routing > security > application controller ><models
                                                          ><libraries
                                                          ><helpers
                                                          ><plugins
  index.php < caching <   view   <  application controller><scripts

  1.The index.php serves as the front controller, initializing the base resources needed to run CodeIgniter.
  2.The Router examines the HTTP request to determine what should be done with it.
  3.If a cache file exists, it is sent directly to the browser, bypassing the normal system execution.
  4.Security. Before the application controller is loaded, the HTTP request and any user submitted data is filtered for security.
  5.The Controller loads the model, core libraries, helpers, and any other resources needed to process the specific request.
  6.The finalized View is rendered then sent to the web browser to be seen. If caching is enabled, the view is cached first so that on subsequent requests it can be served.

philosophy
  Dynamic Instantiation. In CodeIgniter, components are loaded and routines executed only when requested, rather than globally. No assumptions are made by the system regarding what may be needed beyond the minimal core resources, so the system is very light-weight by default. The events, as triggered by the HTTP request, and the controllers and views you design will determine what is invoked.
  Loose Coupling. Coupling is the degree to which components of a system rely on each other. The less components depend on each other the more reusable and flexible the system becomes. Our goal was a very loosely coupled system.
  Component Singularity. Singularity is the degree to which components have a narrowly focused purpose. In CodeIgniter, each class and its functions are highly autonomous in order to allow maximum usefulness.

supported dbs
  MySQL (5.1+) via the mysql (deprecated), mysqli and pdo drivers
  Oracle via the oci8 and pdo drivers
  PostgreSQL via the postgre and pdo drivers
  MS SQL via the mssql, sqlsrv (version 2005 and above only) and pdo drivers
  SQLite via the sqlite (version 2), sqlite3 (version 3) and pdo drivers
  CUBRID via the cubrid and pdo drivers
  Interbase/Firebird via the ibase and pdo drivers
  ODBC via the odbc and pdo drivers (you should know that ODBC is actually an abstraction layer)

locations
  application configurations
    application/config/config.php (default)
    system/ <<this is where we renamed it
          system_version.php <<< specifies the version to 'use'
          system_2_1_2/ <<<<contains application system files
                      core/ <<<<core files
                          config.php: this is the codeigniter config file
                          Controller.php: this is where the CI_Controller class is defined. all of your controller class functions are available here

security
  http://www.codeigniter.com/user_guide/general/security.html

static pages
  class Pages extends CI_Controller {

        public function view($page = 'home')
        {
        }
  }
MVC built on PHP
  -MVC pattern for URLs
    blah.com/controller-class/controller-method/arguments
      controller: news
      method:latest
      arguments:10
        $latestPosts = news::latest(10);
    class News extends CI_Controller {
      public function view($page)
    }

  model: dir/models
    -data structures; model classes will contain functions that retrieve, insert, and update a db
      class Math extends CI_Model {
        public function add() {
          return 1+1;
        }
      }

  view: dir/view
    -information presented to the user; normally a webpage, partial, rss page, etc.
    -each file is a page template that can be loaded in a controller


  controller: dir/controllers
    -intermediary between model and view and any other resources needed to process the http request and generate a webpage
    -all controllers extend system/core/Controller.php class CI_CONTROLLER
    -the controller is the center of every request, like a super object,
    -referring to $this-> within the class is how you load labries, views, and generally command the framework


    -controller for static page
      class Pages extends CI_Controller {
        public function view($page = 'home') {

        }
      }


    -extended example
    class YourClass extends CI_CONTROLLER {

      //define a route
      public function index() {
        $this->load->view('welcome message');
      }

      //load a model
      public function addStuff() {
        $this->load->model('modelName')
        echo $this->modelName->modelFunction();
      }

      //load a view
      //you can now call $this->home(); in your index(); function to load this view
      public function home() {
        //create array to hold data to send to view
        $data[title] = 'Welcome!';

        //all attributes of array are available as variables in the view
        // $data['title'] ==>>> $title in view
        $this->load->view('viewName', $data);

      }
    }


codeigniter features
  Model-View-Controller Based System
  Extremely Light Weight
  Full Featured database classes with support for several platforms.
  Query Builder Database Support
  Form and Data Validation
  Security and XSS Filtering
  Session Management
  Email Sending Class. Supports Attachments, HTML/Text email, multiple protocols (sendmail, SMTP, and Mail) and more.
  Image Manipulation Library (cropping, resizing, rotating, etc.). Supports GD, ImageMagick, and NetPBM
  File Uploading Class
  FTP Class
  Localization
  Pagination
  Data Encryption
  Benchmarking
  Full Page Caching
  Error Logging
  Application Profiling
  Calendaring Class
  User Agent Class
  Zip Encoding Class
  Template Engine Class
  Trackback Class
  XML-RPC Library
  Unit Testing Class
  Search-engine Friendly URLs
  Flexible URI Routing
  Support for Hooks and Class Extensions
  Large library of “helper” functions
