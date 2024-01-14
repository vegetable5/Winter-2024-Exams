// Return an array without duplicates
'use strict';

const uniqueElements = (array) => {
  const unique = [];
  for (const item of array)
    if (!unique.includes(item)) unique.push(item);
  return unique;
};

module.exports = uniqueElements;
