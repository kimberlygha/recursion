// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(Array.isArray(obj)){
    var arr = [];
    for(var i=0; i<obj.length;i++){
      arr.push(stringifyJSON(obj[i]));
    }
    console.log("["+arr.toString()+"]");
    return "["+arr.toString()+"]"; 
  }
  else if (typeof obj == "object"){
    if(obj == null){
      return "null";
    }
    var curly = [];
    for(var key in obj){
      if(typeof obj[key] == undefined || typeof obj[key] == "function"){
        return; 
      }
      curly.push("\""+key+"\":"+ stringifyJSON(obj[key]));
    }
    console.log("{"+ curly.toString()+"}");
    return "{"+ curly.toString()+"}";
  }
  else{
    if(obj == undefined || typeof obj == "function"){
      return ""; 
    }
    else if(typeof obj == "string"){
      return "\""+obj+"\"";
    }
    else{
      return obj.toString();
    }
  }
};

