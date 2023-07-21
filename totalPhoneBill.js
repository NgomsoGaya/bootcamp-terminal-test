export default function totalPhoneBill(callsAndSms) {
  var total = 0;
  var call_SmsList = callsAndSms.split(",");

  for (var i = 0; i < call_SmsList.length; i++) {
    var phoneBillList = call_SmsList[i].trim();
    if (phoneBillList.startsWith("sms")) {
      total += 0.65;
    } else if (phoneBillList.startsWith("call")) {
      total += 2.75;
    }
  }
  return "R" + total.toFixed(2);
}