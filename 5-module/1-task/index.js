function hideSelf() {
  let hide = document.querySelector('.hide-self-button')
  hide.addEventListener('click', events => {
    hide.setAttribute('hidden', 'hidden');
  })
}
