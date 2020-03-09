const tail = function(array) {
  let tailEnd = [];
  for (let i = 1; i < array.length; i++) {
    tailEnd.push(array[i]);
  }
  return tailEnd;
};

module.exports = tail;