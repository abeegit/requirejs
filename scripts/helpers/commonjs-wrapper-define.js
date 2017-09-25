define(function(require, exports, module) {
  var simpleDefine = require("./simple-define");
  var functionDefine = require("./function-define");
  
  return {
    simpleDefine: simpleDefine,
    functionDefine: functionDefine
  };
});
