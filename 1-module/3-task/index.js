const ucFirst = (str) => {
	if (!str || typeof(str) != "string") { return ""  	} 
  return str[0].toUpperCase() + str.slice(1);
  
}
//console.log(ucFirst(""))
/**Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst('вася') === 'Вася';
Обратите внимание, что функция также должна работать со строкой:

содержащей только один символ 'В'
не содержащей символы ''
ucFirst('в') === 'В';
ucFirst('') === ''; */