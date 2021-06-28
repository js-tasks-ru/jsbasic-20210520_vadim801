import createElement from '../../assets/lib/create-element.js';
import categories from './categories.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.initCarousel();
  }

  render() {
    if(!this.elem){
      this.elem = document.createElement('div');
      this.elem.className = 'ribbon';
      this.elem.addEventListener('click', this.onClickItem.bind(this));
    }
    const list = this.categories.map (it => {
      return `
      <a href="#" class="ribbon__item" data-id="${it.id}">${it.name}</a>
         `}).join('');
         
      this.elem.innerHTML = `
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
         <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        ${list}
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
    }

    initCarousel() {
      let arrowRight = this.elem.querySelector('.ribbon__arrow_right')
      let arrowLeft = this.elem.querySelector('.ribbon__arrow_left ')
      let carousel = this.elem.querySelector('.ribbon__inner')
      //let slidesCount = carousel.querySelectorAll('.ribbon__item').length;
      //let scrollMenu = (carousel, scrollSize) => () => carousel.scrollBy(scrollSize, 0);
      carousel.addEventListener("scroll", function () {
        let scrollLeft = carousel.scrollLeft,
          scrollWidth = carousel.scrollWidth,
          clientWidth = carousel.clientWidth,
          scrollRight = scrollWidth - scrollLeft - clientWidth;
        if (scrollLeft > 0) {
          arrowLeft.classList.add("ribbon__arrow_visible");
        } else {
          arrowLeft.classList.remove("ribbon__arrow_visible");
        }
        if (scrollRight < 1) {
          arrowRight.classList.remove("ribbon__arrow_visible");
        } else {
          arrowRight.classList.add("ribbon__arrow_visible");
        }
      });
      arrowRight.addEventListener('click', () => {  
          carousel.scrollBy(350, 0);
       })
      arrowLeft.addEventListener('click', () => {  
        carousel.scrollBy(-350, 0);
       })
    }

    onClickItem(event)  {
      if (!event.target.closest('.ribbon__item')) {
        return;
      }
      event.preventDefault();
      let activeItem = this.elem.querySelector('.ribbon__item_active');
      if (activeItem){
        activeItem.classList.remove('ribbon__item_active');
      }
      event.target.classList.add('ribbon__item_active');
      let eventAddProduct = new CustomEvent('ribbon-select', {detail: event.target.closest('.ribbon__item').dataset.id, bubbles: true});
      console.log(eventAddProduct)
      this.elem.dispatchEvent(eventAddProduct);
    }
}
