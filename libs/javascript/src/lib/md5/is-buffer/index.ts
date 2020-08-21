/*!
 * Determine if an object is a Buffer
 *
 * getting inspiration from https://github.com/feross/is-buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

const isBuffer = (obj) => {
  return (
    obj != null &&
    obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  );
};

export default isBuffer;
