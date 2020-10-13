// Upgraded version of Arabic number to Roman number conversion
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

  for (let index = 0; index < keys.length; index++) {
    let m = keys[index][1];
    while (n >= m) {
      str += keys[index][0];
      n = n - keys[index][1];
    }
  }
  console.log(r + " = " + str);
};
const toArabic = (n) => {}; // next exercise
let x = 1998;
toRoman(x);

const prom = new Promise((resolve, reject)=>{
    if (true) {
        resolve("OKKAY");
    } else {
        reject("hata");
    }
}
);


prom.then(result => console.log(result);)