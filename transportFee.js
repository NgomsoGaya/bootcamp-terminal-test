export default function transportFee(specificshift) {
  switch (specificshift) {
    case "morning":
      return "R20";
    case "afternoon":
      return "R10";
    default:
      return "free";
  }
}