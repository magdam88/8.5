var a = 3;
var b = 4;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
}
if
else(value = 0) {
    console.log('wynik rowny 0')
} else {
    console.log('wynik ujemny');
}



/// 8.6


function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log('nieprawidłowe dane');
    } else {
        return a * h / 2;
    }
}

console.log(getTriangleArea(10, 6))
console.log(getTriangleArea(10, 15))
console.log(getTriangleArea(0, 5))