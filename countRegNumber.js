export default function countRegNumber(regNo){
    var regCount = regNo.split(",")
    var number = regCount.length
    if (regNo == ""){
        number = 0
    }
    return number
    };