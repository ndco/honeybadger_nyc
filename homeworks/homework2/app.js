window.onload = function() {

    //Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

    const buttons = document.querySelectorAll('.exercise button');
    console.log(buttons);

    const largeElemet = document.getElementById('myElement');

    const myText = document.getElementsByClassName('3');

    const mySubmit = document.getElementById('submit');


    for (i = 0; i < buttons.length; i ++) {
        addTextListener(buttons[i]);
    }
 
    addHoverListener(largeElemet);

    addKeyPressListner(myText);

    addUserValidationListener(submit);


    function addTextListener (node) {
        node.addEventListener('click', function(e) {
            let newText = document.getElementById('newText');

            if (newText === null) {
                newText = document.createElement('p');
                newText.setAttribute('id', 'newText');
                console.log(document.querySelector('.exercise'));
                document.querySelector('.exercise').appendChild(newText);
            };

            if (this.id === 'buttonOne') {
                newText.innerHTML = 'I\'m right';            
            } else if (this.id === 'buttonTwo') {
                newText.innerHTML = 'No, I\'m right';  
            };
        });
    };


    //Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

    function addHoverListener (node) {
        node.addEventListener('mouseover', function(e) {
            alert('Hey, I told you not to hover over me!');
        });
    };


    //Create an HTML page with javascript that listens for a keypress.
        // - When the user presses that key, the text of the H1 should show the value of the key they have pressed.
        // - Example: If the user presses "J", the text inside the H1 should be "J".
    function addKeyPressListner (node) {
        node.addEventListener('keypress', function(e) {
            const keyName = e.key;

            let hText = document.getElementById('emptyHeader');
            if (hText.innerHTML === undefined) {
                hText.innerHTML = keyName;
            } else {
                hText.innerHTML += keyName;
            }
        })
    }


    function addUserValidationListener (node) {
        node.addEventListener('click', function(e) {
            const username = document.getElementById('userId').value;
            const password = document.getElementById('userPswd').value;
            const email = document.getElementById('userEmail').value;

            if (username ==='' || password ==='' || email ==='' || password.search(/[0-9]/) !== -1) {
                alert ('login successful!')
            } else {
                alert ('incorrect!')
            }

        })
    }


};