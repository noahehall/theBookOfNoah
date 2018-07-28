# terminology
  - framework: set of code libraries & data strutures that provide generic functionality
  - library: provide functionality
  - DRY: dont repeat yourself: every piece of information is expressed in one place and can be reused in multiple places
  - convention over configuration: sensible defaults that follow best practices and opinions
  - MVC: breaks up a SPA by function
    - workflow:
      - browser communicates with controller
      - controller interacts with model
      - controller sends data to the view
      - the view takes the data and constructs the page ands
    - model: all code related to data; data objects, connecting to database, e.g. database schema
    - view: presentation layer, css html js
    - controller: the logic for making decisions in response to browser requests, responses to user interactions, and manages the
  - ruby:
    - Object oriented interpreted programming language


# ROR basics
  - ruby on rails
    - open source web app framework created in 2003
    - created for basecamp.com
    - version 5 released in 2016
    - MVC
      - model: ActiveRecord
      - view: ActionView
      - controller: ActionControler
  - how server requests are handled
    - browser makes a request to web server
    - web server looks in public dir for a file whose path and name exactly matches the browser requests
      - if found, it returns the file and never accesses the rails framework
      - if file not found in public dir, request is passed to rails framework
    - rails routing accepts request
      - parses url to determine which controller & action to use
    - routing returns the view to the web server
    - web server returns the view to the browser

## gems
  - bundler
## app structure
  - `/Gemfile`: specifies which ruby gems and their versions your app needs. any updates to this file requires `bundle install`
  - `/config`: sensible defaults
    - application.rb: general app configuration
    - database.yml: configures db
    - routes.rb: all of your application routes
  - `/app`: most of the app code goes in here
    - `models/`
    - `views/`
    - `controllers`
    - `helpers/`: helpers for views
    - `assets/`: css, js, images, etc
    - `mailers/`: for emails
    - `jobs/`: schedules tasks
    - `channels/`: for action cables in ror 5
  - `/db`: all the db files
    - `/migrate/*.rb` migration files
      - the timestamp prefixed to the migration name is its identifier
  - `/log`: app log files
  - `/public`: static files
  - `/test`:
  - `/lib`: your code that is reused across your projects
  - `/vendor`: 3rd party code


## workflow
  - creating a new app
    0. `$ rails new YOUR_APP -d postgresql`
    1. verify gems in `/Gemfile`;
    2. verify `/config/application.rb`
    3. verify `/config/initializers/*.rb`
      - these files are loaded automatically when the app starts
    4. verify `/config/environments/*.rb`
      - these take precedence over `/confg/application.rb`
    5. configure db
      - create required dbs: ROR is precon
      ```sh
        mysql -u root
        # create dbs for dev and test
          create database your_app_name_development
          create database your_app_name_test
        # create a user for the rails app with access to all tables in db
          grant all privileges on your_db_name.* to 'rails_user'@'localhost' identified by 'somepw';
        # update /config/database.yml with username and pw
        # confirm app can connect to db
          rails db:schema:dump # look in /db/schema.rb
      ```
    6. configure document root director: is usually the public dir, but may different across environments
    6. start web server:
      - ror5 uses puma web server by default
        ```ruby
          rails server #start server
          rails s #same as above
        ```


# cli
## admin
  ```ruby
    # info
      rails -v
    # install rails
      gem install rail -v 5.1.4


    # db
      # create db
        rails db:create

    # application
      # create ror app with mysql db
        rails new APP_NAME -d mysql #or postgresql, or leave it off to use sqlite
      # install gems
        bundle install
      # start app
        rails server
  ```
## db
  ```ruby
    rails db:schema:dump # save db schema to /db/schema.rb
  ```


# high level
  - ActionPack: controller + view grouped together
  ```sh
    rails g # view generate help: this creates template files, e.g. views/controllers
  ```
## Model: ActiveRecord
  - access permissions granted at the db level
    - wegive rails ull access, and controllers decide which users can access which data

