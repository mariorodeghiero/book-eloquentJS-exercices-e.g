function wrapValue(n) {
    var lacalVariable = n;
    return function() { return lacalVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);



console.log(wrap1());
console.log(wrap2());


// closure2


function multiplier(factor) {
    return function(number) {
        return number + factor;
    };
}

var twice = multiplier('2');
console.log('------------------------------------');
console.log(twice('5'));
console.log('------------------------------------');