//Use reduce to concatenate all the strings with a # between them.The output should be "Hello#React#Java#Python#Hibernate#JavaScript" 
const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
const concatenatestring=courses.reduce(function(acc,curr){
return acc+"#"+curr;
}," ");
console.log("Concatenated String:",concatenatestring);