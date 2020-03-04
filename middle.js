const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false; 
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✔️  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    let middleIndex = array[Math.floor(array.length / 2)];
    newArray.push(middleIndex);
  } else if (array.length % 2 === 0) {
    let index1 = array[array.length / 2 - 1];
    let index2 = array[array.length / 2]
    newArray.push(index1, index2);
  }
  return newArray;
};