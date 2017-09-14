function wrapValue(n) {
    var lacalVariable = n;
    return function() { return lacalVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);



console.log(wrap1());
console.log(wrap2());
