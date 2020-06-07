// getting inspired by: https://1loc.dev


// Check if a value is a number
//
const isNumber = value => !isNaN(parseFloat(value)) && isFinite(value);

// Check if a value is a regular expression
//
const isRegExp = value => Object.prototype.toString.call(value) === '[object RegExp]';

// Check if a value is nil
//
const isNil = (value) => value == null;

// Check if an object is a promise
//
const isPromise = obj => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

// Check if the code is running in node js
//
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

// Check if the code is running in the browser
//
const isBrowser = typeof window === 'object' && typeof document === 'object';

// Convert celsius to fahrenheit
//
//
// // Examples
// celsiusToFahrenheit(15);    // 59
// celsiusToFahrenheit(0);     // 32
// celsiusToFahrenheit(-20);   // -4

// fahrenheitToCelsius(59);    // 15
// fahrenheitToCelsius(32);    // 0
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// Convert hex to rgb
//
//
// // Examples
// hexToRgb('#00ffff');    // [0, 255, 255]
// hexToRgb('#0ff');       // [0, 255, 255]
//
const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

// Convert rgb color to hex
//
//
// // Example
// rgbToHex(0, 255, 255);      // '#00ffff'
//
const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
//
// Or
const rgbToHex = (red, green, blue) => `#${[red, green, blue].map(v => v.toString(16).padStart(2, '0')).join('')}`;

// Decode a jwt token
//
//
// decode(`
//     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//     eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
//     joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
// `);
//
// // { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
//
const decode = token => decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/')).split('').map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`).join(''));

// Detect dark mode
//
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Easing functions
//
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net
//
const linear = t => t;
//
const easeInQuad = t => t * t;
const easeOutQuad = t => t * (2-t);
const easeInOutQuad = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//
const easeInCubic = t => t * t * t;
const easeOutCubic = t => (--t) * t * t + 1;
const easeInOutCubic = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//
const easeInQuart = t => t * t * t * t;
const easeOutQuart = t => 1 - (--t) * t * t * t;
const easeInOutQuart = t => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
//
const easeInQuint = t => t * t * t * t * t;
const easeOutQuint = t => 1 + (--t) * t * t * t * t;
const easeInOutQuint = t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
//
const easeInSine = t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2);
const easeOutSine = t => Math.sin(Math.PI / 2 * t);
const easeInOutSine = t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
//
const easeInElastic = t => (.04 - .04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = t => .04 * t / (--t) * Math.sin(25 * t);
const easeInOutElastic = t => (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1;


// Emulate a dice throw
//
//
// // Examples
// throwdice();    // 4
// throwdice();    // 1
// throwdice();    // 6
const throwdice = () => ~~(Math.random() * 6) + 1;

// Encode a url
//
// `encodeURIComponent` doesn't encode -_.!~*'()
const encode = url => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');

// Generate a random boolean
//
const randomBoolean = () => Math.random() >= 0.5;

// Generate a random hex color
//
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Generate a random uuid
//
const uuid = (a) => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

// Get the value of a cookie
//
//
// // Example
// cookie('_ga');      // GA1.2.825309271.1581874719
//
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// Get the value of a param from an url
//
//
// // Example
// getParam('http://domain.com?message=hello', 'message');     // 'hello'
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);

// Redirect the page to https if it is in http
//
const redirectHttps = () => (location.protocol === 'https:') ? {} : location.replace(`https://${location.href.split('//')[1]}`);
//
// Or
const redirectHttps = () => (location.protocol === 'https:') ? {} : (location.protocol = 'https:');

// Run promises in sequence
//
//
// // Example
// run(promises).then((results) => {
//     // `results` is an array of promise results in the same order
// });
// `promises` is an array of `Promise`
//
const run = promises => promises.reduce((p, c) => p.then(rp => c.then(rc => [...rp, rc])), Promise.resolve([]));

// Swap two variables
//
[a, b] = [b, a];

// Wait for an amount of time
//
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

