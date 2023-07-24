
function sumOfDigits(n) {
    let sum = 0;
  
    for (;;) {
      sum += n % 10; // Add the last digit to the sum
      n = n = (n - (n % 10)) / 10; // Remove the last digit
  
      if (n === 0) {
        break;
      }
    }
  
    return sum;
  }
  
  // Test cases
  console.log(sumOfDigits(24681));    
  console.log(sumOfDigits(1002)); 
  console.log(sumOfDigits(789)); 
  console.log(sumOfDigits(15));
  console.log(sumOfDigits(7));