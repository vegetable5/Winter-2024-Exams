// Find an intersection of two dictionaries
'use strict';

const findIntersection = (object1, object2) => {
  const keys = Object.keys(object1);
  const intersection = {};
  for (const key of keys)
    if (object1[key] === object2[key]) {
      const value = object1[key];
      intersection[key] = value;
    }
  return intersection;
};

module.exports = findIntersection;
