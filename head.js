const assertEqual = require("./assertEqual");

const head = function(array) {
  let firstItem = "";
  for (let i = 0; i < array.length; i++) {
    firstItem = array[0];
  }
  return firstItem;
};

module.exports = head;