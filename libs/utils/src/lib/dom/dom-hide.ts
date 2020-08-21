// Hide an element
//
// Pick the method that is suitable for your use case
export const hide = (ele) => (ele.style.display = 'none');
//
// Or
export const hide = (ele) => (ele.style.visibility = 'hidden');
