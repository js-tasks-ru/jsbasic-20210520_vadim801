function camelize(str){ 
  if (str == '') return str;
   
   return str
   .split('-') 
   .map((elem, index) => index == 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
   .join('')
 }


/*function camelize(str) {
  let arr = str.split('-');

  let arrCamelize = arr.map( (elem, index) => {
      if (index === 0) {
          return elem;
      }
      return (elem[0].toUpperCase() + elem.slice(1));
  });

  return arrCamelize.join('');
}


function camelize(str){
  let arr = str.split('-')
  let newArr = [];
  newArr.push(arr[0])
  for (var i = 1; i < arr.length; i++ ){
  newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return newArr.join('')

}*/