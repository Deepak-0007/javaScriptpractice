/**Given an array of JSON 
 * [{"fname":"Jack","lname":"Smith","city":"London"},
 * {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
 * {"fname":"Ed","lname":"May","city":"Paris"},
 * {"fname":"Tim","lname":"Gates","city":"Rome"}]
 * Create a new array of JSON which has an additional field fullname in it. For the first JSON the fullname is "Jack Smith" */
let jsonArray = [
    {"fname":"Jack","lname":"Smith","city":"London"},
    {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
    {"fname":"Ed","lname":"May","city":"Paris"},
    {"fname":"Tim","lname":"Gates","city":"Rome"}
  ];
let newArray=jsonArray.map(function(n){
    let json={};
    let fullname=n.fname+' '+n.lname;
    (json.fname=n.fname),(json.lname=n.lname),(json.city=n.city),(json.fullname=fullname)
    return json;
});
console.log(newArray)