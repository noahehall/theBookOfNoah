setting default argument values
http://www.lynda.com/MySQL-tutorials/Deleting-subject/119003/137039-4.html

w3schools: open all 3
http://www.w3schools.com/php/func_filesystem_pathinfo.asp
http://www.w3schools.com/php/php_ref_filesystem.asp
http://www.w3schools.com/php/php_file_upload.asp
Notes
4 ways to get data from users
GET: urls/links
POST: forms
COOKIES: pull data from browsers, which is stored on the users file system
i.e. stored client-side
limited to 4k chars
SESSIONS: rely on cookies, it is a file that is stored on the web server (in the web servers file system)
i.e. stored server-side
much more robust than a cookie
PHP
script: runs in response to an event
performs instructions from top to bottom
little or no user interaction
Program
runs even when not responding to events
jumps around the instructions
lots of user interaction
server-side scripting language
the code works on the web server
e.g. php
client-side language
the code works on the client server
e.g. javascript
PHP
does not need to be compiled
designed for use with HTML
can be embedded with HTML
can output HTML
ends with .php to tell the webservers that this file contains php
provides more flexibility than HTML alone
code refactoring: revising existing code to change its structure/appearance without changing its behavior
i.e. let’s improve our code
for simplicity, maintainability, efficiency, flexibility (Reusability, extensibility)
run from command line
php -r 'your code here;'
installation
web server: to serve the web files to the web browser
PHP: the language that tells the web server how to run PHP
database: to hold the data
Text editor: to edit it
Web browser: duh
Stacks
LAMP: linux, apache, mysql, php
MAMP: macintosh
WAMP: windows
XAMP
windows steps
download apache web server
configure apache
install php
configure php
download & install mysql
configure mysql
set root password
download and install text editor
WAMPserver
installs apache, mysql, php in ONE GO!
check your systems type
control panel > system > show witch operating system your running on
Other installation steps
find the document root:
apache root > www #in WAMP
C:/apache24/htdocs #when you install it yourself
you have to open PHP files in the browser and have the apache server load them in order for the php to be interpreted as HTML
setup php: review your phpinfo
loaded configuration file: this is the file that determines the settings of PHP
every line with a semi colon means it is not being processed
anything with ~ means do not use this
display_errors: ON
turn this ON! with the following two settings
error_reporting = E_ALL
html_errors = On
output_bufferring = Off
is a desireable feature
learn why you want to use it
date.timezone = BLAH
set it to your timezone
at least use UTC, or find one at the following
php.net/manual/en/timezones.php
setup mysql
set root password
background
request-response cycle

