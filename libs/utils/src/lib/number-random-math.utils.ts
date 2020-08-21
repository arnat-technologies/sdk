/************************************************************************
 * Random And Math
 *************************************************************************/
const randomColor = function () {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
};

const randomFromArray = (randomfArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
});

const randomFromA2B = (randomA2B = function (a, b, int) {
  const result = Math.random() * (b - a) + a;
  return int ? Math.floor(result) : result;
});

const randomKey = function (length) {
  let key = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  length = length || 6;

  for (let i = 0; i < length; i++)
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  return key;
};

const floor = function (n, m) {
  m = m || 0;
  return Math.floor(n * Math.pow(10, m)) / Math.pow(10, m);
};

const fill0 = function (num) {
  num = parseFloat(num);
  return num < 10 ? '0' + num : num;
};

const currency = function (val) {
  m = m || 0;
  return Math.floor(n * Math.pow(10, m)) / Math.pow(10, m);
};
