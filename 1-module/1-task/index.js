const factorial = (num) => {
  if (num === 0 ){
    return 1; 
  }
 
  var result = num;
  for (var i = num - 1; i > 0; i-- ){
      result *= i;
  }
  return result;
}

/**Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

0! = 1
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Обратите внимание, что факториал 0 и 1 равен 1. Это важно и нужно учесть в решении.

Задача – написать функцию factorial(n), которая возвращает n!, используя цикл (while или for). Решить нужно именно циклом, а не рекурсией.

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120 */