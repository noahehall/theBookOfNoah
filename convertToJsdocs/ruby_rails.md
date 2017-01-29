https://www.youtube.com/watch?v=DX0fk46S3XI&index=2&list=PLSXDqiI4sC5PsASjJy7dBncALnhjud2fx
10minutes
research
routes resources
nested resources (e.g. comments should appear nested under articles)
models validates
models relationships
has_many
belongs_to
views
form builders
destroy not working
helper files
application helper
controllers
permit
tests
everything
stylesheet link tag
syntax, not working for me
data turbo links
execjs::programerror
bundle exec ruby -rexecjs -e'p ExecJS.runtime'
http://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial
https://github.com/sstephenson/execjs/issues/81#issuecomment-9892952

top notes
whenever a page is requested, whatever code is in the controller’s action function will be executed!,
this code can pass data to the view to be formatted as HTML
erb = embedded ruby
installation
install ruby: http://rubyinstaller.org/downloads/
Installation: left off: http://installrails.com/steps/create_your_first_app
installrails.com
open git bash and update your ruby gems
curl http://installrails.com/update_rubygems.rb | ruby

rails background
MVC: Model View Controller
browser requests are routed to controllers
controllers respond to user events and retrieves any needed data from the model
controllers send the data to views for creating a viewable site
the view is then sent to the browser
in rails the MVC is this:


browser sends a request
the request is ‘routed’ to the controller
the controller access the model for CRUD
the controller passes the data to the view
the view creates an html file and sends it to the browser


browser requests /user
is routed to a specific function
controller tells the module to retrieve users
model fetches the user and sends it in a variable @users to the controller
the controller passes everything to the view
what the router does


rails: is a full stack web server, handling everything form display to server config
is a GEM, in fact, a collection of many gems
REST: Representational State Transfer
HTTP Protocol Verbs:
GET: request for a resource
POST: creation of resources
PUT: editing of attributes on a resource
DELETE: deletin of a resource
restful routes

index: list all
show: a specific one
new: tell the server you want to create a new one, this is a request for a form
create: tells the server to create using the form you have filled out
edit: request a specific record you want to update
update: using the form you are submitting
destroy: remove a record from a database

CRUD:
Create something in the database
Read something on a table
Update something on a table
Delete: something on a table
Model: describes data in the database
view: user interface
controller: connects the view to the model
routes: connects browser requests to the controller
response codes
3XX: redirect, e.g. 302, 301
create new rails app
cmd
rails new yourAppName –d mysql
bundle
install #installs everything your rails app needs
cmd
rails server #starts rail server
crtrl + c #shutsdown server
cmd
rails generate controller controllerName actionName
controller name = a directory
action name = a folder inside the controller
everything is created in the app folder!
open mysql and create a database
open mysql and create a new user
GRANT ALL PRIVILEGES ON databaseName.* TO ‘userName’@’localhost’ IDENTIFIED BY ‘userPassword’;
update your database.yml file

open cmd
rake db:schema:dump
connects your application to your database
creates a schema.rb file in your db directory so the db can be portable to any hosting company
create a model using SCAFFOLD!!!!
rails generate scaffold User password:string email:string
#scaffold creates the migrate file, the model, test units, controllers, views, helper files, assets, stylesheets, etc.
create a model not using SCAFFOLD 
rails generate model tableName colName1:datatype colName2:datatype colName3:references
#doesn’t create the infrastructure like scaffold does
rake db:migrate
go to routes and setup your routes
create a controller
update your views
open your migration file in the db folder
add your fields & datatypes

migrate your changes to the db
rake db:migrate
be sure to restart the rails server
ctrl + c
rails s
open mysql and confirm
use database
describe table
create web pages
rails generate pages page1 page2 etdc.
rails syntax
.erb files # embedded ruby file
execute ruby code
<%ruby code that is not outputting data to the screen %>
<%= ruby code with output %>
<%# comment %>
to create a new page
update your config/routes.rb
update your controller/action
create a template/action (view) in views/controller/actionName.html.erb
controllers
controllers receive requests, and outputs data to the view where it can be formatted and displayed in the browser
controllers rely heavily on your understanding of classes
controllers should be plural, e.g. ‘NoahsController’ versus ‘NoahController’
any instant variable inside of your action function inside of the controller is made available in the view, this is how you get data from the controller to the view
def actionName
@instantVar = blah
end
in cmd
rails generate controller controllerName actionName1 actionName2
class controllerNamesController < superclass
def actionName
custom code here
end
end
controller name # the controller you created
actionName #the action (i.e. view) the controller routes too
the method that is executed whenever you call index
will render the view index whenever index is called by the application
you can goto localhost.com:3000/actionName
everytime you create a controller
a controller file is created in your config/controller folder
a view file is created with the name of your action, in config/views/controllerName/
pass data from the controller to the view (i.e. action in ruby)
define a new method in the controller class (open up the controller in the controller folder)
def actionName
@dataVariable = dataToPass
end
open your actionView
<%= “#{@dataVariable” %>
#this outputs the data as a string to the client
#you cannot send data from the view to the controller (only from the controller to the view)
Actions (views)
are in config/views/controllername/
you can arbitrarily create views for this specific controller by just creating new files in this directory
viewName.html.erb
can contain both html & ruby code
view commands
link_to(“link text”, “link”)
defines a hyperlink
<%= link_to(‘go to index’, {:controller => ‘controllerName’, :action => ‘actionName’})
if your linking to a view in the same controller, you can delete the :controller=>controllername’ section
<%= link_to(‘go to index’, {:controller => ‘controllerName’, :action => ‘actionName’, :key => value, :key2 => ‘value2’})
define a hyperlink with query parameters
you must then go to controller and check if the controller action was called with parameter sent over

