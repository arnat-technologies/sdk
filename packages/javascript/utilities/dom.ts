// getting inspired by: https://1loc.dev

// Check if an element is a descendant of another
//
export const isDescendant = (child, parent) => parent.contains(child);

// Check if an element is focused
//
export const hasFocus = (ele) => ele === document.activeElement;

// Check if the touch events are supported
//
export const touchSupported = () =>
  'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);

// Detect internet explorer browser
//
export const isIE = !!document.documentMode;

// Detect macos browser
//
export const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// Get all siblings of an element
//
export const siblings = (ele) =>
  [].slice.call(ele.parentNode.children).filter((child) => child !== ele);

// Get the selected text
//
export const getSelectedText = () => window.getSelection().toString();

// Go back to the previous page
//
history.back();
//
// Or
history.go(-1);

// Hide an element
//
// Pick the method that is suitable for your use case
export const hide = (ele) => (ele.style.display = 'none');
//
// Or
export const hide = (ele) => (ele.style.visibility = 'hidden');

// Insert an element after other one
//
export const insertAfter = (ele, anotherEle) =>
  anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);
//
// Or
export const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);

// Insert an element before other one
//
export const insertBefore = (ele, anotherEle) =>
  anotherEle.parentNode.insertBefore(ele, anotherEle);
//
// Or
export const insertBefore = (ele, anotherEle) =>
  anotherEle.insertAdjacentElement('beforebegin', ele);

// Insert given html after an element
//
export const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);

// Insert given html before an element
//
export const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);

// Redirect to another page
//
export const goTo = (url) => (location.href = url);

// Reload the current page
//
export const reload = () => location.reload();
//
// Or
export const reload = () => (location.href = location.href);

// Replace an element
//
export const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);

// Scroll to top of the page
//
export const goToTop = () => window.scrollTo(0, 0);

// Show an element
//
export const show = (ele) => (ele.style.display = '');

// Strip html from a given text
//
export const stripHtml = (html) =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

// Toggle an element
//
export const toggle = (ele) =>
  (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');
