var string = "Programming Siyapaa";

/***
 * @Function : charAt(position)
 * @Desc : Returns the character at the specified position (in Number).
 * @Returns : It will return the [S]
 */
console.log(string.charAt(12));

/***
 * @Function : charCodeAt(position)
 * @Desc : Returns a number indicating the Unicode value of the character at the given position (in Number).
 * @Returns : It will return the [80] 
 */
console.log(string.charCodeAt(0));

/***
 * @Function : concat([string,,])
 * @Desc : Joins specified string literal values (specify multiple strings separated by comma) and Returns a new string.
 * @Returns : It will return the [Programming Siyapaa]
 */
var str1 = "Programming", str2 = "Siyapaa";
console.log(str1.concat(" ", str2));

/***
 * @Function : indexOf(SearchString, Position)
 * @Desc : Returns the index of first occurrence of specified String starting from specified number index. Returns -1 if not found.
 * @Returns : It will return the [6]
 */
console.log(string.indexOf('m'));

/***
 * @Function : lastIndexOf(SearchString, Position)
 * @Desc : Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.
 * @Returns : It will return the [7]
 */
console.log(string.lastIndexOf('m'));

/***
 * @Function : referenceStr.localeCompare(compareString[, locales[, options]])
 * @Desc : The localeCompare() method Returns a number indicating whether a reference string comes before 
 * or after or is the same as the given string in sort order.
 * @Returns : A negative number if the reference string occurs before the compare string;
 * positive if the reference string occurs after the compare string;
 * 0 if they are equivalent.
 */
console.log('a'.localeCompare('b')); // expected output: -1
console.log('b'.localeCompare('a')); // expected output: 1
console.log('a'. localeCompare('a')); // expected output : 0

/***
 * @Function : String_Object.match(RegExp)
 * @Desc : Search a string for a match using specified regular expression
 * @Returns : Returns a matching array
 */

console.log(string.match(/[A-Z]/)); // expected output: [ 'P', index: 0, input: 'Programming Siyapaa' ]
console.log(string.match(/[A-Z]/g)); // expected output: [ 'P', 'S' ]

/***
 * @Function : String_Object.replace(searchValue, replaceValue)
 * @Desc : Search specified string value and replace with specified replace Value string.
 * Regular expression can also be used as searchValue.
 * @Returns : Returns new string
 */
console.log("Did you Like the our page?".replace("page", string));

/***
 * @Function : String_Object.search(RegExp)
 * @Desc : Search for a match based on specified regular expression.
 * @Returns : The index of the first match between the regular expression and the given string,
 *  or -1 if no match was found.
 */
var paragraph = 'Learning Programming with Programming Siyapp is very eassy. Don\'t you think?';
var regex = /[^\w\s]/g; // any character that is not a word character or whitespace
console.log(paragraph.search(regex)); // expected output: 58
console.log(paragraph[paragraph.search(regex)]); // expected output: "."

/***
 * @Function : StringObject.slice(startNumber, endNumber)	
 * @Desc : Extracts a section of a string based on specified starting and ending index
 * @Returns : returns the string extracted string
 */
console.log(string.slice(string.indexOf('S'), string.length)); // expected output: Siyapaa

/***
 * @Function : substr(start, length)	
 * @Desc : Returns the characters in a string from specified starting position through the specified number of characters (length).
 * @Returns : returns the string extracted string
 */
console.log(string.substr(string.indexOf('S'), 7)); // expected output: Siyapaa

/***
 * @Function : StringObject.substring(start, end)	
 * @Desc : Returns the characters in a string between start and end indexes.
 * @Returns : returns the string extracted string
 */
console.log(string.substring(string.indexOf('S'), string.length)); // expected output: Siyapaa

/***
 * @Function : StringObject.toLocaleLowerCase(), toLowerCase()
 * @Desc : Converts a string to lower case according to current locale, will convert
 * the given string in lower case
 * @Returns : converted lower case string.
 */
console.log(string.toLocaleLowerCase(), ",", string.toLowerCase()); // expected output : programming siyapaa , programming siyap

/***
 * @Function : StringObject.toString()
 * @Desc : The toString() function in Javascript is used with a number and converts the number to a string.
 * It is used to return a string representing the specified number object
 * @Returns : returns string
 */
var a = 123456;
console.log(a.toString().charCodeAt(0)); // Expected outpurt is : 49

/***
 * @Function : string.valueOf()
 * @Desc : The string.valueOf() is an inbuilt function in JavaScript which is used to 
 * @Returns : return the value of the given string.
 */
console.log(string.valueOf()); // Expected outpurt is : 49

/*##############   String Methods for Html ###############*/
console.log(string.anchor("siyappa")); // Creates an HTML anchor <a>element around string value.
console.log(string.big()); // Wraps string in <big> element.
console.log(string.blink()); // Wraps a string in <blink> tag.
console.log(string.bold()); // Wraps string in <b> tag to make it bold in HTML.
console.log(string.fixed()); // Wraps a string in <tt> tag.
console.log(string.fontsize(14)); // Wraps a string in a <font color="color"> tag.
console.log(string.italics()); // Wraps a string in <i> tag.
console.log(string.link("http://www.google.com")); // Wraps a string in <a>tag where href attribute value is set to specified string.
console.log(string.small()); // Wraps a string in a <small>tag.
console.log(string.strike()); // Wraps a string in a <strike> tag.
console.log(string.sub()); // Wraps a string in a <sub>tag
console.log(string.sup(14)); // Wraps a string in a <sup>tag