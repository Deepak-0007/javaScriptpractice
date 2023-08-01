/*Given	two Strings	str1	and	str2	which	represent	positive	numbers,	find	which	
string	represents	the	larger	number	and	print	it	on	the	console.	If	they	are	
equal,	print	Equal	on	the	console.
Note	that	the	values	in	the	strings	can	be	so	large	that	they	cannot	be	
converted	into	numbers.	So,	compare	them	in	their	string	formats	only	to	
determine	the	larger.	 */

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
      console.log(str1);
      return;
    } else if (str1.length < str2.length) {
      console.log(str2);
      return;
    } else {
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] > str2[i]) {
          console.log(str1);
          return;
        } else if (str1[i] < str2[i]) {
          console.log(str2);
          return;
        }
      }
    }
    console.log("Equal");
  }
  //case 1
  let str1 = "456789456789456";
  let str2 = "456780009899765";
  compareStrings(str1, str2);

// case 2 
  str1	=	"987654321987654321"
  str2	=	"1234567890123456789"
  compareStrings(str1, str2);

  //case 3
  str1	=	"987654321987654321"
  str2	=	"987654321987654321"
  compareStrings(str1, str2);
  
  //case 4
  str1	=	"1234"
  str2	=	"1235"
  compareStrings(str1, str2);

  //case 5
  str1	=	"22334455667788"
  str2	=	"22334455777788"
  compareStrings(str1, str2);

  //case 6
  str1	=	"198765432198765"
  str2	=	"2987654321987"
  compareStrings(str1, str2);

   //case 7
   str1	=	"99988877766655500"
   str2	=	"99988877766655500"
   compareStrings(str1, str2);
  
  
  