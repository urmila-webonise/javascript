let str = "AJHHEDJKJKJISBOJHJNUDD";
let i = 0;
let j = str.length - 1;
while (i < j) {
  while (
    i < j &&
    !(
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    )
  ) {
    i++;
  }
  while (
    i < j &&
    !(
      str[j] == "A" ||
      str[j] == "E" ||
      str[j] == "I" ||
      str[j] == "O" ||
      str[j] == "U"
    )
  ) {
    j--;
  }
  let temp = str[i];
  str = str.substring(0, i) + str[j] + str.substring(i + 1);
  str = str.substring(0, j) + temp + str.substring(j + 1);
  i++;
  j--;
}
console.log(str);
