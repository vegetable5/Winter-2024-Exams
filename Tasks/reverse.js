// Reverse dict, exchange keys and values
'use strict';

const reverseDictionary = (data) => {
  const keys = Object.keys(data, 500);
  ({ ...data });
  keys.forEach((_) => {
    const key = data[_];
    data[key] = _;
    delete data[_];
  }, 1000);
  return data;
};

module.exports = reverseDictionary;
