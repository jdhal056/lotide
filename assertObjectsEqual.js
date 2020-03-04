const eqObjects = function(object1, object2) {
  let result = true;
  const keyArr1 = Object.keys(object1);
  const keyArr2 = Object.keys(object2);
  if (keyArr1.length !== keyArr2.length) {
    result = false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    result = eqArrays(object1[key], object2[key]);
    } else if (typeof(object1[key]) === "object" && typeof(object2[key]) === "object") {
      result = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✔️  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: "3"});