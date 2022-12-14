'use strict';

// setTimeout(()=>{}, ms [, parameters])
// setInterval(()=>{}, ms [, parameters])

console.log('before setTimeout ');

const timeoutId = setTimeout(() => {
  alert('Hi)');
}, 5000);

// clearTimeout(timeoutId)

console.log('after setTimeout ');

let i = 1;
const intervalId = setInterval(() => {
  console.log(i++);
}, 1000);

// clearInterval(intervalId)

setTimeout(() => {
  document.querySelector('.bestPropositionLink').remove();
}, 5000);

// Task: При натисканні на кнопку перефарбувати її через 2 секунди
// const btn = document.querySelector('button');

function paint(e) {
  setTimeout(() => {
    // e.target.style.background = 'green';
  }, 2000);
}

btn.onclick = paint;

// Task: *Після натискання на кнопку змінювати її колір кожні 2 секунди рандомно
const btn = document.querySelector('button');

function paintBtn(e) {
  setInterval(() => {
    e.target.style.background = `#${getRandomInt(255)}`;
  }, 500);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

btn.onclick = paintBtn;

// Callback hell problem:
// get(data => {
//   get(data => {
//     get(() => {}, '');
//   }, '');
// }, 'http://....');

// Callback hell problem pesolve - Promise
// get('')
//   .then(data => parse(data))
//   .then();
//   .then();
//   .then();
//   .then();
//   .then();
