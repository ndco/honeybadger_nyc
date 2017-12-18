console.log('loaded');
window.onload = function() {

    //test
    const h1 = document.getElementById('test');
    console.log(h1);

    const h2 = document.getElementsByClassName('column-heading');
    console.log(h2);

    h2.item(0)
    h2.item(0)
    //* As a user, I want cards in the done column to disappear when I click the X, so I can keep my done column compact.



    const xIcon = document.getElementsByClassName('delete');
    console.log(xIcon);

    // for (i = 0; i < xIcon.length; i++) {
    //     xIcon[i].addEventListener('click', function(){
    //         this.remove();
    //     })
    // };

    for (i = 0; i < xIcon.length; i ++) {
        addRemoveList(xIcon[i]);
    }

    function addRemoveList (node) {
        node.addEventListener('click', function() {
            this.parentNode.remove();
        });
    };

//* As a user, I want cards in the to do column to move to the done column when I click finish, so I can keep track of my progress
    finishButton = document.getElementsByClassName('finish');
    console.log(finishButton);

    doneList = document.getElementsByClassName('card-list');
    console.log(doneList);

    function addToDoneColList (node) {
        node.addEventListener('click', function () {
            // this.parentNode.remove();
            parentNode = this.parentNode;
            this.remove();
            parentNode.remove();
            parentNode.classList.remove('to-do');
            parentNode.classList.add('done');

            document.querySelector('#done-column').appendChild(parentNode);
        });
    };

    for (i = 0; i < finishButton.length; i ++) {
        addToDoneColList(finishButton[i]);
    };

//* As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list

    var newVal = document.getElementById('new-card-text').value;

    function addCardList (node) {
        node.addEventListener(click, function() {
            document.createElement('li');
            document.cre
        })
    }

    console.log(newVal);



};