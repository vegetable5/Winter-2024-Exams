// Get one random element from an array
'use strict';

const randomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

const randomElement = (array) => {
  const index = randomIndex(array.length);
  return array[index];
};

module.exports = randomElement;
