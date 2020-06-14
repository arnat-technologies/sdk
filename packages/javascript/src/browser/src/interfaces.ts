export interface Browser {
  // Browser name, like `"Chrome"` or `"Internet Explorer"`
  name?: string;
  // Browser version as a String `"12.01.45334.10"`
  version?: string;
}

export interface OS {
  // OS name, like `"Windows"` or `"macOS"`
  name?: string;
  // OS version, like `"NT 5.1"` or `"10.11.1"`
  version?: string;
  // OS name, like `"XP"` or `"High Sierra"`
  versionName?: string;
}

export interface Platform {
  // platform type, can be either `"desktop"`, `"tablet"` or `"mobile"`
  type?: string;
  // vendor of the device like `"Apple"` or `"Samsung"`
  vendor?: string;
  // device model like `"iPhone"` or `"Kindle Fire HD 7"`
  model?: string;
}

export interface Engine {
  // Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
  name?: string;
  // String version of the engine
  version?: string;
}

export interface BrowserDetail {
  browser: Browser;
  os: OS;
  platform: Platform;
  engine: Engine;
}
