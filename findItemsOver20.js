export default function findItemsOver20(itemList){
  var itemsOver20 = [];
  var threshold = 20;
  for(var i = 0; i < itemList.length; i++){
  var eachItem = itemList[i];
  if(eachItem.qty > threshold){
     itemsOver20.push(eachItem);
     }
  }
  return itemsOver20;
};