// Binary encoding
const bin = {
  // Convert a string to a byte array
  stringToBytes: function (str: string): string {
    for (let bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xff);
    return bytes;
  },

  // Convert a byte array to a string
  bytesToString: function (bytes): string {
    for (let str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));
    return str.join('');
  },
};

// UTF-8 encoding
const utf8 = {
  // Convert a string to a byte array
  stringToBytes: function (str: string): string {
    return bin.stringToBytes(unescape(encodeURIComponent(str)));
  },

  // Convert a byte array to a string
  bytesToString: function (bytes): string {
    return decodeURIComponent(escape(bin.bytesToString(bytes)));
  },
};

export { utf8, bin };
