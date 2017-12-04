var trainL = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave', 'Bedford Ave'];
var trainN = ['Times Square', 'Herald Square', '28th St', '23rd St - WHAM Nexus', 'Union Square', '8th St'];
var trainS = ['Grand Central', '33rd St', '28th St', '23rd St', 'Union Square', 'Astor Place'];

var trainLine = ['L', 'N', 'S'];
var trainLineIndex;
var trainList;

while(trainLineIndex != 3) {
    trainList = prompt('The (L) Train, The (N) Train, The (S)ix Train');
    trainLineIndex = trainLine.indexOf(trainList);
    var displayStation = [trainL, trainN, trainS];
    var userTrain = displayStation[trainLineIndex];

    var userStation = prompt('Please type your station or hit "s" to skip');
        if (userTrain.indexOf(userStation) === -1) {
            var addStation = prompt("Station does not exist.  Would you like to add it? Y/N")
                if (addStation.toUpperCase() === 'Y') {
                    userTrain.push(userStation);
                    console.log("Your station has now added");
                } else {
                    userTrain.forEach(function(station) {
                        console.log(station);
                    });
                };

        };

};





// while (trainList) {
    
//     if (trainList.toUpperCase() === 'L') {
//         userStation = prompt("Please type your Station")
//         if (trainL.indexOf(userStation) === -1) {
//             addStation = prompt("Station does not exist.  Would you like to add it?")
//             if (addStation === 'Yes') {
//                 trainL.push(userStation);
//                 console.log("Your station has now added")
//             }
//         } else {
//             console.log("Here are the stations available for " + trainList.toUpperCase() + " Train")
//             console.log(trainL);
//             console.log('Thank you');
//         }
        
            
//     } else if (trainList.toUpperCase() === 'N') {
//         console.log("Here are the stations available for " + trainList.toUpperCase() + " Train")
//         console.log(trainN);
//         console.log('Thank you');
        
//     } else if (trainList.toUpperCase() === 'S') {
//         console.log("Here are the stations available for " + trainList.toUpperCase() + " Train")
//         console.log(trainS);
//         console.log('Thank you');
        
//     } else {
//         console.log('Wrong input, please try again');
        
//     };
//     var trainList = prompt('The (L) Train, The (N) Train, The (S)ix Train');
//     if (trainList === 'quit') break;
// }   alert("Program has ended.")



