function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= number / 2; i++) {
      if (number % i ==0) {
        return false;
      }
    }
  
    return true;
  }
  console.log(isPrime(5));
  console.log(isPrime(49));
  console.log(isPrime(1));
  console.log(isPrime(97));