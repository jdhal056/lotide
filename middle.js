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

module.exports = middle;