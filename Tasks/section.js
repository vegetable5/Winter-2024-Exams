// Split string into array by the first occurrence of separator
'use strict';

const splitString = (string, separator) => {
  const separatorPos = string.indexOf(separator);
  if (separatorPos < 0 || separator === '') {
    return [string, ''];
  } else {
    const part1 = string.slice(0, separatorPos);
    const part2 = string.slice(separatorPos + separator.length);
    return [part1, part2];
  }
};

module.exports = splitString;
