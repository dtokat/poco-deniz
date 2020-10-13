// Long version of Arabic number to Roman number conversion

const toRoman = (n) => {
  let r = n;
  let str = "";
  let keys = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let m = keys[0][1];
  while (n >= m) {
    str += keys[0][0];
    n = n - keys[0][1];
  }
  m = keys[1][1];
  while (n >= m) {
    str += keys[1][0];
    n = n - keys[1][1];
  }
  m = keys[2][1];
  // console.log(n)
  while (n >= m) {
    str += keys[2][0];
    n = n - keys[2][1];
  }
  m = keys[3][1];
  while (n >= m) {
    str += keys[3][0];
    n = n - keys[3][1];
  }
  m = keys[4][1];
  while (n >= m) {
    str += keys[4][0];
    n = n - keys[4][1];
  }
  m = keys[5][1];
  while (n >= m) {
    str += keys[5][0];
    n = n - keys[5][1];
  }
  m = keys[6][1];
  while (n >= m) {
    str += keys[6][0];
    n = n - keys[6][1];
  }
  m = keys[7][1];
  while (n >= m) {
    str += keys[7][0];
    n = n - keys[7][1];
  }
  m = keys[8][1];
  while (n >= m) {
    str += keys[8][0];
    n = n - keys[8][1];
  }
  m = keys[9][1];
  while (n >= m) {
    str += keys[9][0];
    n = n - keys[9][1];
  }
  m = keys[10][1];
  while (n >= m) {
    str += keys[10][0];
    n = n - keys[10][1];
  }
  m = keys[11][1];
  while (n >= m) {
    str += keys[11][0];
    n = n - keys[11][1];
  }
  m = keys[12][1];
  while (n >= m) {
    str += keys[12][0];
    n = n - keys[12][1];
  }
  console.log(r + " = " + str);
};
const toArabic = (n) => {}; //next exercise
let x = 1198;
toRoman(x);
