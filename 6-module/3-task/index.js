 import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.initCarousel()

  }

  render() {
    if(!this.elem){
      this.elem = document.createElement('div');
      this.elem.className = 'carousel';
      this.elem.addEventListener('click', this.onClickItem.bind(this));
    }

    const slidesCarousel = this.slides.map (it => {
      return `
         <div class="carousel__slide" data-id="${it.id}">
            <img src="/assets/images/carousel/${it.image}" class="carousel__img" alt="slide">
           <div class="carousel__caption">
             <span class="carousel__price">€${it.price.toFixed(2)}</span>
            <div class="carousel__title">${it.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
            </div>
         </div>
         `}).join('');
       
          this.elem.innerHTML = `
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </div>
          <div class="carousel__inner">
            ${slidesCarousel}
          </div>`;

  }

  initCarousel() {
  let arrowRight = this.elem.querySelector('.carousel__arrow_right')
  let arrowLeft = this.elem.querySelector('.carousel__arrow_left')
  let carousel = this.elem.querySelector('.carousel__inner')
  let slidesCount = carousel.querySelectorAll('.carousel__slide').length;
  console.log(slidesCount);
  let slides = 0;
 const visibleArrow = () => {
  if ( slides === 0){
    arrowLeft.style.display = 'none'
  } else { arrowLeft.style.display = '' }
  if (slides === slidesCount - 1){
    arrowRight.style.display = 'none'
  }else {arrowRight.style.display = '' }
 };
 visibleArrow();  
  arrowRight.addEventListener('click', () => {  
    slides += 1;
    carousel.style.transform = `translateX(-${carousel.offsetWidth * slides}px)`;
    visibleArrow();  
  })
  arrowLeft.addEventListener('click', () => {  
    slides -= 1;
    carousel.style.transform = `translateX(-${carousel.offsetWidth * slides}px)`;
    visibleArrow();  
  })
  }


  onClickItem(event)  {
    if (!event.target.closest('.carousel__button')) {
      return;
    }
    //console.log(event.target.closest('.carousel__slide').dataset.id);
    let eventAddProduct = new CustomEvent('product-add', {detail: event.target.closest('.carousel__slide').dataset.id, bubbles: true});
    this.elem.dispatchEvent(eventAddProduct);
  }
  
}
