var thenumber = 23;

if (!isNaN(thenumber)) {
    console.log('------------------------------------');
    console.log("Your number is the square root of " + thenumber * thenumber);
    console.log('------------------------------------');
}
else{
    console.log("Hey. Why didn't you give me a number?");
}


if (thenumber < 10) {
    console.log("small");
}
else if (thenumber < 100) {
    alert("Medium");
}
else{
    alert("Large");
}