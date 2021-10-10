http://php.net/manual/en/mysqli.quickstart.connections.php
research
http_build_query
curl_init
curl_setopt
curlopt_post
curlopt_customrequest
curl_opt_http_version
curl_http_version_1_0
curlopt_header
curlopt_ssl_verifypeer
curlopt_returntransfer
curlopt_followlocation
curlopt_httpheader
curlopt_postfields
curl_exec
curl_close
json_encode
json_decode
list()
explode()
header()
MYSQLI_ASSOC
curl
cURL: allows transfer of data across a wide variety of protocols, and is widely used as a way to send data across websites, including thins like API interaction and oAuth
from basic HTTP request, to more complex FTP upload/interaction with an authentication enclosed HTTPS site
steps
instantiate an instance of curl > assign settings on curl instance > execute curl instance >  close curl instance
instantiate an instance of curl by calling the function curl_init();
returns a cURL resource
takes one parameter which is the URL that you want to send the request to
if you don’t set the url when instantiating, you can set it later like this

curl_setopt($yourCurlVar, theOption, theValue)
begin to assign settings on the cURL resource
CURLOPT_RETURNTRANSFER: return the response as a string instead of outputting it to the screen
CURLOPT_CONNECTTIMEOUT: number of seconds to spend attempting to connect
CURLOPT_TIMEOUT: number of seconds to allow cURL to execute
CURLOPT_URL: URL to send request to
CURLOPT_POST: send request as POST
CURLOPT_POSTFIELDS: array of data to post in request
curl_setopt_array($yourCurlVar, array(setting1 =>, setting2 =>, etc) #set multiple settings at one time
CURLOPT_FAILONERROR: set true if you want nay HTTP response code greater than 400 to cause an error, instead of returning the page HTML
you can set multiple settings at one time

when all the options are set and the request is ready to be sent, call curl_exec() to execute the cURL request, it can return three things
false: if there is an error executing the request
true: if the request executed without error and CURLOPT_RETURNTRANSFER is set to false
the result: if the request executed without error and CURLOPT_RETURNTRANSFER is set to true
save the result to a variable

the result may be json, a string, or a full blown site’s HTML
close the request:
curl_close($yourCurlVar);
get request example
get: default request method
to send additional parameters along in the request, append them to the url you instantiate curl with

post request example
only difference between get & post in curl is the addition of two settings
CURLOPT_POST to true
CURLOPT_POSTFIELDS contains an array of fields

cURL errors
curl_error(): returns a string error message, will be blank ‘’ if the request does not fail
curl_errno(): will return the curl error number which you can then look up on this site
http://curl.haxx.se/libcurl/c/libcurl-errors.html


cron
requirements
a web server not running windows
shell access/control panels to interface crontab
connect to your web host using telnet/ssh
or the web host allow you to set the crontab tasks using their control panel
steps
create a schedule
mysqli
connecting
$db = new mysqli(‘localhost’, ‘user’, ‘pw’, ‘default_database’)
#you can create vars instead of using literals
the default database part is optional, but if not given you will have to prefix all tables with the database name in all of your queries
using ‘localhost’ instead of server name
localhost is bound to the use of Unix domain sockets, you must use 127.0.0.1 instead
$db->close();
#close the connection
localhost connection

querying
$sql = “your query here”
$result = $db->query($sql)
#you can put it in an if statement to be sure it works

prepared statements
allow you to specify an sql statement, and insert variables into the statement at a later time
prepared statements help to deal with most of the issues with sql injections
steps
define a statement
$statement = $db->prepare(“Select name FROM users WHERE username = ?”)
the ? is the placeholder for the variable you’ll bind later
bind parameters: specify the type(s) as the first parameter, then the variable(s) as the second and third and etc parameters
$name = ‘Bob’;
$statement->bind_param(‘s’,$name);
$statement->bind_param(‘sdi’,$name,$height,$age)
s = string
d = decimal
i = integer
execute the statement
$statement->execute();
place the returned results in a variable
$statement->bind_Result($results);
if you have multiple variables to assign, separate them by a comma
iterate over the results
while ($statement->fetch()){
echo $results . ‘<br/>’;
}
close the statement
$statement->free_resulsts();
display results
the result var is an array

display results in reverse order

display results in set (normal) order

display a specific result
$results->data_Seek(#)
moves the pointer to a specific row
you can then fetch it
$results->fetch_row();
returns row with column names as indexes
$results->fetch_assco();
returns the row with column names as defined in SQL
$myResults = $result->fetch_all(MYSQLI_ASSOC);
foreach ($myResults as $row){
echo $row[‘name’],”<br/>”;
}
store all values in an array and print it
built-in functions
get the # of returned rows:
$result->num_rows;
when running an update/delete query you can determine how many rows have been updated/deleted
$db->affected_rows
release the result
$result->free();
$mysqli->host_info
returns the information about the server
inserting data
$db->escape_string(‘This is an unescape “string”’)
escapes the double quotes to be inserted into the database
the string should now be safe to be inserted into the db
transactions
a group of queries that execute but don’t save their effect on the database.
e.g. if you have 4 inserts that all rely on each other, and one fails, you can roll back the others so that none of the data Is inserted,
or if updating fields relies on fields being inserted correctly
the database engine you’re using  must support transactions
steps
set auto-commit to false
$db->autocommit(FALSE);
create a few queries
$db->query($sql) #$sql should be a var that holds a query
commit the queries
$db->commit();
rollback the commit
$db->rollback();

start php
bash #starts up bash
cd to cd://php
php -a #starts up php interactive mode
write your code #dont forget <?php ?>
press ctrl+z to signal end of file
it will then execute your code
you can just go to localhost in your browser
php
PHP File: can contain text, html, css, javascript, php, and end in .php
Php code is executed on the server, and the result is returned to the browser as plain html
Can:  generate dynamic page content; create open read write delete and close files on the server; collect form data; send and receive cookies; add delete modify data in the db; used to control user-access; encrypt data
Syntax
<?php yourCodeHere ?>
<? your code here ?>
<script language=”php”> your code here </script>
Case sensitivity
Php keywords are case insensitive
ECHO, eCho and echo are all valid
function names are case insensitive
Variable names are case sensitive
$blah and $Blah are TWO different variables
space insensitive
doesn’t matter how many spaces are in statements/clauses
php will ignore them, even multiline (return carriages)
quotes
“ blah “ allow you to use escape sequences & variables
‘ blah ‘ does not allow you to use escape sequences OR variables
run php from cmd
save code in a dot.php file
$php yourDoc.php
comments
// single line comment
# single line comment
/* multiline comment */
You can use comments to leave out a line of code
$x = 5 /* + 15 */ + 5;

operators
arithmetic: +-*/%**
assignment: =, +=, -=,*=,/=,%=
comparison:
==, !=, <>
===, !==
>,<, >=, <=
increment/decrement
++$x, --$x
$x++, $x--
logical
and, &&
or, ||
!
xor #true if either are true, but not both
string
str . str #strstr
str .= str #strstr
array
+ #union
== #true if they have the same key/value pairs
=== #true if they have the same key/value pairs in the same order and of the same times
!=, <>, !==
datetypes
DATE & TIME
h: 12 hour format
H: 24 hour format
i: minutes
s: seconds
u: microseconds
a: lowercase am or pm
l: full text for the day
f: full text for the month
j: day of the month
S: suffix for the day st, nd, rd, etc
Y: four digit year
e: timezone, has to be set first
examples
echo date(‘h:i:s:u a, l F jS Y e’);
05:09:10:000000 pm, Saturday August 9th 2014 UTC
Integers:
whole numbers (without decimals)
cannot contain commas or blanks
decimal format (10-based)
hexadecimal format (16-based prefixed with 0x)
octal format (8-based prefixed with 0)
Float
decimal point or a number in exponential form
Booleans:
$bool = true
$bool = false
strings:
chars, any sequence of characters enclosed in quotes
“” allow you to escape sequences and variables
‘’ don’t allow you to escape sequences or variables
built-in functions
strlen($string) || strlen(“string”)  #returns the length str_word_count($string) #counts the number of words
strev($string) #reverse the string
strip_tags(string[,allow]) #removes html, xml, and php tags
strpos($string, $find)
returns the character position of the first match
if no match is found, returns false
case sensitive
stripos(string, find[, #])
finds the position of the first occurrence of a string inside another string
case insensitive
if # is supplied, it will start from that index
strripos(string, find [,#])
same as above, but case insensitive
finds the LAST occurrence
strchr(string, find[,true])
searches string for find, and returns all characters after find
if true is supplied, it will return all characters before the first occurrence of find
str_replace($find, $replace, $inString[, #])
searches $inString for each occurrence of $find, and replaces each one with $replace
inString can be an array of strings, or a string
if # is specified, only # replaces will occur
case sensitive
str_irplace(search, replace, inString, #)
same as above, but case insensitive
str_repeat(string, #) #repeat string # times
str_shuffle(string) #randomly shuffles the chars in string
chop($string[, charlist])
removes null, tab, new line, vertical tab, carriage return, white space if charlist is empty
charlist: can be string to remove
trim(string[,charlist])
removes null, tab, new line, vertical tab, carriage return, white space if charlist is empty from BOTH SIDES of a string
ltrim(string[,charlist])
removes null, tab, new line, vertical tab, carriage return, white space if charlist is empty from the LEFT SIDE of a string
rtrim(string[,charlist])
removes null, tab, new line, vertical tab, carriage return, white space if charlist is empty from the RIGHT SIDE of a string
str_split(string[,#])
splits a string into an array with each index of # length
if # is not given, each char will be its own item
explode(separator, string[,limit])
breaks a string into an array at each occurrence of separator
separator: e.g. “ “ for a space
string: the string to explode into an array
limit: if supplied, will be the maximum number of items in the array
implode(separator, array)
converts an array into a string delimiting each index by separator
lcfirst(string) #convert the first character to lower case
ucwords()
strtoupper() #converts all chars to uppercase
strtolower() #converts all chars to lowercase
number_format(string[,#]) #formats the string of numbers with thousand separator and # of decimals
parse_str(string[,array])
automatically converts the string to variables, any existing vars with the same name will be overwritten
if array is included, it will store the variables in the array

strcasecmp(string1, string2)
compares two strings (case insensitive) and returns
0 #if the two strings are equal
<0 if string1 is less than string2
>0 if string1 is greater than string2
strcmp(string1, string2)
same as above but case SENSITIVE
research
str_getcsv(string[,delimiter,enclosure,escape])
parses a string formatted in CSV and returns an array
useful for parsing a csv file into a multidimensional array, with each index a record
$csv = array_map('str_getcsv', file('data.csv'));
stristr()
strpbrk()
substr()
substr_count()
substr_replace()
ucfirst()
ucwords()
arrays
indexed arrays
arrays with 0-based indexes

associative arrays
arrays with named indexes (i.e. hashes)


multidimensional
d
built-in functions
count($arr) #returns the length of an array
array_values(arr)
returns an array containing all the values of arr with numeric indexes
array_combine(keys,values)
combines two arrays into one,
one array should be the keys, and the other the values
must have an equal number of elements
array_change_key_case(arr[,CASE_UPPER])
changes all keys to lower case
if CASE_UPPER is given, then it changes the keys to uppercase
array_unshift(arr, val1[,val2…])
inserts new elements at the beginning of the array
array_shift(arr)
removes and returns the first element
array_pop(arr)
removes and returns the last element of the array
array_push(arr, val1[,val2…])
inserts one/more values at the end of arr
array_slice(arr,#index[,#total,true])
returns the element at #index, plus #total elements to the right of #index
if true is given, numeric items will keep their index
if a -#total is given, the function will stop slicing that far from the last element
array_splice(array,#start[,#total, #array])
same as above, but will insert #array’s elements at #start
array_column(arr, “column”[,”index_column”])
arr = multidimensional array representing a record set
in dimension 1, each record is a like a row in a table
column is the column to pull, if given ‘last_name” it will return an array containing the last names from each record set
if “index_column” is given, then the function will use the “index_column” as the keys in the returned array
index_column should be an actual column in arr, hopefully its column “id”, but check to see what its called

array_unique(arr)
keeps all unique elements based on their keys
the returned array will keep the first array item’s key type
array_pad(arr, #, newValue)
inserts # of elements in the array, inserting newValue into new items added
if a -# is given, new values are inserted starting at index 0
array_chunk(arr,size[,true])
splits an array into chunks of new arrays
if true is given, it preserves the keys
returns a multidimensional indexed array, starting with 0 with each dimension containing size elements
array_merge(arr1[,arr2,arr3])
merges one/more arrays into one array
if one array and keys are integers, it reindexes the array starting at 0
if two/more, merges all arrays into one
if two/more elements have the same key, the last one wins
array_merge_recursive(arr1[,arr2,arr3])
same as the above, but if two/more arrays have the same key, that index becomes a multidimensional array
array_replace_recursive(arr1[,arr2…])
replace the values of the first array with the values in the second array, and then the third, etc
if arr1 key exists in arr2, its value will be replaced by arr2 key’s value, etc.
if the key only exists in arr1, it will be left as is
if a key only exists in arr2, it will be created in arr1
this will compare all of the multidimensional indexes
array_replace(arr1[,arr2…])
same as above, but does not do it recursively (will not go into multidimensional indexes)
array_search(value,arr[,true])
searches arr for value and returns the key
if true is given, then it will search for identical (===) elements
array_reverse(arr[,true])
reverses the order of an array
if true is given, the indexes will not be changed
array_multisort(arr1[,sortOrder,sortType,arr2,arr3…])
sorts the first array, and then any other arrays
string keys will be maintained, but numeric keys will be re-indexed starting at 0
sortOrder: SORT_ASC | SORT_DESC
sortType: SORT_REGULAR | SORT_NUMERIC |
sort(arr) #sort arrays in ascending order by value
rsort(arr) #sort arrays in descending order by value
asort(arr) #sort associative arrays in ascending order by VALUE
ksort(arr) #sort associative arrays in ascending order by KEY
arsort(arr) sort associative arrays in descending order by VALUE
krsort(arr) sort associative arrays in descending order by KEY
array_rand(arr[,#])
returns a random key
if # is given, it returns an array that contains random keys from arr
array_count_values(arr)
counts the number of occurrences of values in an array,
returns an associative array, where the keys are the original array’s values, and the values are the number of occurrences
array_sum(arr)
sums and returns the values of arr
array_product(arr)
multiples the values in the array
array_reduce(arr, function[,initial])
sends the values in an array to a user defined function and returns a string
if initial is given, it will be the first value sent to the array

returns 50
array_walk(arr, “function”[,par3…])
sends $value,$key pairs to the function
you can change the elements value by  specifying the first parameter in the function as a reference
&$value
you can send additional parameters to the function


array_walk_recursive(arr,”function”[,par1…])
same as above but can send in multidimensional arrays
research
array_diff()
array_diff_assoc
array_diff_key()
array_diff_uassoc()
array_diff_ukey()
array_fill
array_fill_keys
array_filter
array_flip
array_intersect
array_lkey_exists
array_keys
array_map
objects
is really a class in other languages
stores data and information on how to process that data
must be explicitly declared
first declare a class of an object
then create a new instance of that object

NULL
can have only one value null
a variable of type null has no value assigned to it
a variable created without a value is automatically assigned null as its value
variables can be emptied by setting it’s value to null
resources
used to store a reference to functions and resources external to PHP
a database call
constants
variables that cannot be changed/undefined
are automatically global across the entire script
defined(“NAME”, value[,true]) #name is the constant, and is given value to hold, if true is supplied, constant will be case-insensitive
Variables
local scope: any var defined inside a function and can only be accessed inside the function
global scope: any var defined outside a function and can only be accessed outside a function
to access a global variable inside a function, precede it with global
global $x, $y
echo $x + $y
access global variables anywhere by using the $GLOBALS[] array
echo $GLOBALS[‘y’] + $GLOBALS[‘x’]
static scope: a local variable that you don’t want to be deleted after the function executes, it will have the same value as the last time it was called
static $y =0
$y++
next time you call the function, the y=0 will be ignored, and it will have the value of 1, and etc.

syntax
all vars start with $
$yourVar
superglobals
built-in variables that are always available in alls copes
$GLOBALS: all global variables are stored here, the index holds the name of the variable
you can add globals directly to this var
$GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];

$_SERVER: holds information about headers, paths, and script locations
echo $_SERVER['PHP_SELF']; #file name of the currently executing script
echo $_SERVER['SERVER_NAME'];
$_SERVER['SERVER_ADDR']; #returns the IP address of the host server
$_SERVER['SERVER_NAME']; #the name of the host server (e.g. www.deliradio.com)
$_SERVER['SERVER_SOFTWARE']; #the server identification string (e.g. Apache/2.2.24)
echo $_SERVER['HTTP_HOST']; #host header for the current request
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME']; #path of the current script
$_SERVER['GATEWAY_INTERFACE']; #version of the CGI (common gateway interface) the server is using
see more: http://www.w3schools.com/php/php_superglobals.asp
$_REQUEST: collects data from form submissions
$_POST: used to collect form data afte submitting an HTML form with method=”POST”
can also be used to pass variables
$_GET: collect form data after submitting an html form with method=”get”
can also collect data sent in the uRL
<a href="test_get.php?subject=PHP&web=W3schools.com">Test $GET</a>
$_GET['subject']
$_GET['web']
$_FILES
$_ENV
$_COOKIE
$_SESSION

Commands
Echo $one, $two, $three, #outputs three parameters to the client
echo has NO RETURN VALUE
can take multiple parameters
is faster than print
print $one #outputs php code to the client
has a RETURN VALUE OF 1
can only take ONE PARAMETER
print_r($var) #prints human-readable information about a variable
printf(“string %u and %s”, $number, $string)
prints a format string
%% #percent sign
%b binary number
%d signed decimal number
%u unsigned decimal number, greater than 0
%f floating point number
%s string

control
if else, elseif

switch

while

do while

for


foreach (Array/object loop)

to modify array elements within the loop, precede $value with &
&$value
unpacking multidimensional arrays



break
continue
declare
include
require_once
include_once
goto
functions




forms
handling
required fields
validation

files
include
require
file handling
open
read
close
create
write
upload
cookies
sessions
filters

Notes
testing:
create an html file with a form pointing to a php file,
create a php file that will process the form,
open the html file in chrome, have fun

new error after implementing code
