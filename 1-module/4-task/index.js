const checkSpam = (str) => {
	let i = str.toLowerCase()
 	if (i.indexOf("1xbet") != -1 || str.indexOf("xxx") != -1) {
       return  true
}
	return false
}
/**Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false */