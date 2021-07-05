import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render()
    this. buttonX()
    this.esc()
  }

  render() {
   
      this.modalWindow = document.createElement('div');
      this.modalWindow.className = 'modal';
      //this.modalWindow.addEventListener('click', this.buttonX.bind(this));
      
      document.addEventListener('keydown', this.esc);

   this.modalWindow.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
      </div>
    </div>
    `
    
  }
  open() {
    document.body.append(this.modalWindow);
    document.body.classList.add('is-modal-open');
  }
  setBody(node) {
    let modalBody = this.modalWindow.querySelector('.modal__body')
    modalBody.innerHTML = '';
    modalBody.append(node);
  }

  setTitle(text) {
    let modalTitle = this.modalWindow.querySelector('.modal__title');
    modalTitle.innerHTML = text;
  }

  buttonX () {
    this.modalWindow.querySelector(".modal__close").addEventListener("click", () => {
      this.close();
    });
  }

  esc () {
    document.addEventListener("keydown", (event) => {
      event.code === "Escape" && this.close();
    });
  }

  close() {
    //console.log(this.modalWindow)
    this.modalWindow.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.esc)
  }
}
