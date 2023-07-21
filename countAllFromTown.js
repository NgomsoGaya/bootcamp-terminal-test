export default function allFromTown(regNos, town) {
  const regNosList = regNos.split(",");
  var allTowns = [];
  for (var i = 0; i < regNosList.length; i++) {
    var regList = regNosList[i].trim();
    if (regList.startsWith(town)) {
      allTowns.push(regList);
    }
  }
  return allTowns;
}