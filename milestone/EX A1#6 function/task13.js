function countnumof(str,ch){
let count=0;
for(i=0;i<str.length;i++){
    if(str[i]==ch){
        count++
    }
}
return count;
}
function countnum(str){
    let count=0;
    for(i=0;i<=str.length;i++){
        let s1=countnumof(str,str[i])
        if(s1>count){
            count=s1;
        }
    }
        return count;
}
console.log(countnum("museum"));
console.log(countnumof("str",ch))


// function countnumof(str, ch) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] == ch) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   function countnum(str) {
//     if (str.length === 0) {
//       return 0; // Return 0 if the input string is empty
//     }
  
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       let s1 = countnumof(str, str[i]);
//       if (s1 > count) {
//         count = s1;
//       }
//     }
//     return count;
//   }
  
//   // Test case
//   console.log(countnumof("museum", "m")); // Output: 2 (m occurs 2 times)
//   console.log(countnum("museum"));       // Output: 2 (m occurs 2 times, which is the maximum count)
  