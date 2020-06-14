// window.XMLHttpRequest = false;

// import * as fs from 'fs';
import { clear, mockUserAgent } from 'jest-useragent-mock';

// import * as path from 'path';
// import * as yaml from 'yamljs';
import { getAll } from '../../src';
import listOfUA from './useragentstrings';

// it(, () => {
// console.log('josn', json);
// const listOfUA = yaml.parse(json);

const browserNames = Object.keys(listOfUA);

browserNames.forEach((browserName) => {
  listOfUA[browserName].forEach((browser, index) => {
    it(`should render all useragentstrings.yml ${browserName} ${index}`, async () => {
      mockUserAgent(browser.ua);

      const parsed = getAll();
      // t.deepEqual(parsed, browser.spec, `${browser.ua}`);
      expect(parsed.browser.name).toBe(browserName);

      clear();
    });
  });
});
// });
