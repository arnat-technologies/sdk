/************************************************************************
 * Date
 *************************************************************************/
/**
 * getDate
 * https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
 */
const getDate = function (d1, d2) {
  const today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  let hh = today.getHours();
  let ms = today.getMinutes();
  let ss = today.getSeconds();

  dd = fill0(dd);
  mm = fill0(mm);
  hh = fill0(hh);
  ms = fill0(ms);
  ss = fill0(ss);

  d1 = d1 || '/';
  d2 = d2 || ':';

  return yyyy + d1 + mm + d1 + dd + ' ' + hh + d2 + ms + d2 + ss;
};
