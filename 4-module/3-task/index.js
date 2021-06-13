function highlight(table) {

  for (let i = 1; i < table.rows.length; i++){

    let row = table.rows[i]

      for (let a of row.cells){
        
        if(Number(a.textContent) < 18 ) {
          console.log(a)
          row.style.textDecoration = 'line-through';
        }

        if(a.textContent === 'm'){
          row.classList.add('male');
        } 
        if (a.textContent === 'f') {
          row.classList.add('female');
        }

        if(a.hasAttribute('data-available')){
          
          if (a.getAttribute('data-available') === 'true'){
            row.classList.add('available');
          } else {
            row.classList.add('unavailable');
          }

        }else {
          row.setAttribute('hidden', 'hidden')
        }
      }
   

  }

}
