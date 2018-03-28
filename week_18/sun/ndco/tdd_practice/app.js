class App {
    constructor() {};

    sortNums(array) {
        return array.sort(function(a,b) {
            return a-b;
        }); 
    };

    sinonSpy() {
        Date.now();
    }
}

module.exports = App;