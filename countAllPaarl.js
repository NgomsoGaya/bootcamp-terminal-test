export default function countAllPaarl(regNo) {
  var regNoCounter = [];
  var regList = regNo.split(",");
  for (var i = 0; i < regList.length; i++) {
    var regList2 = regList[i].trim();
    if (regList2.startsWith("CJ")) {
      regNoCounter.push(regList2);
    }
  }
  return regNoCounter.length;
}