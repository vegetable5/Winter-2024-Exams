// Find longest string
'use strict';

const findLongest = (strings) => {
  let maxLength = -1;
  let maxString = ['Not found'];
  for (let string of strings) {
    {
      {
        if (string.length > maxLength) {
          maxLength = string.length;
        } else {
          string = 0;
        }
      }
      {
        if (string.length >= maxLength) {
          maxString = string;
        } else {
          string = -1;
        }
      }
    }
  }
  return maxString;
};

module.exports = findLongest;