then go to the view that corresponds to the controller’s action method, and use the parameters sent

routes
are in your config folder, file routes.rb
setup a controller to route based on the get request
routes:
require a controller with a method,
require a view with an actionname.html.erb template
syntax
visible/url => controllerName#Action
allows you to route URLS to whatever controller#action you want, e.g.
your/page => Users#Index
verb url/url
get controllerName/ActionName
the action must be a method of your controller class
resources :controllerName
resources: articles
resources: books
match ':controller(/:action(:id))', :via => :get
:controller #specifies this is a controller method
/:action #check if there is an action
/:id #use the id of the action
:via => :get #the browser request is sent via get, i.e. by somesite.com/controller/action


model
code in the controller
grab all books
@books =Book.all	#Book is a table in the db
mysql database in rails
login to mysql
mysql –u root –p
#will ask you to enter in a password
exit a database #you can then log in as a different user
exit
create a table for use by rails
rails generate model TableName
a new migration file is created in the db directory
create all of your columns in this migration file

push created table to the db, via cmd
rake db:migrate
revert back to previous migration file
rake db:migrate VERSION=0 #go back to original blank
rake db:migrate:status #shows you all of the different migration files
rake db:mgrate VERSION=insertMigrationIDHere
#use the migrate status command to pick which version of the DB you want to migrate too
rake
rake db:migrate #migrates the changes to rails
rake db:migrate:status #shows you the different migration files
rake db:migrate version=MigrationID #migrate to a specific version
rake routes #displays all of the routes
verb: the HTTP Protocol
URI : the URL the user enters in the browser
.:format allows different ways of looking at the data, e.g. HTML, PDF, XML, etc.
Controller#Action: the controller & action that the pattern is routed too
Prefix: the direct link to the URI you can use in your .erb files to link other controllers, append path, e.g.
article_comment_path
<%= link_to “click text”, article_comment_path %>
cmd
cd ~/ #go to your root directory, the one with your profile name as the folder name, not just C://
check versions
rails –v
ruby –v
gem -v
bundle -v
create a new application
rails new yourAppName
start the rails server
rails server
create a resource, i.e. db table passing in column names
rails generate scaffold tableName colName:dataType colName2:dataType
use bundle to execute commands, in case of error
bundle exec yourCommandHere
update ruby
rvm use ruby-x.x.x.
#x.x. is the version number
update rails & gems
gem update rails --no-ri --no-rdoc
drop a table
rails console
ActiveRecord::Migration.drop_table(:YourTableName)
rake routes
#displays all of the routes in your current application
delete a controller you already created
rails destroy controller controllerName
create a controller
rails generate controller controllerName
open an explorer window
start c:/some/path/open/this/directory
assets
manifest file:
the default application.css / default.css depending on your setup
a file that has links to a bunch of other files, and all of the other files are included automatically if the manifest file is loaded
go to you rapplication.html.erb file and see what your manifest files are called
*= require_self #include this manifest file
*= require_tree . #require and include all of the files in the current folder & any sub-folders, recursively
http://guides.rubyonrails.org/asset_pipeline.html
Any assets under public will be served as static files by the application or web server when config.serve_static_files is set to true.
You should use app/assets for files that must undergo some pre-processing before they are served.
You can also opt to include controller specific stylesheets and JavaScript files only in their respective controllers using the following:
<%= javascript_include_tag params[:controller] %> or <%= stylesheet_link_tag params[:controller] %>
You can also disable generation of controller specific asset files by adding the following to your config/application.rb configuration:
config.generators do |g|
  g.assets false
