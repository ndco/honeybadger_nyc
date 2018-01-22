const rp = require('request-promise');


function getMovies () {
    return rp({
        url: 'http://ws.audioscrobbler.com/2.0/',
        qs: {
            method: 'artist.gettoptracks',
            api_key: 'df2c675f58b28056659b902999cdc828',
            artist: 'bruno mars',
            format: 'json'
        }
    })
}

module.exports = getMovies;