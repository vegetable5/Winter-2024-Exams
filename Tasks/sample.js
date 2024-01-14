// Get one random element from an array
'use strict';

const randomElement = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = randomElement;
