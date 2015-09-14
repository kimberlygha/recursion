// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var classElements = [];
  function recurse(element){
    var children = element.childNodes;
    if(element.classList.contains(className)){
      console.log(element);
      classElements.push(element);
    }
    for(var i=0; i<children.length-1;i++){
      if(children[i].nodeType != 3 && children[i].nodeTYpe != 8){
        recurse(children[i]);
      }
    }
  }
  recurse(document.body);
  console.log(classElements)
  console.log(document.getElementsByClassName(className));
  return classElements;
};
