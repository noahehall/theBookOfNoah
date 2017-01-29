research
php range function: http://php.net/manual/en/function.range.php
hook_form() passing $form vs $node
regex (omg! just master this and be done with it)
programmatically creating content types via modulename.install
$content_type
$node_type
node_type_set_defaults($content_type)
node_type_save($node_type)
add fields to content types
node_add_fieldtype($node_type, $t(‘field name’))
steps
create the fields
field_create_field
attach each field as an instance to the content type
drupal 8
http://www.slideshare.net/mediacurrent/a-drupal-8-voca
last watched
http://www.lynda.com/Drupal-tutorials/Fleshing-out-content-type-fields/110715/114496-4.html

need to finish
drupal 7: http://www.lynda.com/Drupal-tutorials/Updating-Drupal/73655/78854-4.html
drupal 7 advanced training: http://www.lynda.com/Drupal-tutorials/Learning-from-case-studies/97405/105703-4.html
recommended courses
CSS
web hosting
drupal gardens essential training
notes
case studies
perfect for seeing how others did it
drupal.org/success-stories
drupal.org/forum/25
drupal.org/planet
drupalshowcase.com
planning your site
make sure to write it all down
whats the purpose?
what features do you require?
create a sitemap: what pages do you need? how do they link to each other?

create wireframes: what is the UI?

What infrastructure will you need?
server requirements, backup, workforce, workflow
Drupal specific sites
How will you implement your features?
How will users interact with your site? will they be required to login? what roles will users have? what permissions will each role have?
What will the design be?
function defines form (or form follows function)
you need to understand the functions/features of the site, and force the design to adapt to those features

drupal
is a CMF: content management framework:
has an API
builds content management systems
CMS:  content management systems
limited extensibility
modules
core: included with drupal distribution, and is approved by core devs and the community
contributed modules: written & maintained by the community and shared with GNU public license (GPL)
custom: created by individual developers
module structure
php 5.3 > recommended

background
CMS: Content Management System
characteristics
multiuser: users receive separate login credentials and each user has separate permissions
Treats content as individual pieces: in drupal they are called ‘nodes’
a collection of ‘nodes’ is a called a ‘view’
content can be distributed in multiple platforms, e.g. screen, print, RSS
content can be interpreted, e.g. via RDF
HTML way

drupal way

install
download & install: http://www.acquia.com/downloads
download & import core drupal: drupal.org/project/drupal
use the acquia installer to create a new site
launch browser and finish setup
access phpmyadmin
acquia > more > open database manager
anatomy of Drupal website
basic theme: takes care of common theming tasks like providing default layouts and configuration settings
file structure
program files: anything not in ‘sites’ folder
Sites files: everything in the ‘sites’ folder
custom programming & design files
Database: drupal handles most of it
requirements
PHP 5.2 >
Database: MySQL is preferred
Webserver: Apache preferred
ability to install drupal on webserver
webserver permissions to run drupal
webserver diskspace, memory use, and bandwidth allowance
system administration skills
specific files
settings.php: tells drupal where to find the database, but can do a whole lot more

file structure
NEVER CHANGE ANYTHING OUTSIDE OF THE SITES FOLDER
specific locations
image styles: drupal >sites > your site > files > styles
custom themes: drupal > sites > all > themes
default themes: drupal > themes
don’t edit anything here, but use as reference/copy to custom themes folder
custom modules folder:  drupal > sites > all > modules
Quick Dos
how to quickly add pages to drupal
create a .php file >> drop in your root folder
modify toolbar links
structure > administration > management > list links
modify shortcut bar
click the ‘plus’ icon next to any overlay, will be added to your default shortcut set (see below)
OR
copy URL of current page > click edit shortcut in the shortcut bar > add shortcut >  http://drupal-7-38.dd:8083/node#overlay= > paste in the rest > save
you can create ‘shortcut sets’ via > administration > configuration > shortcuts
these are user specific shortcuts
to change shortcut sets for a user
user profile > shortcuts tab > pick which one you want to use
admins can edit anyones profile
clear cache
configuration > performance > clear caches
or: yourdrupalsite.com/update.php
conditional statements for IE
edit your html.tpl.php folder and place the following directly after the $scripts
<!--[if lt IE 9]>
<script src=”<?php print base_path() . path_to_theme(); ?> /path/to/some/script.js”></script>
<![endif]-->
be sure to flush the cache when done
definitions
Core: the core Drupal files as downloaded via drupal.org
module: something that extends drupal (module tab)
theme: what defines the your site looks (appearance tab)
content type: a template for specific types of content (structure tab > content type)
defines what field is presented in the UI, where the content appears, etc.
fields: places for information inside of a content type
content type  = customer, fields = address, phone, email, etc.
nodes: the actual content you create, and is based on a content type
views: display multiple nodes in one place
taxonomy: how do you characterize content based on vocabulary & terms
Aggregator: Drupal’s tool for collecting news feeds from third parties (e.g. CNN)
performance
admin > reports
status report: anything in red requires attention
available updates: if there is a problem in the status report, check here
recent log messages: everything that has happened that is notable, e.g. errors/searches/warnings
field list: shows you all fields being used in your entire site
make sure to delete fields that are no longer used, e.g. deleting a content type but not its fields
top access denied errors: if anyone tries to access a page they don’t have permissions for
top search phrases: what are people searching for
valuable for marketing reasons
amp stack logs
check your phpmyinfo() to find error log files
acquia : settings > logs > click one of the view links
check apache
www.analog.cx (interprets apache logs)
site monitoring
view site as an anonymous user
sign up for your own site using a disposable email address to check the experience
check links & check images, do this periodically
backup & restore frequently
read email notifications your site sends
check site configuration settings
use all of your forms periodically
check users/nodes/comments
use google analytics
drupal.org/project/google_analytics

