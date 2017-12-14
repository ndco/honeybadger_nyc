// Access the page title
const title = document.getElementsByTagName('title')

// Access the list
const list = document.getElementsByClassName('awesome-list-item');

// Add a fourth item to the list
const newList = document.createElement('li');
newList.classList.add('awesome-list-item');
newList.innerHTML = 'everyone loves vanilla'

document.getElementsByClassName('awesome-list-item').appendChild(newList);

// Move the image to after the list
const image = document.getElementById('image-container');
image.remove();
document.body.appendChild(image);

// Make the page title red(by adding a class to the page title)
title.classList.add('red');


// Make the list items blue(add classes to each list item, not to the ul element)
// const list = document.getElementsByClassName('awesome-list-item');
for (let i = 0; i < list.length; i ++) {
    let currentItem = list[i];
    currentItem.classList.add('blue');
}


// Make the description green
const description = document.getElementById('description');
description.classList.add('green');

// Add a red footer paragraph to the page with the id "page-footer"
// Instead of having that starter HTML in the page, write JavaScript to ** construct ** this page
