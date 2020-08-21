// Or
export const redirectHttps = () =>
  location.protocol === 'https:' ? {} : (location.protocol = 'https:');
