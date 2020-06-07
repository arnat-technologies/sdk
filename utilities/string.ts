// getting inspired in part by: https://1loc.dev

// Capitalize a string
//
//
// // Example
// capitalize('hello world');      // 'Hello world'
//
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Check if a path is relative
//
//
// // Examples
// isRelative('/foo/bar/baz');         // false
// isRelative('C:\\foo\\bar\\baz');    // false
// isRelative('foo/bar/baz.txt');      // true
// isRelative('foo.md');               // true
//
const isRelative = path => !/^([a-z]+:)?[\\/]/i.test(path);

// Check if a string contains lower case characters
//
//
// // Examples
// containsLowerCase('Hello World');   // true
// containsLowerCase('HELLO WORLD');   // false
//
const containsLowerCase = str => str !== str.toUpperCase();

// Check if a string contains only digits
//
//
// // Examples
// isNumeric(2);               // true
// isNumeric('23');            // true
// isNumeric('00123');         // true
//
// isNumeric('1.23');          // false
// isNumeric('-Infinity');     // false
// isNumeric('Infinity');      // false
// isNumeric('NaN');           // false
//
const isNumeric = str => !/[^0-9]/.test(str);

// Check if a string contains upper case characters
//
//
// // Examples
// containsUpperCase('Hello World');   // true
// containsUpperCase('hello world');   // false
//
const containsUpperCase = str => str !== str.toLowerCase();


// Check if a string contains whitespace
//
// // Example
// containsWhitespace('hello world');      // true
//
const containsWhitespace = str => str => /\s/.test(str);

// Check if a string is a palindrome
//
//
// // Examples
// isPalindrome('abc');        // false
// isPalindrom('abcba');       // true
//
const isPalindrome = str => str === str.split('').reverse().join('');

// Check if a string is lower case
//
const isLowerCase = str => str === str.toLowerCase();

// Check if a string is upper case
//
const isUpperCase = str => str === str.toUpperCase();

// Check if a url is absolute
//
//
// // Example
// isAbsoluteUrl('https://1loc.dev');          // true
// isAbsoluteUrl('https://1loc.dev/foo/bar');  // true
// isAbsoluteUrl('1loc.dev');                  // false
// isAbsoluteUrl('//1loc.dev');                // false
//
const isAbsoluteUrl = url => /^[a-z][a-z0-9+.-]*:/.test(url);

// Check if a value is a string
//
//
// // Examples
// isString('hello world');                // true
// isString(new String('hello world'));    // true
// isString(10);                           // false
//
const isString = value => Object.prototype.toString.call(value) === '[object String]';

// Check if two strings are anagram
//
//
// // Examples
// areAnagram('listen', 'silent');         // true
// areAnagram('they see', 'the eyes');     // true
// areAnagram('node', 'deno');             // true
//
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

// Convert a string to camel case
//
//
// // Examples
// toCamelCase('background-color');            // backgroundColor
// toCamelCase('-webkit-scrollbar-thumb');     // WebkitScrollbarThumb
// toCamelCase('_hello_world');                // HelloWorld
// toCamelCase('hello_world');                 // helloWorld
//
const toCamelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

// Convert a string to pascal case
//

// // Examples
// toPascalCase('hello world');    // 'HelloWorld'
// toPascalCase('hello.world');    // 'HelloWorld'
// toPascalCase('foo_bar-baz');    // FooBarBaz
//
const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');

// Convert a string to url slug
//
//
// // Example
// slugify('Chapter One: Once upon a time...');    // 'chapter-one-once-upon-a-time'
//
const slugify = string => string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// Convert a windows file path to unix path
//
// // Examples
// toUnixPath('./foo/bar/baz');        // foo/bar/baz
// toUnixPath('C:\\foo\\bar\\baz');    // /foo/bar/baz
//
const toUnixPath = path => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');

// Convert camel case to kebab case and vice versa
//
// // Examples
// kebabToCamel('background-color');   // 'backgroundColor'
// camelToKebab('backgroundColor');    // 'background-color'
//
const kebabToCamel = str => str.replace(/-./g, m => m.toUpperCase()[1]);
//
const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// Convert snake case to camel case
//
// // Example
// snakeToCamel('HELLO_world');    // 'helloWorld'
//
const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));

