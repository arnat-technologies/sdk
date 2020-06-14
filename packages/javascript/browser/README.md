# Browser

A small, fast and rich-API browser/platform/engine detector for both browser and node.

- **Small.** Use plain ES5-version which is ~1.3kB gzipped.
- **Optimized.** Use only those parsers you need — it doesn't do useless work.
- **Multi-platform.** It's browser- and node-ready, so you can use it in any environment.

## Contents

- [Browser](#browser)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Use cases](#use-cases)
  - [Browser props detection](#browser-props-detection)
  - [Filtering browsers](#filtering-browsers)
    - [Browser names for `.satisfies()`](#browser-names-for-satisfies)
  - [Unit Testings](#unit-testings)

## Overview

The library is made to help to detect what browser your user has and gives you a convenient API to filter the users somehow depending on their browsers.

## Use cases

```javascript
import { getBrowserName } from '@arnat/sdk-js'; // ES6 (and TypeScript
```

## Browser props detection

Often we need to pick users' browser properties such as the name, the version, the rendering engine and so on. Here is an example how to do it with Bowser:

```javascript
import { getBrowserName } from '@arnat/sdk-js';
console.log(`The current browser name is "${getBrowserName()}"`);
// The current browser name is "Internet Explorer"
```

or

```javascript
import { getBrowser } from '@arnat/sdk-js';
console.log(getBrowser());

// outputs
{
  name: 'Internet Explorer';
  version: '11.0';
}
```

or

```javascript
import {getAll} from '@arnat/sdk-js';
console.log(getAll());

// outputs
{
  browser: {
    name: "Internet Explorer"
    version: "11.0"
  },
  os: {
    name: "Windows"
    version: "NT 6.3"
    versionName: "8.1"
  },
  platform: {
    type: "desktop"
  },
  engine: {
    name: "Trident"
    version: "7.0"
  }
}
```

## Filtering browsers

You could want to filter some particular browsers to provide any special support for them or make any workarounds.
It could look like this:

```javascript
import { satisfies } from '@arnat/sdk-javascript';

const isValidBrowser = satisfies({
  // declare browsers per OS
  windows: {
    'internet explorer': '>10',
  },
  macos: {
    safari: '>10.1',
  },

  // per platform (mobile, desktop or tablet)
  mobile: {
    safari: '>=9',
    'android browser': '>3.10',
  },

  // or in general
  chrome: '~20.1.1432',
  firefox: '>31',
  opera: '>=22',

  // also supports equality operator
  chrome: '=20.1.1432', // will match particular build only

  // and loose-equality operator
  chrome: '~20', // will match any 20.* sub-version
  chrome: '~20.1', // will match any 20.1.* sub-version (20.1.19 as well as 20.1.12.42-alpha.1)
});
```

Settings for any particular OS or platform has more priority and redefines settings of standalone browsers.
Thus, you can define OS or platform specific rules and they will have more priority in the end.

More of API and possibilities you will find in the `docs` folder.

### Browser names for `.satisfies()`

By default you are supposed to use the full browser name for `.satisfies`.
But, there's a short way to define a browser using short aliases. The full
list of aliases can be found in [the file](src/constants.js).

## Unit Testings

All code has coverage & testings
