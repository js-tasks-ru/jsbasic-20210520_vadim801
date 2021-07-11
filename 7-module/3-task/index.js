export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.segments = this.steps - 1;
    this.render();
    this.userSelect();
    this.firstValue(this.value)
    this.customEvent();

  }

  render () {
    this.elem = document.createElement ('div');
    this.elem.classList.add ('slider');
    this.elem.innerHTML =`
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
    
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
    
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
 
      </div>
      `;
    let spanContainer = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++){
      let span = document.createElement('span');
      spanContainer.append(span);
    }
    spanContainer.firstElementChild.classList.add('slider__step-active');
    
  }

  firstValue(value) {
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let valuePercents = value / this.segments * 100;
    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;
  
  }
  

  userSelect () {
    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
     // let segments = this.steps - 1;
      let approximateValue = leftRelative * this.segments;
      let value = Math.round(approximateValue);

      let sliderProgress = this.elem.querySelector('.slider__value');
      sliderProgress.innerHTML = '';
      sliderProgress.append(value);

      let allSteps = document.querySelector('.slider__steps');
      let spans = allSteps.children;
      let nowStepActive = this.elem.querySelector('.slider__step-active');
      nowStepActive.classList.remove('slider__step-active')
      spans[value].classList.add('slider__step-active')
      
      this.firstValue(value);

      this.value = value;
      this.customEvent();

    })
  }

  customEvent (){
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    }));
  }

}
