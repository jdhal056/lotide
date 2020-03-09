const findKeyByValue = function(obj, value) {
  let keyArr = Object.keys(obj);
  for (let keys of keyArr) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;