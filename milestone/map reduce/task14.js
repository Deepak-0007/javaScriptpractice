/**
 * Given an array of numbers, use reduce to 
 * a) compute the sum of the numbers
 * b) product of numbers
 * c) max number
 * d) min number
 * e) count the numbers greater than 10

 */
const nums=[3,4,5,6,7,8,9];
let sum=nums.reduce(function(acc,curr){
    return acc+curr;
});
console.log("sum of the number is",sum);
//product of no.
let product=nums.reduce(function(acc,curr){
    return acc*curr;

});
console.log("product of nums is ",product);
// max number
let max=nums.reduce(function(acc,curr){
    if(curr>acc){
        return curr;
    }
    else{
        return acc;
    }
});
console.log("max of number is" ,max)
//min number
let min=nums.reduce(function(acc,curr){
    if(curr<acc){
        return curr;
    }
    else{
        return acc;
    }
}); ////not initialize the acc by default it is initialize to first value
console.log("min of number is" ,min)
//count the numbers greater than 10
let count = nums.reduce(function (acc, curr) {
    if (curr > 10) {
        return acc + 1;
    }
    return acc;
}, 0);
console.log("Count of numbers greater than 10:", count);