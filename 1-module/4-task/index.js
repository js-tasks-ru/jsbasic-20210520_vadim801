const checkSpam = (str) => {
	let i = str.toLowerCase()
 	if (i.indexOf("1xbet") != -1 || str.indexOf("xxx") != -1) {
       return  true
}
	return false
}