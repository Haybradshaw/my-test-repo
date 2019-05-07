const btn = document.querySelector ('button');
    btn.addEventListener('click', function(evt) {
console.log(evt);
const ul = document.querySelector('ul')


const li = document.createElement('li');
const inp = document.querySelector('input');
li.textContent = inp.value;
import.value = '';
ul.appendChild(li);
console.log(li);

});


ul.addEventListener('click', handleClick ;

function handleClick(evt) {
  evt.target.style.fontSize. = '40px' ;
}