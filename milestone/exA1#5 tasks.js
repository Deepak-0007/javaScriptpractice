//   task1
//  let str='zebra';
//  let len=str.length;
//  let count=0;
//  for (let i=0;i<len;i++){
//     if(str[i]=='z'){
//         count++;
//     }
//  }
//  console.log(count);

//task1 ii
//  let str='abc';
//  let len =str.length;
//  let newstr='';
//  for(let i=0;i<len;i++){
//  newstr=newstr+str[i]+str[i];
//  }
//  console.log(newstr);

//task 1 iii
// let str='Ab# 6!8m';
// let len=str.length;
// let alpha='';
// let digits='';
// let rest='';
// for(let i=0;i<len;i++){
//     if(str[i]>='a'&&str[i]<='z'){
//         alpha=alpha+str[i];
//     }
//     else if(str[i]>='A'&&str[i]<='Z'){
//         alpha=alpha+str[i];
//     }
//     else if(str[i]>='0'&&str[i]<='9'){
//         digits=digits+str[i];
//     }
//     else{
//         rest=rest+str[i];
//     }
// }
// console.log(alpha,rest,digits);

//task 1 iv
// let str='hello';
// let out=''; 
// let len= str.length;
// for(let i=0; i<len; i++){
//     let ch=str[i];
//     let prevch=str[i-1];
//     if(ch=='#'){
//         if(prevch=='#'){
//             //do nothing
//         }else{
//             out=out+ch;
//         }
//     }
//     else{
//         out=out+ch;
//     }
// }
// console.log(out);

//task iv
let str1='yesnoyesok'
let str2='yes';
let count=0;
let startPos=0;
for(;;){
    //;;means infinityh in loop 
    let index =str1.indexOf(str2,startPos);
    if(index>=0){
        count++;
        startPos=index+1;
    }
    else{
        break;
    }
}
console.log(count);