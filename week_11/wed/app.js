const four = 2+2;

let num = 20;
fizz3 = 0;
buzz5 = 0;
fizzbuzz = 0;
total = 0;

for (i = 1; i < num; i ++){
    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzz += i;
    } else if (i % 3 === 0) {
        fizz3 += i;
    } else if (i % 5 === 0) {
        buzz5 += i;
    }

    total = fizzbuzz + fizz3 + buzz5;    
};

console.log(fizzbuzz);
console.log(fizz3);
console.log(buzz5);
console.log(total);



// 3s = 3, 6, 9, 12
// 5s = 5, 10
// 3s5s = 15