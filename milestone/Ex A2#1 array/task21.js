//Given an array of names and a name, find and remove the name from the array
function removeNameFromArray(names, nameToRemove) {
    for (var i = 0; i < names.length; i++) {
      if (names[i] === nameToRemove) {
        names.splice(i, 1);
        break; 
      }
    }
    return names;
  } 
  // test cases 
  var case1 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case1i = 'Bob';
  console.log(removeNameFromArray(case1,case1i))
  var case2 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case2i = 'Jack';
  console.log(removeNameFromArray(case2,case2i))
  var case3 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case3i = 'Steve';
  console.log(removeNameFromArray(case3,case3i))
  var case4 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case4i= 'Bill';
  console.log(removeNameFromArray(case4,case4i))
  var case5 = ['Jack'];
  var case5i = 'Jack';
  console.log(removeNameFromArray(case5,case5i))
  