production drupal
launching a site via ftp
connect to site via ftp
confirm if its multi-site / single-site
drupal > sites >
all (contains modules & themes for all sites)
yoursite folder: has to be specific to the web host
e.g. somesitename.dev3.webenabled.net
drop yoursitename folder into the webservers public html folder (where public users can request web pages)
move the database over from your local >> production
login to phpadmin on the webserver
create a database (or import if its available)
if created, there should now be an import tab available
import your database.sql file from drupal
after importing, phpadmin should show a success message
drupal > sites > your sitefolder > open settings.php (may have to turn off read only by right clicking)
change the database settings
comment out the $base_url if its not a multisite
change the db username to the host username
change the db password to the host password
change the db port number to the host port number
set read only on settings.php
replace settings.php on the host
basic steps
move the files
move the database
update settings.php and upload to server
backing up and restoring drupal
use backup and migrate module
configuration  > system > backup & migrate
you can backup your database/files/entire site to your computer / server
tabs
backup: where to backup
restore: pick a file to restore the db
destinations:
profiles: set backup schedules
advanced backup: do a onetime backup
backup files: just copy the entire yoursitename folder
updating drupal
modules > usually shows what needs to be updated, always update the core first
core update
drupal.org/project/drupal
download the drupal you want to update too
unzip
move the old sites folder into the new drupal folder
rename the new folder to the same name as the old drupal
replace the old drupal
update your php
yoursite.com/update.php
repots > status report: shows you the status of all your modules
module update:
modules > update the module
update your php
yoursite.com/update.php
making a theme production ready
uninstall modules
modules > uninstall
devel, theme developer, performance loggin, advanced help example, image cache ui,
after uninstalling, delete the files from your sites > all > module folder
optimize css + js files
configuration > development > performance
bandwidth optimization setting:
aggregate & compress CSS files
aggregate javascript files
page caching
configuration > development > performance
caching section
cache pages for anonymous users: any user not logged in will receive a cached page
cache blocks: so that blocks that are not required aren’t loaded
mimum cache lifetime: allow for cached pages will not be recreated unless X time has elapsed (choose at least 1 hour)
expiration of cached pages: the maximum time an external cache can use a page
use 3 hours
alternative php cache (module)
drupal.org/project/apc
free & open source code that allows caching & optimizing php code
pressflow 7: distribution of drupal with integrated performance, scalability, availability, and testing ehancements
could possibly use this instead of drupal core
memcached.org: allows for object caching on the database side
increase the performance for users logged in as administrators
varnish: varnish-cache.org
open source web application accelerator: installed in front of your webserver where it will cache your content similar to a CDN
performance settings
developer.yahoo.com/yslow
analyzes web pages and suggests ways to improve performance (requires firefox/chrome)
http://www.lynda.com/Drupal-tutorials/Exploring-performance-settings/86650/96378-4.html
images
use CSS sprints: css-tricks.com/css-sprites
drupal interface
toolbar: admin bar at the very top
dashboard: customizable view of administrative options
appearance: themes
set which theme is used for visitors, and for administration (bottom of page)
settings tab: toggle display of pages, logo image settings, shortcut icon (favicon) settings
uncheck ‘use default’ to specify your own
structure: define which ‘blocks’ show up on which pages
blocks: groups of content placed in specific areas of the page UI
content types: specify which fields are associated with specific nodes
modules: define which functionality modules are activated, e.g. a poll/article/basic page/ etc
people : setup users & specify their permissions
content types
basic page: used as static content,e.g. a homepage, or contact page
manage display: choose default / teaser
how fields are shown in full mode, or short (teaser) mode
manage fields: modify database level metadata concerning fields, e.g. edit summary available? field type, etc.
click and drag order of appearance of fields
creating new content types
structure> content types > new content type
title: what identifies the node when a user creates a new node of this content type
publishing options
display settings
comment settings
menu settings
content options
publishing options:
published : visible to non admins?
promoted to front page? lists on the home page
 stick at top of lists (make it at top of other content)?
