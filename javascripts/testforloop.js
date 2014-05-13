var normalForLoop = function normalForLoop() {
  var a;
  for (var i = 0; i < generatedStringArray.length ; i++) {
    a = generatedStringArray[i].toUpperCase();
  }
}

var normalForLoopWithVar = function normalForLoopWithVar() {
  var a;

  for (var i = 0, length = generatedStringArray.length; i < length ; i++) {
      a = generatedStringArray[i];
  }
}

var reverseForLoop = function reverseForLoop() {
  var a;
  for (var i = generatedStringArray.length - 1; i >= 0 ; i--) {
      a = generatedStringArray[i];
  }
}

var shortForLoop = function shortForLoop() {
  var a;
  for (var i in generatedStringArray) {
      a = generatedStringArray[i];
  }
}

var jQueryEachFunction = function jQueryEachFunction() {
  var a;
  $(generatedStringArray).each(function(i){
    a = this;
  });
}

var compareForLoops = function compareForLoops()
{
  var a = [normalForLoop,normalForLoopWithVar,reverseForLoop,shortForLoop,jQueryEachFunction];
  compareFunctions(a);
}
