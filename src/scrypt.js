class Header{
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton:'[data-js-header-burger-button]',
    link:'.header__menu--list',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor(){
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
    this.linkElement = this.rootElement.querySelector(this.selectors.link);
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  } 

  bindEvents(){
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    this.linkElement.addEventListener('click', this.onBurgerButtonClick);
  }
}

new Header()