url path settings: url alias, specify a specific url (friendly url)
authoring information: who wrote it?
manage fields:
fields can be reused in multiple content types
structure > content type > manage fields
edit tab:
content type > manage fields
existing fields: bring over an existing  custom field, and its constraints (configuration) but no data (unless their taxonomy e.g. term reference fields)
field types
Lists: create a list of allowable values
auto complete  || radio buttons || select list
generic
numeric
text
numbers
Float:
decimal:
integer:
text
text
Long text: e.g. body
Long text & summary: e.g. body but includes an editable summary
Files
file: will be displayed as an attachment
image: will be displayed as an image
Boolean: yes/no input
Term reference: reference taxonomy terms
specify which vocabulary it draws from
users can add items arbitrarily
additional field types can be added via contributed modules
manage display
adjust how fields are displayed at the content type level
Default v Teaser: adjust how fields are displayed in default view v teaser view
Label: how should the field label be displayed? hidden? above ? inline
Format: default || unformatted || hidden || image || others
Gear icon: depends on the field type what options you have
manage content types by context
e.g. : nodes on the front page, default full node, teaser, RSS form
structure > content types > manage display > custom display settings

image styles
structure > content types > manage fields > add/edit an image field > manage display > gear icon
configuration > media image style > edit existing image || add style
crop: removes parts of the image to fit inside the required size
desaturate: removes color (black n white)
resize: down/upscale the image
rotate: rotate + add background color, or randomize the rotation angle
scale:
scale & crop: scale on side while cropping the other

programmatically creating content types
node: a single item of content that belongs to a single content type
each content type has a common set of properties
publishing, identifiers, creation dates (known as fields)
reasons for programmatic creation:
add  custom functionality like triggered events
there are widgets for entering and editing code
compatibility with modules like views and feeds
easy to deploy site features

saving instances of a module
Create a content type based on your module

configuration
configuration
site information: site name, slogan, email address, error pages, # of posts on front page
file system: specify a private file system path to where only registered users can download files
set a location to save the file
if you then open up your drupal htaccess file, you’ll see it says ‘deny for all’ somewhere
add a file field
set the upload destination to ‘private files’
click ‘edit’ and give the ‘file directory’ a specific folder name to save any files uploaded via this field
use a module that allows you to set the access to the node
contact access
private files help: drupal.or

UI
very consistent from page to page
each page has specific sections/areas, e.g. header, sidebars, footers, main content,
Themes: determines what sections are available on each page, CSS, HTML
drupal.org/project/themes/
Blocks
blocks go in regions as defined by the theme
configure all blocks: structure > blocks
configure individual block: hover over a block while signed in as an admin
changes to block layout only effect the them (tab) that you’re on
each block region has its own CSS definitions
some block regions are responsive, it depends on how the theme was programmed
modifying blocks
structure > blocks
create new block: structure > blocks > add block
visibility settings
show pages: what pages should this block show on?
<pagename>
show content types: specify to only show the block if a specific content type is also shown on the page
show roles: only show to specific users
show users: if the block is customizable to a specific user
custom blocks have an extra field ‘delete’ & ‘block body’

taxonomy
must be a version that matches your version of drupal
try to only use ‘released’ versions
require a fluid/fixed theme? i.e. responsive
recolorable ?
number of block regions?
theme extenders?
base theme: starter themes that expect you to style it
subtheme:
skinr
suckerfish
menus
menus are container of links (nodes)
all menu links require a page (e.g. a basic page) where they live
in the body of the basic page, paste something similar as below to create a multi-level menu

in the menu
in the ‘path’ specify the node/url-alias of the basic page you created
‘show as expanded’ only useful for multi-level menus
structure > menus
settings:
source for main links: e.g. main menu
source for secondary links: e.g. user menu
structure > blocks: specify which block the menu appears in
default menus
main menu: is the home page menue
user menu: in the top right
navigation menu:
management menu
all menus come with a block, so you can display the menu in any area of the page
creating menus
create a menu
add the links
move the menu’s block into a region on the page
multilevel menus: i.e. nested menus
structure > menus > select a menu >
you can move the indentation of menu links to create multi-level menus, or create a basic page and use html to define the links
Building themes
drupal.org/project/themes
find download link > right click & copy url > appearance > install new theme > install from a url> go back to appearance & enable it
each theme has its own layout, and options, etc.
locations
add & enable new theme
appearance > install new theme
appearance > enable & set as default
see block regions: structure > blocks > demonstrate block regions
edit theme: appearance > find theme> click ‘settings’
starter themes: drupal.org/node/323993
video links:
http://www.lynda.com/Drupal-tutorials/Building-themes-traditional-way/73655/78836-4.html
requires: php, javascript, css, knowledge of the drupal api
css: must know
php: must know
drupal standards: the drupal api

