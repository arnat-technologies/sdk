# Device

## Installation

```shell
yarn add @arnat/sdk-javascript
```

## Usage

Example:

```javascript
import { BrowserView, MobileView, isBrowser, isMobile } from '@arnat/sdk-javascript';
```

```html
<BrowserView>
  <h1>This is rendered only in browser</h1>
</BrowserView>
<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>
```

if you don't need a view, you can use `isMobile` for conditional rendering

```javascript
import {isMobile} from '@arnat/sdk-javascript';

renderContent = () => {
    if (isMobile) {
        return <div> This content is unavailable on mobile</div>
    }
    return <div> ...content </div>
}

render() {
    return this.renderContent();
}
```

If you want to leave a message to a specific browser (e.g IE), you can use `isIE` selector

```javascript
import {isIE} from '@arnat/sdk-javascript';

render() {
    if (isIE) return <div> IE is not supported. Download Chrome/Opera/Firefox </div>
    return (
        <div>...content</div>
    )
}
```

If you want to render a view on a specific device and with a specific condition:

```javascript
import { browserName, CustomView } from '@arnat/sdk-javascript';

render() {
    return (
        <CustomView condition={browserName === "Chrome"}>
            <div>...content</div>
        </CustomView>
    )
}
```

## Style the view

You can style view component by passing class to `viewClassName` prop

```html
<BrowserView viewClassName="custom-class">
  <p>View content</p>
</BrowserView>
```

or you can pass inline styles to `style` prop

```javascript
const styles = {
  background: 'red',
  fontSize: '24px',
  lineHeight: '2',
};
```

```html
<BrowserView style="{styles}">
  <p>View content</p>
</BrowserView>
```

## Selectors and views

### Selectors

| prop               | type     | description                                                                            |
| ------------------ | -------- | -------------------------------------------------------------------------------------- |
| isMobile           | bool     | returns true if device type is `mobile` or `tablet`                                    |
| isMobileOnly       | bool     | returns true if device type is `mobile`                                                |
| isTablet           | bool     | returns true if device type is `tablet`                                                |
| isBrowser          | bool     | returns true if device type is `browser`                                               |
| isSmartTV          | bool     | returns true if device type is `smarttv`                                               |
| isWearable         | bool     | returns true if device type is `wearable`                                              |
| isConsole          | bool     | returns true if device type is `console`                                               |
| isAndroid          | bool     | returns true if os type is `Android`                                                   |
| isWinPhone         | bool     | returns true if os type is `Windows Phone`                                             |
| isIOS              | bool     | returns true if os type is `iOS`                                                       |
| isChrome           | bool     | returns true if browser is `Chrome`                                                    |
| isFirefox          | bool     | returns true if browser is `Firefox`                                                   |
| isSafari           | bool     | returns true if browser is `Safari`                                                    |
| isOpera            | bool     | returns true if browser is `Opera`                                                     |
| isIE               | bool     | returns true if browser is `Internet Explorer`                                         |
| isEdge             | bool     | returns true if browser is `Edge`                                                      |
| isYandex           | bool     | returns true if browser is `Yandex`                                                    |
| isChromium         | bool     | returns true if browser is `Chromium`                                                  |
| isMobileSafari     | bool     | returns true if browser is `Mobile Safari`                                             |
| osVersion          | string   | returns os version (e.g 7 for `Windows` or 6 for `Android`)                            |
| osName             | string   | returns os name (e.g `Windows`, `Android`)                                             |
| fullBrowserVersion | string   | returns full browser version (e.g 65.0.3325.181 for `Chrome`)                          |
| browserVersion     | string   | returns browser `major` version (e.g 65 in `Chrome` or 9 in `IE`)                      |
| browserName        | string   | returns browser name                                                                   |
| mobileVendor       | string   | returns mobile device vendor (e.g `LG`, `iPhone` etc)                                  |
| mobileModel        | string   | returns mobile device model (e.g `Nexus 5`)                                            |
| engineName         | string   | returns browser engine `name` (e.g `Gecko` for FF or `WebKit` for Chrome)              |
| engineVersion      | string   | returns engine version                                                                 |
| getUA              | string   | returns user agent                                                                     |
| deviceType         | string   | returns device type (e.g `mobile` or `tablet`)                                         |
| isIOS13            | boolean  | returns true/false if device is running on iOS13                                       |
| isIPhone13         | boolean  | returns true/false if device is iPhone and running on iOS13                            |
| isIPad13           | boolean  | returns true/false if device is iPad and running on iOS13                              |
| isIPod13           | boolean  | returns true/false if device is iPod and running on iOS13                              |
| isElectron         | boolean  | returns true/false if running on Electron                                              |
| deviceDetect       | function | return data object which includes all data about device (e.g version, engine, os etc.) |

### Views

Available views:

- MobileView
- BrowserView
- TabletView
- AndroidView
- IOSView
- IEView
- WinPhoneView
- MobileOnlyView
- SmartTVView
- ConsoleView
- WearableView
- CustomView -- has `condition` prop which takes any expression which results into boolean (e.g browserName === 'Chrome')

Each view accepts three props:

1. `viewClassName` - to style the view
2. `style` - to add inline styles to view
3. `children` - to pass children to view
4. `renderWithFragment` - render with `React.Fragment` instead of `<div>`

### withOrientationChange

A HOC for getting `isLandscape` and `isPortrait` props for mobile

```js
import { withOrientationChange } from '@arnat/sdk-javascript';

let App = (props) => {
  const { isLandscape, isPortrait } = props;

  if (isLandscape) {
    return <div>The device is in Landscape mode</div>;
  }

  if (isPortrait) {
    return <div>The device is in Portrait mode</div>;
  }
};

App = withOrientationChange(App);

export { App };
```

## License

Copyright 2018-2020 Arnat Technologies E.I.R.L.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Maintenance

This repository is maintained by [Arnat Technologies](https://www.arnat.digital).
Click [here](https://github.com/arnat-technologies) for a complete list of our repositories on GitHub.
