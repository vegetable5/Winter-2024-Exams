// Split string into array by the first occurrence of separator
'use strict';

const splitString = (string, separator) => {
  const separatorPos = string.indexOf(separator);
  if (separatorPos < 0 || separator === '') {
    return [string, ''];
  } else {
    return [string.slice(0, separatorPos), string.slice(separatorPos + separator.length)];
  }
};

module.exports = splitString;
