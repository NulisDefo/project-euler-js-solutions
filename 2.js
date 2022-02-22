let fibo = [0, 1];
let sum = 0;

for(let i = 2; 1; i++) {
    let newFibo = fibo[i-2] + fibo[i-1];
    if(newFibo < 4000000) {
        fibo.push(newFibo);
        (newFibo % 2 === 0) && (sum += newFibo);
    } else {
        break;
    }
}

console.log(fibo);
console.log(sum);