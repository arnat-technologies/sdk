// Strip html from a given text
//
export const stripHtml = (html) =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
