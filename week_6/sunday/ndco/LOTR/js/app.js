// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'The Shire',
  'Rivendell',
  'Mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  let middleEarth = document.createElement('section');
  // console.log(middleEarth); 
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for(let land of lands){
    // console.log(land);
    let place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land 
    place.setAttribute('id', land);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place); 
    let nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = land;
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
};

function makeHobbits() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire

  let listHobbits = document.createElement('ul');
  document.getElementById('The Shire').appendChild(listHobbits);

  // give each hobbit a class of "hobbit"
  for (let hobbit of hobbits) {
    // list the hobbits alphabetically.  Maybe use the .sort() method.
    hobbits.sort();

    let myHobbit = document.createElement('li');
    myHobbit.classList.add('hobbit');
    myHobbit.innerHTML = hobbit; 
    listHobbits.appendChild(myHobbit);
  };

};

function keepItSecretKeepItSafe() {
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.innerHTML = 'The ring';
  // add the ring as a child of Frodo
  let listHobbits = document.getElementsByClassName('Hobbit');
  for (i = 0; i < hobbits.length; i ++) {
    if (listHobbits[i].innerText === 'Frodo Baggins') {
      listHobbits[i].appendChild(theRing);

    }
  }

};

function makeBaddies() {
  // display an unordered list of baddies in Mordor
  newBaddiesList = document.createElement('ul');
  document.getElementById('Mordor').appendChild(newBaddiesList);
  // give each of the baddies a class of "baddy"
  for (let baddy of baddies) {
    newBaddy = document.createElement('li');
    newBaddy.classList.add('baddy');
    newBaddy.innerHTML = baddy;
    newBaddiesList.appendChild(newBaddy);
  }
};

function makeBuddies() {
  // create an aside tag and append it below mordor
  newBuddiesAside = document.createElement('aside');
  document.getElementById('Mordor').appendChild(newBuddiesAside);
  
  // display an unordered list of buddies in the aside
  newBuddiesList = document.createElement('ul');
  newBuddiesAside.appendChild(newBuddiesList);
  
  // display an unordered list of baddies in Mordor
  for (let buddy of buddies) {
    newBuddy = document.createElement('li');
    // give each of the buddies a class of "buddy"
    newBuddy.classList.add('buddy');
    newBuddy.innerHTML = buddy;
    newBuddiesList.appendChild(newBuddy);
  }
};

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
  getHobbits = document.getElementById('The Shire');
  // console.log(getHobbits);
  onlyHobbits = getHobbits.querySelector('ul')
  // console.log(onlyHobbits);
  onlyHobbits.remove();
  document.getElementById('Rivendell').appendChild(onlyHobbits);
};

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  getBuddyList = document.querySelector('aside > ul');
  console.log(getBuddyList);
  getBuddyVal = getBuddyList.innerText;
  console.log(getBuddyVal);
  makeBuddyArray = getBuddyVal.split('\n');
  console.log(makeBuddyArray);
  for(i = 0; i < makeBuddyArray.length; i ++) {
    if (makeBuddyArray[i] === 'Strider') {
      getBuddyList.getElementsByTagName('li')[i].innerHTML = 'Aragorn';
    };
  }
};

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  getHobbits = document.getElementById('The Shire');
  getHobbitList = getHobbits.querySelector('ul')

  getBuddyList = document.querySelector('aside > ul');

  // getHobbitList.remove();
  getBuddyList.remove();

  // document.getElementById('Rivendell').appendChild(getHobbitList);
  document.getElementById('Rivendell').appendChild(getBuddyList);
  
  // create a new div called 'the-fellowship'
  fellowshipDiv = document.createElement('div');

  // add an h1 with the text 'The Fellowship' to this new div
  fellowshipH1 = document.createElement('h1');
  fellowshipH1.innerHTML = 'The Fellowship';
  fellowshipDiv.appendChild(fellowshipH1);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  
  // after each character is added make an alert that they have joined your party
};

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
};

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if 
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom 
};

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};