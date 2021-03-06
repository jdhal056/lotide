const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false; 
  }
  return true;
};

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

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
