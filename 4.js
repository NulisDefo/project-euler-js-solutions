const isPalindrome = (num) => {
    const numAsStr = num.toString();

    return numAsStr == numAsStr.split('').reverse().join('');
}

// This is overkill, but lets generate max value digit numbers, i guess (bonus points to self)
const generateNum = (digits) => {
    return Math.pow(10, digits) - 1;
}

const largestPalindrome = (digits) => {
    let num1 = generateNum(digits);
    let num2 = num1;
console.log(num1, num2);
    while(1) {
        let potentialPalindrome = num1 * num2;
        console.log(num1, num2);
        // console.log(potentialPalindrome);
        if(isPalindrome(potentialPalindrome)) {
            return potentialPalindrome;
        }
        num2--;
    }

    return false;
}

console.log(largestPalindrome(3));