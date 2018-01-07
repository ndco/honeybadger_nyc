$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});

	$('#search-box').on('click', '#random', getRandomGif);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);
});

// Performs an AJAX request to the giphy api
// endpoint: http://api.giphy.com/v1/gifs/random
// api_key: dc6zaTOxFJmzC&
// Request will return an object with a single gif and metadata
// http query parameter = www.random.com/blah/blah?[key]=[value]&[key]=[value]&...etc
// example for above should be: http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&
function getRandomGif() {
	const result = $.ajax({
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&',
		success: function(data) {
			console.log([data.data]);
			console.log(data.data);
			let myUrl = data.data.url;
			console.log(myUrl);
			let myImg = $('#myImg');
			console.log(myImg);
			myImg.src = myUrl;
		}
	})
};


// Kitten Bomb
// AND
// Puppy Bomb
// Performs an AJAX request to the giphy api
// should ask for 10 gifs
// should render and display them using the gifTemplate
function kittenBomb() {};
function puppyBomb() {};

// Performs an AJAX request to the giphy api
// with user supplied search params
function search() {};

// Should render and display the results
// returned from the AJAX request to giphy
function showSearchResults(results) {};
