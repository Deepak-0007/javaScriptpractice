//task1
// let n=1;
// let remainder=n%2;
// if(remainder==1){
//     n++;
// }
// console.log(n);

// let num=60;
// if(num%6==0){
//     console.log('divisible by 6 ');
// }
// else if(num%3==0){
//     console.log('divisible by 2');
// }
// else{
//     console.log('Not divisible 2,3,and 6');
// }

// let size =6;
// let str= '';
// for(let i=1; i<=size; i++){
//     if(i%2==1){
//         str=str +'j'
//     }
//     else{
//     str = str+'k';
//     }
// }
// console.log(str);

//  let n=21;
//  let count=0;
//  for(let i=2; i<n; i++){
//     if(n%i==0){
//         count++;
//     }
// }
//     if (count==0){
//         if(n==1){
//             console.log('1 is neighter prime or composite number');
//         }
//         else{
//         console.log('prime');
//         }
//     }
//     else{
//         console.log('composite');
//     }

// task 2
//  let n=-7;
//  if(n>0){
//     console.log("positive number");
//  }
//  else{
//     console.log("not a positive number");
//  }

//task3
// let n=28;
// if(n%10==0){
//     console.log("multiple fo 10");
// }
// else{
//     console.log("not multiple of 10");
// }

//task 4
// let m=6;
// let n=8;
// if(m>n){
//     console.log("larger")
// }
// else if(m==n){
//     console.log("Equal");
// }
// else {
//     console.log("smaller");
// }

//task 5
// let b=15;
//   for(let i=2;i<=5;i++){
//     if(b%i==0){
//         console.log(i+": yes")
        
//     }
//     else{
       
//         console.log(i+": no")
//     }
//   }

// task7
// let n=4;
//   for(let i=1;i<=n;i++){
//     if(i%2!==0){
//         console.log(i+": odd")
        
//     }
//     else{
       
//         console.log(i+": even")
//     }
//   }

//task6
// let n=15;
// for(let i=1; i<=n; i++){
//     if(i%5==0){
//         console.log("hello");
//     }
//     else{
//       console.log(i);
//     }
// }

//task 8
// let n=17; 
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             console.log(i);
//         }
//     }


//
// let n=5 
//     for (let  i = 1; i <= n; i++) {
//         let square = i * i;
//          if(square % 2 == 0){
//             console.log("even")
//          }
//         console.log(`Square of ${i} = ${square} : ${type}`);
//     }



//task9
// let c=5;

// for(let i=1; i<=c;i++){
//     let square=i*i;
//     if(square%2==0){
//         console.log("square of"+i+"="+square+ ":even")
//     }
//     else {
//         console.log("square of"+i+"="+square+":odd");
//     }
// }

//task 10
// let o=85;
//   if (o >= 75) {
//     console.log('Good');
//   } else if (o >= 50) {
//     console.log('Average');
//   } else {
//     console.log('Poor');
//   }

//task 11
// let p=45;
// if(p>90 && p<=100){
//   console.log('grade a');
// }else if(p>75 && p<=90){
//   console.log('grade b');
// }
// else if(p>50 && p<=75){
//   console.log('grade c');
// } else{
//   console.log('grade d');
// }

// task12
// let pattern="";
// let q=4;
// for(let i=1; i<=q;i++){
//       if(i%2==0){
//       pattern+='Y';
//     }
//     else{
//       pattern +='X'
//     }  
//     console.log(pattern);
// }


//task 13
// let w=4;
// let pattern="";
// for(let i=1;i<=w; i++){
//   if(i%3==0){
//     pattern +="C"
//   }
//   else if(i%3==2){
//     pattern +="B";
//   }
//   else if(i%3==1){
//     pattern +="A";
//   }
  
// }
// console.log(pattern);

//Task 14
// let z1 = 3; 
// let P = "";
// for (let i = 1; i <= z1; i++) {
//   if (i%3===1) {
//     P += "P" + i;
//   }
//   else if(i%3===2){
//     P+="Q"+ i;
//   }
//   else{
//     P +="R"+i;
//   }
// }

// console.log(P);

// task 15
// let q=3;
// let r="";
// for(let i=1; i<=q; i++){
//   if(i%2==0){
//    r+="#";
//   }
//   else{
//     r +=i;
//   }
// } 
// console.log(r)

//task16
// let s=5;
// let output="";
// for(i=1; i<=s; i++){
//   if(i%2==0){
//     output +="+"+i;
//   }
//   else{
//     output +="-"+i;
//   }
// }
// console.log(output);

// task17
// let s=5;
// let sum=0;
// let output="";
// for(i=1; i<=s; i++){
//   if(i%2==0){
//     output +="+";
//     sum +=i;
//   }
//   else{ 
//     output +="-";
//     sum -=i;
//   }
//   output +=i;
// }
// console.log(output +"="+sum);

//task 18
// let t=7;
// let output="";
// for(i=t; i>=1; i--){
//   if(i%3===0){
//     output +="x";
//   }
//   else{
//     output += i;
//   }
//   }
//   console.log(output);


//task 19
// let number=4;
// let p="";
// let q="";
// for(let i=1;i<=number; i++){
//   if(number%i==0){
//     p=p+i+"#";
//   }else{
//     q=q+i+"#";
//   }
// }
// console.log("Divide:" +p);
// console.log("Not Divide:" +q)

// task 20
let n0 = 1001; 
  let sum = 0;
  
  for (let i = 1; i <= 4; i++) {
    let digit=n0%10;
    sum += digit; 
    n0=(n0-digit)/10; 
  }
  
  console.log(sum);