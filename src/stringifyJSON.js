// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(Array.isArray(obj)){
    var arr = "[";
    for(var i=0; i<obj.length;i++){
      arr = arr+ (stringifyJSON(obj[i]))+",";
    }
    return arr +"]"; 
  }
  else if (typeof obj == "object"){
    var curly = "{";
    for(var key in obj){
      curly= curly+"\""+key+"\":"+ stringifyJSON(obj[key])+",";
    }
    return curly+"}";
  }
  else{
    if(typeof obj == "number"){
      return obj.toString();
    }
    else{
      return "\""+obj+"\"";
    }
  }
};
