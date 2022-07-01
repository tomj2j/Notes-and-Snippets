<<<SELECTOR
const para = document.querySelector('p');
const para = document.querySelector('.classname');
const para = document.querySelector('div.classname');

or use the chrome Dev Tools to get the selector by right clicking on the element we want to select.

const paras = document.querySelectorAll('p');
to select all p´s
this will generate a nodelist. This is not an array.
But those will work:

console.log(paras[1,2]);

paras.forEach(para => {
console.log(para);
});

<<<OTHER WAY TO QUERY THE DOM

// get an element by ID
document.getElementById('id-name');

// get an elements by their class name
document.getElementByClassName("className);
plural, elements, it will select all classes with the same name.

This will generate a HTMLCollections
!forEach will not work!

// get elements by their tag name , plural
document.getElementsByTagName('p');

<<<<<ADDING & CHANGING PAGE CONTENT>>>>>
const para = document.querySelector('p');

console.log(para.innerText); <<<Gives us the text of the html element

------<<innerText>>
para.innerText = 'Hallöchen' <<<<<This will change the text of the element>>>>>

---

const paras = querySelectorAll('p');
paras.forEach(para => {
console.log(para.innerText);
p.innerText += ' new text'; <<<This will add the new text to each paragraph>>>
});

-----<<innerHTML>>
const content = document.querySelector('.content');
content.innerHTML = '<h2> This is now a Heading </h2>; <<<This transforms the html, not only the text>>>

const people = ['mario', 'luigi','yoshi'];

people.forEach(person =>{
content.innerHTML += `<p>{person}</p>';
});
<<This will add for each item in people a new p tag with the person>>

<<<<GETTING & SETTING ATTRIBUTES>>>>
const link = document.querySelector('a');

console.log(link.getAttribute('href)); <This will give us the href attribute of the a element>

link.setAttribute('href', 'https://www.newLink.com'); <This will set a new Attribute.>
link.innerText = 'This Link goes to Newlink.com';

const mssg = document.querySelector('p');
mssg.setAttribute('class', 'success') <This will set a new classname, login sucess, failed, etc>
mssg.setAttribute('style', 'color: green;')<This adds a complete new attribute to the element, green for sucess ...>

<<<CHANGING CSS STYLES>>>

const title = document.querySelector('h1');
console.log(title.style);
console.log(title.stly.color);

title.stlye.anycssproperty
title.style.margin = '50px';
title.style.color = 'crimson'

font-size = fontSize

title.style.fontSize = '60px';
--<deleting a style>
title.style.margin = '';

<<add n remove classes>>

const content = document.querySelector('p');
content.classList.add('error'); <<ADD>>
content.classList.remove('error'); <<REMOVE>>

<<for Each IF class toggle>>
const paras = document.querySelectorAll('p');

paras.forEach(p => {
if(p.textContent.includes('error')){
p.classList.add('error');
} else if(p.textContent.includes('success')) {
p.classList.add('success');
}
});

<<select items with sibling parent children>>
const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach(child => {
child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);

<<<EVENTS BASIC>>>

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
item.addEventListener('click', e => {
// console.log('item clicked');
// console.log(e);
// console.log(e.target);
// console.log(item);
e.target.style.textDecoration = 'line-through';
});
});

<<<EVENT add remove element>>>
const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
const li = document.createElement('li');
li.textContent = 'something new to do';
//ul.appendChild(li);
ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
item.addEventListener('click', e => {
// e.target.style.textDecoration = 'line-through';
e.target.remove();
});
});

<<EVENT bubbeling delegating>>
if the li gets hit by an event, it will start event bubbeling uo the next element. ul.
to stop this we add the following line
e.stopPropagation(); <<This stops the event bubbling up>>

ul.addEventListener('click', e => {
// console.log('event in UL');
console.log(e.target, e);
if(e.target.tagName === 'LI'){
e.target.remove();
}
});
