define(["./function-define", "./simple-define", "require"], function(functionDefine, simpleDefine, require, exports, module) {
  var a = require("./function-define");

  return {
    simpleDefine: simpleDefine,
    functionDefine: functionDefine
  };
});
