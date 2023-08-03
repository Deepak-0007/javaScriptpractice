//Given an array of numbers, create a new array whose numbers are twice the number of the input array. Use map
let array=[4,8,12,20,6]
let result=array.map(function(n){
    return n*2;
})
console.log("Twice the Number ",result)