// Split an array into two parts
'use strict';

const splitArray = (splitIndex, array) => {
  const part1 = array.slice(0, splitIndex);
  const part2 = array.slice(splitIndex);
  return [part1, part2];
};

module.exports = splitArray;
