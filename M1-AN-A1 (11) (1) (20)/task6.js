//Given	a	String	str,	count	the	number	of	different	characters	in	it.
function DifferentCharacters(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === i) {
        count++;
      }
    }
  
    console.log( count);
  }
  
  let case1 = "abc";
  DifferentCharacters(case1);
  
  // case 2
  let case2 = "heshethemthey";
  DifferentCharacters(case2);
  
  // case 3
  let case3 = "12341234123411223344";
  DifferentCharacters(case3);

  // case 4
  let case4 = "AAAAAAAAA";
  DifferentCharacters(case4);

  // case 5
  let case5 = "Abcdefgh";
  DifferentCharacters(case5);

  // case 6
  let case6 = "AAABBBABAB";
  DifferentCharacters(case6);

  // case 7
  let case7 = "X";
  DifferentCharacters(case7);

  // case 8
  let case8 = "a+b+c+d+e";
  DifferentCharacters(case8);