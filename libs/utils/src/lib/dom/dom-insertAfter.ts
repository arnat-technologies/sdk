// Insert an element after other one
//
export const insertAfter = (ele, anotherEle) =>
  anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);
//
// Or
export const insertAfter = (ele, anotherEle) =>
  anotherEle.insertAdjacentElement('afterend', ele);