// Convert the name of an excel column to number
//
//
// // Examples
// getIndex('A');      // 1
// getIndex('B');      // 2
// getIndex('C');      // 3
// getIndex('Z');      // 26
//
// getIndex('AA');     // 27
// getIndex('AB');     // 28
// getIndex('AC');     // 29
// getIndex('AZ');     // 52
//
// getIndex('AAA');    // 703
// getIndex('AAB');    // 704
//
const getIndex = col => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);

//Escape html special characters
//
const escape = str => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
//
// Or
const escape = str => str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);

// Generate a random string from given characters
//
//
// // Example
// generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//
const generateString = (length, chars) => Array(length).fill('').map((v) => chars[Math.floor(Math.random() * chars.length)]).join('');

// Generate a random string with given length
//
const generateString = length => Array(length).fill('').map((v) => Math.random().toString(36).charAt(2)).join('');

// Get the file extension from a file name
//
const ext = fileName => fileName.split('.').pop();

// Get the file name from an url
//
//
// // Example
// fileName('http://domain.com/path/to/document.pdf');     // 'document.pdf'
//
const fileName = url => url.substring(url.lastIndexOf('/') + 1);

// Get the length of a string in bytes
//
// // Examples
// bytes('hello world');       // 11
// bytes('🎉');                // 4
//
const bytes = str => new Blob([str]).size;

// Make the first character of a string lowercase
//
//
// // Example
// lowercaseFirst('Hello World');      // 'hello World'
//
const lowercaseFirst = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Normalize file path slashes
//
//
// // Example
// normalizePath('\\foo\\bar\\baz\\');         // /foo/bar/baz/
// normalizePath('.//foo//bar///////baz/');    // ./foo/bar/baz/
//
const normalizePath = path => path.replace(/[\\/]+/g, '/');

// Remove spaces from a string
//
//
// // Example
// removeSpaces('hel lo wor ld');      // 'helloworld'
//
const removeSpaces = str => str.replace(/\s/g, '');

// Repeat a string
//
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);
//
// Or
const repeat = (str, numberOfTimes) => Array(numberOfTimes).join(str);

// Replace all line breaks with br elements
//
const nl2br = str => str.replace(new RegExp('\r?\n', 'g'), '<br>');

// Replace multiple spaces with a single space
//
// // Example
// replaceSpaces('this\n   is     \ta    \rmessage');  // 'this is a message'
//

// Replace spaces, tabs and new line characters
const replaceSpaces = str => str.replace(/\s\s+/g, ' ');
//
// Only replace spaces
const replaceOnlySpaces = str => str.replace(/  +/g, ' ');


// Reverse a string
//
// // Example
// reverse('hello world');     // 'dlrow olleh'
//
const reverse = str => str.split('').reverse().join('');
//
// Or
const reverse = str => [...str].reverse().join('');
//
// Or
const reverse = str => str.split('').reduce((rev, char)=> `${char}${rev}`, '');
//
// Or
const reverse = str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;


// Sort the characters of a string in the alphabetical order
//
//
// // Example
// sort('hello world');    // dehllloorw
//
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

// Trim slashes at the beginning and the end of a string
//
//
// // Example
// trimSlashes('//hello/world///');    // hello/world
//
const trimSlashes = str => str.replace(/^\/+|\/+$/g, '');
//
// Or
const trimSlashes = str => str.split('/').filter(Boolean).join('/');

// Trim some character
//
//
// // Examples
// trim('/hello world//', '/');        // hello world
// trim('"hello world"', '"');         // hello world
// trim('   hello world ', ' ');       // hello world
//
const trim = (str, char) => str.split(char).filter(Boolean).join();

// Trim the file extension from a file name
//
//
// // Examples
// trimExt('document');            // document
// trimExt('document.pdf');        // document
// trimExt('document.2020.pdf');   // document.2020
//
const trimExt = fileName => fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');

// Truncate a string at full words
//
// // Example
// truncate('This is a long message', 20, '...');  // 'This is a long...'
//
const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

// Unescape html special characters
//
const unescape = str => str.replace(/&/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#0*39;/g, "'").replace(/&quot;/g, '"');

// Uppercase the first character of each word in a string
//
//
// // Example
// uppercaseWords('hello world');      // 'Hello World'
//
const uppercaseWords = str => str.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');
//
// Or
const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