## Model: migrations: set of db instructions to migrate your db to and from one state to another
    - keeps db schema with ap code
    - share db schema changes with other devs, environments, and systems
    - helps with versioning
    - move up to a new state
    - move down to an old state

  ```sh
    rails g migration MigrationName #create a migration file in /db/migrate/timestamp_name.rb
    rails g model ModelName # create a model file in /db/migrate/timestamp_name.rb and app/models/modelName.rb and /test/models/modelName_test.rb and /test/fixtures/modelName.yml
    # table migration methods
      create_table(tablename, options) do |t|
        #...columns
      end
      drop_table(tablename)
      rename_table(tablename, new_name)
    # column migration methods
      add_colum(tablename, columnname, type, options)
      remove_column(tablename, columnname)
      rename_column(tablename, columnname, new_name)
      change_column(tablename, columnname, type, options)
      
  ```
  ```ruby
    # create a model via migration
    # run rails g model ModelName first
    # add code below in /db/migrate/timestamp_modleName.rb
      def change
        #create_table :users, :id => false do |t| #id false removes rails auto generated id column
        create_table :users do |t|
          t.column 'first_name', :string, :limit => 25 #long form
          t.string 'last_name', :limit => 50 # shorthand for above
          t.string 'email', :default => '', :null => false
          t.string 'password', :limit => 40

          #t.datetime 'created_at' #column named created_at will be managed by rails
          #t.datetime 'updated_at' #column named updated_at will be managed by rails
          t.timestamps # adds created_at and updated_at columns
      end
    # then run the migration
      rails db:migrate
        # rake db:migrate in rails < 5
        # runs all migration that have not yet be run (i.e. do not have record in db.schema_migrations)
    # table column types
      binary, boolean, date, datetime, decimal, float, integer, string, text, time
    # table column options
      :limit => size
      :default => value
      :null => true/false
      :precision => number
      :scale => number
  ```



## View: ActionView
  - erb: embedded ruby: ruby's default templating language
    - file must end in `.erb`
  - each view (action) is a controller class method and the folder hierarchy matches it explicitly
    - `/views/CONTR_NAME/view_name.html.erb`
  - access a view: `localhost:3000/CONTR_NAME/view_name`
  - templates: html files that correspond to ActionViews  saved as blah.html.erb and the blah should match the controller method name
  - link_to helper uses `/config/routes.rb` to determine the href for the anchor
  ```ruby
    # <% name = 'hello' %> # process but dont print to file
    # <%= "hello #{name}" %> # process and print return value to file


    # links: must embed in <%= %>
      link_to('click me', {:action => 'name'})
        # link to action in current controller
      {:controller => 'name', :action => 'name'} # separate contrller
      {:controller => 'name', :action => 'view', :paramX => 'valueX'} # with abitrar number of query string params
  ```

## Controller: ActionController
  - controllers are ruby classes that inherit from `ApplicationController`
    - whenever the controller is invoked, a new instance is instantiated
  - each method in the class is an action, that represents the logic required to render a view
  - pass data to templates via controller instance variables
  - redirect: one controller redirects to another
    - rails returns an http redirect to the browser
      ```js
        HTTP/1.1 302 Found
        Location: http://localhost:3000/contr_name/view_name
      ```
  ```sh
    rails g controller # view help for creating a controller
    rails g controller CONTR_NAME view_name VIEW2_NAME VIEW3_NAME # create 1 controller, 3 views, and update /config/routes.rb
  ```
  ```ruby
    class SomeController < ApplicationController

      layout false #disable the default view layout
      def view_name
        # pass data to template
        # template has to use the same var name
          @arr = [1,2,3,4,5]
        # get query string params
        # all values are strings, so convert to int if needed
          @queryStringValue = params['key'] # get ?key=value
          @queryStringValue = params[:key] # same as above but uses symbol

        # specify the template to use, if omtted will use template whose name matches the action name
        # useful for if/else statements
          render('template_name') #shorthand
          render('contr_name/template_name') #same as above
          render(:template => 'contr_name/template_name') #same as above

        # redirect
          redirect_to(:action => 'index') # current controller different action
          redirect_to(:controller => 'demo', :action => 'index') # another controller & action
          redirect_to('http://somewhere.else.com') # a url
      end
    end
  ```
## routes
  - located in `/config/routes.rb`
  - route types
    - simple route: aka match route: the request method & path must match the route definition
    - default route: a routing rule that maps multiple controllers and views to a single request by testing each controller and view via reg exp to find the one that matches
      - `:controller/:action/:id`
      - not recommended to use as it may go away/change heavily in a future version of rails
    - root route: the root of your app
    - resourceful route:
  ```ruby
    # simple route
      get "CONTR_NAME/view_name" #short hand
      match "CONTR_NAME/view_name", :to => 'contr_name#view_name', :via => :get #long form of above

    # default route structure
    # each one is a var that is tested against your controllers and views
    # objects in parenthesis are optional
      get ':controller(/:action(/:id))' #short hand
      match ':controller(/:action(/:id))', :via => :get #same as above

    # root route: specify which controller and view is your root route
      root 'contr_name#view_name'

  ```
