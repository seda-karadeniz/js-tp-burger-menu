const App = {
  cacheDom() {
    this.target = document.querySelector('.main');
    this.button = document.querySelector('.nav-button');
  },
  init() {
    document.documentElement.classList.add('js-enabled');
    this.cacheDom();
    this.addEventListeners();
  },
  addEventListeners() {
    this.button.addEventListener('click', (event) => {
      this.target.classList.toggle('is-opened');
      event.preventDefault();
    });
  }
};
App.init();
