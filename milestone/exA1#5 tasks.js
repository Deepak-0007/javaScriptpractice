// //   task1
// //  let str='zebra';
// //  let len=str.length;
// //  let count=0;
// //  for (let i=0;i<len;i++){
// //     if(str[i]=='z'){
// //         count++;
// //     }
// //  }
// //  console.log(count);

// //task1 ii
// //  let str='abc';
// //  let len =str.length;
// //  let newstr='';
// //  for(let i=0;i<len;i++){
// //  newstr=newstr+str[i]+str[i];
// //  }
// //  console.log(newstr);

// //task 1 iii
// // let str='Ab# 6!8m';
// // let len=str.length;
// // let alpha='';
// // let digits='';
// // let rest='';
// // for(let i=0;i<len;i++){
// //     if(str[i]>='a'&&str[i]<='z'){
// //         alpha=alpha+str[i];
// //     }
// //     else if(str[i]>='A'&&str[i]<='Z'){
// //         alpha=alpha+str[i];
// //     }
// //     else if(str[i]>='0'&&str[i]<='9'){
// //         digits=digits+str[i];
// //     }
// //     else{
// //         rest=rest+str[i];
// //     }
// // }
// // console.log(alpha,rest,digits);

// //task 1 iv
// // let str='hello';
// // let out=''; 
// // let len= str.length;
// // for(let i=0; i<len; i++){
// //     let ch=str[i];
// //     let prevch=str[i-1];
// //     if(ch=='#'){
// //         if(prevch=='#'){
// //             //do nothing
// //         }else{
// //             out=out+ch;
// //         }
// //     }
// //     else{
// //         out=out+ch;
// //     }
// // }
// // console.log(out);

// //task iv
// // let str1='yesnoyesok'
// // let str2='yes';
// // let count=0;
// // let startPos=0;
// // for(;;){
//     //;;means infinityh in loop 
// //     let index =str1.indexOf(str2,startPos);
// //     if(index>=0){
// //         count++;
// //         startPos=index+1;
// //     }
// //     else{
// //         break;
// //     }
// // }
// // console.log(count);

// //task11
//  let str='#98#bQ';
//  let newstr="";
//  for(let i=0; i<str.length;i++){
//      let char=Sstr[i];
//      if(char>='A' && char<='Z'){
//          newstr+='A';
//      }
//      else if(char>='a' && char<='z'){
//          newstr+='a';
//      }else if(char >='0' && char<='9'){
//          newstr +=0;
//      }else{
//          newstr +=char;
//      }
//  }
//  console.log(newstr);

// //task12
// // let str = "9#a$M%2eP";
// // let newStr = "";

// // for (let i = 0; i < str.length; i++) {
// //   let char = str[i];

// //   if (char >= 'a' && char <= 'z') {
// //     newStr += char + char;
// //   } else if (char >= 'A' && char <= 'Z') {
// //     newStr += char + char;
// //   } else if (char >= '0' && char <= '9') {
// //     newStr += char + char + char;
// //   }
// // }

// // console.log(newStr);
 
// //task 13
// // let str = "qw2B**5g";
// // let lowerCaseStr = "";
// // let digitStr = "";
// // let upperCaseStr = "";

// // for (let i = 0; i < str.length; i++) {
// //   let char = str[i];

// //   if (char >= 'a' && char <= 'z') {
// //     lowerCaseStr += char;
// //   } else if (char >= 'A' && char <= 'Z') {
// //     upperCaseStr += char;
// //   } else if (char >= '0' && char <= '9') {
// //     digitStr += char;
// //   }
// // }

// // let newStr = lowerCaseStr + digitStr + upperCaseStr;
// // console.log(newStr);
 
// // task14
// // let str = "9#a$M%2eP&$";
// // let nonAlphaNumericStr = "";

// // for (let i = 0; i < str.length; i++) {
// //   let char = str[i];

// //   if (!(/[a-zA-Z0-9]/.test(char))) {
// //     nonAlphaNumericStr += char;
// //   }
// // }

// // console.log(nonAlphaNumericStr);

// //task 15
// // let str = "JavaScript++JS";
// // let length = str.length;
// // let firstHalf = "";

// // if (length % 2 === 0) {
// //   for (let i = 0; i < length / 2; i++) {
// //     firstHalf += str[i];
// //   }
// // }

// // console.log(firstHalf);

// //task16
// let str = "Master";
// let length = str.length;
// let lastHalf = "";

// if (length % 2 === 0) {
//   for (let i = length / 2; i < str.length; i++) {
//     lastHalf += str[i];
//   }
// }

// console.log(lastHalf);



//task 28
// let str="AB CD";
// let searchstr="ABCD";
// let pos=0;
// let r=0;
// for(;;){
//     let index=str.indexOf(searchstr,pos);
//     if(index >=0){
//         r++;
//         pos=index+1;
//     }else{
//         break;
//     }
// }
// console.log(r);

//task 29
//Given a string str, replace ABCD with XYZ
// var str = "ABCD JS";
// var newStr = "";

// for (var i = 0; i < str.length; i++) {
//  if( str[i]=="A"){
//     newStr +="X";
//  }
//  else if(str[i]=="B"){
//     newStr += "Y";
//  } 
//  else if(str[i]=="C"){
//     newStr += "Z";

//  }
//  else if(str[i]=="D"){
//     newStr=newStr
//  }
//  else{
//     newStr=newStr+str[i];
//  }
// }
// console.log(newStr);

// var str = "ABCD JS";
// var newStr = "";

// for (var i = 0; i < str.length; i++) {
//  if( str[i]=="A"||str[i+1]=="B"||str[i+2]=="C"||str[i+3]=="D"){
//     newStr +="XYZ";
//  }
//  else{
//     newStr=newStr+str[i];
//  }
// }
// console.log(newStr);

// var str = "ABCD JS";
// var newStr = "";

// for (var i = 0; i < str.length; i++) {
//  if( str[i]=="A"||str[i+1]=="B"||str[i+2]=="C"||str[i+3]=="D"){
//     newStr +="XYZ";
//  }
//  else{
//     newStr=newStr+str[i];
//  }
// }
// console.log(newStr);

var str = "AB ABC ABCD ABCD ABC AB";
var newStr = "";

for (var i = 0; i < str.length; i++) {
  if (str[i] == "A" && str[i + 1] == "B" && str[i + 2] == "C" && str[i + 3] == "D") {
    newStr += "XYZ";
    i += 3; 
  } else {
    newStr += str[i];
  }
}

console.log(newStr);
