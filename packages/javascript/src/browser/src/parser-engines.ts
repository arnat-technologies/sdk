import { ENGINE_MAP } from './constants';
import { Engine } from './interfaces';
import { getFirstMatch } from './utils';

// Specifics goes FIRST
export default [
  /* EdgeHTML */
  {
    test(parser): boolean {
      return parser.getBrowserName(true) === 'microsoft edge';
    },
    describe(ua: string) {
      const isBlinkBased = /\sedg\//i.test(ua);

      // return blink if it's blink-based one
      if (isBlinkBased) {
        return {
          name: ENGINE_MAP.Blink,
        };
      }

      // otherwise match the version and return EdgeHTML
      const version = getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);

      return {
        name: ENGINE_MAP.EdgeHTML,
        version,
      };
    },
  },

  /* Trident */
  {
    test: [/trident/i],
    describe(ua: string) {
      const engine: Engine = {
        name: ENGINE_MAP.Trident,
      };

      const version = getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Presto */
  {
    test(parser): boolean {
      return parser.test(/presto/i);
    },
    describe(ua: string) {
      const engine: Engine = {
        name: ENGINE_MAP.Presto,
      };

      const version = getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Gecko */
  {
    test(parser): boolean {
      const isGecko = parser.test(/gecko/i);
      const likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua: string) {
      const engine: Engine = {
        name: ENGINE_MAP.Gecko,
      };

      const version = getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink,
      };
    },
  },

  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua: string) {
      const engine: Engine = {
        name: ENGINE_MAP.WebKit,
      };

      const version = getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },
];
