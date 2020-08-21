// Insert an element before other one
//
export const insertBefore = (ele, anotherEle) =>
  anotherEle.parentNode.insertBefore(ele, anotherEle);
//
// Or
export const insertBefore = (ele, anotherEle) =>
  anotherEle.insertAdjacentElement('beforebegin', ele);
