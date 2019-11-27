(function () {
  console.log('Private');
})();

const App = {
  cacheDom() {
    this.target = document.querySelector('.main');
    this.button = document.querySelector('.nav-button');
  },
  init() {
    if (!('querySelector' in document && 'addEventListener' in window)) {
      return;
    }
    window.document.documentElement.className += ' js-enabled';
    this.cacheDom();
    this.addEventListeners();
  },
  addEventListeners() {
    //this.button.addEventListener('click', this.toggleNav.bind(this))
    this.button.addEventListener('click', (event) =>{
      this.toggleNav(event)
    })
  },
  toggleNav(event) {
    this.target.classList.toggle('is-opened');
  }
};
App.init();
