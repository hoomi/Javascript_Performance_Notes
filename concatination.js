
var testConcatOneLine = function testConcatOneLine() {
  var a = "";
  for (var i = 0; i < forlooplimits; i++) {
      a += "X" + "Y";
  }
}

var testConcatTwoLines = function testConcatTwoLines() { 
  var a = "";
  for (var i = 0; i < forlooplimits; i++) {
      a += "X";
      a += "Y";
  }
}

var compareConcatinationsFuncs = function compareConcatinationsFuncs()
{
  var a = [testConcatOneLine,testConcatTwoLines];
  compareFunctions(a);
}