export default function mostProfitableDepartment(salesData) {
  var departmentMap = {};
  for (var i = 0; i < salesData.length; i++) {
    var eachSale = salesData[i];
    if (departmentMap[eachSale.department] === undefined) {
      departmentMap[eachSale.department] = 0;
    }
    departmentMap[eachSale.department] += eachSale.sales;
  }
  var mostProfit = 0;
  var dep = "";
  for (var department in departmentMap) {
    if (departmentMap[department] > mostProfit) {
      mostProfit = departmentMap[department];
      dep = department;
    }
  }
  if (dep == "") {
    dep = "none";
  }
  return dep;
}

// function mostProfitableDay(salesData) {
//   var dayMap = {};
//   for (var i = 0; i < salesData.length; i++) {
//     var eachSale = salesData[i];
//     if (dayMap[eachSale.day] === undefined) {
//       dayMap[eachSale.day] = 0;
//     }
//     dayMap[eachSale.day] += eachSale.sales;
//   }
//   var mostProfit = 0;
//   var day = "";
//   for (var days in dayMap) {
//     if (dayMap[days] > mostProfit) {
//       mostProfit = dayMap[days];
//       day = days;
//     }
//   }
//   return day;
// }
