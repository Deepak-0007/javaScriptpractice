// Task 1
/* Given	a	String	str,	create	a	string	in	which	a	certain	number	of	x	are	put	after	
each	character	in	the	input	as	shown	below.	Print	the	string	on	the	console */

function print(str){
let output1 = "";
let output2='x'
for (let i = 0; i < str.length; i++) {
  output1 += str[i]+output2;
  output2+="x"
}
return output1;
}
console.log(print('AbC')); // case 1
console.log(print('HUMAN')); // case 2
console.log(print('R')); // case 3
console.log(print('MNOP')); // case 4
console.log(print('DDDDD')); // case 5
console.log(print('X')); // case 6
console.log(print('123456')); // case 7
