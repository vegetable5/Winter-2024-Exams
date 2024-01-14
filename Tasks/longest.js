// Find longest string
'use strict';

const findLongest = (strings) => {
  let maxLength = -1;
  let maxString = 'Not found';
  for (const string of strings) {
    if (string.length > maxLength) {
      maxLength = string.length;
      maxString = string;
    }
  }
  return maxString;
};

module.exports = findLongest;
