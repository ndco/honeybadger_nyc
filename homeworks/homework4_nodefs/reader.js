const fs = require('fs');

const file1 = './people1.json';
const file2 = './people2.json';
const combineFile = 'peopleComplete.txt';


// console.log(file1);
fs.readFile(file1, 'utf8', (err, data1) => {
    if (err) throw err;    
    fs.readFile(file2, 'utf8', (err, data2) => {
        if (err) throw err;
        const newData1 = JSON.parse(data1);
        const newData2 = JSON.parse(data2);
        const newdata = newData1.concat(newData2).sort();
        fs.writeFile('./completePeople.txt', newdata, function(err) {
            if (err) throw err;
            console.log('successfully added');
        });
    });
});