end
assets organization
app/assets is for assets that are owned by the application, such as custom images, JavaScript files or stylesheets.
lib/assets is for your own libraries' code that doesn't really fit into the scope of the application or those libraries which are shared across applications.
vendor/assets is for assets that are owned by outside entities, such as code for JavaScript plugins and CSS frameworks. Keep in mind that third party code with references to other files also processed by the asset Pipeline (images, stylesheets, etc.), will need to be rewritten to use helpers like asset_path.
assets pipeline: rails stores all assets in the assets folder
images:
stylsheets:
javascripts:
when you generate a controller, the assets should already be created, but if not, you can create them manually
.scss: SASS: Syntatically awesome stylesheets
lets you have more program ability in CSS, lets you variables & methods inside of css
HTML: in the views/layout folder,
open up application.html.erb #this is the master template for your application, that specifies what all of your other pages look like
everything in your ‘views’ gets inserted where the <%= yield %> statement is in the application.html.erb file
images
http://guides.rubyonrails.org/asset_pipeline.html#coding-links-to-assets
<%= image_tag “imageName.jpg”, :size => “widthxheight”, :alt => “yourAltText”>
you can also use the symbols like size: “widthxheight”
loads an image using erb, no need for <img src= tags
for css.scss files
image-url("bg.jpg") repeat;
background: #fff image-url("headerimg.png") no-repeat left
background: #000 image-url("bg.jpg") repeat;
layouts
in your views folder,  create a new directory called ‘shared’ you can create partial files to be included in other files
_nav.html.erb #html to hold your navigation section
<%= render :partial => ‘shared/nav’ %> #will insert the contents of _nav.html.erb into every page that this is included
server errors
ExecJS::ProgramError in Welcome#index
In your /app/views/layouts/application.html.erb line 5 and 6, change the first parameter application to default.
I met the same problem, too for my situation, I don't know why, but it only happen on Windows. The parameter application works on web server.
update your gemfile source to not have HTTPS, change it to HTTP if you get an SSL_CONNECT on rails server
to really fix it, read this
https://gist.github.com/luislavena/f064211759ee0f806c88
no method error in Controller#Action
e.g. Articles#Show
you need to update your model to include the function its looking for
fix
the book
uncat
windows PATH: things in your windows path are accessible via the command line
go into your environment variables settings
from any folder, right click > properties > advanced system settings > click environment variables button
create a new system variable called SUBLIME that will point to the folder of your sublime installation
name: SUBLIME
value: C:\Program Files\Sublime Text 3
be sure to check the value
add the new system variable to the end of your PATH variable
;%SUBLIME%
no you can open files with sublime
subl ‘filename’
open sublime from cmd
subl.exe

definitions
MVC: model view controller
Model: representation of the database, i.d. domain logic, and consists of data models for things like users, articles, products, etc.
view: what is sent to the browser
controller: handles requests from the browser, fetches data from the model, and passes it data to the view,
resource: anything that can be thought of as something that can be created, read, updated, and deleted
rails file directory
app/  #core application code, including models, views, controllers, and helpers
app/assets #application assets such as cascading styles sheets, javascript files, and images
bin #all the files to run the application
config/ #application configuration, including routes
open it up and edit the database file to edit your database settings
open up mysql work bench
login to your local host
go to server status on the far left column
copy the socket name and put it in your database file

config.ru #configuration rules for running the application
db/ #database files/schema,
doc/ #documentation for the application
lib/ #library modules
lib/assets #library assets e.g. CSS, JavaScript files, and images
log/ #application log files
public/ #data accessible to the public, e.g. web browsers, such as error pages
script/rails #a script for generating code, opening console sessions, or starting a  local server
test/ #application tests
tmp/ #temporary files
vendor/ third party code e.g. plugins and gems
vendor/assets #third party assets i.e. css, JavaScript files, and images
readme.rdoc #brief description of the application
rakefile #utility tasks available via the rake command, compiles the web application
gemfile #gem requirements for this app, all the gems your apps need
if you don’t specify a version number for a gem (ruby package) then bundler will install the latest version
gem packageName, versionNumber
#installs gem blah with version number only in development environment
group :development do
gem blah, #
gem blah, #
end
installs gems only for assets and not required in production environments by default
group :assets do
gem blah, version#
gem blah, version#
end
after completing the gemfile, you can now install the gems listed in the file via cmd
bundle install
gemfile.lock #a list of gems used to ensure that all copies of the app use the same gem versions
config.ru #configuration file for rack middleware
.gitignore #patterns for files that should be ignored by Git


rails stuff
views folder via rails generate scaffold
views _form.html.erb, is called a partial
separates duplicate code
can be loaded via <%= render ‘form’ %> and the entire _form.html.erb inside of the html file
change the index of your site
open routes
update the root line, use one
root controller#action
root users#index
root welcome#index
etc.
