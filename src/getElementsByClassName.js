// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var classElements = [];
  function recurse(element){
    if(element.childNodes.length == 0){
      for(var i=0; i<element.classList.length-1; i++){
        if(element.classList[i] == className){
          classElements.push(element); 
        }
      }
    }
    for(var x=0; x<element.childNodes.length-1; x++){
      recurse(element.childNodes[x]);
    }
  }
  recurse(document.body);
  return classElements
};
