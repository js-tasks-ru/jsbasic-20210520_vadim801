import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }



  updatePosition() {

    //let initialTopCoord;
    if (!this.elem.offsetHeight) return;
    let elem = this.elem;

    function fixPosition  ()  {
      let leftIndent = Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - elem.offsetWidth - 10
      ) + 'px';
  
      Object.assign(elem.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1e3,
        //right: '10px',
        left: leftIndent
      });
    }
  
    function resetPosition()  {
      Object.assign(elem.style, {
        position: "",
        top: "",
        left: "",
        zIndex: ""
      });
    }

    if (!this.initialTopCoord) {
      this.initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }

    if (document.documentElement.clientWidth <= 767) {
      resetPosition();
    } else {
      if (window.pageYOffset > this.initialTopCoord) {
        fixPosition();
      } else {
        resetPosition();
      }
    }

  }

/*
 updatePosition() {
    
    if (!this.elem.offsetHeight) return;

    let initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;

  
   
    if (document.documentElement.clientWidth <= 767) {
      this.resetPosition();
    } else{
      if (window.pageYOffset > initialTopCoord) {
        // плавающая корзина
        this.fixPosition();
  
      } else {
        // корзина сверху
       this.resetPosition();
      }
    }


  }*/
}
