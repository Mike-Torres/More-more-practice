var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');
var h2 = document.querySelector('header h2');


div.addEventListener('click', a);


header.addEventListener('click', a);


h2.addEventListener('click', a);

function a(){
  console.log(div, header, h2);
}
