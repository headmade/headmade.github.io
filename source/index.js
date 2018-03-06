import './style/general.scss';
import Hamburger from "./javascripts/hamburger";
import MonitorBtns from "./javascripts/MonitorBtns";
import AnimateScroll from "./javascripts/animateScroll";
import test from "./images/projects/tovar.link/tovar.link__desktop.png";

document.addEventListener('DOMContentLoaded', function(){
  new Hamburger('.header')
  
  new MonitorBtns()
  console.log('---', test)
  const mouseIndex = document.querySelector('.mouse.mouseIndex')
  mouseIndex && mouseIndex.addEventListener('click', function () {
    new AnimateScroll(2000, 'html')
  })
  
  const mouseLanding = document.querySelector('.mouse.mouseLanding')
  mouseLanding && mouseLanding.addEventListener('click', function () {
    new AnimateScroll(2000, '.project__lending-img')
  })
});