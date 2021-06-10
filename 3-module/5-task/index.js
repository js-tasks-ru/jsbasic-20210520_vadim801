function getMinMax(str){
  let result = {
    min: null,
    max: null,
  };
  let numbers = [];
  let arrSplit = str.split(",")
  arrSplit
    .forEach(elem => { arrSplit = elem.split(' ')
    .forEach(num => {
      if ( parseFloat(num) ) {
                numbers.push(parseFloat(num))
            }
    })
  })
  result.max = Math.max(...numbers);
  result.min = Math.min(...numbers);
  return result; 
}


// let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

/*function getMinMax(str) {
  // ...
  let result = {
    min: null,
    max: null,
  };
  let number = str
        .match(/((\-?\d+\.\d+)|(?:\d+\.\d*)|(?:\d*\.?\d+))/g)
        .map(str => Number(str))
  result.max = Math.max(...number);
  result.min = Math.min(...number);
  return result;
} */


/*function getMinMax(str) {
  whoa = [...str]
  .map(i => {if(isFinite(i) == true || i == "." || i == "-"){
    return i
  } else {
    return " "}
  })
  .join("")
  .split(" ")
  .filter(i => i != "")
  .map(i => Number(i));
  let min = Math.min(...whoa);
  let max = Math.max(...whoa);
  let finalObj = {
    min: min ,
    max: max
  };
  return finalObj;
} */