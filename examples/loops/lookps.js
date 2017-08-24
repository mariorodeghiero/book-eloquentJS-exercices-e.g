var number = 0;

while (number <= 12) {
    console.log('------------------------------------');
    console.log(`O numer ${number} está no loop`);
    console.log('------------------------------------');
    number += 2;
}

// ==========================================

var result = 1
var counter = 0

while (counter < 10) {
    result *= 2;
    counter += 1; 
}

console.log(result);


// ==========================================


// do {
//     var name = console.log("Whoe are you ?");
// } while (!name);
// console.log(name);


// ==============  Loops For ==========================

for (var number = 0; number <= 12 ; number += 2) {
    console.log('------------------------------------');
    console.log(number);
    console.log('------------------------------------');    
}

var result = 1;
for (var counter = 0; counter < 10; counter += 1){
    result *= 2;
}
console.log('------------------------------------');
console.log(result);
console.log('------------------------------------');


// ===============  Quebrando execuçao =======================

for (var current = 20; ; current++) {
    if (current % 7 == 0) {
        break;
    }
}

console.log('------------------------------------');
console.log(current);
console.log('------------------------------------');