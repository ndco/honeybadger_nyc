function toCamelCase(str) {
    let strToArray = str.split('_');
    console.log(strToArray[0]);
    for (i = 1; i < strToArray; i++) {
        console.log(strToArray[0]);
        if (strToArray[i].length > 1) {
            console.log(strToArray[i][0]);
            strToArray[i][0] = strToArray[i][0].toUpperCase();
        }
    }
    return strToArray.join('');
}