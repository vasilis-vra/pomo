//function to convert integer to seconds format
export default function intToSeconds(number) {
  if (number >= 10) {
    return number.toString();
  } else {
    return "0" + number.toString();
  }
}
