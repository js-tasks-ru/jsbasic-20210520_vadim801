

function sumSalary(sum) {
  let i = 0;
  for (key in sum){
     if (typeof sum[key] === 'number' && !isNaN(sum[key]) && sum[key] != -Infinity && sum[key] != Infinity ){
      i += sum[key]
    }
   }
   return i;
}