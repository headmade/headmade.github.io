import './style/general.scss';
import Hamburger from "./javascripts/hamburger";
import AnimateScroll from "./javascripts/animateScroll";

document.addEventListener('DOMContentLoaded', function(){
  new Hamburger('.header')
  const mouse = document.querySelector('.mouse')
  mouse && mouse.addEventListener('click', function () {
    new AnimateScroll(2000)
  })

  const test = document.querySelectorAll('.btn-list__item')
  for(let i = 0; i < test.length; i++) {
    const currentSrc = test[i].getAttribute('data-src');
    test[i].addEventListener('click', function (e) {
      console.log('---', e)
    })
    console.log('---', currentSrc)
    // test[i].setAttribute('src',''); // remove old src data
    // test[i].setAttribute('data-src','currentSrc');
    // console.log('---', currentSrc)
  }
  console.log('---', test)
});