const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstItem = "";
  for (let i = 0; i < array.length; i++) {
    firstItem = array[0];
  }
  return firstItem;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");