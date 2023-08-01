let str = "7y-250=9";
let index1 = str.indexOf("y");
let index2 = str.indexOf("+");
let index3 = str.indexOf("-");
let index4 = str.indexOf("=");

let c = str.substring(0, index1);
let d, m;
if (str[index2] == "+") {
  d = str.substring(index2 + 1, index4);
} else if (str[index3] == "-") {
  d = str.substring(index3 + 1, index4);
}
m = str.substring(index4 + 1);
let y;

if (str[index2] === "+") {
  y = (m - d) / c;
} else if (str[index3] === "-") {
  y = (m + d) / c;
}

console.log("y = ", y);
