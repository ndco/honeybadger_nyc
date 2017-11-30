// c = (f - 32) * 5/9

// f = (c*9/5) + 32

var a = prompt('What Temp?');
var b = prompt('What Scale?').toLowerCase();


// function getTemperature (a, b) {
    if (typeof(parseInt(a)) === typeof(3)) {

        if (b === "c to f") {
            a = (a * 9 / 5) + 32;
            console.log(a);
        } else if (b === "f to c") {
            a = (a - 32) * 5 / 9;
            console.log(a);
        } else {
            console.log('invalid option. Please try again')
        }
        
    } else {
        console.log('invalid number. Please add correct number');
    }
    
// }