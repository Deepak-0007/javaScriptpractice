//Is there a prime number in array

function CheckPrime(number) {
    let len = number.length;
  
    for (let i = 0; i < len; i++) {
      let check= isPrime(number[i]);
      if(check){
        console.log('found prime',number[i]);
        return true;
      }
    }
      return false;
}
      function isPrime(num){
      for (let i = 2; i <=num-1; i++) {
        if (num%i == 0) {
        return false;
        }
      }
      
        return true; 
      }
  const numArray = [25,10,12];
  console.log(CheckPrime(numArray));
  
  
