function func (string) {
    console.log(string.toUpperCase());
};

function doSomethingNtimes (func, num) {
    let i = 0;
    while (i <= num) {
        func();
        i ++;
    };
};







// WRITE A FUNCTION CALLED bigOrSmall it accepts 1 param and console logs "this number is big" if the number is over 10 and "this number is small" otherwise
function bigOrSmall (num) {
    if (num > 10) {
        console.log('this num is big');
    } else {
        console.log('this num is small');
    };
};


//Write a function oddOrEven accepts one argument and console logs "this number is odd" if the number is odd and "this number is even" if the number is even
function oddOrEven (num) {
    result = num % 2;
    if (result === 0) {
        console.log('this num is even');
    } else {
        console.log('this num is odd');
    };
};

// num % 2 === 0 ? console.log('this num is even') : console.log('this is odd');

// Write a function call embiggen that accepts one argument, a string, and returns a CAPS LOCKED version of that string
function embiggen(str) {
    return str.toUpperCase();
};


// Write a function called reverser that accepts on argument, a string, and returns a reversed version of that string
function reverser (str) {
    console.log(str);
    strArray = str.split('');
    console.log(strArray);
    strBckArray = strArray.reverse();
    newStr = strBckArray.join('');

    return newStr;
}



/*
############################################################################
var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];


function weekSum (numLists) {
    console.log(numLists);
    let newNums = numLists;
    numArray = newNums.split(',');
    sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    };
    var avg = sum / numArray.length;
    console.log = sum;
    console.log = avg;
};


// var sum = 0;
// for (var i = 0; i < thisWeekTimes.length; i++) {
//     sum += thisWeekTimes[i];
// }
// var thisWeekAvg = sum / thisWeekTimes.length;

// var sum = 0;
// for (var i = 0; i < lastWeekTimes.length; i++) {
//     sum += lastWeekTimes[i];
// }
// var lastWeekAvg = sum / lastWeekTimes.length;

// var sum = 0;
// for (var i = 0; i < weekBeforeTimes.length; i++) {
//     sum += weekBeforeTimes[i];
// }
// var weekBeforeAvg = sum / weekBeforeTimes.length;

// console.log(thisWeekAvg);
// console.log(lastWeekAvg);
// console.log(weekBeforeAvg);
*/