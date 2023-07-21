export default function isWeekday(weekday){
    return !weekday.startsWith("S") && weekday.endsWith("day")
    };