
const app = {
    init(){
        this.burgerMenu = document.querySelector('.nav-button');
        this.leMain = document.querySelector('.main');
        document.documentElement.classList.add('js-enabled');
        this.burgerMenu.addEventListener('click', () =>{this.f_burger()} );

    },
    f_burger(){
        /* nav.classList.toggle("visible"); */
        
        /* if (leMain.classList.contains('is-opened')) {
            leMain.classList.remove('is-opened');test
        }
        else{
            leMain.classList.add('is-opened');
        } */
        console.log(this);
        this.leMain.classList.toggle('is-opened');
    }

}
app.init();