notes
anatomy of a theme
Designing the layout: receiving the comp
converting the layout: from a designers image to html, CSS, getting images, configuring the interactivity via javascript
modifying Drupal html output: setup the .info file, setup the template files (.tpl.php), replacing page variables (replace static headings/subheadings/etc with template variables)
structure of a theme
core themes: drupal > themes : never edit anything in this folder
custom themes: drupal > sites > all > themes > customtheme > assets >
css folder: keep all your css here
images folder: keep all your images here
js folder: keep all your javascript here
customtheme.info : metadata for your theme, should have the same name as your theme
screenshot.png : the screenshot of your theme

if you add hardcoded values in any of the templates, it will appear for all pages/blocks that use that template
add html to specific pages/blocks/nodes
enable theme developer
locate the block/node/etc
see what it is using:
‘Template Called’ section: shows you which specific template the item is using
‘Parents’ section, shows you the structure of the item
templates folder
can contain: html, page, region, node, block, views-view, all ending in tpl.php

template suggestions
https://www.drupal.org/node/1089656
similar to cascading stylesheets, drupal will always use the most specific template when choosing what to display
nodes
1. node-nodeid.tpl.php
2. node--type.tpl.php
3. node.tpl.php
regions
1. region--region.tpl.php
#region names are determined by the theme’s .info file
2. region.tpl.php
blocks
1. block--module--delta.tpl.php
2. block--module.tpl.php
3. block-region.tpl.php
comments
1. comment-wrapper.tpl.php
2. comment--node-type.tpl.php
3. comment.tpl.php
page
1. e.g.,
html.tpl.php:
https://api.drupal.org/api/drupal/modules!system!html.tpl.php/7
responsible for displaying a basic header, and wrapping the body of the page
variables
$styles & $scripts: reference external scripts you put in your .info file
$classes : classes for your body tag
$page_top and $page_bottom: prints your page top & page bottom html
$page : prints the content generated by the page.tpl.php template
page.tpl.php :
https://api.drupal.org/api/drupal/modules!system!page.tpl.php/7
contains the logic for rendering regions within a page
can be overridden by creating a new page.tpl.php in your sites>all>your theme> templates > page.tpl.php
$mission,
$search_box,
$feed_icons, $footer_message
$main_menu,
$secondary_menu
$sidebar_first, $sidebar_second
$page : array containing data rendered by regions
$page['help']: Dynamic help text, mostly for admin pages.
$page['highlighted']: Items for the highlighted content region.
$page['content']: The main content of the current page.
$page['sidebar_first']: Items for the first sidebar.
$page['sidebar_second']: Items for the second sidebar.
$page['header']: Items for the header region.
$page['footer']: Items for the footer region.

template suggestions: drupal will use templates in order, listed from the most specific to the least, e.g.
node > nodetype > nodeid
creating pages
page--front.tpl.php #design the front page
once you create this, the internal (non front pages) will use the page.tpl.php
thus you can have a design for the front (landing page) and any internal pages
region.tpl.php
acts as wrappers for nodes, blocks, and views
allows you to add custom CSS/HTML markup to specific regions
template suggestions: region > region defined in .info file
node.tpl.php
https://api.drupal.org/api/drupal/modules!node!node.tpl.php/7
anything that isn’t a block/system file, is likely considered a node
copy default: modules > node >node.tpl.php into your custom templates folder
review all of the comments in that file to see the available variables
open your page and review the html, dig deeper into the structure until you see a div tag with id=node #
main > wrapper >divblock system main > div id=”node 1”
you can remove what you don’t need to clean up the drupal html output
drupal.org/node/1089856
$content : e.g.
$content[‘comments’]
can be: links,
$picture_author : array, used in
block.tpl.php
wrapper for blocks/views content
modules > blocks >block.tpl.php copy to your custom templates folder

comment.tpl.php
PRINTS THE HTML markup for comments
views-view.tpl.php
regions: dynamically place content on the page, and where blocks are placed
output list of nodes of content in arbitrary manners,
display nodes, filter nodes, etc.
location: sites > all > module > views > theme
views is a contributed module
views-view.tpl.php  copy > paste into your custom theme template folder
determines how the overall view Is placed on the page
views-view-fields copy > paste into your custom template folder
this determines how the fields in a view displayed on the page
you can remove most hard coded div tags that are used to wrap content
 $field->content
this is the actual field content, you can remove most of everything else (always check)
theming roadmap:
What page are you dealing with?
what are your page variables?
What regions are on the page?
What blocks are on the page?
What views are on the page?
What nodes are on the page?
template.php
https://www.drupal.org/node/1728096
https://www.drupal.org/node/173880
overriding variables: use preprocess & process functions functions in your template.php
add external stylesheets/javscript files
create a function:
function YOURTHEMENAME_preprocess_html(&$variables){ add stuff here; }
drop in some code
drupal_add_js('http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js', 'external');
drupal_add_css('http://fonts.googleapis.com/css?family=Tangerine',array('type' => 'external'));

