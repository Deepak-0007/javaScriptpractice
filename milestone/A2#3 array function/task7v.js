//Given a number minAge, filter the array for those whose age is greater than minAge. 
//Also find and findIndex the first JSON whose age is greater than minAge.
let array=[   {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Nick","country":"France","age":32},
    {"name":"Francis","country":"France","age":44},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
  ]
  let minAge=35;
 function check(n,minAge){
    return n.age>minAge
 }
  let country=array.filter(function(n){  
    return check(n,minAge)
  })
  console.log("Whose age is greater then minage =",country);
  //find
  let index2=array.find(function(n){
    return check(n,minAge)
  });
  console.log("whose age is greater than than minage =" ,index2);

  // find index
  let index1=array.findIndex(function(n){
    return check(n,minAge)
  })
  console.log("Index is =" ,index1);
