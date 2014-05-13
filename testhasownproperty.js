var shortForLoopObject = function shortForLoopObject() {
  for (var i in generatedStringArray) {
      generatedStringArray[i].toUpperCase();
  }
}

var shortForLoopObjectWithHasOwnProperty = function shortForLoopObjectWithHasOwnProperty() {
  for (var i in generatedStringArray) {
    if (generatedStringArray.hasOwnProperty(i)){
      generatedStringArray[i].toUpperCase();
    }
  }
}

var compareHasOwnPropertyFuncs = function compareHasOwnPropertyFuncs()
{
  var a = [shortForLoopObject,shortForLoopObjectWithHasOwnProperty];
  compareFunctions(a);
}
