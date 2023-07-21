export default function yearsAgo(specificyear) {
  const currentyear = new Date().getFullYear();
  return currentyear - specificyear;
}