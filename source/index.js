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
  const test2 = document.querySelectorAll('.monitor')
  console.log('---', test2)
  test.addEventListener('click', function () {
    console.log('---', test.dataset.monitor)
  })

});