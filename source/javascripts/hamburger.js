export default class Hamburger {
  constructor(param){
    let base = document.querySelector(param);
    let hamburger = base.querySelector('.c-hamburger');
    let navList = base.querySelector('.header__nav');
    // let navListItems = base.querySelectorAll('.nav__list-item');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // for (let i = 0; i < navListItems.length;  i++){
    //   navListItems[i].addEventListener('click', function () {
    //     hamburger.classList.toggle('active');
    //     navList.classList.toggle('active');
    //   })
    // }
  }
}
