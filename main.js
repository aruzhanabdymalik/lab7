const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.style.color = 'indigo';
h1.style.textAlign = 'center';
h1.textContent = 'CSCI 111 Lab7 Assignment';
body.appendChild(h1);

const hr1 = document.createElement('hr');
body.appendChild(hr1);

const h2 = document.createElement('h2');
h2.style.color = 'red';
h2.textContent = 'Aenean';
body.appendChild(h2);

const p1 = document.createElement('p');
p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
body.appendChild(p1);

const ul = document.createElement('ul');
body.appendChild(ul);

const li1 = document.createElement('li');
li1.className = 'even';
li1.style.color = 'red';
li1.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.className = 'odd';
li2.style.color = 'orange';
li2.innerHTML = 'Aliquam tincidunt mauris eu risus';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.className = 'even';
li3.style.color = 'green';
li3.innerHTML = 'Vestibulum auctor dapibus neque';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.className = 'odd';
li4.style.color = 'blue';
li4.innerHTML = 'Nunc dignissim risus id metus';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.className = 'even';
li5.style.color = 'purple';
li5.innerHTML = 'Cras ornare tristique elit';
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.className = 'odd';
li6.style.color = 'indigo';
li6.innerHTML = 'Vivamus vestibulum ntulla nec ante';
ul.appendChild(li6);

const p2 = document.createElement('p');
body.appendChild(p2);

const hr2 = document.createElement('hr');
body.appendChild(hr2);

const h22 = document.createElement('h2');
h22.style.color = 'green';
h22.textContent = 'Morbi';
body.appendChild(h22);

const p3 = document.createElement('p');
p3.innerHTML = 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae:';
body.appendChild(p3);

const ul2 = document.createElement('ol');
body.appendChild(ul2);

const li7 = document.createElement('li');
li7.className = 'even';
li7.style.color = 'red';
li7.innerHTML = 'Praesent placerat risus quis eros';
ul2.appendChild(li7);

const li8 = document.createElement('li');
li8.className = 'odd';
li8.style.color = 'orange';
li8.textContent = 'Fusce pellentesque suscipit nibh';
ul2.appendChild(li8);

const li9 = document.createElement('li');
li9.className = 'even';
li9.style.color = 'green';
li9.innerHTML = 'Integer vitae libero ac risus egestas placerat';
ul2.appendChild(li9);

const li10 = document.createElement('li');
li10.className = 'odd';
li10.style.color = 'blue';
li10.textContent = 'Vestibulum commodo felis quis tortor';
ul2.appendChild(li10);

const li11 = document.createElement('li');
li11.className = 'even';
li11.style.color = 'purple';
li11.textContent = 'Ut aliquam sollicitudin leo';
ul2.appendChild(li11);

const li12 = document.createElement('li');
li12.className = 'odd';
li12.style.color = 'red';
li12.innerHTML = 'Cras iaculis ultricies nulla';
ul2.appendChild(li12);

const li13 = document.createElement('li');
li13.className = 'even';
li13.style.color = 'green';
li13.textContent = 'Donec quis dui at dolor tempor interdum';
ul2.appendChild(li13);

const hr3 = document.createElement('hr');
body.appendChild(hr3);

const h1Element = document.querySelector('h1');
if (h1Element && h1Element.textContent === 'Hello, World!') {
  h1Element.remove();
}
