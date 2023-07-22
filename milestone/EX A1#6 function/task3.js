function removeChar(str, char) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(removeChar('abcd', '3')); 
