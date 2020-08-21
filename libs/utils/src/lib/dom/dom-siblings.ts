// Get all siblings of an element
//
export const siblings = (ele) =>
  [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
