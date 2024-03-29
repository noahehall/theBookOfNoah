import { log } from "./logit";

// both are the treated the same
let re1 = new RegExp("find/this/pattern", "i");
let re2 = /find\/this\/pattern/i;
const input = "find/this/pattern";

log("re1.test(input)", re1.test(input));
log("re2.test(input)", re2.test(input));
/*



- modifiers
  - i Perform case-insensitive matching
  - g Perform a global match (find all matches rather than stopping after the first match)
  - m Perform multiline matching
- quantifiers
  - n+ Matches any string that contains at least one n
  - n\* Matches any string that contains zero or more occurrences of n
  - n? Matches any string that contains zero or one occurrences of n
  - n{X} Matches any string that contains a sequence of X ns
  - n{X,Y} Matches any string that contains a sequence of X to Y ns
  - n{X,} Matches any string that contains a sequence of at least X ns
  - n$ Matches any string with n at the end of it
  - ^n Matches any string with n at the beginning of it
  - ?=n Matches any string that is followed by a specific string n
  - ?!n Matches any string that is not followed by a specific string n
- expressions: Brackets are used to find a range of characters:
  - [abc] Find any character between the brackets
  - [^abc] Find any character NOT between the brackets
  - [0-9] Find any digit between the brackets
  - [^0-9] Find any digit NOT between the brackets
  - (x|y) Find any of the alternatives specified
    - (abc) becomes a group, where abc are treated as a single element
  - (?:YourRegexHere) non capturing group
    - will match YourRegexHere but wont return it as a match
    - i.e. it must PASS the test, but dont include it in the returned results
- groups
  - (x) Matches x and remembers the match. These are called capturing groups.
  - (?:x) Matches x but does not remember the match. These are called non-capturing groups.
- assertions
  - x(?=y) Matches x only if x is followed by y.
  - x(?!y) Matches x only if x is not followed by y.
- meta-characters: characters withs special meanings
  - . Find a single character, except newline or line terminator
  - \w Find a word character
  - \W Find a non-word character
  - \d Find a digit
  - \D Find a non-digit character
  - \s Find a whitespace character
  - \S Find a non-whitespace character
  - \b Find a match at the beginning/end of a word \bword\b
    - Before the first character in the string, if the first character is a word character.
    - After the last character in the string, if the last character is a word character.
    - Between two characters in the string, where one is a word
  - \B Find a match not at the beginning/end of a word
    - opposte of \b
  - \0 Find a NUL character
  - \n Find a new line character
  - \f Find a form feed character
  - \r Find a carriage return character
  - \t Find a tab character
  - \v Find a vertical tab character
  - \b match a word boundary \bword\b.
    - character and the other is not a word character.
  - \xxx Find the character specified by an octal number xxx
  - \xdd Find the character specified by a hexadecimal number dd
  - \uxxxx Find the Unicode character specified by a hexadecimal number xxxx
- Methods that use regular expressions
  - exec A RegExp method that executes a search for a match in a string. It returns an array of information.
  - test A RegExp method that tests for a match in a string. It returns true or false.
  - match A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
  - search A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  - replace A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  - split A String method that uses a regular expression or a fixed string to break a string into an array of substrings.


regexp props
  get RegExp[@@species]
  RegExp.prototype.dotAll
  RegExp.prototype.flags
  RegExp.prototype.global
  RegExp.prototype.hasIndices
  RegExp.prototype.ignoreCase
  RegExp: lastIndex
  RegExp.prototype.multiline
  RegExp.prototype.source
  RegExp.prototype.sticky
  RegExp.prototype.unicode

regexp methods
  RegExp.prototype[@@match]()
  RegExp.prototype[@@matchAll]()
  RegExp.prototype[@@replace]()
  RegExp.prototype[@@search]()
  RegExp.prototype[@@split]()
  RegExp.prototype.compile()
  Deprecated
  RegExp.prototype.exec()
  RegExp.prototype.test()
  RegExp.prototype.toString()
*/