info
https://www.drupal.org/node/171205
themename.info: information about the theme and specifies everything the theme relies on,
must have the same name as the theme
name: the themes name
description: the description of the theme;
stylesheets[all][] : array that keeps links to various css files
regions: all of the block regions that show up in your theme
bartiks info file

stylsheets
stylesheets[media_query][] = assets/css/custom.css
replace media_query with:
all
print
screen and (max-width: 600px)
external stylesheets
check the template.php section
custom scripts
scripts[] = somescript.js
external scripts: check the template.php section
regions
regions[region_name] = Region Name
should always have the following regions
featured, content, sidebar, footer, page_top, page_bottom
you can then place it into your page.tpl.php (or other template file) so that it is available on the page
<?php print render($page[region_name]); ?>
database & content
all content is cached to make loading data from the database faster
theme registery: to cache layout related activities
clear the theme registery when adding/removing theme functions/templates
editing theme functions/templates does not require a rebuild
configuration > development performance : click clear cache
php template variables
used to print html output
$messages #any messages from drupal
in core: drupal > themes > e.g. bartik > templates > page.tpl.php
you can copy & paste it when subtheming, e.g. to render a new region
you can now edit your page.tpl.php and create a new region in it
<?php print render($page['header']); ?>
you should now be able to go to structure > blocks > demonstrate block regions
drupal > modules > systems > page.tpl.php
core themes
bartik
folders:
color: color module that allows for visually changing the theme
css: all the stylesheets
images: duh!
templates:
files:
info file: contains the metadata for the bartik theme
logo & screenshot: provide a visual reference for the appearance tab
template.php: advanced theming to override variables through preprocess & process functions
creating themes
create  a folder in drupal > sites > all >themes > yourthemname
yourthemename.info
name = Your Theme Name
description = Some Description
core = 7.x

assets folder
images folder
css folder
js folder
templates folder
copy drupal > modules > system > html.tpl.php into this folder
convert this page to match the static comp you received from the designer

starter themes

basic themes

zen
use the ‘starterkit’ folder and copy that to subtheme it

sub theming
sub theming core themes
you must have the core theme installed
create a new folder in sites > all > themes
create .info file with the same name as the folder
add your meta data, be sure to specify
base theme = theoriginalthemename
anything in the new .info file will override the same thing in the core theme
copy the logo & screenshot into the folder
you can now enable the theme
drupal will use all of the files from the original theme,
steps for zen
can be done to any installed theme
enable a theme via the appearance tab, click ‘set default’ next to the theme you want
themes location > drupal > themes
never edit the theme directly, always copy it to
drupal > sites > all > themes
this is where your custom themes go
.info file
decide if you want fixed / responsive css
in the .info file, be sure only one of the css files (fixed || responsive) is included in the stylesheets array
the css rtl file is for languages that go from right to left (e.g. Hebrew or Arabic)
edit the template.php
edit the theme-settings.php
anywhere ‘STARTERKIT’ is located in both of the previous files, change it to the name of your new theme, e.g. ‘myzentheme’
STARTERKIT is a function name, so you must respect capitalization of the custom name you gave to your custom theme
you can now enable the theme in drupal
you can now start editing the css and php to design your theme
CSS
the order of stylesheets matter, put the most important last (duh! css is cascading)


building modules
Notes
Content types can store ‘instances’ of a module, WOO!!
e.g.  create quickjoin module > create content type > content type saves an instance of the module
create a folder named after your module in sites/all/modules/yourmodulename
create two files in your new module folder
yourmodulename.module #contains the actual code including hooks
yourmodulename.info #contains information about what your module does
core = “7.x”
description = “random description”
name = “admin name”
Configure = admin/config/modulename/manage
you must create the configuration page in modulename.module
check the quickjoin form
this provides a link to the configuration page in the Module menu (where you activate modules)
hooks: functions with special names that will be called by drupal when a particular action occurs
yourmodulename_menu() #called when menu information is gathered
samples
describe modules metadata in INI format and store it in the .info files

access control
role: mechanism for assign specific permissions for a group of users
people > permissions > roles
stock roles: anonymous, authenticated, adminsitrator
first user in the system is considered the ‘root’ user
Permissions: what each role can do
always create a new permission for managers
permissions are set automatically by user_access
hooks
https://api.drupal.org/api/drupal/includes!module.inc/group/hooks/7
hooks: php function that allows functions to modify drupal behavior
similar to a call back, that can trigger events
no listener, but are triggered by their name
naming convention
prefixed with module name
defined parameters and return type
implement the hook by writing a function that conforms to the naming convention,
hook_menu()  function quickjoin_menu() {your code here }
replace the word ‘hook’ with your module name
must use the same # of params as specified in the documentation
hook examples
hook_form(): create front facing forms

hook_help(): allows documentation to be made available to the user
hook_menu(): gives modules the ability to add items to site menus and route page requests to code based on the url
api.drupal.org/api/drupal/includes!module.inc/group/hooks/7
menu system: defines navigational menus & routes page requests to code by url (paths)
hook_help

