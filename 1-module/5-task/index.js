const truncate = (str, maxlength) => {
	if (maxlength < str.length){
  	return str.slice( 0, maxlength - 1) + "…";
  }
  return str;
}
/**Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…';

truncate('Всем привет!', 20) === 'Всем привет!';
Обратите внимание, что в решении нужно использовать именно троеточие из условия (просто скопируйте и вставьте его) :) */