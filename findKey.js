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

module.exports = findKey;