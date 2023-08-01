/*Given	a	string,	determine	whether	the	string	represents	a	proper	email	id.	A	
proper	email	id	is	of	the	form	s1@s2.com	where	s1	and	s2	are	non	empty	
strings.	If	it	is	a	proper	email	id,	print	on	the	console	that	the	entered	text	is	a	
proper	email	id.	 */

var email = "2@hdf.bdk";
var index = email.indexOf("@");
var substring1 = email.substring(0, index);
console.log(substring1);
var substring2 = email.substring(index,index+1);
console.log("s2",substring2);
var substring3 = email.substring(email.length - 4,email.length);
console.log("s3",substring3);
if(substring1 !="" && substring2 !="" &&  substring3==".com"){
  console.log("proper")
}
else{
  console.log("not proper")
}
 