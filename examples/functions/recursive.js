function power(base, exponent) {
    if (exponent == 0){
        return 1;
    }
    else{
        return base * power(base, exponent - 1);
    }
}

console.log('------------------------------------');
console.log(power(2, 3));
console.log('------------------------------------');