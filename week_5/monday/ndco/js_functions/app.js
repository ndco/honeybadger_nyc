//Round 0
//Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
var words = ["hello", "what", "is", "up", "dude"]

function lengths (array) {
    let arrayNum = [];
    for (i = 0; i < array.length; i ++) {
        console.log(array);
        arrayNum[i] = array[i].length;
        console.log(arrayNum);
        
        return arrayNum;

    }
}


//Round 1
//Write a function fizzbuzzer that accepts a single parameter as an argument, a number, and will return the following:

function fizzbuzzer (number) {
    num = parseInt(number);

    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 3 !== 0 || num % 5 !== 0) {
        console.log('McClane');
    };
};



//Round 2
//Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

function transmogrifier (num1, num2, num3) {
    result = Math.pow((num1 * num2), num3);
    console.log(result);
}



//Round 3
// Write a function called toonify that takes two parameters, accent and sentence.
const accList = {
    daffy: {
        originChar: 's',
        newChar: 'th'
    },

    elmer: {
        originChar: 'r',
        newChar: 'w'
    }
}
function toonify (accent, sentence) {
    let splitSent = sentence.split('');
    console.log(splitSent);

        for (let i = 0; i < sentence.length; i++) {
            if (splitSent[i] === accList[accent].originChar) {
                splitSent[i] = accList[accent].newChar;
                console.log(splitSent);
            }

            rejoinSent = splitSent.join('');
        }
    
    console.log(rejoinSent);
    

}
    

    


















// function func (string) {
//     console.log(string.toUpperCase());
// };

// function doSomethingNtimes (func, num) {
//     let i = 0;
//     while (i <= num) {
//         func();
//         i ++;
//     };
// };



// // WRITE A FUNCTION CALLED bigOrSmall it accepts 1 param and console logs "this number is big" if the number is over 10 and "this number is small" otherwise
// function bigOrSmall (num) {
//     if (num > 10) {
//         console.log('this num is big');
//     } else {
//         console.log('this num is small');
//     };
// };


// //Write a function oddOrEven accepts one argument and console logs "this number is odd" if the number is odd and "this number is even" if the number is even
// function oddOrEven (num) {
//     result = num % 2;
//     if (result === 0) {
//         console.log('this num is even');
//     } else {
//         console.log('this num is odd');
//     };
// };

// // num % 2 === 0 ? console.log('this num is even') : console.log('this is odd');

// // Write a function call embiggen that accepts one argument, a string, and returns a CAPS LOCKED version of that string
// function embiggen(str) {
//     return str.toUpperCase();
// };


// // Write a function called reverser that accepts on argument, a string, and returns a reversed version of that string
// function reverser (str) {
//     console.log(str);
//     strArray = str.split('');
//     console.log(strArray);
//     strBckArray = strArray.reverse();
//     newStr = strBckArray.join('');

//     return newStr;
// }



//
// ############################################################################
// var thisWeekTimes = [52, 51, 53, 52, 54];
// var lastWeekTimes = [54, 57, 58, 53, 54, 58];
// var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];


// function weekSum (numLists) {
//     console.log(numLists);
//     let newNums = numLists;
//     numArray = newNums.split(',');
//     sum = 0;
//     for (var i = 0; i < numArray.length; i++) {
//         sum += numArray[i];
//     };
//     var avg = sum / numArray.length;
//     console.log = sum;
//     console.log = avg;
// };


// // var sum = 0;
// // for (var i = 0; i < thisWeekTimes.length; i++) {
// //     sum += thisWeekTimes[i];
// // }
// // var thisWeekAvg = sum / thisWeekTimes.length;

// // var sum = 0;
// // for (var i = 0; i < lastWeekTimes.length; i++) {
// //     sum += lastWeekTimes[i];
// // }
// // var lastWeekAvg = sum / lastWeekTimes.length;

// // var sum = 0;
// // for (var i = 0; i < weekBeforeTimes.length; i++) {
// //     sum += weekBeforeTimes[i];
// // }
// // var weekBeforeAvg = sum / weekBeforeTimes.length;

// // console.log(thisWeekAvg);
// // console.log(lastWeekAvg);
// // console.log(weekBeforeAvg);
//