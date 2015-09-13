// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(Array.isArray(obj)){
    var arr = [];
    for(var i=0; i<obj.length;i++){
      arr.push(stringifyJSON(obj[i]));
    }
    return "["+arr.toString()+"]"; 
  }
  else if (typeof obj == "object"){
    if(obj == null){
      return "null";
    }
    var curly = [];
    for(var key in obj){
      curly.push("\""+key+"\":"+ stringifyJSON(obj[key]));
    }
    console.log(Array.isArray(curly));
    return "{"+ curly.toString()+"}";
  }
  else{
    if(typeof obj == "string"){
      return "\""+obj+"\"";
    }
    else if(typeof obj == undefined || typeof obj == "function"){
      return; 
    }
    else{
      return obj.toString();
    }
  }
};

