// window.onload = function() {
  console.log("Loaded, bro.");

  let div;
  const container = document.getElementById('container');
  // const pixel = document.getElementsByClassName('pixel');
  
  num1 = 0;
  
  for (i=0; i < 225; i ++) {
    div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);
    div.id = num1 + '-' + i;
    if (i === 14) {
      num1 += 1;
      i = 0;
      if (num1 > 15) {
        break;
      };
    };
  };


  function colorPixel (row, col, color) {
    this.row = row;
    this.col = col;

    userPixel = document.getElementById(row + '-' + col);

    document.getElementById(row + '-' + col).style.backgroundColor = color;
    

  }



// };
