// Reverse dict, exchange keys and values
'use strict';

const reverseDictionary = (data) => {
  const keys = Object.keys(data);
  const reversed = {};
  for (const key of keys) {
    const index = data[key];
    reversed[index] = key;
  }
  return reversed;
};

module.exports = reverseDictionary;
