let square = function(x) {
    return x * x;
};

console.log('------------------------------------');
console.log(square(12));
console.log('------------------------------------');


let makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

let power = function(base, exponente) {
    let result = 1;
    for (var count = 0; count < exponente; count++) {
        result *= base;    
    };
    return result; 
};

console.log(power(2, 10))
