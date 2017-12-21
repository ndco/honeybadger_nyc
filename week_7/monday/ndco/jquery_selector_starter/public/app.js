$(function(){
	console.log('Loaded, bro');
//SET THE TEXT OF GOOGLE LINK TO "GO TO GOOGLE"
const $googleLink = $('.google');
console.log($googleLink);

$googleLink.html('googleMe');

// TAKE THE UL WITH THE CLASS OF SECOND AND APPEND IT TO THE LINK HOLDER DIV
$getSecondList = $('.second');
console.log($getSecondList);

$getSecondList.appendTo('.link-holder');


// PREPEND THE LINK HOLDER DIV TO THE CONTAINER DIV
$getLinkHolder = $('.link-holder');
console.log($getLinkHolder);

$getLinkHolder.prependTo('.container');


// EMPTY THE SECTION WITH THE CLASS OF ASIDES AND APPEND ALL ASIDES THAT EXIST IN THE PAGE TO IT




});