
let calculator = {
  // ... ваш код ...
  a: NaN,
  b: NaN,
  read: function(a1,b1){
    this.a = +a1
    this.b = +b1
  },
  sum: function(){
    return this.a + this.b
  },
  mul: function(){
    return this.a * this.b
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
