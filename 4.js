const isPalindrome = (num) => {
    const numAsStr = num.toString();

    return numAsStr == numAsStr.split('').reverse().join('');
}

// This is overkill, but lets generate max value digit numbers, i guess (bonus points to self)
const generateNum = (digits) => {
    return Math.pow(10, digits) - 1;
}

const largestPalindrome = (digits) => {
    let a = generateNum(digits);
    let b;
    let largestPalindrome = 0;
    const minDigit = generateNum(digits - 1) + 1;

    while(a >= minDigit) {
        b = a;
        while(b >= minDigit) {
            if(a * b <= largestPalindrome) break;
            if(isPalindrome(a * b)) largestPalindrome = a * b;
            b--;
        }
        a--;
    }

    return largestPalindrome;
}

console.log(largestPalindrome(4));