/**
 * Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  /** for (var i = 0; i < name.length; i++){
    if (!name || name.indexOf(' ', i) != -1 || name.length <= 3){
      break;
    }else {return name;}
    }
 }
 **/
 if (!name || name.includes(' ') == true || name.length < 4 ){
  return false;
 }else{ return true }
  
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();