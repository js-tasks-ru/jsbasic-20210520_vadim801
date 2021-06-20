import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.render()
    //console.log(this.data)
  }

  render() {
    if (!this.elem){
    this.elem = document.createElement('div');
    this.elem.className = 'card';

    this.elem.addEventListener('click', this.onClickItem.bind(this));

    }

    this.elem.innerHTML = `
    <div class="card__top">
        <img src="/assets/images/products/${this.data.image}" class="card__image" alt="product">
        <span class="card__price">€${this.data.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.data.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `;
  }

  onClickItem(event)  {
    const target = event.target;

    if (target.closest('.card__button')) {
      console.log(this.data.id)
      const event = new CustomEvent("product-add", {
        bubbles: true,
        detail: this.data.id
      });
      this.elem.dispatchEvent(event);

    }
  }

 /* onClickItem(event) {
    const button = this.elem.querySelector('.card__button');
    console.log(button)
    const ev = new CustomEvent("product-add", {
      bubbles: true,
      detail: this.data.id
    });
    console.log(button.dispatchEvent(ev));
  
  }*/
}
