// Find an intersection of two dictionaries
'use strict';

const findIntersection = (objectA, objectB) => {
  const keys = Object.keys(objectA);
  const intersection = {};
  for (const key of keys)
    if (objectA[key] === objectB[key]) {
      const value = objectA[key];
      intersection[key] = value;
    }
  return intersection;
};

module.exports = findIntersection;