hook_permission
supplies permissions defined in a module so they can be used from the user permissions page
grants & restricts access who can execute
api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_permission/7
returns an array
takes no parameters
hook_permission return array
key containing name
nested array: title & description

hook_menu
api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_menu/7
hierarchy can be initially set in code, but is changeable via the menu module
defines menu items and page callbacks
a module can define what items are shown in the menu
the path that is associated with the menu item
and the callbacks to be used when the path is accessed
custom permissions
require: access arguments, and access callback
access arguments:
access callback
default: user_access (checks the permission by name)
page callback: the name of the function that displays a webpage when a user visits the path
$items[‘access_arguments’] https://www.drupal.org/node/553368
hook_form($node, &$form_state)
function to create a form
https://api.drupal.org/api/drupal/modules!node!node.api.php/function/hook_form/7
elements declared with arrays
can be nested
displayed in defined order by default
takes two parameters:
$node: the content being added/edited
&$form_state: passes data about the form state between steps
form state is passed by referenced to allow its content to be manipulated by the creation, validation, and submission states
form elements
notes
all $form[‘fieldname’] best practice is to match the field name as it is stored in the database
are in the #type=> part
textfield
textarea
select, add ‘#options’ => array(‘one’, two’)
radios, add ‘#options’ => array(‘one’, two’)
checkboxes, ‘#options’ => array(‘one’, two’)
checkbox
date
file, must include on a separate line
$form['#attributes']['enctype'] = 'multipart/form-data';
this goes inside the function, as if you were declaring another field
passowrd
fieldset
you then add fields to the field set
$form[fieldsetname][fieldname] = array(
'#collapsible' => TRUE,
 '#collapsed' => FALSE,
markup: used to display HTML on the form
$form[‘randomfieldname’] = array(‘
#markup’ => t(‘some random html text content, can include html’),
‘#prefix’ => ‘<p>’,
 #suffix’=>’</p>’) #this wraps the markup in html tags,  best practice is never to use prefix & suffix, but instead use theming to specify the wrapper tags

form attributes
'#type' => 'textfield',
    '#title' => t('First name'),
    '#required' => TRUE,
    '#default_value' => "First name", // added
    '#description' => "Please enter your first name.", // added
    '#size' => 20, // added
    '#maxlength' => 20, // added
form validation
provides mechanism for common validations:
required fields
enforce data domains
cross-site request forgery (CSRF) protection
anything beyond the above must be customized using standardized callback function
same name as form followed by _validate
form name = quickjoin_form()
validator = quickjoin_form_validate($form, &$form_state);

form submission
when validation has passed, the drupal form api looks for a submit callback
yourformname_submit($form, &$form_state)
$form_state
an array containing various keys
$form_state[‘values’] #contains all of the sanitized values
$form_state[‘rebuild’] = true/false;
Specifies if the form should rebuild
set to true to show valid values and not default values after form validation
use with devel functions
dpm($form_state) #displays a variable to the message variable of the page, this will print the $form_state to the page
hook_install
api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_install/7
a triggered event when a module is installed
can also be used to programmatically create content types
see quickjoin.install
see research section
create a new file in the module folder
modulename.install
it is just a php script with .install as its ending
hook_uninstall()
function to run when a module is uninstalled
must be explicitly called when a module is uninstalled
include in the file
modulename.install
functions
t(“your text”) #translates a string into a particular language & also handles variable replacement in strings & string sanitization
should never be used to translate code/html elements (as you need them in English)
api.drupal.org/api/drupal/includes/%21bootstrap.inc/function/t/7
not available when a module is installed, instead use

drupal_set_message
api.drupal.org/api/drupal/includes%21bootstrap.inc/function/drupal_set_message/7
stores user messages in the session and display them to the user
useful for display a message after a form submission
drupal_set_message(t(‘some message to user’), ‘message_type’)
message type is optional, defaults to status if not provided
persistent variables
variables are useful for settings, but NOT for content
start with a module name
variable_get #gets a value by name and optionally provide a default value if the variable has never been set
use this with form elements, as the default value
variable_get(‘formelementname’, defaultvalue)
variable_set #saves a value to the db by name
variable_set(‘fieldname’, $form_state[‘values’][‘fieldname’])
do this for each field you are saving in the DB
variable_set handles all of the sanitization
when used in the module.install file (See hook_install()) make sure you do not set default values in form elements for the same variables (because then there will be multiple places trying to set a default value for a specific variable)
instead just variable_get() to get the default values
variable_del #delete a value from db by name
Form API
building a form: https://www.drupal.org/node/1419390
drupal 7 form api: https://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7
drupal 7 form generation: https://api.drupal.org/api/drupal/includes!form.inc/group/form_api/7
10 step walkthrough: https://www.drupal.org/node/262422
another form example: http://www.sitepoint.com/understanding-forms-drupal/
skipped:
reset form button: https://www.drupal.org/node/717742
add another field code: https://www.drupal.org/node/717746
multipage form: https://www.drupal.org/node/717750
display confirmation message before processing a form: https://www.drupal.org/node/470834
read:
create custom content type + module with form
https://www.drupal.org/node/1039998
http://www.fredparke.com/blog/creating-content-types-and-fields-using-custom-module-drupal-7
sophisticated framework for building, validating, and executing forms
uses hooks, modules can manipulate any form within drupal, by extending & overriding functionality
steps:
creation: form elements and hierarchical structure using standardized array
theming: manipulation of the design (individual form elements, all the way up to the entire page)
validation: generalized validation, can add more beyond what drupal does natively
submission: custom behavior can be included,
notes
If needed build multistep form, then necessary to specify in $form_state the 'rebuild' value as TRUE:
functions:
drupal_get_form(‘yourmoduleform’)
is part of the form api
takes 1 parameter, the form identifier
each form can have a distinct name, as long as it ends with _form
e.g.
quickjoin_admin_settings_form
form_set_error(‘elementname’,’error message to user’)
api.drupal.org/api/drupal/includes!form.inc/function/form_set_error/7
displays an error to the user
system_settings_form($form)
creates form elements(e.g. submit) saves the form elements to the DB, and gives the user a generic ‘success’ message
COMPLETELY REMOVE:
form submit handlers
form submit buttons
set the form return to
return system_settings_form($form)

drupal 7 entity API
Shared API for managing data structures and relations
entity type: an abstract group of fields
field: a reusable data container holding primitive data types (number, text, etc.)

Entity: an instance of an entity type, and any given entity has the same field but with different values
Bundle: subtype of an entity type with predefined set of attached fields and any arbitrary additional fields

windfarm = bundle of an entity node
long + lat are additional fields
attached fields are a ‘field instance’ which allows them to be reused on multiple entity types/bundles
title & nid are the entity fields
all defined in modulename.install

Nano & cli
nano
edit/create a file with nano: ‘nano filename.txt’
group find and replace: ctrl and  \
copy a line: ctrl and k
paste: ctrl and u
cli
copy a folder and move it to a new location
cp -R foldername/ ../newfoldername
copies foldername/ recursively >> goes up one level > places the copy as newfoldername
rename a file
mv currentfilename.blah newfilename.blah
modules
tabs
list: list all of your modules
uninstall: remove a module, not all modules use this


contact forms
structure > contact forms
yourpage.com/contact
‘selected’ option, only one contact form can be selected at a time, whichever one is ‘selected’ is the one that will be selected as the default form when specifiying a value for the ‘category’ dropdown on the contact page
add link to structure > menues > main menu > and specify the contact url as a menu link
blogs
yourpage.com/blog
each user has their own ‘blog’ page
blogs are automatically listed in reverse chronological order
forums
discussion forum
yourpage.com/forum
structure > forums >
forum: sections of your forum, e.g. General Discussion,  Support, etc.
each forum is a collection of user created forum posts
forums can also contain other forums
Container: contains multiple forums
drag and drop forums into containers
polls
yourpage.com/poll
books
individual nodes of the book type are like basic pages/articles, but have features that make them navigational (prev/next links)
e.g. drupal.org/documentation/understand is a book
sample book structure
everything in a book is a page, which can be containers for other pages
content > book tab
edit order & titles: drag and drop the order/hierarchy of books
content > add content > book page
book options
show menu settings
show book outline: control into which book you put a page, and where its going to go
create a new book: this page is the first page of the book
select a previous page (it becomes a page in that book
parent item: select the if this page is a chapter/a page within a chapter
structure > blocks > the book module creates a block
useful contributed modules
contributed modules > drupal.org/project/modules
most installed modules come with a ‘help’ link, or have a documentation page on drupal.org/project/modules/somemodulename
some even have a ‘configure’ link
additional module sites
drupaleasy.com/45
nodeone.se/blogg/49-modules-you-should-know
drupalmodules.com
install new modules: modules > install new module > paste in url / upload the downloaded version
dependencies: other modules the current module requires
Context
ImageCache Actions: https://www.drupal.org/project/imagecache_actions
ctools (chaos tools)
plupload: privides integration with the plupload widget & drupal to upload multiple files
http://www.plupload.com/
token: used when you want to configure path auto
‘url alias patterns’ when editing a path
type in a little bit of text (tokens) and it acts a variable, e.g. a regex
date: makes your drupal site understand dates, including leap years, regional differences in format, etc.
new field types
date, datestamp, datetime
administration menu: gives  a multi-level admin menu
make sure to turn off ‘toolbar’ so you don’t have two admin menus at the top of the screen
wysiwyg: allows you to use the wysiwig editor of your choice
configuration > search for wysiwyg
click ‘configure’ after installing wysiwyg
click ‘edit’ after installing an editor
use ckeditor for simplicity sake
download it > uncompress it > load it into > drupal > sites > all > ckeditor
issues
https://www.drupal.org/node/1161738
https://www.drupal.org/node/1853550#comment-9213657
to specify roels & permissions
create a new text format > limit roles to the text format to the people you want to be able to use it
advanced help
backup and migrate: very useful for backing up and migrating drupal
contact access: control who can access your files
Feeds: move content from one site to another
diff
coder
google_analytics
drupal libraries api: https://www.drupal.org/project/libraries
aws sdk for php https://www.drupal.org/project/awssdk
storage api: https://www.drupal.org/project/storage_api
gmap3 tools
job scheduler
job scheduler trigger
user locations
locations
location fax
location phone
location search
location taxonomy
node locations
color
contextual links
field storage
rdf
views
views content pain
coder
coder review
coder upgrade

domain access
every domain you want to use must point to the same place on your server
can use subdomains, subdirectories, and different ports
determins who can access what, by based on where the visitor is trying to look
assumes you have wild cared DNS turns on
structure
only has 1 settings.php


block class
add classes to blocks through the blocks configuration interface
structure > block > find a block > click configure >there is now a ‘CSS CLASSE(ES)’ that you can add to the block
conditional styles
https://www.drupal.org/project/conditional_styles
allows you to add conditional styles directly to your .info file
edit your themes .info file
stylesheets-conditional[if lt IE 8][media_query] = yourstylesheet.css
if lt IE 8 = your conditional statement
all = your media query
theme developer:
shows you theme information (like dev console)
weight: add weighting options to nodes, so you can specify the order of content lists
https://www.drupal.org/project/weight
Click the ‘themer info’ in the lower left
hover & click over any section of the page
you’ll see the template being called, what preprocess functions are being used, process functions are being used, and what array variables are being output by drupal and are available for you

devel
devel: fills your site with dummy content drupal.org/project/devel
configuration > development >
devel settings
generate content
generate menues
pretty much anything with ‘devel’ or ‘generate’
after you generate your dummy content, you can turn off all of devel
the content becomes real content, that you can delete through the regular process
structure > blocks:
development: added by devel, lets you
devel settings: shows you the devel interface
query log: displays the queries that the current page executed to output the data

drush
interact with your drupal site using drush
drupal.org/project/drush
drush.org
upload it into your bin directory (you can upload it anywhere
Features
takes any settings in drupals database and creates quasi-modules that can be transferred to other sites
e.g. content types
drupal.org/project/features
structure > features
create a feature
edit components: specifies what goes into the feature
download the feature
import a feature into a separate site
drupal > sites > all > modules > drag and drop the unzipped feature file you downloaded earlier
install & enable features
structure > features > enable the feature you imported

views
structure > views
configuration > some module
click the enable next to a view to replace drupal core functionality
views: all about display data to end users
views are totally new pages, that you define which blocks/content is displayed without having to go into drupal core
created views become blocks (if you add a block to the view)
pull arbitrary entities via node relations and display on one page
dynamically collect information/data from entities
sorts information, e.g. recent posts first
display’s specific fields that you specify in the format that you specify
steps to build a view
understand the fields in the content type
create a view: structure > views > create new view
page 1: setup the view
view description: only displays in admin
view tags: describe views to easily find them
view type: what is the view based on?
page 2: configure the view
filters: (far right) only display the nodes you want
decide what type/group of content
only display nodes
then set the criteria
only nodes that have been published
fields: (middle col) decide what fields you want to display
there is also a section to add custom headers/footers/ etc. directly in the view
create a display: (left col)
e.g. a page / block then click add
each time you add a page/block, a new ‘settings’ area is added to the immediate right of the left column
path-settings: this is where you dfine the url of the view you created
you can set default settings for the view in this section, e.g. editing the title (Separate from the header in the middle section)
rules
https://www.drupal.org/project/rules
configure your site to respond to user actions
configuration > rules
events: something happens
conditions: conditions required to be met when an event occurs, for an action to take place
actions: what rules does
components tab
package rules for easy reuse
pathauto
pathauto: provides automatic path aliases for new content
uses the ‘title’ of the content by default
when you create a node,  the ‘url path settings’ option will have the ‘generate automatic url alias’ that uses the path auto settings you define, the default is to use the path
configuration > url aliases >
patterns tab: specify the automatic url settings
settings: defines how path auto thinks, e.g. which words never to include in the automatically generated url alias
programming modules
check the ‘text formats’ video for how to use the php filter for adding basic functions
drupal > sites > all > modules : copy module into this folder to install it without having to go through the UI
api.drupal.org : check this site for all documentation for programming modules
module structure
blah.info : required
name
description
drupal version
drupal.org/node/542202 (check this site for all params)
blah.module : required
hook menu section: how the module connects to drupal
form: drupal interprets your php and converts it to html
drupal.org/node/751826 (check this for form information)
page:
functions, e.g. $output
drupal.org/node/1354 (check this for doxygen format)
