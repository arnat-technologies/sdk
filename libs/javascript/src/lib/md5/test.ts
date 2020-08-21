import md5 from './index';

describe('md5', function () {
  it('should throw an error for an undefined value', function () {
    assert.throws(function () {
      md5(undefined);
    });
  });

  it('should allow the hashing of the string `undefined`', function () {
    assert.equal('5e543256c480ac577d30f76f9120eb74', md5('undefined'));
  });

  it('should throw an error for `null`', function () {
    assert.throws(function () {
      md5(null);
    });
  });

  it('should return the expected MD5 hash for "message"', function () {
    assert.equal('78e731027d8fd50ed642340b7c9a63b3', md5('message'));
  });

  it('should not return the same hash for random numbers twice', function () {
    const msg1 = Math.floor(Math.random() * 100000 + 1) + new Date().getTime();
    const msg2 = Math.floor(Math.random() * 100000 + 1) + new Date().getTime();

    if (msg1 !== msg2) {
      assert.notEqual(md5(msg1), md5(msg2));
    } else {
      assert.equal(md5(msg1), md5(msg1));
    }
  });

  it('should support Node.js Buffers', function () {
    const buffer = new Buffer('message áßäöü', 'utf8');

    assert.equal(md5(buffer), md5('message áßäöü'));
  });

  it('should be able to use a binary encoded string', function () {
    const hash1 = md5('abc', { asString: true });
    const hash2 = md5(hash1 + 'a', { asString: true, encoding: 'binary' });
    const hash3 = md5(hash1 + 'a', { encoding: 'binary' });
    assert.equal(hash3, '131f0ac52813044f5110e4aec638c169');
  });

  it('should support Uint8Array', function () {
    // Polyfills
    if (!Array.from) {
      Array.from = function (src, fn) {
        const result = new Array(src.length);
        for (let i = 0; i < src.length; ++i) result[i] = fn(src[i]);
        return result;
      };
    }
    if (!Uint8Array.from) {
      Uint8Array.from = function (src) {
        const result = new Uint8Array(src.length);
        for (let i = 0; i < src.length; ++i) result[i] = src[i];
        return result;
      };
    }

    const message = 'foobarbaz';
    const u8arr = Uint8Array.from(
      Array.from(message, function (c) {
        return c.charCodeAt(0);
      }),
    );
    const u8aHash = md5(u8arr);
    assert.equal(u8aHash, md5(message));
  });
});
