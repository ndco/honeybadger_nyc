console.log('loaded');
// Create a script with two variables, each assigned to a number.Add them together and output the result to the console.Now do the same with two strings.
//numbers
let num1 = 8;
let num2 = 26;
numTogether = num1 + num2;

console.log(num1 + num2);
console.log(numTogether);

//strings
let str1 = "Andy";
let str2 = "Seo"
strTogether = str1 + str2;

console.log(str1 + str2);
console.log(strTogether);

// Create a multidimensional array related to a subject that interests you.Output two of the items in sub - arrays to the console.
const myInterests = [
    ['black', 'white', 'grey', 'green', 'red'],
    [1, 3, 7, 8, 21],
    ['music', 'movies', 'coding', 'jogging', 'shopping']
];

console.log(myInterests[0][1], myInterests[1][2]);


// Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

let num = prompt('Please insert number');

if (num < 100) {
    alert('Your number is less than 100');
} else {
    alert('Your number was ' + num + ' that is greater than 100');
};



// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function tellName(name) {
    console.log('You have entered: ' + name);
};

tellName('Andy');



// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function openDoor() {
    let userSelect;
    let userAttempts = 5;
    let i = 0;

    while (i <= userAttempts) {
        let userSelect = parseInt(prompt('Please select door: 1 - 3'));
        
        if (userSelect === 1) {
            console.log('You have earned a car');
            break;
        } else if (userSelect === 2) {
            console.log('You have earned a house');
            break;
        } else if (userSelect === 3) {
            console.log('Nothing earned... Please try again');
        } else {
            console.log('You have selected invalid option.  Please try again');
        };
        
        i ++;
        
        if (i === userAttempts) {
            console.log('You have used all attempts.  System closing...');
            break;
        };
    };
};