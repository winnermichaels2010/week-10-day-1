function sumOneToN (n){
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
console.log(sumOneToN(5))
console.log(sumOneToN(10))