export default function findItemsOver(itemList, threshold) {
  var itemsOverThreshold = [];
  for (var i = 0; i < itemList.length; i++) {
    var everyItem = itemList[i];
    if (everyItem.qty > threshold) {
      itemsOverThreshold.push(everyItem);
    }
  }
  return itemsOverThreshold;
}
