import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const countFreeEmailDomains = (emails) => {
  const domainCount = emails.reduce((acc, email) => {
    const domain = email.split('@')[1];
    const domainIndex = freeEmailDomains.indexOf(domain);
    if (domainIndex !== -1) {
      const domainKey = freeEmailDomains[domainIndex];
      acc[domainKey] = acc[domainKey] ? acc[domainKey] + 1 : 1;
    }
    return acc;
  }, {});

  return domainCount;
};

export default countFreeEmailDomains;
// END