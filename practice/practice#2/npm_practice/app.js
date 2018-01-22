const getMovies = require('./get-Movies');

getMovies().then(function(data) {
    
    console.log(data);
})


// const request = require('request');
// console.log(request);
// request ({
//     url: 'http://ws.audioscrobbler.com/2.0/',
//     qs: {
//         method: 'artist.gettoptracks',
//         api_key: 'df2c675f58b28056659b902999cdc828',
//         artist: 'tom petty'
//     }
// }, function(error, response, body) {
//     console.log(response);
// })

// const result = $.ajax({
//     url: 'http://ws.audioscrobbler.com/2.0/',
//     data: {
//         method: 'artist.gettoptracks',
//         artist: 'tom petty',
//         api_key: 'df2c675f58b28056659b902999cdc828',
//         format: 'json'
//     }
// })



// console.log(result);