import { clear, mockUserAgent } from 'jest-useragent-mock';

import { getAll } from '../../src';
import listOfUA from './useragentstrings';

const browserNames = Object.keys(listOfUA);

browserNames.forEach((browserName) => {
  listOfUA[browserName].forEach((browser, index) => {
    it(`should render all useragentstrings.yml ${browserName} ${index}`, async () => {
      mockUserAgent(browser.ua);

      const parsed = getAll();
      expect(parsed.browser.name).toBe(browserName);
      clear();
    });
  });
});
