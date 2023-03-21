/*


- code examples
  1. reverse a string
     `s.split('').reverse().join('');`
  2. remove last char of string
     `str = str.substring(0, str.length - 1);`


```
  charAt()	Returns the character at the specified index (position)
  charCodeAt()	Returns the Unicode of the character at the specified index
  concat()	Joins two or more strings, and returns a new joined strings
  fromCharCode()	Converts Unicode values to characters
    seems to work, jsut like this
      String.fromCharcode(yourStringVarHere);
  indexOf()	Returns the position of the first found occurrence of a specified value in a string
    blah.indexOf('blah2') !== -1 // in the event blah2 is at the 0 index
  lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
  localeCompare()	Compares two strings in the current locale
  match()	Searches a string for a match against a regular expression, and returns the matches
  replace(regexp|substr, newSubStr|function[, flags]) returns a new string (best to use a RegExp object so you can use flags)
  search()	Searches a string for a specified value, or regular expression, and returns the position of the match
  slice()	Extracts a part of a string and returns a new string
  split()	Splits a string into an array of substrings
  substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
  substring()	Extracts the characters from a string, between two specified indices
  toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
  toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
  toLowerCase()	Converts a string to lowercase letters
  toString()	Returns the value of a String object
  toUpperCase()	Converts a string to uppercase letters
  trim()	Removes whitespace from both ends of a string
  valueOf()	Returns the primitive value of a String object
```


"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"
`${some var or function call} some string`











*/
