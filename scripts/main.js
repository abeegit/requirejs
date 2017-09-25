requirejs(
  [
    "helpers/simple-define",
    "helpers/function-define",
    "helpers/commonjs-wrapper-define",
    "helpers/simple-require"
  ],
  function(simpleDefine, functionDefine, commonJsDefine, simpleRequire) {
    console.log(simpleDefine);
    console.log(functionDefine);
    console.log(commonJsDefine);
    console.log(simpleRequire);
  }
);