type juggling: when php converts data types automatically, like trying to add a string and a number
type casting: when we specifically set the variable type
PHP syntax
<?php your-php-code ?> #outputs everything
best, because it’s the default every where
<? your-php-code ?> #does not output code
<?= your-php-code ?> #does output code
<% %> and <%= %> #ASP syntax, works like the short-form of php
must be configured in your php.ini file
white space inside php brackets does not matter!
always use a semi-colon at the end of a statement
comments
//single line comment
#single line comment
/* multi-line comment */
variables
case sensitive
start with a letter or underscore
contain letters, numbers, underscores, or dashes
no spaces
quotes
‘ ‘ cannot do string interpolation
“ “ can do string interpolation
operators
.= concatenation
+= plus
-= minus
*= multiplication
/= division
#++ #add 1 after assignment
#-- #minus 1 after assignment
++# #add 1 before assignment
--# #add 1 before assignment
commands
echo ‘blah’, $blah2, ‘blah3;
echo’s its arguments to the client
die(‘exit immediately and send this message to the client’);
data type check
is_int(#) returns true/false if its an integer
is_float(#) returns true/false if it’s a float
is_numeric(#) returns true/false if it’s a number
is_bool(var) #returns true/false if it’s a Boolean
is_null(var) #returns true/false if its null
returns false on empty string!
isset(var) #returns true/false if var has a value
returns true on empty string, and a var without a value
empty(var) “”, null, 0, 0.0, “0”, false, array() #empty array
all of the above are considered empty
good way to check for false
gettype(var) #returns the datatype
type casting
(string) $var
strval(int) #converts integer to a string)
(integer) $var
(int) $var
(float) $var
(array) $var
(bool) $var
(boolean) $var
settype(var,”type”) #sets var to the specific type, same as the above

constants
opposite of a variable
can’t be changed
can’t be redefined
lives for the duration of the script
once the script is done, it can be reset (e.g. at the top of the script)
i.e. at the next request-response cycle
must be in CAPITAL
no dollar sign in front of it
must be set with a function
define(“CONSTANT_NAME”, value);
CONSTANT_NAME
#once the constant is defined, you don’t have to use quotes
strings
concatenation
‘string1’ . ‘string2’;
string interpolation
“$var”
“{$var}other text”
#allows you to put variables right next to other items and still interpolate the variable
built-in functions
strtolower(str); #upper case
strtoupper(str); #lower case
ucfirst(str); #first letter upper case
ucwords(str); #each word uppercase
strlen(str); #number of chars
trim(str) #remove leading & trailing white psaces
strstr(str, search) #searches str for search and returns everything after the word
str_replace(search, replace, str) #searches str for search and replaces it with replace
str_repeat(str, #) #repeats str # times
substr(str, #start, #stop) returns the chars at #start up to #stop
strpos(str, search) returns the index of the char where search begins in str
strchr(str, char) finds char in str and returns all of the characters after it (including search)

Math
<?php echo 2+3; ?> #outputs 5
abs( 0 - 30); #returns the absolute value
pow(base,exponent); duh!
sqrt(#), duh!
fmod(this,bythat) #divide this by that and return the remainder
rand() #random, big integer
rand(#low,#high) #random within this range
round(#, #decimals) #round # to #decimals
ceil(#) rounds the number up to the closest integer
floor(#) rounds the number down to the smallest integer
numbers
whole numbers: no decimals, positive/negative
floats: numbers with decimals, positive/negative
make sure you never divide by zero!!

Booleans, NULL, and empty
null, true, and false are CASE INSENSITIVE
either true or false
no quotes
$bool = true
will output 1, converts true into 1 when output to the client
$bool = false
will output an empty string, converts
$var = NULL
erases the value in $var
null != “”

Time & Date
time
time()
php returns the current time as a UNIX timestamp in UTC
you can add seconds to time() with simple math
$7_days_later = time() + (60 * 60 * 24 * 7)
simple math starting with seconds
60 seconds, 60 minutes, 24 hours, times 7 = 7 days
mktime($hour, $minute, $second, $month, $day, $year, $daylistsavings)
hour, 0-23
minute: 0-59
second: 0-59
month: 1-12
day: 1-31
year:
0-69 = 2000, 2069
70-100 = 1970, 2000
$daylistsavings:
1 = during daylist saving time DST
0 = not during daylight saving
do not use this, instead set the timezone with date_default_timezone_set("timezone");
examples
// Set the default timezone to use. Available as of PHP 5.1
date_default_timezone_set('UTC');
// Prints: July 1, 2000 is on a Saturday
echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000));
// Prints something like: 2006-04-05T01:02:03+00:00
echo date('c', mktime(1, 2, 3, 4, 5, 2006));
each of the following output the string 'Jan-01-1998'
<?php
echo date("M-d-Y", mktime(0, 0, 0, 12, 32, 1997));
echo date("M-d-Y", mktime(0, 0, 0, 13, 1, 1997));
echo date("M-d-Y", mktime(0, 0, 0, 1, 1, 1998));
echo date("M-d-Y", mktime(0, 0, 0, 1, 1, 98));
?>
last day of monh
"The last day in Feb 2000 is: 29".
<?php
$lastday = mktime(0, 0, 0, 3, 0, 2000);
echo strftime("Last day in Feb 2000 is: %d", $lastday);
$lastday = mktime(0, 0, 0, 4, -31, 2000);
echo strftime("Last day in Feb 2000 is: %d", $lastday);
?>

date
date_default_timezone_set("UTC")
full list: http://php.net/manual/en/timezones.php
date($format, $timestamp)
$format: http://php.net/manual/en/function.date.php
$timestamp:  integer Unix timestamp, defaults to the current timestamp (time()) if not supplied
examples
// set the default timezone to use. Available since PHP 5.1
date_default_timezone_set('UTC');
// Prints something like: Monday
echo date("l");
// Prints something like: Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A');
// Prints: July 1, 2000 is on a Saturday
echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000));
// prints something like: 2000-07-01T00:00:00+00:00
echo date(DATE_ATOM, mktime(0, 0, 0, 7, 1, 2000));
// prints something like: Wednesday the 15th
echo date('l \t\h\e jS');

arrays:
ordered
integer-indexed collection of objects
each index can contain anything, its like a variable
associative: key value pairs
requires a string (key) to access the value,
php.net/manual/en/ref.array.php
array documentation
syntax:
$arr = array(val1, val2, val3);
$arr[0] #returns val1
$arr[30] = ‘blah’
$arr[] = ‘blah’ #puts ‘blah’ at the end of $arr
$arr = array(‘key’ => value, ‘key2’=>value)
$arr[‘key2’]
$arr = [1,2,3,4,5] #short syntax, requires php 5.4+
array-pointers
php maintains a pointer that points to a specific item in an array
when you loop through an array, the pointer moves and keeps track of the current & next item
VERY USEFUL when working with databases
defaults to the first item in the array

get the item of the array pointer
if you successful get an item, execute the loop
if no item is returned, exit the loop
finally move to the next item with next
HUGE for databases, because databases arrays are NOT real arrays
database pointers: are moved by the database driver each time you request a row
each time you request a row and make an assignment, the database driver automatically calls next(blah) and moves the pointer to the next item
built-in functions
print_r($array) #prints a readable array, shouldn’t be ever output to the client
<pre> <?php print_r($array) ?> </pre>
#pre html tags keeps the code formatting, looks beautiful
current(array) #returns the position of the current item
next(array) #moves the array pointer to the next item
prev(array) #moves the array pointer to the previous item
#reset(array) moves the array pointer to the first item
end(array) moves the array pointer to the last item
count(array) #number of items in array
max(array) #highest value in the array
min(array) #lowest value in the array
sort(array) #sort in ascending order by value
rsort(array) #sort in descending order by value
implode(separator, array) #returns the items in the array as a string separated by separator
explode(separator, array) #creates an array from a string with each item indexed by the separator
#HUGE for comma separated values
in_array(this,array) #returns true/false if this is in the array
push #add to the end
pop #remove from end
shift #add to beginning
control structures:
logical expressions
if (expression)
{ statements;}
if (expression)
{statements;}
else {statements;}
if (expression)
{statements;}
elseif (expression)
{statements;}
switch (value) {
case test_value:
statements;
break;
case test_value2:
statements;
break;
default:
statements;
}
#tests equality (0 = 0, AND 0= 1 since both are numbers)
#very useful for testing strings
#be sure to add the break statement, so that it breaks out of the switch statement after the first valid statement
unless you want to execute multiple cases

single line format

return format, single line, no break required
ternary
Boolean_test ? value_if_true : value_if_false

logical operators
== #equal #same value
!= #not equal
=== #identical #same value & datatype
!== #not identical
> < >= <= <>
&& #and, both parts are required to be true
|| #or, either can be true
! #flips what whatever it precedes
loops
while (expression) { statements;}
#be sure to test the expression and set it false
for (init; test-expression; each) { statements;}
foreach ($array as $value) {statements;}
loops through each item in the array
assigns the item’s value to $value
foreach ($array as $key => $value ) {statements;}
works with associative arrays
you can now do $key[$value]
loop keywords
continue;
#stop execution of current loop and immediately skip to the NEXT loop
there is an implicit continue; at the end of each loop,
continue(#):
for embedded loops
the # tells it which loop to quit,
1 = the immediate loop #default
2 = the parent loop
3 = the grant parent loop…..etc.
break;
exit and end the ENTIRE loop,
break(#)
exit and end a specific loop
1 = the immediate loop #default
2 = the parent loop
3 = grand parent loop….etc

functions
functions: define a specific task that can be called whenever needed
if you have to do something more than once, put it in a function
function names are case-insensitive
php4 and php5 preprocesses the page to find all of the function definitions before any code executes
thus you can put functions anywhere and call it anywhere
functions can only be defined once
you cannot re-declare a function after its been declared elsewhere
i.e. you can only use the same function name once
local scope
a variable defined inside a function is only available inside a function
global scope
defines the function as global from within a function

syntax
function name($arg1, $arg2) {statements; return blah;}
function name($arg1=default, $arg2=default) {statements; return blah;}
provides optional default values for arguments

use a switch statement inside of a function with the return keyword
functions can only return one value, thus you have to use arrays to return multiple values, you can optionally use list to assign array values to multiple variables

you can set default arguments and send in an arbitrary parameters in the function call
but the order still matters

include & requires
include(“file_name.php”);
be sure the vars in file_name are wrapped in php stags
perfect for
functions
layout sections
reusable html/php code
require(“file_name.php”);
if the file is not found, it will execute a fatal error
include_once(file_name”)
only includes the file once
require_once();
see above
headers
headers: are sent with the request to & response from servers
first line: http protocol and the status code
200 = okay
404 = not found
500 = error
second line: date
third line: server
fourth line: content-type
fifth line: content-length
modifying headers
header(str) #string is what you’re telling the server something
notes
headers are sent before the page, and thus must be the first thing in the page
changes must be made before any HTML output
before a single space/line return
before whitespace in included files
code

print_r(headers_list());
returns a list of headers
page redirection
use a 302 redirect
HTTP 1.1/302 Found
location: path
header(“Location: yourUrlHere.php”); exit;
forces the webserver to make a second get request and immediately take the user to another page
exit; #tells the server to end the script immediately

same thing inside a function

Output Buffering:
since headers have to come before any html output by the server
the output buffer captures X amount of data in the PHP Compiler before sending it off to the web server
once the output buffer is fill, it will send it to the web server
this cycle repeats
as long as code is in the PHP compiler, you can modify it
can be set in the php.ini file

debugging
no output on the client
try to access a basic HTML page to ensure the webserver is running
try to access a basic php page
phpinfo();
make sure display errors is on and configured
is php showing errors?
Common errors
Typos: e.g. misspelled variable names
missing semicolon at end of line
missing quotes/braces/brackets/parenthesis
case sensitive variable names
using = instead of ==
warnings & errors
turn on error reporting in php.ini
display_errors = on
error_reporting = E_ALL
turn on error reporting in your script
ini_set(‘display_errors’, ‘On’);
error_reporting(E_ALL);
check the current error reporting level
error_reporting();
php.net/manual/en/errorfunc.constants.php
Fatal errrors: php understood the code but could not execute it
the page of code cannot be executed
e.g. calling an undefined class/function
syntax errors: php couldn’t understand what we told it to do
usually because of typos
e.g. unexpected ‘something’ in this file on this line
Warnings: php found a problem but was able to recover from it
you have a bug in your code that is not a fatal error
e.g. trying to divide by 0
e.g. incorrect # of parameters sent to a function
Notices: php oferring advice
error logs
logs/php_error.log
/etc/apache2/httpd.conf #search for log
troubleshooting
echo variables to confirm their value
print_r(arr) to review array values
gettype(var) confirm the datatype of the variable
var_dump(var) outputs the datatype and value of its parameter
get_defined_vars(): returns all variables that php knows about
debug_backtrace(); shows the backtrace of all function calls in previous lines
download xdebug or firephp
links and urls
how to get data from users
urls/links (get)
forms (post)
cookies (cookie)
GET values
query string
somepage.php?key=value&key=value
PHP puts all key & value pairs in a global variable
$_GET[‘keyname’]
encoding get values
need to encode url reserved characters so they don’t interfere with the URL
urlencode
urlencode(str_to_encode)
encode the character to a % with a hexadecimal digit and then put it in a URL
raw url encoding
rawurlencode(str_to_encode)
spaces become %20 instead of + in urlencode()
good for using on the path (everything before the query string)
this is the newest version
HTML Encoding
encoding strings so the html parser does not confuse certain characters with HTML reserved characters
htmlspecialchars(str)
html entities: all charactesr that have a corresponding html entity will be encoded
htmlentities(str)
does more than html special chars
put it all together

ensure links & urls are safe when outputting them to the client

cookies
cookies: small bits of data that websites ask browsers to keep
allows us to store the ‘state’ of a page request
e.g. to track users
be careful on using the IP
multiple users can share an IP
users can change their IP
limited to 4000 chars maximum
$_COOKIE #the super global that php stores all of the cookies in
it is an associative array
it holds the values that are COMING IN from the request, not the ones that you are setting
so it always returns the previous value set
don’t set anything critical in a cookie without encrypting it
ANYONE! can see the cookies you set
process
user sends a request to a webserver
server sends back a cookie
Set-Cookie: cookiekey = cookie value
browser stores the computer on the local computer
when browser makes another request, the browser sends all of the cookies in the headers
syntax
MUST BE SET BEFORE ANY HTML IS SENT!
ESPECIALLY IF OUTPUT BUFFERING IS TURNED OFF!
PUT IT BEFORE ANY HTML CODE!!!!!
setcookie($name, $value, $expire);
$name = the key
$value = the value
$expire = how long to keep the cookie on the local machine. must be a unix timestamp #USE time() !!!
unsetting cookie values
setcookie($name); #tells the value to set the value to an empty string
setcookie($name, null); Tells the browser to set the cookie to null
setcookie($name, null, (time()-100)); #tells the browser to set the cookie to a time in the past, i.e. delete it
setcookie($name, null, (time()-100)); #combines the null and past time expiration date for a sure fire way to delete a cookie from a user’s browser
sessions
stored on the webserver
you save a reference (id) to the session file as a cookie on the browser
Useful for:
user authentication, e.g. checking $logged_in, and $user_id variables
Storing data during redirects, e.g. $message, $errors variables
Frequently referred to data, e.g. $username, $account_type
pros:
more storage, limited based on the webserver file storage
smaller request sizes, since all you have to send to the browser is the reference (id) to the session, and not the entire info
conceals data value, no user can view what is in the session since all that you send to the browser is in the session reference (i.e. id)
more secure, less hackable
cons:
slower to access, since you have to grab the cookie that holds the session ID, find the file on the webserver based on the ID, then read the session file
sessions are designed to expire when the browser is closed,
session files accumulate, you should have a system in place to remove session files that have not been modified in the last month or so, delete
process:
user sends a get request
we save information about the user in a session
we store a reference to the session file as a cookie in the browser
on the next get request, we check for references to web server session files and take action
syntax
$_SESSION[‘id’] #holds all of the session files, will automatically be placed in the session file
$_SESSION[‘first_name’] = ‘random name’
$name = $_SESSION[‘first_name’]
echo $name
values can be set & retrieved on the same request response cycle since you don’t have to retrieve it from the users browser
Duh! because its saved in the session file on the server
$_SESSION[‘first_name’] = null
clears the value
session_start() #must be in the header, thus BEFORE ANY HTML and usually the first thing listed in the page
tells PHP to grab the session cookie that’s related to the session, or to create a new session
grab the session file from the server, open it up, get the data and populate the super global
if there isn’t a session file yet, create one, and prepare to send a reference back to the browser in a cookie so in the future we can access it
the default session ID:

can be configured in the php.ini file

Forms
all form data is kept in the post super global
$_POST[‘fieldname’]
post data should not need to be encoded/decoded
GET data should always be encoded/decoded
detecting if form fields have data


determine if it’s a post request / get request

single page form processing
very useful for redisplaying errors on the form and populate fields with previous values
set the form=action to itself
be sure to use htmlspecialchars(blah) on your input data
validating form data
common validations
presence: that the field has a value
if (!isset($value || empty($value))) {validation failed}
checks for both empty string or no value
use trim(value) to remove white spaces

length: that the string is a certain length
if ($strlen($value) < $min_allowed) {validation failed}
string length was less than our minimum allowed value

Type: that the string is of the correct type
if(!is_string($value){ validation failed}
be careful, all submitted value are returned as
Inclusion in a set: that one of a specific set of options was chosen
if (!in_Array($value, $my_array) {validation failed}
the submitted value was not in our my_array
Uniqueness: that the field value is unique in a database
use a database
Format: that the string is formatted correctly
use reg expression
preg_match($rexex, $value)
if (preg_match(“/yourRegEx/”, $value) {validation passed}
flip !preg_match to check if it did not match
if (strpos($value, “yourcheck”) === false) {validation failed}
be sure to check for === because if yourcheck is in the 0 position, then strpos will return 0 (false positive)
type juggling comparisons
strings vs null : converts null to “”
Booleans vs everything : converts everything to boolean
number vs everything : converts everything to number
empty()
all considered empty: “”, 0, “0”, null, false, array()
get around type juggling
use === to get around type juggling

displaying validation errors
capture all errors in an array
in your validation logic, add errors to the end of the array
$errors = array();
$errors[‘value’] = “your error message”
file-system
basename($path, $suffix) #returns the filename from a path
path: specifies the path to check
suffix: optional, specifies a file extension, if the filename has this file extension, the file extension will not show
$path = "serverinfo.php";
echo '<br/>', basename($path, '.php');
returns serverinfo
dirname(path) #returns the directory name from a path
echo dirname("c:/testweb/home.php") . "<br />";
echo dirname("/testweb/home.php");
returns c:/testweb
returns /testweb
file_exists($path) #returns true if a FILE or DIRECTORY exists
filesize($path) $returns the filesize of a FILE, or 0 if the file does not exist
mkdir(path,mode,recursive, context) #creates a directory
path: the name of the directory to create
mode: if not specified, defaults to 0777 #widest possible permission
1: always zero
2: permission for the owner
3: permission for the owner's group
4: permission for everybody else
1 = execute permission
2 = write permission
4 = read permission
add them up to set the permission for the owner, owner's group, and everybody else
recursive: specifies if the recursive mode is set (true/false)
context: context of the file handle, set of options that can modify the behavior of a stream
mode is ignored on windows platform
Mysql
Database & programming
read & write data
store more data
better organize data
faster to access data
easier to manipulate
relate data to other data; define and traverse relationships between tables
issue commands to interact with database
optimized for working with data
database table: similar to an excel sheet; is a set of columns and rows
each table contains 1 type of information, and represents a plural noun
products, customers, orders, favorites, settings, etc
database columns: a set of data of a single simple type
first_name, last_name,
strings, integers, etc
database rows: a single record of data
database fields: intersection of a column and a row
first_name: “Kevin”
table index: a data structure on a table to increase lookup speed
table foreign key: a table column whose values reference rows in a another table
the foundation of relational databases
database: a set of tables, usually have 1 database for 1 application
CRUD: four most basic operations when interacting with a database
Create
Read
Update
Delete
notes
ALWAYS USE SINGLE QUOTES IN MYSQL!!!!!
Booleans TRUE and FALSE (case sensitive) are constants for 1 and 0
thus, you can use 1 or 0 to refer to TRUE or FALSE
even when entering data into Boolean/tinyint fields
database commands
mysql -h ww.blah.com -u youruser -p yourpassword
leave yourpassword off to enter it on the next line
SHOW DATABASES; #displays the databases
CREATE DATABASE dbname; #creates a new database
USE DATABASE dbname; #select the database to use
DROP DATABASE dbname; #deletes a database
create a new super user, because you never want to use root in production

localhost means the user must be logged in from the same computer as the database server
db_name.* #means all tables in the db_name database

see a users permission
SHOW GRANTS FOR ‘username’@’localhost’;
login to a database from cmd
mysql -u noah -p;
pw superd0pe
mysql -u deliradio -p pr-db2-replica.clqczrpmrc6l.us-east-1.rds.amazonaws.com;
it will ask you on the next line to enter in a pw
database tables
SHOW TABLES; #lists all of the tables in the current database
create a table in the current database


tinyint = Boolean, can be 1 or 0
SHOW COLUMNS FROM table_name;
see what a table looks like
DESCRIBE table_name; #just like show columns
DROP TABLE table_name; #deletes a table
CRUD
CREATE
INSERT INTO table (col1, col2, etc) VALUES (val1, val2, etc)
insert a new record into table_name in these columns, using these values in the same order

READ
SELECT * FROM table WHERE col1 = ‘some_text’ ORDER BY col1 ASC;
select all columns from table where col1 equals some text
order the results by col1 in ascending order
UPDATE
UPDATE table SET col1 = ‘some_text, col2 = ‘some_text’ WHERE id = 1
update table_name and set col1 to some_Text, col2 to some_Text everywhere ID = 1
DELETE
DELETE FROM table WHERE id = 1
delete all records from table where the id = 1


relationships
one to many

you want to add the foreign key column on the MANY side, i.e. pages in the example above


datatypes
INT (#) integer
VARCHAR (#) variable character length, usually limited to 255
TINYINT(#) tiny integer, useful for storing Booleans 1/0
TEXT #an almost unlimited text field, good for storing blog posts

definitions
NOT NULL #this field cannot be blank
AUTO_INCREMENT #this fields value should auto increment, usually used on int(#) fields
PRIMARY_KEY(field_name) #this is the primary key, can only be 1
INDEX (field_name) #this field should be indexed, useful for foreign keys, allows you to lookup values SUPER QUICK

database APIs in PHP
mysql: the original MySQL API
mysqli: mysql improved api
PDO: PHP Data Objects
to configure to use with MySQL, just add a few lines in your php.ini file

all three are included in php
object oriented php: uses classes and put functions inside of them
procedural: doesn’t use classes

you’ll see first you create an object, and all of the functions are methods of the object
prepared statements: HUGE! use this
MySQLI
steps:
1. create database connection
2. perform database query
3. use returned data (if any)
4. release returned data
5. close database connection
steps 1 and 5 should only happen once per PHP script
steps 2-4 can happen multiple times
CRUD returns when using PHP to access database

for select, you are returned a resource
Resources: a special type of object that is used to hold a set of database records
for all others, you are returned either true or false
connecting & closing database connections

check if connection was successful

$db->connect_errno #returns the error number, or 0
$db->connect_error #returns the error message or an empty string
retrieve data
$db->query(your query here) #get something from the db

$db->fetch_row() #grab something from the set of records returned
fetching a row INCREMENTS the resource pointer for us, thus you will see the following to fetch a row in a while loop, because on the next iteration of the loop the resource pointer has been moved forward
where there are no more records in the resource, the while loop will fail
brings back rows of data and assigns each record to an integer index
$db->fetch_assoc()
results are returned in an associative array
keys are column names
$db->fetch_array()
results are returned in either/both of types of arrays
MYSQL_NUM, MYSQL_ASSOC, MYSQL_BOTH
good when you need to fetch by index, as well as associations
don’t use when you expect a query set larger than 100k

$q1_results->data_seek(#)
set the resource pointer to a specific record
see above pic
$db->fetch_object()
used to fetch objects
$q1_results->free_result() #flush the memory that holds any data that was retrieved from the db
see above pic
inserting data & build queries with variables

alternate form for building queries, useful when you need to insert if statements

separates the columns & data into two lines
the data that comes back is either true or false, it is NOT a resource

opposite check, if query is true, redirect, if not, show user a message

returns the most recent error
if you make another query, the most recent error is erased and replaced with a new error, or no error



commands
in all commands, $db is an instance of $mysqli
$db->insert_id() #returns the ID generated by a query on a table with a column having the AUTO_INCREMENT attribute
if the last query wasn’t’ an insert or update statement or if the modified table does not have a column with the AUTO_INCREMENT attribute, this function will return 0
do a check to be sure the ID is not 0

$db->affected_rows #returns the number of rows affected from the previous query
very useful for update & deletes, to confirm a change actually occurred
if ($db->affected_rows > 0 ) {echo ‘ query successful!’}
if you update rows with the same data that already existed, this will return true
so be careful

sql injection
user sends a form field/query string that injects their query into our database
Solution 1: escape single quotes when using variables in queries
$some_var = $db->real_escape_string($some_var
$query = “select * from table where col = {$some_var}”
only meant to be used on strings
solution 2: type check integer values
(int) 5 #converts 5 to an integer

prepared statements
create template SQL statements, that you can use with variables
prepared statements are faster than normal queries
MySQL structures the query execution plan once, and reuses the same plan every time the query is run

Development
steps
sketch your blueprint/wireframes/user flows
data model
create your databases
develop


reference
mysqli instance
object(mysqli)[1]
  public 'affected_rows' => null
  public 'client_info' => null
  public 'client_version' => null
  public 'connect_errno' => null
  public 'connect_error' => null
  public 'errno' => null
  public 'error' => null
  public 'error_list' => null
  public 'field_count' => null
  public 'host_info' => null
  public 'info' => null
  public 'insert_id' => null
  public 'server_info' => null
  public 'server_version' => null
  public 'stat' => null
  public 'sqlstate' => null
  public 'protocol_version' => null
  public 'thread_id' => null
  public 'warning_count' => null

mysqli result set
object(mysqli_result)[2]
  public 'current_field' => null
  public 'field_count' => null
  public 'lengths' => null
  public 'num_rows' => null
  public 'type' => null

amazon linux
php --ini #shows you the location
