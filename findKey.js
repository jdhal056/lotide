const findKey = function(object, callback) {
  let result = "";
  for (let keys in object) {
    if (callback(object[keys])) {
      result = keys;
      break;
    }
  }
  return result;
};


// testing
let objectExample = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
let callbackExample = x => x.stars === 2

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey(objectExample, callbackExample),"noma")