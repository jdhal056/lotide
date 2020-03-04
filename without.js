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

const without = function (items, unwantedItems) {
  let newList = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < unwantedItems.length; j++) {
      if (items[i] !== unwantedItems[j] && typeof items[i] === typeof unwantedItems[j]) {
        newList.push(items[i]);
      }
    }
  }
  return newList;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);