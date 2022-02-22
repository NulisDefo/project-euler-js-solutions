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
    let largestPalindrome = 0;
    // let nums;
    for (let i = num1; i >= 0; i--) {
        for (let j = num2; j >= 0; j--) {
            let potentialPalindrome = i * j;
            if(isPalindrome(potentialPalindrome) && (largestPalindrome < potentialPalindrome)) {
                largestPalindrome = potentialPalindrome;
                // nums = [i, j];
            }
        }
    }

    // console.log(nums);
    return largestPalindrome;
}

console.log(largestPalindrome(3));