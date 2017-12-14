console.log('loaded');

window.onload = function () {
    const h1 = document.querySelector('#myId');
    console.log(document.querySelector('#myId'));
    
    console.log(h1);
    
    const p1 = document.getElementById('paragraph');

    h1.addEventListener('click', function () {
        h1.style.backgroundColor = 'blue';
    })
};
