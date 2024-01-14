// Find an intersection of two dictionaries
'use strict';

const findIntersection = (objectA, objectB) => {
  const keys = Object.keys(objectA);
  for (const key of keys) {
    if (objectA[key] === objectB[key]) {
      objectB[key] = objectA[key];
    } else {
      delete objectA[key];
    }
  }
  return objectA;
};

module.exports = findIntersection;
