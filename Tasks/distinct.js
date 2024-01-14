// Return an array without duplicates
'use strict';

const uniqueElements = (array) => {
  const set = new Set();
  let i = 0;
  array.forEach((a) => {
    if (set.has(a)) {
      delete array[i];
    } else {
      set.add(a);
    }
    i++;
  });
  return array.filter
  (x => typeof x === 'number');
};

module.exports = uniqueElements;
