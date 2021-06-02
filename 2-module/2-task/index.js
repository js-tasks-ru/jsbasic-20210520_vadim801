
function isEmpty(obj) {
  // ваш код...
   
  if ( JSON.stringify(obj) == "{}" ){
    for (let key in obj) {
      if(obj.prop === undefined) {
     return false
        consle.log("fds")
     }  
    }    
    return true
  }
    
  
  return false
}