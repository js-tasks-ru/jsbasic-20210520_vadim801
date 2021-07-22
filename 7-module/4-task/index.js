export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.segments = this.steps - 1;
    this.render();
    this.elem.addEventListener('click', (event) => this.definePosition(event));
    this.firstValue(this.value)
    this.customEvent();
    this.onPointerAdd ();

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
    this.value = value;
  
  }
  

  definePosition (event) {
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

    
    this.customEvent();

  }

  onPointerAdd () {
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;

    thumb.addEventListener('pointerdown', (event) => {
      thumb.style.position = 'absolute';
      thumb.style.zIndex = 9999;
      this.elem.classList.add('slider_dragging');

      const onPointerUp = ev =>{
        this.elem.classList.remove('slider_dragging');
        this.definePosition(ev);
       // this.customEvent ();
        document.removeEventListener('pointermove', this.onPointerMove)
      }
      
      document.addEventListener('pointermove', this.onPointerMove);

		  document.addEventListener('pointerup', onPointerUp);
    })

  }

  onPointerMove = (event) => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;

    let approximateValue = leftRelative * this.segments;
    let value = Math.round(approximateValue);

    if (leftRelative < 0) {
     leftRelative = 0;
    }

    if (leftRelative > 1) {
      leftRelative = 1;
    }

    let leftPercents = leftRelative * 100;

    

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;  
    //this.customEvent ()
    this.value = value;
    //this.firstValue(value)
    console.log(this.value);
    



  }

  customEvent (){
    console.log('dss');
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true,
    }));
  }

}
