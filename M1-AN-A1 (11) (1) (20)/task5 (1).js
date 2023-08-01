/*let equation = "c*y + d = m";
let index1 = equation.indexOf('y');

console.log(index1); // Output: 2

let index2 = equation.indexOf('+');

console.log(index2); // Output: 4

let index3 = equation.indexOf('-');

console.log(index3); // Output: 4

let c= equation.substring(0, index1);
*/

let equation = "100y	- 101	=	2399";
let index1 = equation.indexOf('y');
let index2 = equation.indexOf('+');
let index3 = equation.indexOf('-');
let index4 = equation.indexOf('=');
let c = equation.substring(0, index1);
console.log("c = ", c);
let d, m;
if(equation[index2]=="+"){

  d = equation.substring(index2 + 1, index4);
  console.log("d = ", d);
}
else if(equation[index3]=="-"){
  d = equation.substring(index3 + 1, index4);
  console.log("d = ", d);
}
m = equation.substring(index4 + 1);
console.log('M=', m);
let y;
if (equation[index2] === "+") {
  y = (m - d)/c;
} else if (equation[index3] === "-") {
  y = (m + d)/c;
}
console.log("y = ", y);


//diferent way
/*let equation = "25y	- 30	=	1070";
let index1 = equation.indexOf('y');
let index2 = equation.indexOf('+');
let index3 = equation.indexOf('-');
let index4 = equation.indexOf('=');

let c = equation.substring(0, index1);
console.log("c = ", c);

let d, m;

if (index2 !== -1) {
  d = equation.substring(index2 + 1, index4);
  console.log("d = ", d);
} else if (index3 !== -1) {
  d = equation.substring(index3 + 1, index4);
  console.log("d = ", d);
}

m = equation.substring(index4 + 1);
console.log('M=', m);

let y;

if (index2 !== -1) {
  y = (parseFloat(m + ".0") - parseFloat(d + ".0")) / (parseFloat(c + ".0"));
} else if (index3 !== -1) {
  y = (parseFloat(m + ".0") + parseFloat(d + ".0")) / (parseFloat(c + ".0"));
}

console.log("y = ", y);
*/