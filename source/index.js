import './style/general.scss';
import Hamburger from "./javascripts/hamburger";

document.addEventListener('DOMContentLoaded', function(){
  new Hamburger('.wrapper-nav-sticky')
});