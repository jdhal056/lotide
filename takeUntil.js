const takeUntil = function(array, callback) {
  let result = [];
  for (let items of array) {
    if (!callback(items)) {
      result.push(items)
    } else {
      break;
    }
  }
  return result;
}

module.exports = takeUntil;