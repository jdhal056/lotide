const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j])
        } 
    } else {
      flatArray.push(array[i]);
    } 
  }
  return flatArray;
};

module.exports = flatten;
