
<?php
/*
links
https://www.php.net/manual/en/language.variables.superglobals.php
https://www.w3schools.com/php/default.asp
https://www.w3schools.com/php/php_ref_array.asp

quickies
--------
variables start with $
statements must end with ;
define("thisconstant", "to have this value globally") // echo thisconstant
define("thisArr", [1,2,3]) // php >= 7


data types
----------
"string"
123
123.1
true
null
array("index", "array") // blah[0]
array("associative"=>"array") // blah["associative"]
class Blah { // classes templates for objects
    public $member;
    public function __construct($member) {
        $this -> member = $member;
    }
} ///////// $blah = new Blah("prop")


scopes
------
local inside a fn
global outside a fn, to access within a fn prefix it with global or get from $GLOBALS['somevar']
static preserve fn vars after fn execution


globals
-------
phpinfo() system info
$_SERVER['BLAH'] server associative array
echo x, y, z, // returns void, accepts list of params
print x  // returns 1 only accepts single param
var_dump(objs) // can dump objects and etc


functions
---------
fn scope is deleted after execution






*/


// examples
$somevar = 123;
echo 123 + $somevar;
echo "\n123" . $somevar . "concat";
echo "trying to print $_SERVER"; // not what you think
echo $_SERVER;  // not what you think
print $_SERVER;  // not what you think
var_dump($_SERVER); // what you want for objects and etc
define("whatev",  "vetahw");
echo whatev;    

// fns
function noitcnuf() {
    static $whatev = "preserve me; i.e. internal cache for this fn";
    // echo $somevar; // throws
    echo $GLOBALS['somevar']; // doesnt throw
    global $somevar; 
    echo "\ninside fn";
    echo $somevar;  // doesnt throw cuz global $somevar
}
noitcnuf();


// loops
$myArr = array("one", "two");

foreach($myArr as $idx => $val) {
    echo "\n";
    echo $idx . " is " . $val;
}

echo "\n\nwwwwtf" . $myArr[1];
echo "\n\nisset - " . isset($myArr[0]) && "worked";
// echo "\n\nwtf is my arr {$myArr[0]}";
?>