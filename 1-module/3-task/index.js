const ucFirst = (str) => {
	if (!str || typeof(str) != "string") { return ""  	} 
  return str[0].toUpperCase() + str.slice(1);
  
}
//console.log(ucFirst(""))