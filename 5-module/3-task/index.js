/*
function initCarousel() {
  // ваш код...
  let arrowRight = document.querySelector('.carousel__arrow_right')
  let arrowLeft = document.querySelector('.carousel__arrow_left')
  let carousel = document.querySelector('.carousel__inner')
  let slidesCount = carousel.querySelectorAll('.carousel__slide').length;

  let slides = 1;

 const visibleArrow = () => {
  if ( slides === 1){
    arrowLeft.style.display = 'none'
  } else { arrowLeft.style.display = '' }

  if (slides === slidesCount){
    arrowRight.style.display = 'none'
  }else {arrowRight.style.display = '' }
 };
 
 visibleArrow();  

  arrowRight.addEventListener('click', () => {  
    carousel.style.transform += `translateX(-${carousel.offsetWidth}px)`;
    slides += 1;
    visibleArrow();  
  })

  arrowLeft.addEventListener('click', () => {  
    carousel.style.transform += `translateX(${carousel.offsetWidth}px)`;
    slides -= 1;
    visibleArrow();  
  })
 
}
*/
function initCarousel() {
  // ваш код...
  let arrowRight = document.querySelector('.carousel__arrow_right')
  let arrowLeft = document.querySelector('.carousel__arrow_left')
  let carousel = document.querySelector('.carousel__inner')
  let slidesCount = carousel.querySelectorAll('.carousel__slide').length;
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