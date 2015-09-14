// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var classElements = [];
  function recurse(element){
    var children = element.childNodes;
    console.log(element);
    if(element.classList.contains(className)){
      classElements.push(element);
    }
    for(var i=0; i<children.length;i++){
      if(children[i].nodeType != 3 && children[i].nodeType != 8){
        recurse(children[i]);
      }
    }
  }
  recurse(document.body);
  return classElements;
};
