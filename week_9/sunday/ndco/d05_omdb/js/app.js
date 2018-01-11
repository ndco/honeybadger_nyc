$(function(){
    console.log('loaded');
    
    $('#search-button').on('click', searchMovie);
    $('#search-form').keypress(function(e) {
        if (e.key == 'Enter') {
            console.log(e);
            searchMovie();
        }
    });

    function searchMovie () {
        let userInput = $('#search-input').val();
        console.log(userInput);
        $('#search-results').empty();
        getMovieResult(userInput)
            .then(transformMovieResult)
            .then(loadMovieData);
    }
    


    //GET DATA
    function getMovieResult (userType) {
        const result = $.ajax({
            url: 'http://www.omdbapi.com',
            data: {
                apikey: 'ce8ce084',
                type: 'movie',
                s: userType
            },
            method: 'GET',
            r: 'json'
        })
        console.log(result);
        return result;
    };
        
        //TRANSFORM DATA
        function transformMovieResult(movieData) {
            console.log(movieData);
            // const movieTitle = movieData.Search[0].Title;
            // console.log(movieTitle);
            
            // numOfSearchResult = movieData.Search.length;
            // console.log(movieData.Search.length)
            
            updatedMovieData = movieData.Search;
            console.log(updatedMovieData);
            // movieList = [];
            // for (i = 0; i < numOfSearchResult; i ++) {
                //  movieList[i] = movieData.Search[i];
                // }
                //  console.log(movieList);
                return updatedMovieData;    
            };
               
            function loadMovieData (updatedMovieData) {      
                console.log(updatedMovieData);
                for (i = 0; i < updatedMovieData.length; i++) {
                    const { Title, Year, imdbID } = updatedMovieData[i];
                    const template = `
                    <p> ${i+1} Title: ${Title} || Year: ${Year} || imdvID: ${imdbID}</p>
                    `
                    $('#search-results').append(template)           
                }
            };
        

        // getMovieResult('Lord of the rings')
        //     .then(transformMovieResult)
        //     .then(loadMovieData);
})