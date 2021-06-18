 function toggleText() {
  let toggle = document.querySelector('.toggle-text-button')
  let hide = document.querySelector('#text')
  
  toggle.addEventListener('click', () => {
    if (hide.hidden) {
      hide.removeAttribute ('hidden');
    } else {
      hide.setAttribute ('hidden', 'hidden' );
    }
  });
}

/*
function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    text.hidden = !text.hidden;
  })
}*/