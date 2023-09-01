'use strict';

const button = document.querySelector('button');
const items = document.querySelectorAll('.input');
const display = document.getElementById('myList');
const ul = document.createElement('ol');

display.appendChild(ul)

button.addEventListener('click', (e) => {
    e.preventDefault();
    ul.innerHTML = "";
    items.forEach(item => {
        if (item.value) {
            ul.appendChild(document.createElement('li')).textContent = item.value;
        }
    })
})
