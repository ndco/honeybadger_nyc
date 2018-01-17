$(function(){

    // Application name	nycda_ndco
    // API key	712295ad87abbff0186398b3d072c59b
    // Shared secret	336016c5b23c826419191963d38adf05
    // Registered to	sbki99


    const result = $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/',
        data: {
            method: 'artist.gettoptracks',
            artist: 'bryson tiller',
            api_key: '712295ad87abbff0186398b3d072c59b',
            format: 'json'
        }

    }) 
    result.then(function(songData){
        console.log(songData);
    })
});