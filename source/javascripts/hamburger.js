export default class Hamburger {
  constructor(param){
    let base = document.querySelector(param);
    let hamburger = base.querySelector('.c-hamburger');
    let navList = base.querySelector('.header__nav');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
}
