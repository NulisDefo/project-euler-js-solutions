// Find all prime factors
const primeFactors = (n) => {
    let factor;
    let divisor = 2;

    while(n > 2) {
        if(n % divisor === 0) {
            factor = divisor;
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factor;
}

const largestPrime = primeFactors(600851475143);

console.log(largestPrime);