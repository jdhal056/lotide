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

module.exports = without;