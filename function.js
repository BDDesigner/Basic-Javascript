//Normal function 
function displayName(a, b) {
    return a * b;
}
let x = displayName(4, 3);


//fahrenheit to celsius formula
function fahrenheightToCel(fahrenheight) {
    const f = (fahrenheight-32) * 5/9;
    return f;
}

let result = fahrenheightToCel(100);
console.log(result);

//celsius to fahrenheit formula
function CelToFahren(cel) {
    return (cel * 9/5) + 32;
}

const value = CelToFahren(100)
console.log(value);



