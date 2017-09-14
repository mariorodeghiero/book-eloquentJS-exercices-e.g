function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log('------------------------------------');
console.log(chicken() + `came first.`);
console.log('------------------------------------');

//RangeError: Maximum call stack size exceeded



